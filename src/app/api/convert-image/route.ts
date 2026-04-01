import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

const ALLOWED_INPUTS = ["image/png", "image/jpeg", "image/webp", "image/jpg"];
const ALLOWED_OUTPUTS = ["jpg", "png", "webp"] as const;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const outputFormat = formData.get("format") as string;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    if (!ALLOWED_OUTPUTS.includes(outputFormat as any)) {
      return NextResponse.json({ error: "Format de sortie invalide" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let sharpInstance = sharp(buffer);

    let outputBuffer: Buffer;
    let contentType: string;
    let extension: string;

    switch (outputFormat) {
      case "jpg":
        outputBuffer = await sharpInstance.jpeg({ quality: 90 }).toBuffer();
        contentType = "image/jpeg";
        extension = ".jpg";
        break;
      case "png":
        outputBuffer = await sharpInstance.png({ compressionLevel: 6 }).toBuffer();
        contentType = "image/png";
        extension = ".png";
        break;
      case "webp":
        outputBuffer = await sharpInstance.webp({ quality: 85 }).toBuffer();
        contentType = "image/webp";
        extension = ".webp";
        break;
      default:
        return NextResponse.json({ error: "Format non supporté" }, { status: 400 });
    }

    const originalName = file.name.replace(/\.[^/.]+$/, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${originalName}${extension}"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur de conversion:", error);
    return NextResponse.json({ error: "Erreur lors de la conversion de l'image" }, { status: 500 });
  }
}
