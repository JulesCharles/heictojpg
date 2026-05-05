"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, Download, Loader2, X, ChevronUp, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface ImageItem {
  id: string;
  file: File;
  previewUrl: string;
}

export default function CreateGifClient() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [delay, setDelay] = useState(500);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((files: FileList | File[]) => {
    const newItems: ImageItem[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        newItems.push({
          id: `${file.name}-${Date.now()}-${Math.random()}`,
          file,
          previewUrl: URL.createObjectURL(file),
        });
      }
    });
    if (newItems.length > 0) {
      setImages((prev) => [...prev, ...newItems]);
      setError(null);
      setResultUrl(null);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) { addFiles(e.target.files); e.target.value = ""; }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((i) => i.id !== id);
    });
    setResultUrl(null);
  };

  const moveUp = (i: number) => {
    if (i === 0) return;
    setImages((prev) => { const n = [...prev]; [n[i - 1], n[i]] = [n[i], n[i - 1]]; return n; });
  };

  const moveDown = (i: number) => {
    setImages((prev) => {
      if (i >= prev.length - 1) return prev;
      const n = [...prev]; [n[i], n[i + 1]] = [n[i + 1], n[i]]; return n;
    });
  };

  const handleCreate = async () => {
    if (images.length < 2) { setError("Il faut au moins 2 images pour creer un GIF."); return; }
    setLoading(true); setError(null); setResultUrl(null);

    try {
      const fd = new FormData();
      images.forEach((item) => fd.append("files", item.file));
      fd.append("delay", String(delay));

      const res = await fetch("/api/create-gif", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Erreur lors de la creation du GIF.");

      const blob = await res.blob();
      setResultUrl(URL.createObjectURL(blob));
    } catch {
      setError("Erreur lors de la creation du GIF. Reessayez avec des images plus petites.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!resultUrl) return;
    const a = document.createElement("a"); a.href = resultUrl; a.download = "animation.gif"; a.click();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Creer un GIF anime</CardTitle>
        <p className="text-sm text-gray-500 mt-1">Assemblez vos images en un GIF anime</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Drop zone */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600">Glissez vos images ici ou <span className="text-blue-600 font-medium">parcourir</span></p>
          <p className="text-xs text-gray-400 mt-1">Minimum 2 images — JPG, PNG, WebP…</p>
          <input ref={inputRef} type="file" accept="image/*" multiple onChange={handleFileChange} className="hidden" />
        </div>

        {/* Image list */}
        {images.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">{images.length} frame{images.length > 1 ? "s" : ""}</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {images.map((item, index) => (
                <div key={item.id} className="relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-gray-200 group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.previewUrl} alt={`Frame ${index + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1">
                    <button onClick={() => moveUp(index)} className="text-white p-0.5"><ChevronUp className="h-4 w-4" /></button>
                    <button onClick={() => moveDown(index)} className="text-white p-0.5"><ChevronDown className="h-4 w-4" /></button>
                    <button onClick={() => removeImage(item.id)} className="text-red-400 p-0.5"><X className="h-4 w-4" /></button>
                  </div>
                  <span className="absolute bottom-0.5 left-0.5 text-[10px] bg-black/60 text-white px-1 rounded">{index + 1}</span>
                </div>
              ))}
            </div>
            <button onClick={() => inputRef.current?.click()} className="text-sm text-blue-600 hover:underline">+ Ajouter des images</button>
          </div>
        )}

        {/* Delay setting */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Delai entre les frames : {delay} ms</Label>
          <input
            type="range"
            min={100}
            max={2000}
            step={50}
            value={delay}
            onChange={(e) => setDelay(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>Rapide (100ms)</span>
            <span>Lent (2000ms)</span>
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4">
          <Button onClick={handleCreate} disabled={loading || images.length < 2} className="flex-1">
            {loading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Creation...</>
            ) : (
              <><Play className="mr-2 h-4 w-4" />Creer le GIF</>
            )}
          </Button>
          {resultUrl && (
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />Telecharger
            </Button>
          )}
        </div>

        {/* Preview */}
        {resultUrl && (
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm text-green-700 font-medium">GIF cree avec succes !</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={resultUrl} alt="GIF anime cree" className="max-w-full rounded-lg border shadow-sm" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
