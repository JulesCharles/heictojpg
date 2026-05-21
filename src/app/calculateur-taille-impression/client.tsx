"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowRightLeft } from "lucide-react";

type Mode = "px-to-cm" | "cm-to-px";

const COMMON_SIZES = [
  { name: "10 x 15 cm", wCm: 10, hCm: 15 },
  { name: "13 x 18 cm", wCm: 13, hCm: 18 },
  { name: "20 x 30 cm", wCm: 20, hCm: 30 },
  { name: "A4 (21 x 29.7 cm)", wCm: 21, hCm: 29.7 },
  { name: "A3 (29.7 x 42 cm)", wCm: 29.7, hCm: 42 },
];

function round(n: number, d = 2) {
  return Math.round(n * 10 ** d) / 10 ** d;
}

export default function PrintSizeCalculator() {
  const [mode, setMode] = useState<Mode>("px-to-cm");
  const [widthPx, setWidthPx] = useState("3000");
  const [heightPx, setHeightPx] = useState("2000");
  const [widthCm, setWidthCm] = useState("21");
  const [heightCm, setHeightCm] = useState("29.7");
  const [dpi, setDpi] = useState("300");

  const dpiNum = parseFloat(dpi) || 0;

  const result = useMemo(() => {
    if (dpiNum <= 0) return null;

    if (mode === "px-to-cm") {
      const wp = parseFloat(widthPx) || 0;
      const hp = parseFloat(heightPx) || 0;
      if (wp <= 0 || hp <= 0) return null;
      return {
        widthCm: round((wp / dpiNum) * 2.54),
        heightCm: round((hp / dpiNum) * 2.54),
        widthIn: round(wp / dpiNum),
        heightIn: round(hp / dpiNum),
      };
    } else {
      const wc = parseFloat(widthCm) || 0;
      const hc = parseFloat(heightCm) || 0;
      if (wc <= 0 || hc <= 0) return null;
      return {
        widthPx: Math.ceil((wc / 2.54) * dpiNum),
        heightPx: Math.ceil((hc / 2.54) * dpiNum),
        widthIn: round(wc / 2.54),
        heightIn: round(hc / 2.54),
      };
    }
  }, [mode, widthPx, heightPx, widthCm, heightCm, dpiNum]);

  const commonSizesTable = useMemo(() => {
    if (dpiNum <= 0) return [];
    return COMMON_SIZES.map((s) => ({
      ...s,
      wPx: Math.ceil((s.wCm / 2.54) * dpiNum),
      hPx: Math.ceil((s.hCm / 2.54) * dpiNum),
    }));
  }, [dpiNum]);

  const lowDpi = dpiNum > 0 && dpiNum < 150;

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Card className="w-full shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-gray-800">
            Calculateur de taille d&apos;impression
          </CardTitle>
          <p className="text-sm text-gray-500 mt-1">
            Convertissez entre pixels, centimetres et pouces selon la resolution DPI
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Mode toggle */}
          <div className="flex gap-2">
            <Button
              variant={mode === "px-to-cm" ? "default" : "outline"}
              onClick={() => setMode("px-to-cm")}
              className="flex-1"
            >
              Pixels &rarr; CM
            </Button>
            <Button
              variant={mode === "cm-to-px" ? "default" : "outline"}
              onClick={() => setMode("cm-to-px")}
              className="flex-1"
            >
              CM &rarr; Pixels
            </Button>
          </div>

          {/* DPI input */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Resolution (DPI)</Label>
            <Input
              type="number"
              min="1"
              value={dpi}
              onChange={(e) => setDpi(e.target.value)}
              placeholder="300"
            />
            {lowDpi && (
              <div className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                <p className="text-sm text-amber-800">
                  Qualite insuffisante pour l&apos;impression. Un minimum de 150 DPI est recommande, idealement 300 DPI.
                </p>
              </div>
            )}
          </div>

          {mode === "px-to-cm" ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Largeur (pixels)</Label>
                <Input
                  type="number"
                  min="1"
                  value={widthPx}
                  onChange={(e) => setWidthPx(e.target.value)}
                  placeholder="3000"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Hauteur (pixels)</Label>
                <Input
                  type="number"
                  min="1"
                  value={heightPx}
                  onChange={(e) => setHeightPx(e.target.value)}
                  placeholder="2000"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Largeur (cm)</Label>
                <Input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={widthCm}
                  onChange={(e) => setWidthCm(e.target.value)}
                  placeholder="21"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm font-medium">Hauteur (cm)</Label>
                <Input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  placeholder="29.7"
                />
              </div>
            </div>
          )}

          {/* Results */}
          {result && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRightLeft className="h-4 w-4 text-blue-600" />
                <p className="font-semibold text-blue-800">Resultat</p>
              </div>
              {mode === "px-to-cm" && "widthCm" in result && (
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Largeur</p>
                    <p className="font-medium text-gray-800">{result.widthCm} cm ({result.widthIn} pouces)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Hauteur</p>
                    <p className="font-medium text-gray-800">{result.heightCm} cm ({result.heightIn} pouces)</p>
                  </div>
                </div>
              )}
              {mode === "cm-to-px" && "widthPx" in result && (
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-500">Largeur</p>
                    <p className="font-medium text-gray-800">{result.widthPx} px ({result.widthIn} pouces)</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Hauteur</p>
                    <p className="font-medium text-gray-800">{result.heightPx} px ({result.heightIn} pouces)</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Common print sizes table */}
      <Card className="w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-gray-800">
            Tailles d&apos;impression courantes a {dpiNum > 0 ? dpiNum : 300} DPI
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-medium text-gray-600">Format</th>
                  <th className="text-right py-2 px-4 font-medium text-gray-600">Largeur (px)</th>
                  <th className="text-right py-2 pl-4 font-medium text-gray-600">Hauteur (px)</th>
                </tr>
              </thead>
              <tbody>
                {commonSizesTable.map((s) => (
                  <tr key={s.name} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-2 pr-4 text-gray-800">{s.name}</td>
                    <td className="py-2 px-4 text-right font-mono text-gray-700">{s.wPx}</td>
                    <td className="py-2 pl-4 text-right font-mono text-gray-700">{s.hPx}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
