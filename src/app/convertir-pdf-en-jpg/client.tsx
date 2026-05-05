"use client";

import { useState, useRef } from "react";
import { Upload, Download, Loader2, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useConversionLimit } from "@/lib/useConversionLimit";

interface Props {
  format?: string;
  title?: string;
}

export default function PdfToImageClient({ format = "jpg", title = "Convertir PDF en JPG" }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [dpi, setDpi] = useState("150");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadName, setDownloadName] = useState("result");
  const [pageCount, setPageCount] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited } = useConversionLimit();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && (f.type === "application/pdf" || f.name.toLowerCase().endsWith(".pdf"))) {
      setFile(f); setError(null); setDownloadUrl(null); setPageCount(null);
    }
  };

  const handleSubmit = async () => {
    if (isLimited) { setError("Limite atteinte ! Passez a Pro pour un usage illimite."); return; }
    if (!file) { setError("Veuillez selectionner un fichier PDF."); return; }
    setLoading(true); setError(null); setDownloadUrl(null); setPageCount(null);

    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("format", format);
      fd.append("dpi", dpi);
      const res = await fetch("/api/pdf-to-image", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Erreur lors de la conversion.");

      setPageCount(res.headers.get("X-Page-Count"));
      const blob = await res.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();

      const ct = res.headers.get("Content-Type");
      const baseName = file.name.replace(/\.pdf$/i, "");
      setDownloadName(ct === "application/zip" ? `${baseName}-images.zip` : `${baseName}.${format}`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erreur lors de la conversion. Verifiez que le PDF n'est pas protege.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">{title}</CardTitle>
        <p className="text-sm text-gray-500 mt-1">{conversionsLeft} utilisation(s) gratuite(s) restante(s)</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
          onClick={() => inputRef.current?.click()}
        >
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600">Glissez votre PDF ici ou <span className="text-blue-600 font-medium">parcourir</span></p>
          <input ref={inputRef} type="file" accept=".pdf,application/pdf" onChange={handleFileChange} className="hidden" />
        </div>

        {file && (
          <div className="flex items-center justify-between bg-blue-50 rounded-lg p-3">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-red-500" />
              <span className="text-sm text-blue-800 truncate max-w-[200px]">{file.name}</span>
              <span className="text-xs text-blue-500">({(file.size / 1024 / 1024).toFixed(2)} Mo)</span>
            </div>
            <button onClick={() => { setFile(null); setDownloadUrl(null); }} className="text-blue-400 hover:text-red-500">
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        <div className="space-y-2">
          <Label className="text-sm font-medium">Qualite de sortie</Label>
          <div className="flex gap-2">
            {[{ value: "72", label: "Web (72 DPI)" }, { value: "150", label: "Standard (150 DPI)" }, { value: "300", label: "HD (300 DPI)" }].map((d) => (
              <button key={d.value} onClick={() => setDpi(d.value)}
                className={`flex-1 px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${dpi === d.value ? "bg-blue-50 border-blue-300 text-blue-700" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}>
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg"><p className="text-sm text-red-800">{error}</p>{isLimited && <a href="/pricing" className="text-sm text-blue-600 font-medium hover:underline mt-1 inline-block">Voir les offres Pro &rarr;</a>}</div>}

        <div className="flex gap-4">
          <Button onClick={handleSubmit} disabled={loading || !file} className="flex-1">
            {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Conversion...</> : "Convertir"}
          </Button>
          {downloadUrl && (
            <Button onClick={() => { const a = document.createElement("a"); a.href = downloadUrl; a.download = downloadName; a.click(); }} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />Telecharger
            </Button>
          )}
        </div>

        {downloadUrl && (
          <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              Conversion reussie !
              {pageCount && parseInt(pageCount) > 1 ? ` ${pageCount} pages extraites (ZIP).` : " Votre image est prete."}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
