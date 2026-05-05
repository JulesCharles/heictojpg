import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
import JSZip from "jszip";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    const pageCount = pdf.getPageCount();

    if (pageCount < 2) {
      return NextResponse.json({ error: "Le PDF doit contenir au moins 2 pages" }, { status: 400 });
    }

    const zip = new JSZip();

    for (let i = 0; i < pageCount; i++) {
      const newPdf = await PDFDocument.create();
      const [page] = await newPdf.copyPages(pdf, [i]);
      newPdf.addPage(page);
      const pageBytes = await newPdf.save();
      zip.file(`page-${i + 1}.pdf`, pageBytes);
    }

    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });
    const originalName = file.name.replace(/\.pdf$/i, "");

    return new NextResponse(zipBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${originalName}-pages.zip"`,
        "Content-Length": zipBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur division PDF:", error);
    return NextResponse.json({ error: "Erreur lors de la division du PDF" }, { status: 500 });
  }
}
