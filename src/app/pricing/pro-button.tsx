"use client";

import { useState } from "react";
import { useClerk } from "@clerk/nextjs";

interface ProButtonProps {
  isSignedIn: boolean;
  priceType: "monthly" | "lifetime";
}

export default function ProButton({ isSignedIn, priceType }: ProButtonProps) {
  const { openSignUp } = useClerk();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!isSignedIn) {
      openSignUp({ fallbackRedirectUrl: "/pricing" });
      return;
    }

    setLoading(true);
    try {
      const priceId =
        priceType === "monthly"
          ? process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID
          : process.env.NEXT_PUBLIC_STRIPE_LIFETIME_PRICE_ID;

      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch {
      setLoading(false);
    }
  };

  const label =
    priceType === "lifetime"
      ? "Acheter Pro — 19€ une fois"
      : "S'abonner Pro — 4,99€/mois";

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors cursor-pointer ${
        priceType === "lifetime"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
      } ${loading ? "opacity-50 cursor-wait" : ""}`}
      type="button"
    >
      {loading ? "Redirection..." : label}
    </button>
  );
}
