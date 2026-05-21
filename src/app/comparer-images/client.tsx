"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";

export default function CompareClient() {
  const [imageA, setImageA] = useState<string | null>(null);
  const [imageB, setImageB] = useState<string | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleFileA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageA(url);
    }
  };

  const handleFileB = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageB(url);
    }
  };

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  }, [updateSliderPosition]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        updateSliderPosition(e.clientX);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging) {
        updateSliderPosition(e.touches[0].clientX);
      }
    };
    const handleEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleEnd);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, updateSliderPosition]);

  const reset = () => {
    if (imageA) URL.revokeObjectURL(imageA);
    if (imageB) URL.revokeObjectURL(imageB);
    setImageA(null);
    setImageB(null);
    setSliderPosition(50);
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Comparer deux images</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload zone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500 font-medium">{imageA ? "Image Avant chargee" : "Image Avant"}</span>
              <span className="text-xs text-gray-400 mt-1">Cliquez pour choisir</span>
              <input type="file" accept="image/*" onChange={handleFileA} className="hidden" />
            </label>
          </div>
          <div>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-500 font-medium">{imageB ? "Image Apres chargee" : "Image Apres"}</span>
              <span className="text-xs text-gray-400 mt-1">Cliquez pour choisir</span>
              <input type="file" accept="image/*" onChange={handleFileB} className="hidden" />
            </label>
          </div>
        </div>

        {/* Comparison slider */}
        {imageA && imageB && (
          <div className="space-y-4">
            <div
              ref={containerRef}
              className="relative w-full overflow-hidden rounded-lg border border-gray-200 cursor-col-resize select-none"
              style={{ aspectRatio: "16/10" }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Image B (background, full) */}
              <img
                src={imageB}
                alt="Image apres"
                className="absolute inset-0 w-full h-full object-contain bg-gray-100"
                draggable={false}
              />
              {/* Image A (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={imageA}
                  alt="Image avant"
                  className="w-full h-full object-contain bg-gray-100"
                  style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%", maxWidth: "none" }}
                  draggable={false}
                />
              </div>
              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              >
                {/* Slider handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-gray-300 flex items-center justify-center">
                  <div className="flex gap-0.5">
                    <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
                    <div className="w-0.5 h-4 bg-gray-400 rounded-full" />
                  </div>
                </div>
                {/* Percentage label */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {Math.round(sliderPosition)}%
                </div>
              </div>
              {/* Labels */}
              <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Avant</div>
              <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">Apres</div>
            </div>

            <div className="flex justify-center">
              <Button variant="outline" onClick={reset}>Reinitialiser</Button>
            </div>
          </div>
        )}

        {(!imageA || !imageB) && (
          <p className="text-sm text-gray-400 text-center">Chargez les deux images pour activer la comparaison avec le curseur.</p>
        )}
      </CardContent>
    </Card>
  );
}
