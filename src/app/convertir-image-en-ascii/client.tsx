"use client";
import { useState, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ASCII_CHARS = " .:-=+*#%@";

export default function AsciiClient() {
  const [charWidth, setCharWidth] = useState(100);
  const [asciiResult, setAsciiResult] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sourceImageRef = useRef<HTMLImageElement | null>(null);

  const processImage = useCallback((img: HTMLImageElement, width: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const aspect = img.naturalHeight / img.naturalWidth;
    const targetWidth = width;
    // Characters are roughly 2x taller than wide, so halve the height
    const targetHeight = Math.round(targetWidth * aspect / 2);

    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

    const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight);
    const pixels = imageData.data;

    let ascii = "";
    for (let y = 0; y < targetHeight; y++) {
      let line = "";
      for (let x = 0; x < targetWidth; x++) {
        const i = (y * targetWidth + x) * 4;
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        // Luminance
        const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
        const charIndex = Math.floor((brightness / 255) * (ASCII_CHARS.length - 1));
        line += ASCII_CHARS[charIndex];
      }
      ascii += line + "\n";
    }

    setAsciiResult(ascii);
  }, []);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      sourceImageRef.current = img;
      processImage(img, charWidth);
    };
    img.src = URL.createObjectURL(file);
  }, [charWidth, processImage]);

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const width = Number(e.target.value);
    setCharWidth(width);
    if (sourceImageRef.current) {
      processImage(sourceImageRef.current, width);
    }
  }, [processImage]);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(asciiResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [asciiResult]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([asciiResult], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ascii-art.txt";
    a.click();
    URL.revokeObjectURL(url);
  }, [asciiResult]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convertir une image en ASCII Art</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-sm font-medium mb-2">Choisir une image</Label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Largeur en caracteres : {charWidth}</Label>
          <input
            type="range"
            min="40"
            max="200"
            value={charWidth}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Petit (40)</span>
            <span>Large (200)</span>
          </div>
        </div>

        <canvas ref={canvasRef} className="hidden" />

        {asciiResult && (
          <div className="space-y-4">
            <div className="bg-gray-900 rounded-lg p-4 overflow-auto max-h-[600px]">
              <pre className="text-green-400 text-[6px] leading-[7px] sm:text-[8px] sm:leading-[9px] font-mono whitespace-pre">{asciiResult}</pre>
            </div>
            <div className="flex gap-3">
              <Button onClick={handleCopy} variant="outline" size="lg" className="flex-1">
                {copied ? "Copie !" : "Copier le texte"}
              </Button>
              <Button onClick={handleDownload} size="lg" className="flex-1">
                Telecharger en .txt
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
