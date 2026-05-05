"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2 } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

interface EditImageFormProps {
  title: string;
  action: string;
  apiEndpoint?: string;
  children?: React.ReactNode;
  buildFormData?: (formData: FormData) => void;
  acceptFormats?: string;
}

export default function EditImageForm({
  title,
  action,
  apiEndpoint = "/api/edit-image",
  children,
  buildFormData,
  acceptFormats = ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp",
}: EditImageFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { conversionsLeft, recordConversion, isLimited } = useConversionLimit();

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
      formData.append("action", action);
      if (buildFormData) buildFormData(formData);

      const response = await fetch(apiEndpoint, { method: "POST", body: formData });
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
      link.download = `${action}-${file.name}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">{title}</CardTitle>
        <p className="text-sm text-gray-500 mt-1">
          {conversionsLeft} utilisation(s) gratuite(s) restante(s)
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="file-upload" className="text-sm font-medium">
            Selectionner une image
          </Label>
          <div className="relative">
            <Input id="file-upload" type="file" accept={acceptFormats} onChange={handleFileChange} className="cursor-pointer" />
            <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {file && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800"><strong>Fichier :</strong> {file.name}</p>
            <p className="text-xs text-blue-600">Taille : {(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        )}

        {children}

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
            {processing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Traitement...</> : "Appliquer"}
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
    </Card>
  );
}
