"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2 } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

import UpgradePopup from "@/components/UpgradePopup";

const PRESETS = [
  { label: "1x (72 DPI)", scale: 1 },
  { label: "2x (144 DPI)", scale: 2 },
  { label: "3x (216 DPI)", scale: 3 },
  { label: "Taille custom", scale: 0 },
];

export default function SvgConvertForm() {
  const [file, setFile] = useState<File | null>(null);
  const [converting, setConverting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState(1);
  const [customWidth, setCustomWidth] = useState("");
  const [customHeight, setCustomHeight] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited, totalUsed, requiresAuth, requiresUpgrade, limit } = useConversionLimit();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && (f.name.toLowerCase().endsWith(".svg") || f.type === "image/svg+xml")) {
      setFile(f);
      setError(null);
      setDownloadUrl(null);
    } else {
      setError("Veuillez selectionner un fichier SVG valide.");
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    if (isLimited) {
      setError("Limite atteinte ! Passez a Pro pour un usage illimite.");
      return;
    }

    setConverting(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const preset = PRESETS[selectedPreset];
      if (preset.scale > 0) {
        formData.append("scale", preset.scale.toString());
      } else {
        formData.append("scale", "2");
        if (customWidth) formData.append("width", customWidth);
        if (customHeight) formData.append("height", customHeight);
      }

      const response = await fetch("/api/svg-to-png", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Erreur");

      const blob = await response.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();
    } catch {
      setError("Erreur lors de la conversion. Veuillez reessayer.");
    } finally {
      setConverting(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl && file) {
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = file.name.replace(/\.svg$/i, ".png");
      a.click();
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Convertir SVG en PNG</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Selectionner un fichier SVG</Label>
          <div className="relative">
            <Input
              ref={inputRef}
              type="file"
              accept=".svg,image/svg+xml"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {file && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800"><strong>Fichier :</strong> {file.name}</p>
            <p className="text-xs text-blue-600">Taille : {(file.size / 1024).toFixed(1)} Ko</p>
          </div>
        )}

        <div className="space-y-2">
          <Label className="text-sm font-medium">Taille de sortie</Label>
          <div className="grid grid-cols-2 gap-2">
            {PRESETS.map((preset, i) => (
              <button
                key={i}
                onClick={() => setSelectedPreset(i)}
                className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  selectedPreset === i
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {selectedPreset === 3 && (
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-xs text-gray-500">Largeur (px)</Label>
              <Input
                type="number"
                placeholder="ex: 1024"
                value={customWidth}
                onChange={(e) => setCustomWidth(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs text-gray-500">Hauteur (px)</Label>
              <Input
                type="number"
                placeholder="ex: 768"
                value={customHeight}
                onChange={(e) => setCustomHeight(e.target.value)}
              />
            </div>
            <p className="text-xs text-gray-400 col-span-2">Laissez un champ vide pour conserver les proportions.</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
            {isLimited && (
              <a href="/pricing" className="text-sm text-blue-600 font-medium hover:underline mt-1 inline-block">
                Voir les offres Pro &rarr;
              </a>
            )}
          </div>
        )}

        <div className="flex gap-4">
          <Button onClick={handleConvert} disabled={!file || converting} className="flex-1">
            {converting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Conversion...</> : "Convertir en PNG"}
          </Button>
          {downloadUrl && (
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />Telecharger
            </Button>
          )}
        </div>

        {downloadUrl && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">Conversion reussie ! Votre PNG est pret.</p>
          </div>
        )}
      </CardContent>
      <UpgradePopup totalUsed={totalUsed} limit={limit} requiresAuth={requiresAuth} requiresUpgrade={requiresUpgrade} />
    </Card>
  );
}
