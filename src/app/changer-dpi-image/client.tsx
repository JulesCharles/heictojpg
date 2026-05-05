"use client";
import { useState } from "react";
import EditImageForm from "@/components/EditImageForm";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function DpiClient() {
  const [dpi, setDpi] = useState("300");

  return (
    <EditImageForm title="Changer le DPI" action="dpi" buildFormData={(fd) => fd.set("dpi", dpi)}>
      <div className="space-y-2">
        <Label className="text-sm font-medium">Resolution (DPI)</Label>
        <Input type="number" value={dpi} onChange={(e) => setDpi(e.target.value)} placeholder="300" />
        <div className="flex flex-wrap gap-2 mt-2">
          {["72", "150", "300", "600"].map((v) => (
            <button key={v} onClick={() => setDpi(v)} className={`px-3 py-1 rounded text-sm border transition-colors ${dpi === v ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}>{v} DPI</button>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-1">72 DPI = web, 150 DPI = bureautique, 300 DPI = impression, 600 DPI = haute qualite</p>
      </div>
    </EditImageForm>
  );
}