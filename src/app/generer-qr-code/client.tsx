"use client";

import { useState, useEffect, useCallback } from "react";
import QRCode from "qrcode";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ERROR_LEVELS = [
  { value: "L", label: "L (7%)" },
  { value: "M", label: "M (15%)" },
  { value: "Q", label: "Q (25%)" },
  { value: "H", label: "H (30%)" },
] as const;

type ErrorLevel = "L" | "M" | "Q" | "H";

const SIZES = [
  { value: 256, label: "256 px" },
  { value: 512, label: "512 px" },
  { value: 1024, label: "1024 px" },
];

export default function QrCodeClient() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(512);
  const [fgColor, setFgColor] = useState("#000000");
  const [errorLevel, setErrorLevel] = useState<ErrorLevel>("M");
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generate = useCallback(async () => {
    if (!text.trim()) {
      setDataUrl(null);
      setError(null);
      return;
    }
    try {
      const url = await QRCode.toDataURL(text, {
        width: size,
        margin: 2,
        color: {
          dark: fgColor,
          light: "#ffffff",
        },
        errorCorrectionLevel: errorLevel,
      });
      setDataUrl(url);
      setError(null);
    } catch {
      setError("Impossible de générer le QR code. Vérifiez le texte saisi.");
      setDataUrl(null);
    }
  }, [text, size, fgColor, errorLevel]);

  useEffect(() => {
    generate();
  }, [generate]);

  const downloadPng = () => {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "qrcode.png";
    a.click();
  };

  const downloadSvg = async () => {
    if (!text.trim()) return;
    try {
      const svgString = await QRCode.toString(text, {
        type: "svg",
        margin: 2,
        color: {
          dark: fgColor,
          light: "#ffffff",
        },
        errorCorrectionLevel: errorLevel,
      });
      const blob = new Blob([svgString], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "qrcode.svg";
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setError("Impossible de générer le SVG.");
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Générateur de QR code</CardTitle>
        <p className="text-sm text-gray-500 mt-1">Entrez un texte ou une URL pour générer votre QR code instantanément</p>
      </CardHeader>
      <CardContent className="space-y-6">

        {/* Text input */}
        <div className="space-y-2">
          <Label htmlFor="qr-text" className="text-sm font-medium">Texte ou URL</Label>
          <Input
            id="qr-text"
            type="text"
            placeholder="https://exemple.com ou votre texte..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Options row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Size */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Taille</Label>
            <div className="flex flex-col gap-1">
              {SIZES.map((s) => (
                <button
                  key={s.value}
                  onClick={() => setSize(s.value)}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    size === s.value
                      ? "bg-blue-50 border-blue-300 text-blue-700"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Error correction */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Correction d&apos;erreur</Label>
            <div className="flex flex-col gap-1">
              {ERROR_LEVELS.map((lvl) => (
                <button
                  key={lvl.value}
                  onClick={() => setErrorLevel(lvl.value)}
                  className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                    errorLevel === lvl.value
                      ? "bg-blue-50 border-blue-300 text-blue-700"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Foreground color */}
          <div className="space-y-2">
            <Label htmlFor="fg-color" className="text-sm font-medium">Couleur</Label>
            <div className="flex items-center gap-3">
              <input
                id="fg-color"
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="h-10 w-14 rounded-lg border border-gray-300 cursor-pointer p-1"
              />
              <span className="text-sm text-gray-600 font-mono">{fgColor}</span>
            </div>
            <p className="text-xs text-gray-500">Couleur des modules du QR code</p>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Preview */}
        {dataUrl && (
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={dataUrl}
                alt="QR code généré"
                width={200}
                height={200}
                className="block"
                style={{ imageRendering: "pixelated" }}
              />
            </div>

            {/* Download buttons */}
            <div className="flex gap-3">
              <Button onClick={downloadPng} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Télécharger PNG
              </Button>
              <Button onClick={downloadSvg} variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Télécharger SVG
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              Résolution : {size}×{size} px &bull; Correction : {errorLevel} &bull; Traitement 100% local, aucune donnée envoyée
            </p>
          </div>
        )}

        {!dataUrl && !error && (
          <div className="flex items-center justify-center h-32 bg-gray-50 rounded-xl border border-dashed border-gray-300">
            <p className="text-sm text-gray-400">Votre QR code apparaîtra ici</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
