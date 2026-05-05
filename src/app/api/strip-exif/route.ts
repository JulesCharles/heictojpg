import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const metadata = await sharp(buffer).metadata();

    // Re-encode without metadata
    let outputBuffer: Buffer;
    let contentType: string;

    if (metadata.format === "png") {
      outputBuffer = await sharp(buffer).png().toBuffer();
      contentType = "image/png";
    } else if (metadata.format === "webp") {
      outputBuffer = await sharp(buffer).webp({ quality: 92 }).toBuffer();
      contentType = "image/webp";
    } else {
      outputBuffer = await sharp(buffer).jpeg({ quality: 92 }).toBuffer();
      contentType = "image/jpeg";
    }

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="clean-${file.name}"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur suppression EXIF:", error);
    return NextResponse.json({ error: "Erreur lors de la suppression des metadonnees" }, { status: 500 });
  }
}
