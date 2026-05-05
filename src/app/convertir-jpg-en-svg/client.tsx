"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2 } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

interface Props {
  title: string;
  accept: string;
}

export default function VectorizeClient({ title, accept }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState("default");
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { conversionsLeft, recordConversion, isLimited } = useConversionLimit();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.type.startsWith("image/")) {
      setFile(f); setError(null); setDownloadUrl(null);
    } else {
      setError("Veuillez selectionner une image valide."); setFile(null);
    }
  };

  const handleConvert = async () => {
    if (isLimited) { setError("Limite atteinte ! Passez a Pro pour un usage illimite."); return; }
    if (!file) return;
    setProcessing(true); setError(null); setDownloadUrl(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("mode", mode);
      const res = await fetch("/api/image-to-svg", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Erreur");
      const blob = await res.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();
    } catch {
      setError("Erreur lors de la vectorisation. Veuillez reessayer.");
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl && file) {
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = file.name.replace(/\.[^/.]+$/, ".svg");
      a.click();
    }
  };

  const modes = [
    { value: "simple", label: "Simple (8 couleurs)" },
    { value: "default", label: "Standard (16 couleurs)" },
    { value: "detailed", label: "Detaille (64 couleurs)" },
    { value: "bw", label: "Noir et blanc" },
  ];

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">{title}</CardTitle>
        <p className="text-sm text-gray-500 mt-1">{conversionsLeft} utilisation(s) gratuite(s) restante(s)</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Selectionner une image</Label>
          <div className="relative">
            <Input type="file" accept={accept} onChange={handleFile} className="cursor-pointer" />
            <Upload className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {file && (
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800"><strong>Fichier :</strong> {file.name}</p>
            <p className="text-xs text-blue-600">Taille : {(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        )}

        <div className="space-y-2">
          <Label className="text-sm font-medium">Niveau de detail</Label>
          <div className="grid grid-cols-2 gap-2">
            {modes.map((m) => (
              <button
                key={m.value}
                onClick={() => setMode(m.value)}
                className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                  mode === m.value
                    ? "bg-blue-50 border-blue-300 text-blue-700"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
            {isLimited && <a href="/pricing" className="text-sm text-blue-600 font-medium hover:underline mt-1 inline-block">Voir les offres Pro &rarr;</a>}
          </div>
        )}

        <div className="flex gap-4">
          <Button onClick={handleConvert} disabled={!file || processing} className="flex-1">
            {processing ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Vectorisation...</>
            ) : (
              "Vectoriser"
            )}
          </Button>
          {downloadUrl && (
            <Button onClick={handleDownload} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />Telecharger SVG
            </Button>
          )}
        </div>

        {downloadUrl && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">Vectorisation reussie ! Votre SVG est pret.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
