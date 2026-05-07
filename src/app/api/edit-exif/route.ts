import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    if (!file) return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });

    const action = (formData.get("action") as string) || "strip";

    const buffer = Buffer.from(await file.arrayBuffer());
    let outputBuffer: Buffer;

    if (action === "strip") {
      outputBuffer = await sharp(buffer)
        .withMetadata({ exif: {} })
        .toBuffer();
    } else if (action === "keep-orientation") {
      outputBuffer = await sharp(buffer)
        .rotate()
        .withMetadata({ orientation: undefined })
        .toBuffer();
    } else if (action === "set-copyright") {
      const copyright = (formData.get("copyright") as string) || "";
      const exifData: Record<string, string> = {};
      if (copyright) {
        exifData["IFD0"] = JSON.stringify({ Copyright: copyright, Artist: copyright });
      }
      outputBuffer = await sharp(buffer)
        .withMetadata({
          exif: {
            IFD0: {
              Copyright: copyright,
              Artist: copyright,
            },
          },
        })
        .toBuffer();
    } else if (action === "set-dpi") {
      const dpi = parseInt(formData.get("dpi") as string) || 300;
      outputBuffer = await sharp(buffer)
        .withMetadata({ density: dpi })
        .toBuffer();
    } else {
      outputBuffer = buffer;
    }

    const ext = file.name.match(/\.[^/.]+$/)?.[0] || ".jpg";
    const contentType = ext === ".png" ? "image/png" : ext === ".webp" ? "image/webp" : "image/jpeg";

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="edited-${file.name}"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur edition EXIF:", error);
    return NextResponse.json({ error: "Erreur lors du traitement" }, { status: 500 });
  }
}
