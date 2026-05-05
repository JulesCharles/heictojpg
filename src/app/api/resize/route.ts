import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const width = parseInt(formData.get("width") as string) || undefined;
    const height = parseInt(formData.get("height") as string) || undefined;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    if (!width && !height) {
      return NextResponse.json({ error: "Largeur ou hauteur requise" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const metadata = await sharp(buffer).metadata();
    const outputBuffer = await sharp(buffer)
      .resize(width, height, { fit: "inside", withoutEnlargement: true })
      .toBuffer();

    const ext = metadata.format === "png" ? "png" : metadata.format === "webp" ? "webp" : "jpg";
    const contentType = metadata.format === "png" ? "image/png" : metadata.format === "webp" ? "image/webp" : "image/jpeg";
    const originalName = file.name.replace(/\.[^/.]+$/, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${originalName}-${width || "auto"}x${height || "auto"}.${ext}"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur de redimensionnement:", error);
    return NextResponse.json({ error: "Erreur lors du redimensionnement" }, { status: 500 });
  }
}
