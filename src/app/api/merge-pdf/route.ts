import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];

    if (files.length < 2) {
      return NextResponse.json({ error: "Au moins 2 fichiers PDF requis" }, { status: 400 });
    }

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const pdf = await PDFDocument.load(bytes);
      const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      pages.forEach((page) => mergedPdf.addPage(page));
    }

    const pdfBytes = await mergedPdf.save();

    return new NextResponse(pdfBytes as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="fusionne.pdf"',
        "Content-Length": pdfBytes.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur fusion PDF:", error);
    return NextResponse.json({ error: "Erreur lors de la fusion des PDF" }, { status: 500 });
  }
}
