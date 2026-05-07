"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, Download, Loader2, X, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useConversionLimit } from "@/lib/useConversionLimit";

import UpgradePopup from "@/components/UpgradePopup";

const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

interface ImageItem {
  id: string;
  file: File;
  previewUrl: string;
}

export default function ContactSheetForm() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [columns, setColumns] = useState(3);
  const [padding, setPadding] = useState(10);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited, totalUsed } = useConversionLimit();

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
    if (e.target.files) {
      addFiles(e.target.files);
      e.target.value = "";
    }
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
    setDownloadUrl(null);
  };

  const handleCreate = async () => {
    if (images.length < 2) {
      setError("Il faut au moins 2 images pour creer une planche contact.");
      return;
    }
    if (isLimited) {
      setError("Limite atteinte ! Passez a Pro pour un usage illimite.");
      return;
    }

    setLoading(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const fd = new FormData();
      images.forEach((item) => fd.append("file", item.file));
      fd.append("columns", String(columns));
      fd.append("padding", String(padding));
      fd.append("bgColor", bgColor);

      trackEvent("contact_sheet_start", { image_count: images.length, columns, padding });

      const res = await fetch("/api/contact-sheet", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Erreur lors de la creation de la planche contact.");

      const blob = await res.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();

      trackEvent("contact_sheet_success", { image_count: images.length });
    } catch {
      setError("Erreur lors de la creation. Reessayez avec des images plus petites.");
      trackEvent("contact_sheet_error");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = "planche-contact.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    trackEvent("contact_sheet_download");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Creer une planche contact</CardTitle>
        <p className="text-sm text-gray-500 mt-1">Assemblez vos images en une mosaique</p>
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
          <p className="text-sm text-gray-600">
            Glissez vos images ici ou <span className="text-blue-600 font-medium">parcourir</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">Minimum 2 images — JPG, PNG, WebP</p>
          <input
            ref={inputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* File list */}
        {images.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">
              {images.length} image{images.length > 1 ? "s" : ""} selectionee{images.length > 1 ? "s" : ""}
            </p>
            <div className="max-h-48 overflow-y-auto space-y-1">
              {images.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg group"
                >
                  <ImageIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                  <span className="text-sm text-gray-700 truncate flex-1">{item.file.name}</span>
                  <span className="text-xs text-gray-400">
                    {(item.file.size / 1024).toFixed(0)} Ko
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(item.id);
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
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
              + Ajouter des images
            </button>
          </div>
        )}

        {/* Columns selector */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Nombre de colonnes</Label>
          <div className="flex gap-2">
            {[2, 3, 4, 5, 6].map((n) => (
              <button
                key={n}
                onClick={() => {
                  setColumns(n);
                  setDownloadUrl(null);
                }}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                  columns === n
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Padding slider */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Espacement : {padding}px</Label>
          <input
            type="range"
            min={0}
            max={50}
            step={1}
            value={padding}
            onChange={(e) => {
              setPadding(Number(e.target.value));
              setDownloadUrl(null);
            }}
            className="w-full accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-400">
            <span>0px</span>
            <span>50px</span>
          </div>
        </div>

        {/* Background color */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Couleur de fond</Label>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={bgColor}
              onChange={(e) => {
                setBgColor(e.target.value);
                setDownloadUrl(null);
              }}
              className="w-10 h-10 rounded cursor-pointer border border-gray-200"
            />
            <input
              type="text"
              value={bgColor}
              onChange={(e) => {
                const val = e.target.value;
                if (/^#[0-9a-fA-F]{0,6}$/.test(val)) {
                  setBgColor(val);
                  setDownloadUrl(null);
                }
              }}
              placeholder="#ffffff"
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm w-28 font-mono"
            />
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
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creation en cours...
              </>
            ) : (
              <>
                <ImageIcon className="mr-2 h-4 w-4" />
                Creer la planche contact
              </>
            )}
          </Button>
          {downloadUrl && (
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Telecharger
            </Button>
          )}
        </div>

        {/* Success message */}
        {downloadUrl && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
            <p className="text-sm text-green-800 font-medium">
              Planche contact creee avec succes !
            </p>
          </div>
        )}
      </CardContent>
      <UpgradePopup totalUsed={totalUsed} />
    </Card>
  );
}
