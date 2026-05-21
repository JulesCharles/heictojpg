"use client";
import { useState } from "react";
import EditImageForm from "@/components/EditImageForm";
import { Label } from "@/components/ui/label";

export default function MirrorClient() {
  const [mode, setMode] = useState<"flop" | "flip">("flop");

  return (
    <EditImageForm
      title="Retourner en miroir"
      action={mode}
      buildFormData={() => {}}
    >
      <div className="space-y-3">
        <Label className="text-sm font-medium">Type de miroir</Label>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => setMode("flop")}
            className={`p-3 rounded-lg border text-sm font-medium transition-colors ${mode === "flop" ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
          >
            Miroir horizontal
          </button>
          <button
            onClick={() => setMode("flip")}
            className={`p-3 rounded-lg border text-sm font-medium transition-colors ${mode === "flip" ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
          >
            Miroir vertical
          </button>
        </div>
        <p className="text-xs text-gray-500">
          {mode === "flop"
            ? "Inverse gauche/droite (comme un reflet dans un miroir classique)."
            : "Inverse haut/bas (retourne l'image verticalement)."}
        </p>
      </div>
    </EditImageForm>
  );
}
