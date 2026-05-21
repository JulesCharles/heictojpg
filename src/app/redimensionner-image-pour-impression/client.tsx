"use client";
import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";

const presets = [
  { label: "10 x 15 cm", width: 1181, height: 1772 },
  { label: "13 x 18 cm", width: 1535, height: 2126 },
  { label: "15 x 20 cm", width: 1772, height: 2362 },
  { label: "20 x 30 cm", width: 2362, height: 3543 },
  { label: "A4 (21 x 29.7 cm)", width: 2480, height: 3508 },
  { label: "A3 (29.7 x 42 cm)", width: 3508, height: 4961 },
  { label: "A5 (14.8 x 21 cm)", width: 1748, height: 2480 },
  { label: "Carre 20 x 20 cm", width: 2362, height: 2362 },
];

function coverDraw(ctx: CanvasRenderingContext2D, img: HTMLImageElement, cw: number, ch: number) {
  const imgRatio = img.width / img.height;
  const canvasRatio = cw / ch;
  let sx = 0, sy = 0, sw = img.width, sh = img.height;
  if (imgRatio > canvasRatio) {
    sw = img.height * canvasRatio;
    sx = (img.width - sw) / 2;
  } else {
    sh = img.width / canvasRatio;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
}

export default function PrintResizeClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);
  const [orientation, setOrientation] = useState<"portrait" | "paysage">("portrait");
  const [processing, setProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setResultUrl(null);
    setPreview(URL.createObjectURL(f));
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  }, [handleFile]);

  const getPresetDimensions = () => {
    if (selectedPreset === null) return null;
    const p = presets[selectedPreset];
    if (orientation === "paysage") return { width: p.height, height: p.width, label: p.label };
    return { width: p.width, height: p.height, label: p.label };
  };

  const process = async () => {
    if (!file || selectedPreset === null) return;
    setProcessing(true);
    try {
      const dims = getPresetDimensions()!;
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });

      const canvas = document.createElement("canvas");
      canvas.width = dims.width;
      canvas.height = dims.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas non supporte");

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      coverDraw(ctx, img, dims.width, dims.height);

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob((b) => b ? resolve(b) : reject(new Error("Erreur")), "image/jpeg", 0.95);
      });
      setResultUrl(URL.createObjectURL(blob));
    } catch {
      alert("Erreur lors du redimensionnement.");
    } finally {
      setProcessing(false);
    }
  };

  const download = () => {
    if (!resultUrl) return;
    const dims = getPresetDimensions()!;
    const a = document.createElement("a");
    a.href = resultUrl;
    a.download = `impression-${dims.label.replace(/[^a-zA-Z0-9]/g, "-")}-${dims.width}x${dims.height}.jpg`;
    a.click();
  };

  const dims = getPresetDimensions();

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Redimensionner pour l&apos;impression</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload zone */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
        >
          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
          {preview ? (
            <div className="flex flex-col items-center gap-3">
              <img src={preview} alt="Apercu" className="max-w-xs max-h-48 object-contain rounded-lg border" />
              <p className="text-sm text-gray-600">{file?.name}</p>
              <p className="text-xs text-gray-400">Cliquez pour changer d&apos;image</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <Upload className="w-10 h-10 text-gray-400" />
              <p className="text-gray-600 font-medium">Glissez votre image ici ou cliquez pour choisir</p>
              <p className="text-sm text-gray-400">JPG, PNG, WebP, HEIC...</p>
            </div>
          )}
        </div>

        {/* Orientation */}
        {file && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">Orientation</Label>
            <div className="flex gap-3">
              <Button variant={orientation === "portrait" ? "default" : "outline"} size="sm" onClick={() => { setOrientation("portrait"); setResultUrl(null); }}>
                Portrait (vertical)
              </Button>
              <Button variant={orientation === "paysage" ? "default" : "outline"} size="sm" onClick={() => { setOrientation("paysage"); setResultUrl(null); }}>
                Paysage (horizontal)
              </Button>
            </div>
          </div>
        )}

        {/* Preset grid */}
        {file && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">Choisissez un format d&apos;impression (300 DPI)</Label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {presets.map((p, i) => {
                const w = orientation === "paysage" ? p.height : p.width;
                const h = orientation === "paysage" ? p.width : p.height;
                return (
                  <button
                    key={i}
                    onClick={() => { setSelectedPreset(i); setResultUrl(null); }}
                    className={`p-3 rounded-lg border-2 text-left transition-colors ${selectedPreset === i ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300 bg-white"}`}
                  >
                    <p className="font-medium text-sm text-gray-800">{p.label}</p>
                    <p className="text-xs text-gray-400 mt-1">{w} x {h} px</p>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* DPI info */}
        {dims && file && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
            Votre image sera redimensionnee a <strong>{dims.width} x {dims.height} px</strong> pour une impression en <strong>{dims.label}</strong> a <strong>300 DPI</strong>.
          </div>
        )}

        {/* Process button */}
        {file && selectedPreset !== null && !resultUrl && (
          <Button onClick={process} disabled={processing} className="w-full" size="lg">
            {processing ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Redimensionnement en cours...</> : "Redimensionner pour l'impression"}
          </Button>
        )}

        {/* Result */}
        {resultUrl && (
          <div className="space-y-4">
            <div className="flex justify-center">
              <img src={resultUrl} alt="Resultat" className="max-w-full max-h-64 object-contain rounded-lg border shadow" />
            </div>
            <Button onClick={download} className="w-full" size="lg">
              <Download className="w-4 h-4 mr-2" /> Telecharger l&apos;image ({dims?.label})
            </Button>
            <Button variant="outline" className="w-full" onClick={() => { setFile(null); setPreview(null); setResultUrl(null); setSelectedPreset(null); }}>
              Redimensionner une autre image
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
