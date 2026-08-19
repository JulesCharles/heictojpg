"use client";

import { useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";

interface ProButtonProps {
  isSignedIn: boolean;
  priceType: "monthly" | "lifetime";
}

export default function ProButton({ isSignedIn, priceType }: ProButtonProps) {
  const { openSignUp } = useClerk();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    if (!isSignedIn || !user) {
      openSignUp({
        fallbackRedirectUrl: "/pricing",
        forceRedirectUrl: "/pricing",
      });
      return;
    }

    setLoading(true);
    setError(null);
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

      const text = await res.text();
      let data;
      try { data = JSON.parse(text); } catch { data = { error: text }; }

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || `Erreur ${res.status}: ${text.slice(0, 200)}`);
        setLoading(false);
      }
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Erreur inconnue";
      setError(`Erreur: ${msg}`);
      setLoading(false);
    }
  };

  const label =
    priceType === "lifetime"
      ? "Acheter Pro — 19€"
      : "Pro mensuel — 4,99€";

  return (
    <div>
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
      {error && (
        <p className="text-red-500 text-xs mt-2 text-center">{error}</p>
      )}
    </div>
  );
}
