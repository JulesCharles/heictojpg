"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, Copy, Download, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type Tab = "encode" | "decode";

function formatBytes(bytes: number): string {
  if (bytes < 1024) return bytes + " o";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " Ko";
  return (bytes / (1024 * 1024)).toFixed(2) + " Mo";
}

export default function Base64Client() {
  const [tab, setTab] = useState<Tab>("encode");

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Tab toggle */}
      <div className="flex gap-2">
        <Button
          variant={tab === "encode" ? "default" : "outline"}
          onClick={() => setTab("encode")}
          className="flex-1"
        >
          Image &rarr; Base64
        </Button>
        <Button
          variant={tab === "decode" ? "default" : "outline"}
          onClick={() => setTab("decode")}
          className="flex-1"
        >
          Base64 &rarr; Image
        </Button>
      </div>

      {tab === "encode" ? <EncodeTab /> : <DecodeTab />}
    </div>
  );
}

/* ─── Encode: Image → Base64 ──────────────────────────── */

function EncodeTab() {
  const [base64, setBase64] = useState("");
  const [fileName, setFileName] = useState("");
  const [mimeType, setMimeType] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    setFileName(file.name);
    setMimeType(file.type);
    setOriginalSize(file.size);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setBase64(result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* ignore */
    }
  };

  const rawBase64 = base64.includes(",") ? base64.split(",")[1] : base64;
  const base64Size = rawBase64 ? rawBase64.length : 0;
  const htmlTag = base64 ? `<img src="${base64}" alt="${fileName}" />` : "";
  const cssValue = base64 ? `background-image: url(${base64});` : "";

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Image vers Base64</CardTitle>
        <p className="text-sm text-gray-500 mt-1">
          Selectionnez une image pour obtenir son encodage Base64
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Drop zone */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
            className="hidden"
          />
          {base64 ? (
            <div className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={base64} alt="Apercu" className="max-h-40 rounded-lg" />
              <p className="text-sm text-gray-600">{fileName}</p>
            </div>
          ) : (
            <>
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
              <p className="text-sm text-gray-600">
                Glissez votre image ici ou <span className="text-blue-600 font-medium">parcourir</span>
              </p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP, GIF, SVG, BMP...</p>
            </>
          )}
        </div>

        {base64 && (
          <>
            {/* Size comparison */}
            <div className="flex gap-4 text-sm">
              <div className="flex-1 p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-500">Fichier original</p>
                <p className="font-medium text-gray-800">{formatBytes(originalSize)}</p>
              </div>
              <div className="flex-1 p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-500">Taille Base64</p>
                <p className="font-medium text-gray-800">
                  {formatBytes(base64Size)} (+{originalSize > 0 ? Math.round(((base64Size - originalSize) / originalSize) * 100) : 0}%)
                </p>
              </div>
            </div>

            {/* Data URL */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Data URL (Base64)</Label>
              <textarea
                readOnly
                value={base64}
                rows={4}
                className="w-full border border-gray-300 rounded-lg p-3 text-xs text-gray-800 font-mono resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
              <Button
                variant="outline"
                className="w-full"
                onClick={() => copyToClipboard(base64, "base64")}
              >
                <Copy className="mr-2 h-4 w-4" />
                {copied === "base64" ? "Copie !" : "Copier le Data URL"}
              </Button>
            </div>

            {/* HTML tag */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Balise HTML &lt;img&gt;</Label>
              <textarea
                readOnly
                value={htmlTag}
                rows={2}
                className="w-full border border-gray-300 rounded-lg p-3 text-xs text-gray-800 font-mono resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
              <Button
                variant="outline"
                className="w-full"
                onClick={() => copyToClipboard(htmlTag, "html")}
              >
                <Copy className="mr-2 h-4 w-4" />
                {copied === "html" ? "Copie !" : "Copier la balise HTML"}
              </Button>
            </div>

            {/* CSS value */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">CSS background-image</Label>
              <textarea
                readOnly
                value={cssValue}
                rows={2}
                className="w-full border border-gray-300 rounded-lg p-3 text-xs text-gray-800 font-mono resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              />
              <Button
                variant="outline"
                className="w-full"
                onClick={() => copyToClipboard(cssValue, "css")}
              >
                <Copy className="mr-2 h-4 w-4" />
                {copied === "css" ? "Copie !" : "Copier le CSS"}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

/* ─── Decode: Base64 → Image ──────────────────────────── */

function DecodeTab() {
  const [input, setInput] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handlePreview = () => {
    setError(null);
    const trimmed = input.trim();
    if (!trimmed) return;

    // Accept both raw base64 and data URLs
    let dataUrl = trimmed;
    if (!trimmed.startsWith("data:")) {
      dataUrl = `data:image/png;base64,${trimmed}`;
    }

    // Validate by trying to create an image
    const img = new window.Image();
    img.onload = () => setPreview(dataUrl);
    img.onerror = () => setError("Le texte saisi n'est pas une image Base64 valide.");
    img.src = dataUrl;
  };

  const handleDownload = () => {
    if (!preview) return;
    const a = document.createElement("a");
    a.href = preview;
    // Detect extension from mime type
    const match = preview.match(/^data:image\/(\w+)/);
    const ext = match ? match[1].replace("jpeg", "jpg") : "png";
    a.download = `image-base64.${ext}`;
    a.click();
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Base64 vers Image</CardTitle>
        <p className="text-sm text-gray-500 mt-1">
          Collez une chaine Base64 pour visualiser et telecharger l&apos;image
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Chaine Base64 ou Data URL</Label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={6}
            placeholder="Collez votre chaine Base64 ici (data:image/png;base64,... ou directement le Base64 brut)"
            className="w-full border border-gray-300 rounded-lg p-3 text-xs text-gray-800 font-mono resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Button onClick={handlePreview} disabled={!input.trim()} className="w-full">
          <ImageIcon className="mr-2 h-4 w-4" />
          Visualiser l&apos;image
        </Button>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {preview && (
          <div className="space-y-4">
            <div className="flex justify-center p-4 bg-gray-50 rounded-lg border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="Image decodee" className="max-h-64 rounded-lg" />
            </div>
            <Button variant="outline" onClick={handleDownload} className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Telecharger l&apos;image
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
