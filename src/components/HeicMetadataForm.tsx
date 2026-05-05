"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Loader2, Info } from "lucide-react";

type MetadataResult = Record<string, Record<string, string>>;

export default function HeicMetadataForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [metadata, setMetadata] = useState<MetadataResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === "image/heic" || selectedFile.name.toLowerCase().endsWith(".heic") || selectedFile.type.startsWith("image/")) {
        setFile(selectedFile);
        setError(null);
        setMetadata(null);
      } else {
        setError("Veuillez selectionner un fichier image valide.");
        setFile(null);
      }
    }
  };

  const handleRead = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    setMetadata(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/heic-metadata", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Erreur");

      const data = await response.json();
      setMetadata(data.metadata);
    } catch {
      setError("Erreur lors de la lecture des metadonnees.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-lg mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-gray-800">Lire les metadonnees HEIC</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="file-upload" className="text-sm font-medium">
              Selectionner un fichier HEIC ou image
            </Label>
            <div className="relative">
              <Input
                id="file-upload"
                type="file"
                accept=".heic,.heif,.jpg,.jpeg,.png,.webp,.tiff,image/*"
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

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}

          <Button onClick={handleRead} disabled={!file || loading} className="w-full">
            {loading ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Lecture...</>
            ) : (
              <><Info className="mr-2 h-4 w-4" />Lire les metadonnees</>
            )}
          </Button>
        </CardContent>
      </Card>

      {metadata && Object.keys(metadata).length > 0 && (
        <Card className="w-full max-w-lg mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Metadonnees EXIF</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(metadata).map(([category, fields]) => (
              <div key={category}>
                <h3 className="font-semibold text-gray-700 mb-2 text-sm uppercase tracking-wide">{category}</h3>
                <div className="bg-gray-50 rounded-lg divide-y divide-gray-200">
                  {Object.entries(fields).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 px-3 text-sm">
                      <span className="text-gray-500">{key}</span>
                      <span className="text-gray-800 font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {metadata && Object.keys(metadata).length === 0 && (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-lg mx-auto">
          <p className="text-sm text-yellow-800">Aucune metadonnee EXIF trouvee dans ce fichier.</p>
        </div>
      )}
    </div>
  );
}
