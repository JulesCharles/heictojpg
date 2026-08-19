import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { clerkClient } from "@clerk/nextjs/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const client = await clerkClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const clerkUserId = session.metadata?.clerkUserId;
      if (clerkUserId) {
        await client.users.updateUserMetadata(clerkUserId, {
          publicMetadata: { isPremium: true, stripeCustomerId: session.customer as string },
        });
      }
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;
      const customerId = subscription.customer as string;
      // Find user by Stripe customer ID
      const users = await client.users.getUserList({ limit: 100 });
      const user = users.data.find(
        (u) => u.publicMetadata?.stripeCustomerId === customerId
      );
      if (user) {
        await client.users.updateUserMetadata(user.id, {
          publicMetadata: { isPremium: false },
        });
      }
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const customerId = invoice.customer as string;
      const users = await client.users.getUserList({ limit: 100 });
      const user = users.data.find(
        (u) => u.publicMetadata?.stripeCustomerId === customerId
      );
      if (user) {
        await client.users.updateUserMetadata(user.id, {
          publicMetadata: { isPremium: false },
        });
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
