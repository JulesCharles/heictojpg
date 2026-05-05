"use client";

import { useState, useRef } from "react";
import { Upload, Copy, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const LANGUAGES = [
  { value: "fra", label: "Francais" },
  { value: "eng", label: "English" },
  { value: "spa", label: "Espanol" },
  { value: "deu", label: "Deutsch" },
  { value: "ita", label: "Italiano" },
  { value: "por", label: "Portugues" },
];

export default function OcrClient() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [lang, setLang] = useState("fra");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const acceptFile = (f: File) => {
    if (!f.type.startsWith("image/")) {
      setError("Veuillez selectionner une image (JPG, PNG, WebP…).");
      return;
    }
    setFile(f);
    setPreviewUrl(URL.createObjectURL(f));
    setText("");
    setError(null);
    setProgress(0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) acceptFile(f);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    if (f) acceptFile(f);
  };

  const handleExtract = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setText("");
    setProgress(0);

    try {
      const Tesseract = (await import("tesseract.js")).default;
      const result = await Tesseract.recognize(file, lang, {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setProgress(Math.round(m.progress * 100));
          }
        },
      });
      setText(result.data.text);
    } catch {
      setError("Erreur lors de l'extraction du texte. Essayez avec une image plus nette.");
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError("Impossible de copier dans le presse-papiers.");
    }
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${file?.name?.replace(/\.[^.]+$/, "") || "texte"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Extraire le texte d&apos;une image</CardTitle>
        <p className="text-sm text-gray-500 mt-1">OCR gratuit — reconnaissance de texte dans vos photos</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Drop zone */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input ref={inputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          {previewUrl ? (
            <div className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={previewUrl} alt="Apercu" className="max-h-40 rounded-lg" />
              <p className="text-sm text-gray-600">{file?.name}</p>
            </div>
          ) : (
            <>
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
              <p className="text-sm text-gray-600">Glissez votre image ici ou <span className="text-blue-600 font-medium">parcourir</span></p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG, WebP, BMP, TIFF…</p>
            </>
          )}
        </div>

        {/* Language select */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Langue du texte</Label>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map((l) => (
              <button
                key={l.value}
                onClick={() => setLang(l.value)}
                className={`px-3 py-1.5 rounded-lg text-sm border transition-colors ${
                  lang === l.value
                    ? "bg-blue-50 border-blue-300 text-blue-700"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Extract button */}
        <Button onClick={handleExtract} disabled={!file || loading} className="w-full">
          {loading ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Extraction en cours… {progress}%</>
          ) : (
            "Extraire le texte"
          )}
        </Button>

        {/* Progress bar */}
        {loading && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 rounded-full h-2 transition-all" style={{ width: `${progress}%` }} />
          </div>
        )}

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Result */}
        {text && (
          <div className="space-y-3">
            <Label className="text-sm font-medium">Texte extrait</Label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={10}
              className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-800 font-mono resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-3">
              <Button onClick={handleCopy} variant="outline" className="flex-1">
                <Copy className="mr-2 h-4 w-4" />
                {copied ? "Copie !" : "Copier le texte"}
              </Button>
              <Button onClick={handleDownloadTxt} variant="outline" className="flex-1">
                <Download className="mr-2 h-4 w-4" />
                Telecharger .txt
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
