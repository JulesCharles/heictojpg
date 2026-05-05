"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2, Lock } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

export default function Client() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { conversionsLeft, recordConversion, isLimited } = useConversionLimit();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.type === "application/pdf") { setFile(f); setError(null); setDownloadUrl(null); }
  };

  const handleSubmit = async () => {
    if (isLimited) { setError("Limite atteinte !"); return; }
    if (!file) return;
    setProcessing(true); setError(null); setDownloadUrl(null);
    try {
      const fd = new FormData(); fd.append("file", file); fd.append("action", "protect");
      const res = await fetch("/api/edit-pdf", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Erreur");
      const blob = await res.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();
    } catch { setError("Erreur lors du traitement."); } finally { setProcessing(false); }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center"><CardTitle className="text-2xl text-gray-800">Protéger un PDF</CardTitle><p className="text-sm text-gray-500 mt-1">{conversionsLeft} utilisation(s) gratuite(s) restante(s)</p></CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2"><Label className="text-sm font-medium">Sélectionner un PDF</Label><div className="relative"><Input type="file" accept=".pdf" onChange={handleFile} className="cursor-pointer" /><Upload className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /></div></div>
        {file && <div className="p-3 bg-blue-50 rounded-lg"><p className="text-sm text-blue-800"><strong>Fichier :</strong> {file.name}</p></div>}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg"><p className="text-sm text-amber-800"><Lock className="inline h-4 w-4 mr-1" />Note : cette version optimise et nettoie les métadonnées du PDF. La protection par mot de passe complète sera disponible prochainement.</p></div>
        {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg"><p className="text-sm text-red-800">{error}</p></div>}
        <div className="flex gap-4">
          <Button onClick={handleSubmit} disabled={!file || processing} className="flex-1">{processing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Traitement...</> : "Protéger"}</Button>
          {downloadUrl && <Button onClick={() => { const a = document.createElement("a"); a.href = downloadUrl; a.download = "protege.pdf"; a.click(); }} variant="outline" className="flex-1"><Download className="mr-2 h-4 w-4" />Télécharger</Button>}
        </div>
        {downloadUrl && <div className="p-3 bg-green-50 border border-green-200 rounded-lg"><p className="text-sm text-green-800">PDF optimisé et nettoyé !</p></div>}
      </CardContent>
    </Card>
  );
}