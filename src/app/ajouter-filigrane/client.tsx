"use client";
import { useState } from "react";
import EditImageForm from "@/components/EditImageForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WatermarkClient() {
  const [text, setText] = useState("Mon filigrane");
  const [opacity, setOpacity] = useState("30");

  return (
    <EditImageForm title="Ajouter un filigrane" action="watermark" apiEndpoint="/api/watermark"
      buildFormData={(fd) => { fd.set("text", text); fd.set("opacity", (parseInt(opacity) / 100).toString()); }}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Texte du filigrane</Label>
          <Input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Votre texte" />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium">Opacite : {opacity}%</Label>
          <input type="range" min="10" max="90" value={opacity} onChange={(e) => setOpacity(e.target.value)} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          <div className="flex justify-between text-xs text-gray-500"><span>Discret</span><span>Visible</span></div>
        </div>
      </div>
    </EditImageForm>
  );
}