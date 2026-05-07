"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download, Loader2, X, ImageIcon } from "lucide-react";
import JSZip from "jszip";
import { useConversionLimit } from "@/lib/useConversionLimit";

import UpgradePopup from "@/components/UpgradePopup";
import BatchProPopup from "@/components/BatchProPopup";

interface HeicConvertFormProps {
  title: string;
  outputFormat: string;
  outputExtension: string;
  apiEndpoint?: string;
}

interface ConvertedFile {
  name: string;
  blob: Blob;
  url: string;
}

export default function HeicConvertForm({
  title,
  outputFormat,
  outputExtension,
  apiEndpoint = "/api/convert-heic",
}: HeicConvertFormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited, totalUsed } = useConversionLimit();
  const [showBatchPopup, setShowBatchPopup] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []).filter(
      (f) => f.type === "image/heic" || f.name.toLowerCase().endsWith(".heic")
    );
    if (selected.length > 0) {
      setFiles(selected);
      setError(null);
      setConvertedFiles([]);
      setProgress(0);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files).filter(
      (f) => f.type === "image/heic" || f.name.toLowerCase().endsWith(".heic")
    );
    if (dropped.length > 0) {
      setFiles(dropped);
      setError(null);
      setConvertedFiles([]);
    }
  };

  const removeFile = (i: number) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const handleConvert = async () => {
    if (files.length === 0) return;
    if (isLimited) {
      setError("Limite atteinte ! Passez a Pro pour des conversions illimitees.");
      return;
    }

    const filesToConvert = files.slice(0, 1);
    setConverting(true);
    setError(null);
    setConvertedFiles([]);
    setProgress(0);

    const results: ConvertedFile[] = [];

    for (let i = 0; i < filesToConvert.length; i++) {
      try {
        const formData = new FormData();
        formData.append("file", filesToConvert[i]);
        formData.append("format", outputFormat);

        const response = await fetch(apiEndpoint, { method: "POST", body: formData });
        if (!response.ok) throw new Error("Erreur");

        const blob = await response.blob();
        const name = filesToConvert[i].name.replace(/\.heic$/i, outputExtension);
        results.push({ name, blob, url: URL.createObjectURL(blob) });
        recordConversion();
      } catch {
        // skip failed files
      }
      setProgress(Math.round(((i + 1) / filesToConvert.length) * 100));
    }

    setConvertedFiles(results);
    setConverting(false);

    if (files.length > 1) {
      setShowBatchPopup(true);
    }
  };

  const handleDownloadSingle = (file: ConvertedFile) => {
    const a = document.createElement("a");
    a.href = file.url;
    a.download = file.name;
    a.click();
  };

  const handleDownloadAll = async () => {
    if (convertedFiles.length === 1) { handleDownloadSingle(convertedFiles[0]); return; }
    const zip = new JSZip();
    for (const f of convertedFiles) zip.file(f.name, f.blob);
    const content = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = `converted-${outputFormat}.zip`;
    a.click();
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
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
          <input ref={inputRef} type="file" accept=".heic,image/heic" multiple onChange={handleFileChange} className="hidden" />
        </div>

        {files.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">{files.length} fichier(s)</p>
            <div className="max-h-32 overflow-y-auto space-y-1">
              {files.map((f, i) => (
                <div key={i} className="flex items-center justify-between p-2 bg-blue-50 rounded text-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <ImageIcon className="h-4 w-4 text-blue-500 shrink-0" />
                    <span className="truncate text-blue-800">{f.name}</span>
                    <span className="text-xs text-blue-500 shrink-0">{(f.size / 1024 / 1024).toFixed(1)} MB</span>
                  </div>
                  <button onClick={() => removeFile(i)} className="text-blue-400 hover:text-red-500"><X className="h-4 w-4" /></button>
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

        {converting && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Conversion...</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <Button onClick={handleConvert} disabled={files.length === 0 || converting} className="flex-1">
            {converting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Conversion...</> : `Convertir${files.length > 1 ? ` (${files.length})` : ""}`}
          </Button>
          {convertedFiles.length > 0 && (
            <Button onClick={handleDownloadAll} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />{convertedFiles.length > 1 ? "ZIP" : "Telecharger"}
            </Button>
          )}
        </div>

        {convertedFiles.length > 1 && (
          <div className="space-y-1">
            {convertedFiles.map((f, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-green-50 rounded text-sm">
                <span className="truncate text-green-800">{f.name}</span>
                <button onClick={() => handleDownloadSingle(f)} className="text-green-600 hover:text-green-800 text-xs font-medium">Telecharger</button>
              </div>
            ))}
          </div>
        )}

        {convertedFiles.length === 1 && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">Conversion reussie !</p>
          </div>
        )}
      </CardContent>
      <UpgradePopup totalUsed={totalUsed} />
      <BatchProPopup visible={showBatchPopup} onDismiss={() => setShowBatchPopup(false)} totalFiles={files.length} />
    </Card>
  );
}
