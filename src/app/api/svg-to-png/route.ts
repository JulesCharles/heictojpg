import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const scale = parseInt(formData.get("scale") as string) || 2;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    if (!file.name.toLowerCase().endsWith(".svg") && file.type !== "image/svg+xml") {
      return NextResponse.json({ error: "Le fichier doit etre au format SVG" }, { status: 400 });
    }

    const width = parseInt(formData.get("width") as string) || 0;
    const height = parseInt(formData.get("height") as string) || 0;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    let pipeline = sharp(buffer, { density: 72 * scale }).png();

    if (width > 0 || height > 0) {
      pipeline = pipeline.resize(width || undefined, height || undefined, { fit: "inside" });
    }

    const outputBuffer = await pipeline.toBuffer();

    const originalName = file.name.replace(/\.svg$/i, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `attachment; filename="${originalName}.png"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur de conversion SVG:", error);
    return NextResponse.json({ error: "Erreur lors de la conversion SVG" }, { status: 500 });
  }
}
