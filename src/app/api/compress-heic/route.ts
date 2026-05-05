import { NextRequest, NextResponse } from "next/server";
import convert from "heic-convert";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const quality = parseInt(formData.get("quality") as string) || 60;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    if (!file.type.includes("heic") && !file.name.toLowerCase().endsWith(".heic")) {
      return NextResponse.json({ error: "Le fichier doit etre au format HEIC" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const originalSize = buffer.length;

    // Convert HEIC to PNG (lossless intermediate)
    const rawBuffer = await convert({
      buffer: buffer,
      format: "PNG",
      quality: 1,
    });

    // Re-encode as JPEG with reduced quality, then back to HEIF
    // Since we can't output HEIC from sharp on most systems,
    // we output as AVIF (same HEIF container family, best compression)
    let outputBuffer: Buffer;
    let extension: string;
    let contentType: string;

    try {
      // Try AVIF first (HEIF family, best compression)
      outputBuffer = await sharp(Buffer.from(rawBuffer))
        .avif({ quality: Math.min(quality, 80) })
        .toBuffer();
      extension = ".avif";
      contentType = "image/avif";
    } catch {
      // Fallback to JPEG with aggressive compression
      outputBuffer = await sharp(Buffer.from(rawBuffer))
        .jpeg({ quality, mozjpeg: true })
        .toBuffer();
      extension = ".jpg";
      contentType = "image/jpeg";
    }

    const reduction = Math.round((1 - outputBuffer.length / originalSize) * 100);
    const originalName = file.name.replace(/\.heic$/i, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${originalName}-compresse${extension}"`,
        "Content-Length": outputBuffer.length.toString(),
        "X-Original-Size": originalSize.toString(),
        "X-Compressed-Size": outputBuffer.length.toString(),
        "X-Reduction": `${reduction}%`,
      },
    });
  } catch (error) {
    console.error("Erreur de compression HEIC:", error);
    return NextResponse.json({ error: "Erreur lors de la compression" }, { status: 500 });
  }
}
