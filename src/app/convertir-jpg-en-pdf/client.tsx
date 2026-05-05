"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download, Loader2, X, ImageIcon } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

export default function ImageToPdfClient() {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited } = useConversionLimit();

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []).filter(f => f.type.startsWith("image/"));
    if (selected.length > 0) { setFiles(prev => [...prev, ...selected]); setError(null); setDownloadUrl(null); }
  };
  const removeFile = (i: number) => setFiles(prev => prev.filter((_, idx) => idx !== i));

  const handleConvert = async () => {
    if (isLimited) { setError("Limite atteinte ! Passez a Pro pour un usage illimite."); return; }
    if (files.length === 0) return;
    setProcessing(true); setError(null); setDownloadUrl(null);
    try {
      const fd = new FormData();
      files.forEach(f => fd.append("files", f));
      const res = await fetch("/api/image-to-pdf", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Erreur");
      const blob = await res.blob();
      setDownloadUrl(URL.createObjectURL(blob));
      recordConversion();
    } catch { setError("Erreur lors de la conversion."); } finally { setProcessing(false); }
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="text-center"><CardTitle className="text-2xl text-gray-800">Images en PDF</CardTitle><p className="text-sm text-gray-500 mt-1">{conversionsLeft} utilisation(s) gratuite(s) restante(s)</p></CardHeader>
      <CardContent className="space-y-6">
        <div onClick={() => inputRef.current?.click()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors">
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
          <p className="text-sm text-gray-600">Glissez vos images ici ou <span className="text-blue-600 font-medium">parcourir</span></p>
          <p className="text-xs text-gray-400">JPG, PNG, WebP acceptes</p>
          <input ref={inputRef} type="file" accept=".jpg,.jpeg,.png,.webp,image/*" multiple onChange={handleFiles} className="hidden" />
        </div>
        {files.length > 0 && <div className="space-y-1 max-h-40 overflow-y-auto">
          {files.map((f, i) => (<div key={i} className="flex items-center justify-between p-2 bg-blue-50 rounded text-sm">
            <div className="flex items-center gap-2 min-w-0"><ImageIcon className="h-4 w-4 text-blue-500 shrink-0" /><span className="truncate text-blue-800">{f.name}</span></div>
            <button onClick={() => removeFile(i)} className="text-blue-400 hover:text-red-500"><X className="h-4 w-4" /></button>
          </div>))}
        </div>}
        {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg"><p className="text-sm text-red-800">{error}</p>{isLimited && <a href="/pricing" className="text-sm text-blue-600 font-medium hover:underline mt-1 inline-block">Voir les offres Pro &rarr;</a>}</div>}
        <div className="flex gap-4">
          <Button onClick={handleConvert} disabled={files.length === 0 || processing} className="flex-1">{processing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Conversion...</> : `Convertir en PDF (${files.length})`}</Button>
          {downloadUrl && <Button onClick={() => { const a = document.createElement("a"); a.href = downloadUrl; a.download = "images.pdf"; a.click(); }} variant="outline" className="flex-1"><Download className="mr-2 h-4 w-4" />Telecharger</Button>}
        </div>
        {downloadUrl && <div className="p-3 bg-green-50 border border-green-200 rounded-lg"><p className="text-sm text-green-800">Conversion reussie !</p></div>}
      </CardContent>
    </Card>
  );
}
