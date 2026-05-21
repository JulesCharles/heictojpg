"use client";
import { useState } from "react";
import EditImageForm from "@/components/EditImageForm";
import { Label } from "@/components/ui/label";

export default function TrimClient() {
  const [threshold, setThreshold] = useState("10");

  return (
    <EditImageForm title="Rogner les bords blancs" action="trim" buildFormData={(fd) => fd.set("threshold", threshold)}>
      <div className="space-y-2">
        <Label className="text-sm font-medium">Seuil de detection : {threshold}</Label>
        <input type="range" min="1" max="50" value={threshold} onChange={(e) => setThreshold(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
        <div className="flex justify-between text-xs text-gray-500"><span>Precis (1)</span><span>Agressif (50)</span></div>
        <p className="text-xs text-gray-400 mt-1">Un seuil bas ne supprime que les bords parfaitement blancs. Un seuil haut supprime aussi les bords presque blancs ou legerement colores.</p>
      </div>
    </EditImageForm>
  );
}
