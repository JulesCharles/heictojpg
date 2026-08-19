"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download, Loader2, X, ImageIcon } from "lucide-react";
import JSZip from "jszip";
import { useConversionLimit } from "@/lib/useConversionLimit";

import UpgradePopup from "@/components/UpgradePopup";
import BatchProPopup from "@/components/BatchProPopup";

const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

interface ConvertedFile {
  name: string;
  blob: Blob;
  url: string;
}

export default function ConvertForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited, totalUsed, requiresAuth, requiresUpgrade, limit } = useConversionLimit();
  const [showBatchPopup, setShowBatchPopup] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const heicFiles = selectedFiles.filter(
      (f) => f.type === "image/heic" || f.name.toLowerCase().endsWith(".heic")
    );

    if (heicFiles.length === 0) {
      setError("Veuillez selectionner des fichiers HEIC valides.");
      return;
    }

    setFiles(heicFiles);
    setError(null);
    setConvertedFiles([]);
    setProgress(0);

    trackEvent("file_selected", {
      file_type: "heic",
      file_count: heicFiles.length,
      total_size: heicFiles.reduce((s, f) => s + f.size, 0),
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (f) => f.type === "image/heic" || f.name.toLowerCase().endsWith(".heic")
    );
    if (droppedFiles.length > 0) {
      setFiles(droppedFiles);
      setError(null);
      setConvertedFiles([]);
      setProgress(0);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConvert = async () => {
    if (files.length === 0) return;

    if (isLimited) {
      setError(`Limite atteinte ! Vous avez utilise vos ${5} conversions gratuites aujourd'hui. Passez a Pro pour des conversions illimitees.`);
      return;
    }

    const filesToConvert = files.slice(0, 1);

    setConverting(true);
    setError(null);
    setConvertedFiles([]);
    setProgress(0);

    const startTime = Date.now();
    const results: ConvertedFile[] = [];

    for (let i = 0; i < filesToConvert.length; i++) {
      try {
        const formData = new FormData();
        formData.append("file", filesToConvert[i]);

        const response = await fetch("/api/convert", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) throw new Error("Erreur de conversion");

        const blob = await response.blob();
        const name = filesToConvert[i].name.replace(/\.heic$/i, ".jpg");
        results.push({ name, blob, url: URL.createObjectURL(blob) });
        recordConversion();
        setProgress(Math.round(((i + 1) / filesToConvert.length) * 100));
      } catch {
        results.push({
          name: filesToConvert[i].name + " (erreur)",
          blob: new Blob(),
          url: "",
        });
      }
    }

    setConvertedFiles(results.filter((r) => r.url));
    setConverting(false);

    if (files.length > 1) {
      setShowBatchPopup(true);
    }

    trackEvent("conversion_success", {
      file_count: results.filter((r) => r.url).length,
      conversion_time: Date.now() - startTime,
    });
  };

  const handleDownloadSingle = (file: ConvertedFile) => {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = async () => {
    if (convertedFiles.length === 1) {
      handleDownloadSingle(convertedFiles[0]);
      return;
    }

    const zip = new JSZip();
    for (const file of convertedFiles) {
      zip.file(file.name, file.blob);
    }
    const content = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(content);
    const link = document.createElement("a");
    link.href = url;
    link.download = "heic-to-jpg.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    trackEvent("file_download", { file_count: convertedFiles.length, format: "zip" });
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Convertir HEIC en JPG</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Drop zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
        >
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600">
            Glissez vos fichiers HEIC ici ou <span className="text-blue-600 font-medium">parcourir</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">Plusieurs fichiers acceptes</p>
          <input
            ref={inputRef}
            type="file"
            accept=".heic,image/heic"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* File list */}
        {files.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">{files.length} fichier(s) selectionne(s)</p>
            <div className="max-h-40 overflow-y-auto space-y-1">
              {files.map((file, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-blue-50 rounded text-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <ImageIcon className="h-4 w-4 text-blue-500 shrink-0" />
                    <span className="truncate text-blue-800">{file.name}</span>
                    <span className="text-xs text-blue-500 shrink-0">
                      {(file.size / 1024 / 1024).toFixed(1)} MB
                    </span>
                  </div>
                  <button onClick={() => removeFile(i)} className="text-blue-400 hover:text-red-500">
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
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

        {/* Progress bar */}
        {converting && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Conversion en cours...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <Button onClick={handleConvert} disabled={files.length === 0 || converting} className="flex-1">
            {converting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Conversion...
              </>
            ) : (
              `Convertir${files.length > 1 ? ` (${files.length})` : ""}`
            )}
          </Button>

          {convertedFiles.length > 0 && (
            <Button onClick={handleDownloadAll} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              {convertedFiles.length > 1 ? "Tout telecharger (ZIP)" : "Telecharger"}
            </Button>
          )}
        </div>

        {/* Converted files list */}
        {convertedFiles.length > 1 && (
          <div className="space-y-1">
            {convertedFiles.map((file, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-green-50 rounded text-sm">
                <span className="truncate text-green-800">{file.name}</span>
                <button
                  onClick={() => handleDownloadSingle(file)}
                  className="text-green-600 hover:text-green-800 text-xs font-medium"
                >
                  Telecharger
                </button>
              </div>
            ))}
          </div>
        )}

        {convertedFiles.length === 1 && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              Conversion reussie ! Votre fichier JPG est pret.
            </p>
          </div>
        )}
      </CardContent>
      <UpgradePopup totalUsed={totalUsed} limit={limit} requiresAuth={requiresAuth} requiresUpgrade={requiresUpgrade} />
      <BatchProPopup visible={showBatchPopup} onDismiss={() => setShowBatchPopup(false)} totalFiles={files.length} />
    </Card>
  );
}
