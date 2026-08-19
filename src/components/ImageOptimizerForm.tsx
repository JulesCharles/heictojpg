"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2 } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

import UpgradePopup from "@/components/UpgradePopup";

const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

type OutputFormat = "webp" | "avif" | "jpg";

export default function ImageOptimizerForm() {
  const [file, setFile] = useState<File | null>(null);
  const [format, setFormat] = useState<OutputFormat>("webp");
  const [quality, setQuality] = useState(80);
  const [maxWidth, setMaxWidth] = useState<string>("");
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadName, setDownloadName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [originalSize, setOriginalSize] = useState<number | null>(null);
  const [newSize, setNewSize] = useState<number | null>(null);
  const [reduction, setReduction] = useState<string | null>(null);
  const { conversionsLeft, recordConversion, isLimited, totalUsed, requiresAuth, requiresUpgrade, limit } = useConversionLimit();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);
        setError(null);
        setDownloadUrl(null);
        setOriginalSize(null);
        setNewSize(null);
        setReduction(null);
        trackEvent("optimizer_file_selected", { file_type: selectedFile.type, file_size: selectedFile.size });
      } else {
        setError("Veuillez s\u00e9lectionner une image valide.");
        setFile(null);
      }
    }
  };

  const handleOptimize = async () => {
    if (!file) return;
    if (isLimited) {
      setError("Limite atteinte ! Passez a Pro pour un usage illimite.");
      return;
    }

    setProcessing(true);
    setError(null);
    setDownloadUrl(null);
    setOriginalSize(null);
    setNewSize(null);
    setReduction(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("quality", quality.toString());
      formData.append("format", format);
      if (maxWidth) formData.append("maxWidth", maxWidth);

      const response = await fetch("/api/optimize-image", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Erreur lors de l&apos;optimisation");

      const xOriginalSize = response.headers.get("X-Original-Size");
      const xNewSize = response.headers.get("X-New-Size");
      const xReduction = response.headers.get("X-Reduction");

      if (xOriginalSize) setOriginalSize(parseInt(xOriginalSize));
      if (xNewSize) setNewSize(parseInt(xNewSize));
      if (xReduction) setReduction(xReduction);

      const disposition = response.headers.get("Content-Disposition");
      const filenameMatch = disposition?.match(/filename="(.+)"/);
      setDownloadName(filenameMatch ? filenameMatch[1] : `optimized.${format}`);

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      recordConversion();

      trackEvent("optimization_success", { file_size: file.size, format, quality, reduction: xReduction });
    } catch (err) {
      setError("Erreur lors de l&apos;optimisation. Veuillez r\u00e9essayer.");
      trackEvent("optimization_error", { error_message: err instanceof Error ? err.message : "Unknown" });
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      trackEvent("optimizer_file_download", { file_name: downloadName });
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} o`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
    return `${(bytes / 1024 / 1024).toFixed(2)} Mo`;
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Optimiser une image pour le web</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* File upload */}
        <div className="space-y-2">
          <Label htmlFor="file-upload" className="text-sm font-medium">
            S&eacute;lectionner une image
          </Label>
          <div className="relative">
            <Input
              id="file-upload"
              type="file"
              accept=".jpg,.jpeg,.png,.webp,.tiff,.bmp,.gif,image/jpeg,image/png,image/webp,image/tiff,image/bmp,image/gif"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Output format selector */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Format de sortie</Label>
          <div className="flex gap-2">
            {(["webp", "avif", "jpg"] as OutputFormat[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFormat(f)}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors border ${
                  format === f
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Quality slider */}
        <div className="space-y-2">
          <Label htmlFor="quality" className="text-sm font-medium">
            Qualit&eacute; : {quality}%
          </Label>
          <input
            id="quality"
            type="range"
            min="10"
            max="100"
            value={quality}
            onChange={(e) => setQuality(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Plus l&eacute;ger</span>
            <span>Meilleure qualit&eacute;</span>
          </div>
        </div>

        {/* Max width */}
        <div className="space-y-2">
          <Label htmlFor="max-width" className="text-sm font-medium">
            Largeur maximale (optionnel)
          </Label>
          <Input
            id="max-width"
            type="number"
            placeholder="ex: 1920"
            value={maxWidth}
            onChange={(e) => setMaxWidth(e.target.value)}
            className="w-full"
          />
        </div>

        {/* File info */}
        {file && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Fichier :</strong> {file.name}
            </p>
            <p className="text-xs text-blue-600">
              Taille originale : {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        {/* Error */}
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

        {/* Action buttons */}
        <div className="flex gap-4">
          <Button onClick={handleOptimize} disabled={!file || processing} className="flex-1">
            {processing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Optimisation...
              </>
            ) : (
              "Optimiser"
            )}
          </Button>

          {downloadUrl && (
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              T&eacute;l&eacute;charger
            </Button>
          )}
        </div>

        {/* Results */}
        {downloadUrl && originalSize && newSize && reduction && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg space-y-2">
            <p className="text-sm font-semibold text-green-800">
              Optimisation r&eacute;ussie ! R&eacute;duction de {reduction}
            </p>
            <div className="flex justify-between text-xs text-green-700">
              <span>Avant : {formatSize(originalSize)}</span>
              <span>Apr&egrave;s : {formatSize(newSize)}</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all"
                style={{ width: `${100 - parseInt(reduction)}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
      <UpgradePopup totalUsed={totalUsed} limit={limit} requiresAuth={requiresAuth} requiresUpgrade={requiresUpgrade} />
    </Card>
  );
}
