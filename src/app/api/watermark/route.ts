import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const text = formData.get("text") as string || "heictojpg.fr";
    const opacity = parseFloat(formData.get("opacity") as string) || 0.3;
    const position = (formData.get("position") as string) || "center";

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const metadata = await sharp(buffer).metadata();
    const imgWidth = metadata.width || 800;
    const imgHeight = metadata.height || 600;

    const fontSize = Math.max(16, Math.min(Math.floor(imgWidth / 15), 80));

    // Create SVG watermark
    const svgWatermark = Buffer.from(`
      <svg width="${imgWidth}" height="${imgHeight}">
        <style>
          .watermark {
            fill: rgba(255,255,255,${opacity});
            font-size: ${fontSize}px;
            font-family: Arial, sans-serif;
            font-weight: bold;
          }
        </style>
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" class="watermark">${text}</text>
      </svg>
    `);

    const outputBuffer = await sharp(buffer)
      .composite([{ input: svgWatermark, gravity: position as any }])
      .jpeg({ quality: 92 })
      .toBuffer();

    const originalName = file.name.replace(/\.[^/.]+$/, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": `attachment; filename="${originalName}-watermark.jpg"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur filigrane:", error);
    return NextResponse.json({ error: "Erreur lors de l'ajout du filigrane" }, { status: 500 });
  }
}
