"use client";

import { useState, useRef } from "react";
import { Upload, Download, Loader2, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useConversionLimit } from "@/lib/useConversionLimit";

export default function CompressPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [reduction, setReduction] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited } = useConversionLimit();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
      setDownloadUrl(null);
      setReduction(null);
    }
  };

  const removeFile = () => {
    setFile(null);
    setDownloadUrl(null);
    setReduction(null);
  };

  const handleSubmit = async () => {
    if (isLimited) { setError("Limite atteinte ! Passez a Pro pour un usage illimite."); return; }
    if (!file) {
      setError("Veuillez sélectionner un fichier PDF.");
      return;
    }

    setLoading(true);
    setError(null);
    setDownloadUrl(null);
    setReduction(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/compress-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Erreur lors de la compression du PDF.");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      recordConversion();

      const originalSize = file.size;
      const compressedSize = blob.size;
      const percent = Math.round(
        ((originalSize - compressedSize) / originalSize) * 100
      );
      setReduction(percent);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <p className="text-sm text-gray-500 mt-1">{conversionsLeft} utilisation(s) gratuite(s) restante(s)</p>
      <div className="space-y-4">
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 transition-colors"
          onClick={() => inputRef.current?.click()}
        >
          <Upload className="mx-auto h-10 w-10 text-gray-400 mb-3" />
          <p className="text-gray-600 font-medium">
            Cliquez ou glissez votre fichier PDF ici
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Un seul fichier PDF
          </p>
          <input
            ref={inputRef}
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {file && (
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-red-500" />
              <span className="text-sm text-gray-700 truncate max-w-[200px]">
                {file.name}
              </span>
              <span className="text-xs text-gray-400">
                ({(file.size / 1024 / 1024).toFixed(2)} Mo)
              </span>
            </div>
            <button
              onClick={removeFile}
              className="text-gray-400 hover:text-red-500"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {error && <p className="text-red-500 text-sm">{error}{isLimited && <a href="/pricing" className="text-sm text-blue-600 font-medium hover:underline mt-1 inline-block">Voir les offres Pro &rarr;</a>}</p>}

        <Button
          onClick={handleSubmit}
          disabled={loading || !file}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Compression en cours...
            </>
          ) : (
            <>
              <FileText className="mr-2 h-4 w-4" />
              Compresser le PDF
            </>
          )}
        </Button>

        {reduction !== null && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <p className="text-green-700 font-semibold text-lg">
              Réduction de {reduction} %
            </p>
            <p className="text-green-600 text-sm">
              Taille originale : {(file!.size / 1024 / 1024).toFixed(2)} Mo
            </p>
          </div>
        )}

        {downloadUrl && (
          <a
            href={downloadUrl}
            download="compressed.pdf"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <Download className="h-4 w-4" />
            Télécharger le PDF compressé
          </a>
        )}
      </div>
    </Card>
  );
}
