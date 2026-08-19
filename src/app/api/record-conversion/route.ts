import { NextRequest, NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { recordConversion, checkConversionLimit } from "@/lib/rateLimiter";

export async function POST(req: NextRequest) {
  const { userId } = await auth();

  let identifier: string;
  let isPremium = false;
  const isAuthenticated = !!userId;

  if (userId) {
    identifier = userId;
    const client = await clerkClient();
    const user = await client.users.getUser(userId);
    isPremium = user.publicMetadata?.isPremium === true;
  } else {
    const forwarded = req.headers.get("x-forwarded-for");
    identifier = `ip:${forwarded?.split(",")[0]?.trim() || "unknown"}`;
  }

  // Check limit before recording
  const check = await checkConversionLimit(identifier, isPremium, isAuthenticated);
  if (!check.allowed) {
    return NextResponse.json(
      {
        error: "limit_reached",
        requiresAuth: !isAuthenticated,
        requiresUpgrade: isAuthenticated && !isPremium,
        remaining: 0,
      },
      { status: 429 }
    );
  }

  const result = await recordConversion(identifier, isPremium, isAuthenticated);

  return NextResponse.json({
    ...result,
    isAuthenticated,
    isPremium,
  });
}
