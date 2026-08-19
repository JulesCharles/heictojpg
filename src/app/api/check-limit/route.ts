import { NextRequest, NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import { checkConversionLimit } from "@/lib/rateLimiter";

export async function GET(req: NextRequest) {
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

  const result = await checkConversionLimit(identifier, isPremium, isAuthenticated);

  return NextResponse.json({
    ...result,
    isAuthenticated,
    isPremium,
    requiresAuth: !result.allowed && !isAuthenticated,
    requiresUpgrade: !result.allowed && isAuthenticated && !isPremium,
  });
}
