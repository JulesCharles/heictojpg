"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2 } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

import UpgradePopup from "@/components/UpgradePopup";

const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventParams);
  }
};

export default function ResizeForm() {
  const [file, setFile] = useState<File | null>(null);
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [resizing, setResizing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { conversionsLeft, recordConversion, isLimited, totalUsed } = useConversionLimit();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      setError(null);
      setDownloadUrl(null);
    } else {
      setError("Veuillez selectionner une image valide.");
      setFile(null);
    }
  };

  const handleResize = async () => {
    if (!file || (!width && !height)) return;
    if (isLimited) {
      setError("Limite atteinte ! Passez a Pro pour un usage illimite.");
      return;
    }

    setResizing(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      if (width) formData.append("width", width);
      if (height) formData.append("height", height);

      const response = await fetch("/api/resize", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Erreur");

      const blob = await response.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();
      trackEvent("resize_success", { width, height });
    } catch {
      setError("Erreur lors du redimensionnement. Veuillez reessayer.");
    } finally {
      setResizing(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl && file) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `resized-${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">Redimensionner une image</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="file-upload" className="text-sm font-medium">
            Selectionner une image (JPG, PNG, WebP)
          </Label>
          <div className="relative">
            <Input
              id="file-upload"
              type="file"
              accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
              className="cursor-pointer"
            />
            <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {file && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800"><strong>Fichier :</strong> {file.name}</p>
            <p className="text-xs text-blue-600">Taille : {(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="width" className="text-sm font-medium">Largeur (px)</Label>
            <Input
              id="width"
              type="number"
              placeholder="ex: 1920"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="height" className="text-sm font-medium">Hauteur (px)</Label>
            <Input
              id="height"
              type="number"
              placeholder="ex: 1080"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
        </div>
        <p className="text-xs text-gray-500">Laissez un champ vide pour conserver les proportions.</p>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
          </div>
        )}

        <div className="flex gap-4">
          <Button onClick={handleResize} disabled={!file || (!width && !height) || resizing} className="flex-1">
            {resizing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Redimensionnement...
              </>
            ) : (
              "Redimensionner"
            )}
          </Button>

          {downloadUrl && (
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Telecharger
            </Button>
          )}
        </div>

        {downloadUrl && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              Redimensionnement reussi ! Votre image est prete.
            </p>
          </div>
        )}
      </CardContent>
      <UpgradePopup totalUsed={totalUsed} />
    </Card>
  );
}
