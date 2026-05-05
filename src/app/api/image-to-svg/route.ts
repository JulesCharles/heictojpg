import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { imagedataToSVG } from "imagetracerjs";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const mode = (formData.get("mode") as string) || "default";

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Resize to max 800px for reasonable SVG size and speed
    const { data, info } = await sharp(buffer)
      .resize(800, 800, { fit: "inside", withoutEnlargement: true })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const imageData = {
      width: info.width,
      height: info.height,
      data: new Uint8ClampedArray(data),
    };

    const options: Record<string, any> = {};
    switch (mode) {
      case "detailed":
        options.numberofcolors = 64;
        options.mincolorratio = 0;
        options.colorquantcycles = 3;
        break;
      case "simple":
        options.numberofcolors = 8;
        options.mincolorratio = 0.02;
        options.colorquantcycles = 1;
        break;
      case "bw":
        options.numberofcolors = 2;
        options.colorquantcycles = 1;
        break;
      default:
        options.numberofcolors = 16;
        options.colorquantcycles = 2;
    }

    const svgString = imagedataToSVG(imageData, options);
    const svgBuffer = Buffer.from(svgString);
    const originalName = file.name.replace(/\.[^/.]+$/, "");

    return new NextResponse(svgBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml",
        "Content-Disposition": `attachment; filename="${originalName}.svg"`,
        "Content-Length": svgBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur vectorisation:", error);
    return NextResponse.json({ error: "Erreur lors de la vectorisation" }, { status: 500 });
  }
}
