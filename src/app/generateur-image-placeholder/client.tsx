"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const PRESETS = [
  { label: "1920x1080", w: 1920, h: 1080 },
  { label: "1280x720", w: 1280, h: 720 },
  { label: "800x600", w: 800, h: 600 },
  { label: "400x300", w: 400, h: 300 },
  { label: "150x150", w: 150, h: 150 },
];

export default function PlaceholderClient() {
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [bgColor, setBgColor] = useState("#CCCCCC");
  const [textColor, setTextColor] = useState("#969696");
  const [text, setText] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const displayText = text || `${width}x${height}`;

  const generateImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d")!;

    // Fill background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, width, height);

    // Auto-scale font size
    const fontSize = Math.max(12, Math.min(width, height) / 8);
    ctx.font = `bold ${fontSize}px Arial, sans-serif`;
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(displayText, width / 2, height / 2);
  }, [width, height, bgColor, textColor, displayText]);

  useEffect(() => {
    generateImage();
  }, [generateImage]);

  const handleDownload = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `placeholder-${width}x${height}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  }, [width, height]);

  const applyPreset = useCallback((w: number, h: number) => {
    setWidth(w);
    setHeight(h);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Generateur d'images placeholder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-sm font-medium mb-2">Presets rapides</Label>
          <div className="flex flex-wrap gap-2 mt-1">
            {PRESETS.map((p) => (
              <Button
                key={p.label}
                variant="outline"
                size="sm"
                onClick={() => applyPreset(p.w, p.h)}
                className={width === p.w && height === p.h ? "border-blue-500 bg-blue-50" : ""}
              >
                {p.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-sm font-medium">Largeur (px)</Label>
            <Input
              type="number"
              min="1"
              max="4096"
              value={width}
              onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
            />
          </div>
          <div className="space-y-1">
            <Label className="text-sm font-medium">Hauteur (px)</Label>
            <Input
              type="number"
              min="1"
              max="4096"
              value={height}
              onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-sm font-medium">Couleur de fond</Label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="w-10 h-9 rounded border cursor-pointer"
              />
              <Input
                type="text"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label className="text-sm font-medium">Couleur du texte</Label>
            <div className="flex gap-2 items-center">
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-10 h-9 rounded border cursor-pointer"
              />
              <Input
                type="text"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-sm font-medium">Texte personnalise (optionnel)</Label>
          <Input
            type="text"
            placeholder={`${width}x${height}`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="border rounded-lg overflow-hidden bg-gray-50 p-2">
          <canvas
            ref={canvasRef}
            className="max-w-full h-auto mx-auto block"
          />
        </div>

        <Button onClick={handleDownload} size="lg" className="w-full">
          Telecharger en PNG
        </Button>
      </CardContent>
    </Card>
  );
}
