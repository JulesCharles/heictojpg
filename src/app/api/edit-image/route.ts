import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

type EditAction = "rotate" | "flip" | "flop" | "grayscale" | "blur" | "negate" | "dpi" | "crop" | "brightness";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const action = formData.get("action") as EditAction;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    let sharpInstance = sharp(buffer);
    const metadata = await sharp(buffer).metadata();

    switch (action) {
      case "rotate": {
        const angle = parseInt(formData.get("angle") as string) || 90;
        sharpInstance = sharpInstance.rotate(angle);
        break;
      }
      case "flip":
        sharpInstance = sharpInstance.flip();
        break;
      case "flop":
        sharpInstance = sharpInstance.flop();
        break;
      case "grayscale":
        sharpInstance = sharpInstance.grayscale();
        break;
      case "blur": {
        const sigma = parseFloat(formData.get("sigma") as string) || 5;
        sharpInstance = sharpInstance.blur(Math.max(0.3, Math.min(sigma, 100)));
        break;
      }
      case "negate":
        sharpInstance = sharpInstance.negate();
        break;
      case "dpi": {
        const dpi = parseInt(formData.get("dpi") as string) || 300;
        sharpInstance = sharpInstance.withMetadata({ density: dpi });
        break;
      }
      case "crop": {
        const left = parseInt(formData.get("left") as string) || 0;
        const top = parseInt(formData.get("top") as string) || 0;
        const width = parseInt(formData.get("width") as string) || (metadata.width || 100);
        const height = parseInt(formData.get("height") as string) || (metadata.height || 100);
        sharpInstance = sharpInstance.extract({ left, top, width, height });
        break;
      }
      case "brightness": {
        const brightness = parseFloat(formData.get("brightness") as string) || 1;
        const contrast = parseFloat(formData.get("contrast") as string) || 1;
        sharpInstance = sharpInstance.modulate({ brightness }).linear(contrast, -(128 * (contrast - 1)));
        break;
      }
      default:
        return NextResponse.json({ error: "Action invalide" }, { status: 400 });
    }

    // Output in same format as input
    let outputBuffer: Buffer;
    let contentType: string;
    let extension: string;

    const fmt = metadata.format;
    if (fmt === "png") {
      outputBuffer = await sharpInstance.png().toBuffer();
      contentType = "image/png";
      extension = ".png";
    } else if (fmt === "webp") {
      outputBuffer = await sharpInstance.webp({ quality: 90 }).toBuffer();
      contentType = "image/webp";
      extension = ".webp";
    } else {
      outputBuffer = await sharpInstance.jpeg({ quality: 92 }).toBuffer();
      contentType = "image/jpeg";
      extension = ".jpg";
    }

    const originalName = file.name.replace(/\.[^/.]+$/, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${originalName}-${action}${extension}"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur d'edition:", error);
    return NextResponse.json({ error: "Erreur lors de l'edition de l'image" }, { status: 500 });
  }
}
