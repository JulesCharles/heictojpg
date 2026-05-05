"use client";
import { useState } from "react";
import EditImageForm from "@/components/EditImageForm";
import { Label } from "@/components/ui/label";

export default function RotateClient() {
  const [angle, setAngle] = useState("90");
  const [mode, setMode] = useState("rotate");

  return (
    <EditImageForm
      title="Pivoter / Retourner"
      action={mode}
      buildFormData={(fd) => {
        if (mode === "rotate") fd.set("angle", angle);
      }}
    >
      <div className="space-y-3">
        <Label className="text-sm font-medium">Type d&apos;operation</Label>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => { setMode("rotate"); setAngle("90"); }} className={`p-3 rounded-lg border text-sm font-medium transition-colors ${mode === "rotate" && angle === "90" ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}>Pivoter 90&deg;</button>
          <button onClick={() => { setMode("rotate"); setAngle("180"); }} className={`p-3 rounded-lg border text-sm font-medium transition-colors ${mode === "rotate" && angle === "180" ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}>Pivoter 180&deg;</button>
          <button onClick={() => { setMode("rotate"); setAngle("270"); }} className={`p-3 rounded-lg border text-sm font-medium transition-colors ${mode === "rotate" && angle === "270" ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}>Pivoter 270&deg;</button>
          <button onClick={() => setMode("flip")} className={`p-3 rounded-lg border text-sm font-medium transition-colors ${mode === "flip" ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}>Retourner vertical</button>
          <button onClick={() => setMode("flop")} className={`p-3 rounded-lg border text-sm font-medium transition-colors ${mode === "flop" ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}>Retourner horizontal</button>
        </div>
      </div>
    </EditImageForm>
  );
}