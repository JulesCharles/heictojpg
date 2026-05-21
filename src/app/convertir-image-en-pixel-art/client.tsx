"use client";
import { useState, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function PixelArtClient() {
  const [pixelSize, setPixelSize] = useState(16);
  const [imageName, setImageName] = useState<string | null>(null);
  const [hasResult, setHasResult] = useState(false);
  const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);
  const visibleCanvasRef = useRef<HTMLCanvasElement>(null);
  const sourceImageRef = useRef<HTMLImageElement | null>(null);

  const processImage = useCallback((img: HTMLImageElement, size: number) => {
    const hiddenCanvas = hiddenCanvasRef.current;
    const visibleCanvas = visibleCanvasRef.current;
    if (!hiddenCanvas || !visibleCanvas) return;

    const w = img.naturalWidth;
    const h = img.naturalHeight;

    // Step 1: draw scaled-down version on hidden canvas
    const smallW = Math.ceil(w / size);
    const smallH = Math.ceil(h / size);
    hiddenCanvas.width = smallW;
    hiddenCanvas.height = smallH;
    const hCtx = hiddenCanvas.getContext("2d")!;
    hCtx.imageSmoothingEnabled = true;
    hCtx.drawImage(img, 0, 0, smallW, smallH);

    // Step 2: scale back up with nearest neighbor on visible canvas
    visibleCanvas.width = w;
    visibleCanvas.height = h;
    const vCtx = visibleCanvas.getContext("2d")!;
    vCtx.imageSmoothingEnabled = false;
    vCtx.drawImage(hiddenCanvas, 0, 0, smallW, smallH, 0, 0, w, h);

    setHasResult(true);
  }, []);

  const handleFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageName(file.name);
    const img = new Image();
    img.onload = () => {
      sourceImageRef.current = img;
      processImage(img, pixelSize);
    };
    img.src = URL.createObjectURL(file);
  }, [pixelSize, processImage]);

  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const size = Number(e.target.value);
    setPixelSize(size);
    if (sourceImageRef.current) {
      processImage(sourceImageRef.current, size);
    }
  }, [processImage]);

  const handleDownload = useCallback(() => {
    const canvas = visibleCanvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const baseName = imageName ? imageName.replace(/\.[^.]+$/, "") : "pixel-art";
      a.download = `${baseName}-pixel-art.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  }, [imageName]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Convertir une image en Pixel Art</CardTitle>
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
          <Label className="text-sm font-medium">Taille des pixels : {pixelSize}px</Label>
          <input
            type="range"
            min="4"
            max="64"
            value={pixelSize}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>Fin (4px)</span>
            <span>Gros (64px)</span>
          </div>
        </div>

        <canvas ref={hiddenCanvasRef} className="hidden" />

        {hasResult && (
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden bg-gray-50 p-2">
              <canvas
                ref={visibleCanvasRef}
                className="max-w-full h-auto mx-auto block"
              />
            </div>
            <Button onClick={handleDownload} size="lg" className="w-full">
              Telecharger le Pixel Art
            </Button>
          </div>
        )}

        {!hasResult && (
          <canvas ref={visibleCanvasRef} className="hidden" />
        )}
      </CardContent>
    </Card>
  );
}
