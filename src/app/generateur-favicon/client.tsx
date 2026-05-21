"use client";
import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download, Loader2, ImageIcon, Copy, Check } from "lucide-react";
import JSZip from "jszip";

const FAVICON_SIZES = [
  { name: "favicon-16x16.png", width: 16, height: 16, label: "16x16" },
  { name: "favicon-32x32.png", width: 32, height: 32, label: "32x32" },
  { name: "favicon-48x48.png", width: 48, height: 48, label: "48x48" },
  { name: "favicon-64x64.png", width: 64, height: 64, label: "64x64" },
  { name: "favicon-128x128.png", width: 128, height: 128, label: "128x128" },
  { name: "apple-touch-icon.png", width: 180, height: 180, label: "180x180 (Apple)" },
  { name: "android-chrome-192x192.png", width: 192, height: 192, label: "192x192 (Android)" },
  { name: "android-chrome-512x512.png", width: 512, height: 512, label: "512x512 (Android)" },
];

const HTML_SNIPPET = `<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png">
<link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png">`;

function resizeToBlob(img: HTMLImageElement, w: number, h: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) return reject(new Error("Canvas non supporté"));
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, w, h);
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Erreur de conversion"));
    }, "image/png");
  });
}

export default function FaviconClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState<{ name: string; url: string; width: number; height: number }[]>([]);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((f: File) => {
    setFile(f);
    setGenerated([]);
    const url = URL.createObjectURL(f);
    setPreview(url);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  }, [handleFile]);

  const generate = async () => {
    if (!file) return;
    setGenerating(true);
    try {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      await new Promise<void>((res, rej) => { img.onload = () => res(); img.onerror = rej; });

      const results: { name: string; url: string; width: number; height: number }[] = [];
      for (const size of FAVICON_SIZES) {
        const blob = await resizeToBlob(img, size.width, size.height);
        results.push({ name: size.name, url: URL.createObjectURL(blob), width: size.width, height: size.height });
      }
      setGenerated(results);
    } catch {
      alert("Erreur lors de la génération des favicons.");
    } finally {
      setGenerating(false);
    }
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    for (const item of generated) {
      const resp = await fetch(item.url);
      const blob = await resp.blob();
      zip.file(item.name, blob);
    }
    zip.file("favicon-html.txt", HTML_SNIPPET);
    const content = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = "favicons.zip";
    a.click();
  };

  const copyHtml = () => {
    navigator.clipboard.writeText(HTML_SNIPPET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Generateur de Favicon</CardTitle>
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
              <img src={preview} alt="Apercu" className="w-32 h-32 object-contain rounded-lg border" />
              <p className="text-sm text-gray-600">{file?.name}</p>
              <p className="text-xs text-gray-400">Cliquez pour changer d&apos;image</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <Upload className="w-10 h-10 text-gray-400" />
              <p className="text-gray-600 font-medium">Glissez votre image ici ou cliquez pour choisir</p>
              <p className="text-sm text-gray-400">Utilisez de preference une image carree (PNG, JPG, SVG...)</p>
            </div>
          )}
        </div>

        {/* Generate button */}
        {file && generated.length === 0 && (
          <Button onClick={generate} disabled={generating} className="w-full" size="lg">
            {generating ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Generation en cours...</> : <><ImageIcon className="w-4 h-4 mr-2" /> Generer tous les favicons</>}
          </Button>
        )}

        {/* Preview grid */}
        {generated.length > 0 && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {generated.map((item) => (
                <div key={item.name} className="flex flex-col items-center gap-2 p-3 border rounded-lg bg-gray-50">
                  <div className="w-16 h-16 flex items-center justify-center bg-white border rounded" style={{ imageRendering: item.width <= 32 ? "pixelated" : "auto" }}>
                    <img src={item.url} alt={item.name} style={{ width: Math.min(item.width, 64), height: Math.min(item.height, 64) }} />
                  </div>
                  <p className="text-xs font-medium text-gray-700">{item.width}x{item.height}</p>
                  <p className="text-xs text-gray-400 truncate max-w-full">{item.name}</p>
                </div>
              ))}
            </div>

            {/* HTML snippet */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700">Code HTML a copier dans votre &lt;head&gt; :</p>
                <Button variant="outline" size="sm" onClick={copyHtml}>
                  {copied ? <><Check className="w-3 h-3 mr-1" /> Copie !</> : <><Copy className="w-3 h-3 mr-1" /> Copier</>}
                </Button>
              </div>
              <textarea readOnly value={HTML_SNIPPET} className="w-full h-40 text-xs font-mono bg-gray-900 text-green-400 p-4 rounded-lg border-0 resize-none" />
            </div>

            {/* Download ZIP */}
            <Button onClick={downloadZip} className="w-full" size="lg">
              <Download className="w-4 h-4 mr-2" /> Telecharger le ZIP (tous les favicons + HTML)
            </Button>

            {/* Reset */}
            <Button variant="outline" className="w-full" onClick={() => { setFile(null); setPreview(null); setGenerated([]); }}>
              Generer a partir d&apos;une autre image
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
