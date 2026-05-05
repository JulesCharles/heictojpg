import { NextRequest, NextResponse } from "next/server";
import convert from "heic-convert";
import sharp from "sharp";
import toIco from "to-ico";

const ICO_SIZES = [16, 32, 48, 64, 128, 256];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    if (!file.type.includes("heic") && !file.name.toLowerCase().endsWith(".heic")) {
      return NextResponse.json({ error: "Le fichier doit etre au format HEIC" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert HEIC to PNG (lossless)
    const rawBuffer = await convert({
      buffer: buffer,
      format: "PNG",
      quality: 1,
    });

    // Generate PNG buffers at each ICO size
    const pngBuffers = await Promise.all(
      ICO_SIZES.map((size) =>
        sharp(Buffer.from(rawBuffer))
          .resize(size, size, { fit: "cover" })
          .png()
          .toBuffer()
      )
    );

    // Create ICO from PNG buffers
    const icoBuffer = await toIco(pngBuffers);
    const originalName = file.name.replace(/\.heic$/i, "");

    return new NextResponse(Buffer.from(icoBuffer) as any, {
      status: 200,
      headers: {
        "Content-Type": "image/x-icon",
        "Content-Disposition": `attachment; filename="${originalName}.ico"`,
        "Content-Length": icoBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur de conversion HEIC en ICO:", error);
    return NextResponse.json({ error: "Erreur lors de la conversion en ICO" }, { status: 500 });
  }
}
