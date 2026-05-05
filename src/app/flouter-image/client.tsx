"use client";
import { useState } from "react";
import EditImageForm from "@/components/EditImageForm";
import { Label } from "@/components/ui/label";

export default function BlurClient() {
  const [sigma, setSigma] = useState("5");

  return (
    <EditImageForm title="Flouter une image" action="blur" buildFormData={(fd) => fd.set("sigma", sigma)}>
      <div className="space-y-2">
        <Label className="text-sm font-medium">Intensite du flou : {sigma}</Label>
        <input type="range" min="1" max="50" value={sigma} onChange={(e) => setSigma(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
        <div className="flex justify-between text-xs text-gray-500"><span>Leger</span><span>Intense</span></div>
      </div>
    </EditImageForm>
  );
}