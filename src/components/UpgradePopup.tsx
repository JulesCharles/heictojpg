"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/nextjs";

interface UpgradePopupProps {
  totalUsed: number;
  limit: number;
  requiresAuth: boolean;
  requiresUpgrade: boolean;
  trigger?: number;
}

export default function UpgradePopup({
  totalUsed,
  limit,
  requiresAuth,
  requiresUpgrade,
  trigger,
}: UpgradePopupProps) {
  const [visible, setVisible] = useState(false);
  const { openSignUp } = useClerk();

  const effectiveTrigger = trigger ?? limit;

  useEffect(() => {
    if (totalUsed >= effectiveTrigger && (requiresAuth || requiresUpgrade)) {
      setVisible(true);
    }
  }, [totalUsed, effectiveTrigger, requiresAuth, requiresUpgrade]);

  const dismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={dismiss}
    >
      <div
        className="relative bg-white rounded-xl shadow-2xl p-6 max-w-sm mx-4 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        {requiresAuth ? (
          <div className="text-center space-y-4">
            <div className="text-3xl">&#128274;</div>
            <h3 className="text-lg font-bold text-gray-900">
              Limite atteinte ({totalUsed}/{limit})
            </h3>
            <p className="text-sm text-gray-600">
              Créez un compte gratuit pour continuer vos conversions. Vous
              aurez droit à 20 conversions par jour, gratuitement.
            </p>
            <div className="flex flex-col gap-2">
              <Button
                className="w-full"
                onClick={() => {
                  dismiss();
                  openSignUp();
                }}
              >
                Créer un compte gratuit
              </Button>
              <button
                onClick={dismiss}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Plus tard
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="text-3xl">&#9889;</div>
            <h3 className="text-lg font-bold text-gray-900">
              {totalUsed}/{limit} conversions utilisées
            </h3>
            <p className="text-sm text-gray-600">
              Passez en Pro pour des conversions illimitées, sans pub et en
              qualité maximale.
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/pricing">
                <Button className="w-full">Voir les offres Pro</Button>
              </Link>
              <button
                onClick={dismiss}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Plus tard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
