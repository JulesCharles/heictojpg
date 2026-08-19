"use client";

import { useState, useCallback, useEffect } from "react";

interface LimitState {
  total: number;
  remaining: number;
  limit: number;
  isAuthenticated: boolean;
  isPremium: boolean;
  requiresAuth: boolean;
  requiresUpgrade: boolean;
  loading: boolean;
}

export function useConversionLimit() {
  const [state, setState] = useState<LimitState>({
    total: 0,
    remaining: 3,
    limit: 3,
    isAuthenticated: false,
    isPremium: false,
    requiresAuth: false,
    requiresUpgrade: false,
    loading: true,
  });

  useEffect(() => {
    fetch("/api/check-limit")
      .then((res) => res.json())
      .then((data) => {
        setState({
          total: data.total ?? 0,
          remaining: data.remaining ?? 3,
          limit: data.limit ?? 3,
          isAuthenticated: data.isAuthenticated ?? false,
          isPremium: data.isPremium ?? false,
          requiresAuth: data.requiresAuth ?? false,
          requiresUpgrade: data.requiresUpgrade ?? false,
          loading: false,
        });
      })
      .catch(() => {
        // Fallback: allow conversion if API fails
        setState((prev) => ({ ...prev, loading: false }));
      });
  }, []);

  const isLimited = !state.loading && state.remaining <= 0;
  const conversionsLeft = state.remaining;

  const recordConversion = useCallback(async () => {
    try {
      const res = await fetch("/api/record-conversion", { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        setState((prev) => ({
          ...prev,
          total: data.total ?? prev.total + 1,
          remaining: data.remaining ?? Math.max(0, prev.remaining - 1),
        }));
      } else if (res.status === 429) {
        const data = await res.json();
        setState((prev) => ({
          ...prev,
          remaining: 0,
          requiresAuth: data.requiresAuth ?? false,
          requiresUpgrade: data.requiresUpgrade ?? false,
        }));
      }
    } catch {
      // Silently fail — don't block the user if Redis is down
    }
  }, []);

  return {
    conversionsLeft,
    isLimited,
    recordConversion,
    totalUsed: state.total,
    limit: state.limit,
    requiresAuth: state.requiresAuth,
    requiresUpgrade: state.requiresUpgrade,
    isPremium: state.isPremium,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
  };
}
