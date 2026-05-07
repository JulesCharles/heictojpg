"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BatchProPopupProps {
  visible: boolean;
  onDismiss: () => void;
  totalFiles: number;
}

export default function BatchProPopup({ visible, onDismiss, totalFiles }: BatchProPopupProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onDismiss}>
      <div
        className="relative bg-white rounded-xl shadow-2xl p-6 max-w-sm mx-4 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onDismiss}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center space-y-4">
          <div className="text-3xl">&#128230;</div>
          <h3 className="text-lg font-bold text-gray-900">
            Conversion batch reservee au Pro
          </h3>
          <p className="text-sm text-gray-600">
            Vous avez selectionne {totalFiles} fichiers mais seul le premier a ete converti.
            Passez en Pro pour convertir tous vos fichiers en une seule fois et les telecharger en ZIP.
          </p>
          <div className="flex flex-col gap-2">
            <Link href="/pricing">
              <Button className="w-full">Passer en Pro</Button>
            </Link>
            <button
              onClick={onDismiss}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Continuer avec 1 fichier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
