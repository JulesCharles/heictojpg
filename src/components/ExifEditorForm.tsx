"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Download, Loader2, Info, Trash2, Edit3, Maximize } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

import UpgradePopup from "@/components/UpgradePopup";

type MetadataResult = Record<string, Record<string, string>>;

const ACTIONS = [
  { id: "read", label: "Lire EXIF", icon: Info, desc: "Afficher les metadonnees" },
  { id: "strip", label: "Supprimer EXIF", icon: Trash2, desc: "Retirer toutes les metadonnees" },
  { id: "set-copyright", label: "Ajouter copyright", icon: Edit3, desc: "Definir auteur et copyright" },
  { id: "set-dpi", label: "Changer DPI", icon: Maximize, desc: "Modifier la resolution" },
] as const;

export default function ExifEditorForm() {
  const [file, setFile] = useState<File | null>(null);
  const [action, setAction] = useState<string>("read");
  const [processing, setProcessing] = useState(false);
  const [metadata, setMetadata] = useState<MetadataResult | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copyright, setCopyright] = useState("");
  const [dpi, setDpi] = useState("300");
  const { conversionsLeft, recordConversion, isLimited, totalUsed } = useConversionLimit();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f && f.type.startsWith("image/")) {
      setFile(f);
      setError(null);
      setMetadata(null);
      setDownloadUrl(null);
    } else {
      setError("Veuillez selectionner une image valide.");
    }
  };

  const handleProcess = async () => {
    if (!file) return;

    if (action === "read") {
      setProcessing(true);
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
        setProcessing(false);
      }
      return;
    }

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
      if (action === "set-copyright") formData.append("copyright", copyright);
      if (action === "set-dpi") formData.append("dpi", dpi);

      const response = await fetch("/api/edit-exif", { method: "POST", body: formData });
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
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `edited-${file.name}`;
      a.click();
    }
  };

  return (
    <div className="space-y-6">
      <Card className="w-full max-w-lg mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-gray-800">Editeur de metadonnees EXIF</CardTitle>
          <div className="mt-2">
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Selectionner une image</Label>
            <div className="relative">
              <Input
                type="file"
                accept=".jpg,.jpeg,.png,.webp,.tiff,.heic,image/*"
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

          <div className="space-y-2">
            <Label className="text-sm font-medium">Action</Label>
            <div className="grid grid-cols-2 gap-2">
              {ACTIONS.map((a) => (
                <button
                  key={a.id}
                  onClick={() => { setAction(a.id); setMetadata(null); setDownloadUrl(null); }}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm border transition-colors text-left ${
                    action === a.id
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <a.icon className="h-4 w-4 shrink-0" />
                  <div>
                    <div className="font-medium">{a.label}</div>
                    <div className="text-xs opacity-70">{a.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {action === "set-copyright" && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Copyright / Auteur</Label>
              <Input
                placeholder="ex: Photo par Jean Dupont"
                value={copyright}
                onChange={(e) => setCopyright(e.target.value)}
              />
            </div>
          )}

          {action === "set-dpi" && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Resolution (DPI)</Label>
              <div className="flex gap-2">
                {["72", "150", "300"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setDpi(v)}
                    className={`px-4 py-2 rounded-lg text-sm border ${
                      dpi === v ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600"
                    }`}
                  >
                    {v} DPI
                  </button>
                ))}
                <Input
                  type="number"
                  placeholder="Custom"
                  value={dpi}
                  onChange={(e) => setDpi(e.target.value)}
                  className="w-24"
                />
              </div>
            </div>
          )}

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
              {processing ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Traitement...</> : action === "read" ? "Lire les metadonnees" : "Appliquer"}
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
        <UpgradePopup totalUsed={totalUsed} />
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
                      <span className="text-gray-800 font-medium text-right max-w-[200px] truncate">{value}</span>
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
