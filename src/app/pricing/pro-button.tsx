"use client";

import { useClerk, useUser } from "@clerk/nextjs";

interface ProButtonProps {
  isSignedIn: boolean;
  annual?: boolean;
}

export default function ProButton({ isSignedIn, annual = false }: ProButtonProps) {
  const { openSignUp } = useClerk();
  const { user } = useUser();

  const monthlyUrl = process.env.NEXT_PUBLIC_LEMONSQUEEZY_URL || "#";
  const annualUrl = process.env.NEXT_PUBLIC_LEMONSQUEEZY_ANNUAL_URL || "#";
  const checkoutUrl = annual ? annualUrl : monthlyUrl;

  const handleClick = () => {
    if (!isSignedIn) {
      openSignUp({
        fallbackRedirectUrl: "/pricing",
      });
      return;
    }

    const email = user?.primaryEmailAddress?.emailAddress || "";
    const url = new URL(checkoutUrl);
    if (email) {
      url.searchParams.set("checkout[email]", email);
    }
    if (user?.id) {
      url.searchParams.set("checkout[custom][clerk_user_id]", user.id);
    }
    window.location.href = url.toString();
  };

  const label = annual
    ? (isSignedIn ? "Passer a Pro annuel — 39\u20AC/an" : "Pro annuel — 39\u20AC/an")
    : (isSignedIn ? "Essai gratuit 7 jours — puis 5\u20AC/mois" : "Essai gratuit 7 jours — puis 5\u20AC/mois");

  return (
    <button
      onClick={handleClick}
      className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors cursor-pointer ${
        annual
          ? "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
      type="button"
    >
      {label}
    </button>
  );
}
