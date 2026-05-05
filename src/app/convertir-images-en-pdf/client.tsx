"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, Download, Loader2, X, ChevronUp, ChevronDown, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useConversionLimit } from "@/lib/useConversionLimit";

interface ImageItem {
  id: string;
  file: File;
  previewUrl: string;
}

export default function Client() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited } = useConversionLimit();

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
      setDownloadUrl(null);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(e.target.files);
      // Reset input so the same file can be added again if needed
      e.target.value = "";
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const item = prev.find((i) => i.id === id);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter((i) => i.id !== id);
    });
    setDownloadUrl(null);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setImages((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next;
    });
  };

  const moveDown = (index: number) => {
    setImages((prev) => {
      if (index === prev.length - 1) return prev;
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next;
    });
  };

  const handleSubmit = async () => {
    if (isLimited) { setError("Limite atteinte ! Passez à Pro pour un usage illimité."); return; }
    if (images.length === 0) { setError("Veuillez sélectionner au moins une image."); return; }
    setLoading(true); setError(null); setDownloadUrl(null);

    try {
      const fd = new FormData();
      images.forEach((item) => fd.append("files", item.file));
      const res = await fetch("/api/image-to-pdf", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Erreur lors de la conversion.");
      const blob = await res.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur lors de la conversion.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "images.pdf";
    a.click();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Convertir images en PDF</CardTitle>
        <p className="text-sm text-gray-500 mt-1">{conversionsLeft} utilisation(s) gratuite(s) restante(s)</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Drop zone */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600">
            Glissez vos images ici ou <span className="text-blue-600 font-medium">parcourir</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">JPG, PNG, WEBP, HEIC, AVIF, GIF, BMP…</p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Image list */}
        {images.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">
              {images.length} image{images.length > 1 ? "s" : ""} sélectionnée{images.length > 1 ? "s" : ""}
            </p>
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
              {images.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-2"
                >
                  {/* Thumbnail */}
                  <div className="w-12 h-12 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.previewUrl}
                      alt={item.file.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* File info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 truncate font-medium">{item.file.name}</p>
                    <p className="text-xs text-gray-400">{(item.file.size / 1024).toFixed(0)} Ko</p>
                  </div>

                  {/* Order badge */}
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded px-2 py-0.5 flex-shrink-0">
                    {index + 1}
                  </span>

                  {/* Reorder buttons */}
                  <div className="flex flex-col gap-0.5 flex-shrink-0">
                    <button
                      onClick={() => moveUp(index)}
                      disabled={index === 0}
                      className="p-0.5 rounded hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      title="Monter"
                    >
                      <ChevronUp className="h-3.5 w-3.5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => moveDown(index)}
                      disabled={index === images.length - 1}
                      className="p-0.5 rounded hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      title="Descendre"
                    >
                      <ChevronDown className="h-3.5 w-3.5 text-gray-600" />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeImage(item.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-red-500 transition-colors"
                    title="Supprimer"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => inputRef.current?.click()}
              className="text-sm text-blue-600 hover:underline"
            >
              + Ajouter d&apos;autres images
            </button>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
            {isLimited && (
              <a href="/pricing" className="text-sm text-blue-600 font-medium hover:underline mt-1 inline-block">
                Voir les offres Pro &rarr;
              </a>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-4">
          <Button onClick={handleSubmit} disabled={loading || images.length === 0} className="flex-1">
            {loading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Conversion...</>
            ) : (
              <><ImageIcon className="mr-2 h-4 w-4" />Convertir en PDF</>
            )}
          </Button>
          {downloadUrl && (
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />Télécharger le PDF
            </Button>
          )}
        </div>

        {/* Success */}
        {downloadUrl && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              PDF créé avec succès ! {images.length} image{images.length > 1 ? "s" : ""} assemblée{images.length > 1 ? "s" : ""}.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
