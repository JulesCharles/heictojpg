"use client";
import { useState } from "react";
import EditImageForm from "@/components/EditImageForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CropClient() {
  const [left, setLeft] = useState("0");
  const [top, setTop] = useState("0");
  const [width, setWidth] = useState("500");
  const [height, setHeight] = useState("500");

  return (
    <EditImageForm
      title="Recadrer une image"
      action="crop"
      buildFormData={(fd) => {
        fd.set("left", left);
        fd.set("top", top);
        fd.set("width", width);
        fd.set("height", height);
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label className="text-sm">X (depuis gauche)</Label>
          <Input type="number" value={left} onChange={(e) => setLeft(e.target.value)} placeholder="0" />
        </div>
        <div className="space-y-1">
          <Label className="text-sm">Y (depuis haut)</Label>
          <Input type="number" value={top} onChange={(e) => setTop(e.target.value)} placeholder="0" />
        </div>
        <div className="space-y-1">
          <Label className="text-sm">Largeur (px)</Label>
          <Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="500" />
        </div>
        <div className="space-y-1">
          <Label className="text-sm">Hauteur (px)</Label>
          <Input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="500" />
        </div>
      </div>
      <p className="text-xs text-gray-500">Entrez les coordonnées et dimensions de la zone à conserver en pixels.</p>
    </EditImageForm>
  );
}