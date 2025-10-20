import { NextRequest, NextResponse } from "next/server";
import convert from "heic-convert";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "Aucun fichier fourni" },
        { status: 400 }
      );
    }

    if (!file.type.includes("heic") && !file.name.toLowerCase().endsWith(".heic")) {
      return NextResponse.json(
        { error: "Le fichier doit être au format HEIC" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert HEIC to JPEG
    const jpegBuffer = await convert({
      buffer: buffer,
      format: "JPEG",
      quality: 0.9, // 0.9 = 90% quality
    });

    return new NextResponse(jpegBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": `attachment; filename="${file.name.replace(/\.heic$/i, ".jpg")}"`,
        "Content-Length": jpegBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur de conversion:", error);
    return NextResponse.json(
      { error: "Erreur lors de la conversion de l'image" },
      { status: 500 }
    );
  }
}