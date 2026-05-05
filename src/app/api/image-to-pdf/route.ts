import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];

    if (files.length === 0) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const pdfDoc = await PDFDocument.create();

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Convert to JPEG for embedding
      const jpegBuffer = await sharp(buffer)
        .flatten({ background: { r: 255, g: 255, b: 255 } })
        .jpeg({ quality: 92 })
        .toBuffer();

      const metadata = await sharp(buffer).metadata();
      const imgWidth = metadata.width || 800;
      const imgHeight = metadata.height || 600;

      // Scale to A4
      const maxWidth = 595.28;
      const maxHeight = 841.89;
      const ratio = Math.min(maxWidth / imgWidth, maxHeight / imgHeight, 1);
      const pdfWidth = imgWidth * ratio;
      const pdfHeight = imgHeight * ratio;

      const page = pdfDoc.addPage([pdfWidth, pdfHeight]);
      const jpegImage = await pdfDoc.embedJpg(jpegBuffer);
      page.drawImage(jpegImage, { x: 0, y: 0, width: pdfWidth, height: pdfHeight });
    }

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="images.pdf"',
        "Content-Length": pdfBytes.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur conversion image en PDF:", error);
    return NextResponse.json({ error: "Erreur lors de la conversion en PDF" }, { status: 500 });
  }
}
