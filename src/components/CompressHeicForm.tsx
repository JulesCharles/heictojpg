"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2 } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

import UpgradePopup from "@/components/UpgradePopup";

export default function CompressHeicForm() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState(60);
  const [compressing, setCompressing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [reduction, setReduction] = useState<string | null>(null);
  const { conversionsLeft, recordConversion, isLimited, totalUsed } = useConversionLimit();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "image/heic" || selectedFile.name.toLowerCase().endsWith(".heic")) {
        setFile(selectedFile);
        setError(null);
        setDownloadUrl(null);
        setReduction(null);
      } else {
        setError("Veuillez selectionner un fichier HEIC valide.");
        setFile(null);
      }
    }
  };

  const handleCompress = async () => {
    if (!file) return;
    if (isLimited) {
      setError("Limite atteinte ! Passez a Pro pour un usage illimite.");
      return;
    }
    setCompressing(true);
    setError(null);
    setDownloadUrl(null);
    setReduction(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("quality", quality.toString());

      const response = await fetch("/api/compress-heic", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Erreur");

      setReduction(response.headers.get("X-Reduction"));
      const blob = await response.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();
    } catch {
      setError("Erreur lors de la compression. Veuillez reessayer.");
    } finally {
      setCompressing(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl && file) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = file.name.replace(/\.heic$/i, "-compresse.avif");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Compresser un fichier HEIC</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="file-upload" className="text-sm font-medium">
            Selectionner un fichier HEIC
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

        <div className="space-y-2">
          <Label htmlFor="quality" className="text-sm font-medium">
            Qualité : {quality}%
          </Label>
          <input
            id="quality"
            type="range"
            min="10"
            max="90"
            value={quality}
            onChange={(e) => setQuality(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Plus léger</span>
            <span>Meilleure qualité</span>
          </div>
        </div>

        {file && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800"><strong>Fichier :</strong> {file.name}</p>
            <p className="text-xs text-blue-600">Taille originale : {(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <div className="flex gap-4">
          <Button onClick={handleCompress} disabled={!file || compressing} className="flex-1">
            {compressing ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Compression...</>
            ) : (
              "Compresser"
            )}
          </Button>
          {downloadUrl && (
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />Telecharger
            </Button>
          )}
        </div>

        {downloadUrl && reduction && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              Compression reussie ! Reduction de {reduction} de la taille du fichier.
            </p>
          </div>
        )}
      </CardContent>
      <UpgradePopup totalUsed={totalUsed} />
    </Card>
  );
}
