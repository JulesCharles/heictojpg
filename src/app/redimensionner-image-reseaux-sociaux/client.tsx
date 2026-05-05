"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Download, Loader2 } from "lucide-react";
import { useConversionLimit } from "@/lib/useConversionLimit";

interface Preset {
  label: string;
  width: number;
  height: number;
}

interface Platform {
  name: string;
  presets: Preset[];
}

const PLATFORMS: Platform[] = [
  {
    name: "Instagram",
    presets: [
      { label: "Post carré", width: 1080, height: 1080 },
      { label: "Portrait", width: 1080, height: 1350 },
      { label: "Story / Reel", width: 1080, height: 1920 },
      { label: "Paysage", width: 1080, height: 566 },
    ],
  },
  {
    name: "Facebook",
    presets: [
      { label: "Post", width: 1200, height: 630 },
      { label: "Couverture", width: 820, height: 312 },
      { label: "Story", width: 1080, height: 1920 },
      { label: "Photo profil", width: 170, height: 170 },
    ],
  },
  {
    name: "LinkedIn",
    presets: [
      { label: "Post", width: 1200, height: 627 },
      { label: "Bannière", width: 1584, height: 396 },
      { label: "Photo profil", width: 400, height: 400 },
    ],
  },
  {
    name: "Twitter / X",
    presets: [
      { label: "Post", width: 1600, height: 900 },
      { label: "Header", width: 1500, height: 500 },
      { label: "Photo profil", width: 400, height: 400 },
    ],
  },
  {
    name: "YouTube",
    presets: [
      { label: "Miniature", width: 1280, height: 720 },
      { label: "Bannière", width: 2560, height: 1440 },
    ],
  },
  {
    name: "TikTok",
    presets: [{ label: "Vidéo", width: 1080, height: 1920 }],
  },
  {
    name: "Pinterest",
    presets: [{ label: "Pin", width: 1000, height: 1500 }],
  },
];

export default function SocialResizeClient() {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<Preset | null>(null);
  const [processing, setProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadName, setDownloadName] = useState("image-resized.jpg");
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { conversionsLeft, recordConversion, isLimited } = useConversionLimit();

  const acceptFile = (f: File) => {
    if (!f.type.startsWith("image/")) {
      setError("Veuillez sélectionner un fichier image (JPG, PNG, WebP…).");
      return;
    }
    setFile(f);
    setError(null);
    setDownloadUrl(null);
    setSelectedPreset(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) acceptFile(f);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) acceptFile(f);
  };

  const handlePreset = async (preset: Preset) => {
    if (!file) {
      setError("Veuillez d'abord choisir une image.");
      return;
    }
    if (isLimited) {
      setError("Limite atteinte ! Passez à Pro pour un usage illimité.");
      return;
    }
    setSelectedPreset(preset);
    setProcessing(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("width", String(preset.width));
      fd.append("height", String(preset.height));

      const res = await fetch("/api/resize", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Erreur serveur");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const ext = file.name.split(".").pop() ?? "jpg";
      setDownloadUrl(url);
      setDownloadName(
        `${file.name.replace(/\.[^.]+$/, "")}-${preset.width}x${preset.height}.${ext}`
      );
      recordConversion();
    } catch {
      setError("Une erreur est survenue lors du redimensionnement.");
      setSelectedPreset(null);
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.download = downloadName;
    a.click();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray-800">
          Redimensionner pour les réseaux sociaux
        </CardTitle>
        <p className="text-sm text-gray-500 mt-1">
          {conversionsLeft} utilisation(s) gratuite(s) restante(s)
        </p>
      </CardHeader>
      <CardContent className="space-y-6">

        {/* Drop zone */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            dragging
              ? "border-blue-400 bg-blue-50"
              : file
              ? "border-green-400 bg-green-50"
              : "border-gray-300 hover:border-blue-400 hover:bg-blue-50"
          }`}
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleInputChange}
          />
          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
          {file ? (
            <p className="text-sm font-medium text-green-800">{file.name}</p>
          ) : (
            <>
              <p className="text-sm font-medium text-gray-700">
                Glissez votre image ici ou cliquez pour choisir
              </p>
              <p className="text-xs text-gray-500 mt-1">JPG, PNG, WebP, HEIC…</p>
            </>
          )}
        </div>

        {/* Preset grid by platform */}
        <div className="space-y-5">
          <p className="text-sm font-medium text-gray-700">
            Choisissez un format prédéfini :
          </p>
          {PLATFORMS.map((platform) => (
            <div key={platform.name}>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {platform.name}
              </p>
              <div className="flex flex-wrap gap-2">
                {platform.presets.map((preset) => {
                  const isActive =
                    selectedPreset?.label === preset.label &&
                    selectedPreset?.width === preset.width &&
                    selectedPreset?.height === preset.height;
                  return (
                    <button
                      key={`${preset.label}-${preset.width}x${preset.height}`}
                      onClick={() => handlePreset(preset)}
                      disabled={processing}
                      className={`px-3 py-2 rounded-lg text-sm border transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        isActive
                          ? "bg-blue-600 border-blue-600 text-white"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300"
                      }`}
                    >
                      <span className="font-medium">{preset.label}</span>
                      <span className="ml-1 text-xs opacity-75">
                        {preset.width}&times;{preset.height}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Processing indicator */}
        {processing && (
          <div className="flex items-center justify-center gap-2 py-3">
            <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
            <span className="text-sm text-gray-600">Redimensionnement en cours…</span>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">{error}</p>
            {isLimited && (
              <a
                href="/pricing"
                className="text-sm text-blue-600 font-medium hover:underline mt-1 inline-block"
              >
                Voir les offres Pro &rarr;
              </a>
            )}
          </div>
        )}

        {/* Success + download */}
        {downloadUrl && (
          <div className="space-y-3">
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800 font-medium">
                Image redimensionnée avec succès !
              </p>
              {selectedPreset && (
                <p className="text-xs text-green-700 mt-0.5">
                  Format : {selectedPreset.label} — {selectedPreset.width}&times;
                  {selectedPreset.height} px
                </p>
              )}
            </div>
            <Button onClick={handleDownload} className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Télécharger l&apos;image
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
