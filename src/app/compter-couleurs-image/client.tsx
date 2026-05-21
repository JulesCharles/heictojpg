"use client";
import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload, Loader2, Palette } from "lucide-react";

interface ColorEntry {
  hex: string;
  r: number;
  g: number;
  b: number;
  count: number;
  percentage: number;
}

function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b].map((c) => c.toString(16).padStart(2, "0")).join("").toUpperCase()
  );
}

function groupWithTolerance(
  colorMap: Map<string, number>,
  tolerance: number,
  totalPixels: number
): { exact: number; grouped: number; topColors: ColorEntry[] } {
  const exact = colorMap.size;

  if (tolerance === 0) {
    const sorted = [...colorMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    const topColors: ColorEntry[] = sorted.map(([key, count]) => {
      const [r, g, b] = key.split(",").map(Number);
      return {
        hex: rgbToHex(r, g, b),
        r,
        g,
        b,
        count,
        percentage: (count / totalPixels) * 100,
      };
    });
    return { exact, grouped: exact, topColors };
  }

  // Group similar colors using tolerance
  const entries = [...colorMap.entries()]
    .map(([key, count]) => {
      const [r, g, b] = key.split(",").map(Number);
      return { r, g, b, count };
    })
    .sort((a, b) => b.count - a.count);

  const groups: { r: number; g: number; b: number; count: number }[] = [];
  const assigned = new Array(entries.length).fill(false);

  for (let i = 0; i < entries.length; i++) {
    if (assigned[i]) continue;
    const group = { ...entries[i] };
    assigned[i] = true;
    for (let j = i + 1; j < entries.length; j++) {
      if (assigned[j]) continue;
      const dr = Math.abs(entries[j].r - entries[i].r);
      const dg = Math.abs(entries[j].g - entries[i].g);
      const db = Math.abs(entries[j].b - entries[i].b);
      if (dr <= tolerance && dg <= tolerance && db <= tolerance) {
        group.count += entries[j].count;
        assigned[j] = true;
      }
    }
    groups.push(group);
  }

  groups.sort((a, b) => b.count - a.count);

  const topColors: ColorEntry[] = groups.slice(0, 10).map((g) => ({
    hex: rgbToHex(g.r, g.g, g.b),
    r: g.r,
    g: g.g,
    b: g.b,
    count: g.count,
    percentage: (g.count / totalPixels) * 100,
  }));

  return { exact, grouped: groups.length, topColors };
}

export default function ColorCountClient() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [tolerance, setTolerance] = useState(10);
  const [result, setResult] = useState<{
    exact: number;
    grouped: number;
    topColors: ColorEntry[];
  } | null>(null);
  const [colorMap, setColorMap] = useState<Map<string, number> | null>(null);
  const [totalPixels, setTotalPixels] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const analyzeImage = useCallback(
    (img: HTMLImageElement) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // Limit canvas size to avoid performance issues with very large images
      const maxDim = 1024;
      let w = img.naturalWidth;
      let h = img.naturalHeight;
      if (w > maxDim || h > maxDim) {
        const scale = maxDim / Math.max(w, h);
        w = Math.round(w * scale);
        h = Math.round(h * scale);
      }

      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      ctx.drawImage(img, 0, 0, w, h);
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;
      const total = w * h;
      const map = new Map<string, number>();

      for (let i = 0; i < data.length; i += 4) {
        const key = `${data[i]},${data[i + 1]},${data[i + 2]}`;
        map.set(key, (map.get(key) || 0) + 1);
      }

      setColorMap(map);
      setTotalPixels(total);
      const res = groupWithTolerance(map, tolerance, total);
      setResult(res);
      setLoading(false);
    },
    [tolerance]
  );

  const handleFile = (f: File) => {
    setFile(f);
    setLoading(true);
    setResult(null);
    const url = URL.createObjectURL(f);
    setPreview(url);

    const img = new Image();
    img.onload = () => analyzeImage(img);
    img.src = url;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type.startsWith("image/")) handleFile(f);
  };

  const recalculate = (newTolerance: number) => {
    setTolerance(newTolerance);
    if (colorMap && totalPixels > 0) {
      const res = groupWithTolerance(colorMap, newTolerance, totalPixels);
      setResult(res);
    }
  };

  return (
    <div className="space-y-6">
      <canvas ref={canvasRef} className="hidden" />

      {!file && (
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
        >
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <p className="text-gray-600 font-medium mb-1">
            Glissez une image ici ou cliquez pour parcourir
          </p>
          <p className="text-sm text-gray-400">
            JPG, PNG, WebP, GIF, BMP, TIFF
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
            }}
          />
        </div>
      )}

      {file && (
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
          <span className="text-sm text-gray-700 truncate">{file.name}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setFile(null);
              setPreview(null);
              setResult(null);
              setColorMap(null);
              setTotalPixels(0);
              if (inputRef.current) inputRef.current.value = "";
            }}
          >
            Changer d&apos;image
          </Button>
        </div>
      )}

      {preview && (
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="Apercu"
            className="max-h-64 rounded-lg shadow-sm"
          />
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center gap-2 py-8">
          <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
          <span className="text-gray-600">Analyse en cours...</span>
        </div>
      )}

      {result && (
        <>
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Tolerance : {tolerance}
            </Label>
            <input
              type="range"
              min={0}
              max={50}
              value={tolerance}
              onChange={(e) => recalculate(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <p className="text-xs text-gray-500">
              0 = couleurs exactes, valeurs plus elevees = regroupement des
              couleurs proches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Couleurs exactes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">
                  {result.exact.toLocaleString("fr-FR")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Couleurs (tolerance {tolerance})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">
                  {result.grouped.toLocaleString("fr-FR")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Color distribution bar */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                Distribution des couleurs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-8 rounded-lg overflow-hidden flex">
                {result.topColors.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: c.hex,
                      width: `${c.percentage}%`,
                      minWidth: result.topColors.length <= 10 ? "2%" : undefined,
                    }}
                    title={`${c.hex} - ${c.percentage.toFixed(1)}%`}
                  />
                ))}
                {result.topColors.reduce((s, c) => s + c.percentage, 0) <
                  100 && (
                  <div
                    className="bg-gray-200"
                    style={{
                      flexGrow: 1,
                    }}
                    title="Autres couleurs"
                  />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Top 10 colors */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">
                Top 10 des couleurs les plus presentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.topColors.map((c, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded border border-gray-200 shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="font-mono text-sm text-gray-700 w-20">
                      {c.hex}
                    </span>
                    <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: c.hex,
                          width: `${Math.max(c.percentage, 1)}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-16 text-right">
                      {c.percentage.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
