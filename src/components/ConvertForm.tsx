"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2 } from "lucide-react";

const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

export default function ConvertForm() {
  const [file, setFile] = useState<File | null>(null);
  const [converting, setConverting] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "image/heic" || selectedFile.name.toLowerCase().endsWith(".heic")) {
        setFile(selectedFile);
        setError(null);
        setDownloadUrl(null);
        // Track file upload
        trackEvent("file_selected", {
          file_type: "heic",
          file_size: selectedFile.size,
        });
      } else {
        setError("Veuillez sélectionner un fichier HEIC valide.");
        setFile(null);
      }
    }
  };

  const handleConvert = async () => {
    if (!file) return;

    setConverting(true);
    setError(null);
    setDownloadUrl(null);

    const startTime = Date.now();

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la conversion");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);

      const conversionTime = Date.now() - startTime;

      // Track successful conversion
      trackEvent("conversion_success", {
        file_size: file.size,
        conversion_time: conversionTime,
        output_format: "jpg",
      });
    } catch (err) {
      setError("Erreur lors de la conversion. Veuillez réessayer.");
      console.error("Conversion error:", err);

      // Track conversion error
      trackEvent("conversion_error", {
        error_message: err instanceof Error ? err.message : "Unknown error",
      });
    } finally {
      setConverting(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl && file) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = file.name.replace(/\.heic$/i, ".jpg");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Track download
      trackEvent("file_download", {
        file_name: file.name.replace(/\.heic$/i, ".jpg"),
        original_size: file.size,
      });
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">
          Convertir HEIC en JPG
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="file-upload" className="text-sm font-medium">
            Sélectionner un fichier HEIC
          </Label>
          <div className="relative">
            <Input
              id="file-upload"
              type="file"
              accept=".heic,image/heic"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {file && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Fichier sélectionné:</strong> {file.name}
            </p>
            <p className="text-xs text-blue-600">
              Taille: {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <div className="flex gap-4">
          <Button
            onClick={handleConvert}
            disabled={!file || converting}
            className="flex-1"
          >
            {converting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Conversion...
              </>
            ) : (
              "Convertir"
            )}
          </Button>

          {downloadUrl && (
            <Button
              onClick={handleDownload}
              variant="outline"
              className="flex-1"
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          )}
        </div>

        {downloadUrl && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              ✅ Conversion réussie ! Votre fichier JPG est prêt à télécharger.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}