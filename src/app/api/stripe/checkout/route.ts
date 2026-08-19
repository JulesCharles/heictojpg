import { NextRequest, NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
  }

  const { priceId } = await req.json();
  if (!priceId) {
    return NextResponse.json({ error: "priceId requis" }, { status: 400 });
  }

  const client = await clerkClient();
  const user = await client.users.getUser(userId);
  const email = user.emailAddresses[0]?.emailAddress;

  // Determine if this is a subscription or one-time payment
  const isSubscription = priceId === process.env.STRIPE_MONTHLY_PRICE_ID;

  const session = await stripe.checkout.sessions.create({
    mode: isSubscription ? "subscription" : "payment",
    payment_method_types: ["card"],
    customer_email: email,
    line_items: [{ price: priceId, quantity: 1 }],
    metadata: { clerkUserId: userId },
    success_url: `${req.nextUrl.origin}/pricing?success=true`,
    cancel_url: `${req.nextUrl.origin}/pricing?canceled=true`,
  });

  return NextResponse.json({ url: session.url });
}
