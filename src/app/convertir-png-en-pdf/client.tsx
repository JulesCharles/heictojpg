"use client";

import { useState, useRef } from "react";
import { Upload, Download, Loader2, X, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useConversionLimit } from "@/lib/useConversionLimit";

export default function PngToPdfClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited } = useConversionLimit();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter((f) =>
        f.type.startsWith("image/")
      );
      if (newFiles.length > 0) {
        setFiles((prev) => [...prev, ...newFiles]);
        setError(null);
        setDownloadUrl(null);
      }
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (isLimited) { setError("Limite atteinte ! Passez a Pro pour un usage illimite."); return; }
    if (files.length === 0) {
      setError("Veuillez ajouter au moins une image.");
      return;
    }

    setLoading(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("files", file);
      });

      const res = await fetch("/api/image-to-pdf", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Erreur lors de la conversion.");
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      recordConversion();
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
            Cliquez ou glissez vos images PNG ici
          </p>
          <p className="text-sm text-gray-400 mt-1">
            PNG, JPG, WebP acceptés
          </p>
          <input
            ref={inputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.webp,image/*"
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {files.length > 0 && (
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-700 truncate max-w-[200px]">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-400">
                    ({(file.size / 1024 / 1024).toFixed(2)} Mo)
                  </span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {error && <p className="text-red-500 text-sm">{error}{isLimited && <a href="/pricing" className="text-sm text-blue-600 font-medium hover:underline mt-1 inline-block">Voir les offres Pro &rarr;</a>}</p>}

        <Button
          onClick={handleSubmit}
          disabled={loading || files.length === 0}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Conversion en cours...
            </>
          ) : (
            <>
              <ImageIcon className="mr-2 h-4 w-4" />
              Convertir en PDF ({files.length} image{files.length > 1 ? "s" : ""})
            </>
          )}
        </Button>

        {downloadUrl && (
          <a
            href={downloadUrl}
            download="images.pdf"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <Download className="h-4 w-4" />
            Télécharger le PDF
          </a>
        )}
      </div>
    </Card>
  );
}
