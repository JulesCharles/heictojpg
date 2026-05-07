"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DISMISSED_KEY = "heictojpg_upgrade_popup_dismissed";

function getDismissedToday(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const stored = localStorage.getItem(DISMISSED_KEY);
    if (!stored) return false;
    return stored === new Date().toISOString().slice(0, 10);
  } catch {
    return false;
  }
}

function setDismissedToday() {
  localStorage.setItem(DISMISSED_KEY, new Date().toISOString().slice(0, 10));
}

interface UpgradePopupProps {
  totalUsed: number;
  trigger?: number;
}

export default function UpgradePopup({ totalUsed, trigger = 3 }: UpgradePopupProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (totalUsed === trigger && !getDismissedToday()) {
      setVisible(true);
    }
  }, [totalUsed, trigger]);

  const dismiss = () => {
    setVisible(false);
    setDismissedToday();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={dismiss}>
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

        <div className="text-center space-y-4">
          <div className="text-3xl">&#9889;</div>
          <h3 className="text-lg font-bold text-gray-900">
            {totalUsed}/{5} conversions utilisees
          </h3>
          <p className="text-sm text-gray-600">
            Passez en Pro pour des conversions illimitees, sans pub et en qualite maximale.
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
      </div>
    </div>
  );
}
