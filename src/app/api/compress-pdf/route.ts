import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const originalSize = bytes.byteLength;

    // Load and re-save with optimizations
    const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });

    // Remove metadata to reduce size
    pdf.setTitle("");
    pdf.setAuthor("");
    pdf.setSubject("");
    pdf.setKeywords([]);
    pdf.setProducer("");
    pdf.setCreator("");

    const pdfBytes = await pdf.save({
      useObjectStreams: true,
      addDefaultPage: false,
    });

    const reduction = Math.round((1 - pdfBytes.length / originalSize) * 100);
    const originalName = file.name.replace(/\.pdf$/i, "");

    return new NextResponse(pdfBytes as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${originalName}-compresse.pdf"`,
        "Content-Length": pdfBytes.length.toString(),
        "X-Original-Size": originalSize.toString(),
        "X-Compressed-Size": pdfBytes.length.toString(),
        "X-Reduction": `${Math.max(0, reduction)}%`,
      },
    });
  } catch (error) {
    console.error("Erreur compression PDF:", error);
    return NextResponse.json({ error: "Erreur lors de la compression du PDF" }, { status: 500 });
  }
}
