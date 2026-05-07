import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if (!file) return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });

    const quality = parseInt(formData.get("quality") as string) || 80;
    const format = (formData.get("format") as string) || "webp";
    const maxWidth = parseInt(formData.get("maxWidth") as string) || 0;

    const buffer = Buffer.from(await file.arrayBuffer());
    let pipeline = sharp(buffer);

    if (maxWidth > 0) {
      pipeline = pipeline.resize(maxWidth, undefined, { fit: "inside", withoutEnlargement: true });
    }

    let outputBuffer: Buffer;
    let contentType: string;
    let ext: string;

    switch (format) {
      case "avif":
        outputBuffer = await pipeline.avif({ quality }).toBuffer();
        contentType = "image/avif";
        ext = ".avif";
        break;
      case "jpg":
      case "jpeg":
        outputBuffer = await pipeline.jpeg({ quality }).toBuffer();
        contentType = "image/jpeg";
        ext = ".jpg";
        break;
      default:
        outputBuffer = await pipeline.webp({ quality }).toBuffer();
        contentType = "image/webp";
        ext = ".webp";
    }

    const originalSize = buffer.length;
    const newSize = outputBuffer.length;
    const reduction = Math.round((1 - newSize / originalSize) * 100);

    const originalName = file.name.replace(/\.[^/.]+$/, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${originalName}-optimized${ext}"`,
        "Content-Length": outputBuffer.length.toString(),
        "X-Original-Size": originalSize.toString(),
        "X-New-Size": newSize.toString(),
        "X-Reduction": `${reduction}%`,
      },
    });
  } catch (error) {
    console.error("Erreur optimisation:", error);
    return NextResponse.json({ error: "Erreur lors de l'optimisation" }, { status: 500 });
  }
}
