import { NextRequest, NextResponse } from "next/server";
import convert from "heic-convert";
import sharp from "sharp";

const SUPPORTED_FORMATS = ["jpg", "png", "webp", "tiff", "gif", "avif"] as const;
type OutputFormat = (typeof SUPPORTED_FORMATS)[number];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const format = (formData.get("format") as string) || "jpg";

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    if (!file.type.includes("heic") && !file.name.toLowerCase().endsWith(".heic")) {
      return NextResponse.json({ error: "Le fichier doit etre au format HEIC" }, { status: 400 });
    }

    if (!SUPPORTED_FORMATS.includes(format as OutputFormat)) {
      return NextResponse.json({ error: "Format de sortie invalide" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert HEIC to PNG buffer (lossless intermediate)
    const rawBuffer = await convert({
      buffer: buffer,
      format: "PNG",
      quality: 1,
    });

    const sharpInput = sharp(Buffer.from(rawBuffer));
    let outputBuffer: Buffer;
    let contentType: string;
    let extension: string;

    switch (format) {
      case "jpg":
        outputBuffer = await sharpInput.flatten({ background: { r: 255, g: 255, b: 255 } }).jpeg({ quality: 92 }).toBuffer();
        contentType = "image/jpeg";
        extension = ".jpg";
        break;
      case "png":
        outputBuffer = await sharpInput.png({ compressionLevel: 6 }).toBuffer();
        contentType = "image/png";
        extension = ".png";
        break;
      case "webp":
        outputBuffer = await sharpInput.webp({ quality: 90 }).toBuffer();
        contentType = "image/webp";
        extension = ".webp";
        break;
      case "tiff":
        outputBuffer = await sharpInput.tiff({ quality: 95 }).toBuffer();
        contentType = "image/tiff";
        extension = ".tiff";
        break;
      case "gif":
        outputBuffer = await sharpInput.gif().toBuffer();
        contentType = "image/gif";
        extension = ".gif";
        break;
      case "avif":
        outputBuffer = await sharpInput.avif({ quality: 80 }).toBuffer();
        contentType = "image/avif";
        extension = ".avif";
        break;
      default:
        outputBuffer = await sharpInput.jpeg({ quality: 92 }).toBuffer();
        contentType = "image/jpeg";
        extension = ".jpg";
    }

    const originalName = file.name.replace(/\.heic$/i, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${originalName}${extension}"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur de conversion HEIC:", error);
    return NextResponse.json({ error: "Erreur lors de la conversion du fichier HEIC" }, { status: 500 });
  }
}
