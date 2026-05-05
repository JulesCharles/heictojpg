import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts, degrees } from "pdf-lib";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const action = formData.get("action") as string;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes, { ignoreEncryption: true });
    let outputPdf = pdf;
    const originalName = file.name.replace(/\.pdf$/i, "");

    switch (action) {
      case "add-page-numbers": {
        const font = await pdf.embedFont(StandardFonts.Helvetica);
        const pages = pdf.getPages();
        const fontSize = parseInt(formData.get("fontSize") as string) || 12;
        pages.forEach((page, i) => {
          const { width } = page.getSize();
          page.drawText(`${i + 1} / ${pages.length}`, {
            x: width / 2 - 20,
            y: 20,
            size: fontSize,
            font,
            color: rgb(0.4, 0.4, 0.4),
          });
        });
        break;
      }

      case "protect": {
        // pdf-lib doesn't support encryption natively
        // We add a metadata flag and re-save with object streams
        pdf.setTitle(pdf.getTitle() || originalName);
        pdf.setProducer("heictojpg.fr");
        // Note: real password protection requires a different lib
        // For now we just re-save optimized
        break;
      }

      case "remove-pages": {
        const pagesToRemove = (formData.get("pages") as string || "")
          .split(",")
          .map(s => parseInt(s.trim()) - 1)
          .filter(n => !isNaN(n))
          .sort((a, b) => b - a); // Remove from end to avoid index shifting

        for (const pageIndex of pagesToRemove) {
          if (pageIndex >= 0 && pageIndex < pdf.getPageCount()) {
            pdf.removePage(pageIndex);
          }
        }
        break;
      }

      case "rotate": {
        const angle = parseInt(formData.get("angle") as string) || 90;
        const targetPages = (formData.get("pages") as string || "all");
        const pages = pdf.getPages();

        if (targetPages === "all") {
          pages.forEach(page => page.setRotation(degrees(page.getRotation().angle + angle)));
        } else {
          const indices = targetPages.split(",").map(s => parseInt(s.trim()) - 1);
          indices.forEach(i => {
            if (i >= 0 && i < pages.length) {
              pages[i].setRotation(degrees(pages[i].getRotation().angle + angle));
            }
          });
        }
        break;
      }

      case "reorder": {
        const newOrder = (formData.get("order") as string || "")
          .split(",")
          .map(s => parseInt(s.trim()) - 1)
          .filter(n => !isNaN(n));

        if (newOrder.length === 0) {
          return NextResponse.json({ error: "Ordre des pages requis" }, { status: 400 });
        }

        const newPdf = await PDFDocument.create();
        const copiedPages = await newPdf.copyPages(pdf, newOrder);
        copiedPages.forEach(page => newPdf.addPage(page));
        outputPdf = newPdf;
        break;
      }

      default:
        return NextResponse.json({ error: "Action invalide" }, { status: 400 });
    }

    const pdfBytes = await outputPdf.save({ useObjectStreams: true });

    return new NextResponse(pdfBytes as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${originalName}-${action}.pdf"`,
        "Content-Length": pdfBytes.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur edition PDF:", error);
    return NextResponse.json({ error: "Erreur lors du traitement du PDF" }, { status: 500 });
  }
}
