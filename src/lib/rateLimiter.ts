import { redis } from "./redis";

const LIMITS = {
  anonymous: 3,
  authenticated: 20,
  premium: Infinity,
} as const;

function getTodayKey(identifier: string): string {
  const date = new Date().toISOString().slice(0, 10);
  return `conv:${identifier}:${date}`;
}

function getLimit(isPremium: boolean, isAuthenticated: boolean): number {
  if (isPremium) return LIMITS.premium;
  if (isAuthenticated) return LIMITS.authenticated;
  return LIMITS.anonymous;
}

export async function checkConversionLimit(
  identifier: string,
  isPremium: boolean,
  isAuthenticated: boolean
) {
  const limit = getLimit(isPremium, isAuthenticated);

  if (limit === Infinity) {
    return { allowed: true, remaining: Infinity, total: 0, limit };
  }

  const key = getTodayKey(identifier);
  const count = (await redis.get<number>(key)) ?? 0;

  return {
    allowed: count < limit,
    remaining: Math.max(0, limit - count),
    total: count,
    limit,
  };
}

export async function recordConversion(
  identifier: string,
  isPremium: boolean,
  isAuthenticated: boolean
) {
  const key = getTodayKey(identifier);
  const newCount = await redis.incr(key);

  // Set TTL to expire at end of day (max 24h)
  if (newCount === 1) {
    await redis.expire(key, 86400);
  }

  const limit = getLimit(isPremium, isAuthenticated);

  return {
    total: newCount,
    remaining: limit === Infinity ? Infinity : Math.max(0, limit - newCount),
    limit,
  };
}
