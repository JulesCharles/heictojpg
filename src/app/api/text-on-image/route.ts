import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if (!file) return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });

    const text = (formData.get("text") as string) || "Texte";
    const fontSize = parseInt(formData.get("fontSize") as string) || 48;
    const color = (formData.get("color") as string) || "#ffffff";
    const xPercent = parseInt(formData.get("x") as string) || 50;
    const yPercent = parseInt(formData.get("y") as string) || 50;

    const buffer = Buffer.from(await file.arrayBuffer());
    const metadata = await sharp(buffer).metadata();
    const width = metadata.width || 800;
    const height = metadata.height || 600;

    const x = Math.round((xPercent / 100) * width);
    const y = Math.round((yPercent / 100) * height);

    // Escape XML special characters in text
    const escapedText = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    const svgText = `<svg width="${width}" height="${height}">
      <text x="${x}" y="${y}" font-size="${fontSize}" fill="${color}" font-weight="bold" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif">${escapedText}</text>
    </svg>`;

    const outputBuffer = await sharp(buffer)
      .composite([{ input: Buffer.from(svgText), top: 0, left: 0 }])
      .jpeg({ quality: 92 })
      .toBuffer();

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": `attachment; filename="texte-${file.name}"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur texte sur image:", error);
    return NextResponse.json({ error: "Erreur lors du traitement" }, { status: 500 });
  }
}
