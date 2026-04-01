import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const quality = parseInt(formData.get("quality") as string) || 75;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const metadata = await sharp(buffer).metadata();
    let outputBuffer: Buffer;
    let contentType: string;

    switch (metadata.format) {
      case "png":
        outputBuffer = await sharp(buffer).png({ quality: Math.min(quality, 100) }).toBuffer();
        contentType = "image/png";
        break;
      case "webp":
        outputBuffer = await sharp(buffer).webp({ quality }).toBuffer();
        contentType = "image/webp";
        break;
      default:
        outputBuffer = await sharp(buffer).jpeg({ quality }).toBuffer();
        contentType = "image/jpeg";
        break;
    }

    const reduction = Math.round((1 - outputBuffer.length / buffer.length) * 100);

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="compressed-${file.name}"`,
        "Content-Length": outputBuffer.length.toString(),
        "X-Original-Size": buffer.length.toString(),
        "X-Compressed-Size": outputBuffer.length.toString(),
        "X-Reduction": `${reduction}%`,
      },
    });
  } catch (error) {
    console.error("Erreur de compression:", error);
    return NextResponse.json({ error: "Erreur lors de la compression de l'image" }, { status: 500 });
  }
}
