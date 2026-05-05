import { NextRequest, NextResponse } from "next/server";
import convert from "heic-convert";
import sharp from "sharp";
import { PDFDocument } from "pdf-lib";

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

    // Convert HEIC to JPEG
    const jpegBuffer = await convert({
      buffer: buffer,
      format: "JPEG",
      quality: 0.92,
    });

    // Get image dimensions
    const metadata = await sharp(Buffer.from(jpegBuffer)).metadata();
    const imgWidth = metadata.width || 800;
    const imgHeight = metadata.height || 600;

    // Create PDF with pdf-lib
    const pdfDoc = await PDFDocument.create();

    // Scale to fit A4 while maintaining aspect ratio
    const maxWidth = 595.28;
    const maxHeight = 841.89;
    const ratio = Math.min(maxWidth / imgWidth, maxHeight / imgHeight, 1);
    const pdfWidth = imgWidth * ratio;
    const pdfHeight = imgHeight * ratio;

    const page = pdfDoc.addPage([pdfWidth, pdfHeight]);
    const jpegImage = await pdfDoc.embedJpg(Buffer.from(jpegBuffer));
    page.drawImage(jpegImage, {
      x: 0,
      y: 0,
      width: pdfWidth,
      height: pdfHeight,
    });

    const pdfBytes = await pdfDoc.save();
    const originalName = file.name.replace(/\.heic$/i, "");

    return new NextResponse(pdfBytes as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${originalName}.pdf"`,
        "Content-Length": pdfBytes.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur de conversion HEIC en PDF:", error);
    return NextResponse.json({ error: "Erreur lors de la conversion en PDF" }, { status: 500 });
  }
}
