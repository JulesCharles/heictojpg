"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2, Type } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

import UpgradePopup from "@/components/UpgradePopup";

export default function TextOnImageForm() {
  const [file, setFile] = useState<File | null>(null);
  const [text, setText] = useState("Mon texte");
  const [fontSize, setFontSize] = useState(48);
  const [color, setColor] = useState("#ffffff");
  const [xPos, setXPos] = useState(50);
  const [yPos, setYPos] = useState(50);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { conversionsLeft, recordConversion, isLimited, totalUsed, requiresAuth, requiresUpgrade, limit } = useConversionLimit();

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

  const handleProcess = async () => {
    if (!file) return;
    if (isLimited) {
      setError("Limite atteinte ! Passez a Pro pour un usage illimite.");
      return;
    }
    setProcessing(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("text", text);
      formData.append("fontSize", fontSize.toString());
      formData.append("color", color);
      formData.append("x", xPos.toString());
      formData.append("y", yPos.toString());

      const response = await fetch("/api/text-on-image", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Erreur");

      const blob = await response.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();
    } catch {
      setError("Erreur lors du traitement. Veuillez reessayer.");
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl && file) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `texte-${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">
          <Type className="inline-block mr-2 h-6 w-6" />
          Ajouter du texte sur une image
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="file-upload" className="text-sm font-medium">
            Selectionner une image
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

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Texte a ajouter</Label>
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Votre texte ici"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Taille de police : {fontSize}px</Label>
            <input
              type="range"
              min="16"
              max="120"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>16px</span>
              <span>120px</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Couleur du texte</Label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-10 h-10 rounded cursor-pointer border border-gray-300"
              />
              <Input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="#ffffff"
                className="flex-1"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Position horizontale (X) : {xPos}%</Label>
            <input
              type="range"
              min="0"
              max="100"
              value={xPos}
              onChange={(e) => setXPos(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Gauche</span>
              <span>Droite</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium">Position verticale (Y) : {yPos}%</Label>
            <input
              type="range"
              min="0"
              max="100"
              value={yPos}
              onChange={(e) => setYPos(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Haut</span>
              <span>Bas</span>
            </div>
          </div>
        </div>

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

        <div className="flex gap-4">
          <Button onClick={handleProcess} disabled={!file || processing} className="flex-1">
            {processing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Traitement...</> : "Ajouter le texte"}
          </Button>
          {downloadUrl && (
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />Telecharger
            </Button>
          )}
        </div>

        {downloadUrl && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">Traitement reussi ! Votre image est prete.</p>
          </div>
        )}
      </CardContent>
      <UpgradePopup totalUsed={totalUsed} limit={limit} requiresAuth={requiresAuth} requiresUpgrade={requiresUpgrade} />
    </Card>
  );
}
