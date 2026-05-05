import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import toIco from "to-ico";

const ALLOWED_OUTPUTS = ["jpg", "png", "webp", "avif", "tiff", "gif", "bmp", "ico"] as const;

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const outputFormat = formData.get("format") as string;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    if (!ALLOWED_OUTPUTS.includes(outputFormat as any)) {
      return NextResponse.json({ error: "Format de sortie invalide" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const sharpInstance = sharp(buffer).flatten({ background: { r: 255, g: 255, b: 255 } });

    let outputBuffer: Buffer;
    let contentType: string;
    let extension: string;

    switch (outputFormat) {
      case "jpg":
        outputBuffer = await sharpInstance.jpeg({ quality: 90 }).toBuffer();
        contentType = "image/jpeg";
        extension = ".jpg";
        break;
      case "png":
        outputBuffer = await sharp(buffer).png({ compressionLevel: 6 }).toBuffer();
        contentType = "image/png";
        extension = ".png";
        break;
      case "webp":
        outputBuffer = await sharp(buffer).webp({ quality: 85 }).toBuffer();
        contentType = "image/webp";
        extension = ".webp";
        break;
      case "avif":
        outputBuffer = await sharp(buffer).avif({ quality: 80 }).toBuffer();
        contentType = "image/avif";
        extension = ".avif";
        break;
      case "tiff":
        outputBuffer = await sharp(buffer).tiff({ quality: 90 }).toBuffer();
        contentType = "image/tiff";
        extension = ".tiff";
        break;
      case "gif":
        outputBuffer = await sharp(buffer).gif().toBuffer();
        contentType = "image/gif";
        extension = ".gif";
        break;
      case "bmp":
        // Sharp doesn't support BMP output natively. Export as uncompressed PNG.
        outputBuffer = await sharpInstance.png({ compressionLevel: 0 }).toBuffer();
        contentType = "image/png";
        extension = ".bmp.png";
        break;
      case "ico": {
        const sizes = [16, 32, 48, 64, 128, 256];
        const pngBuffers = await Promise.all(
          sizes.map((s) => sharp(buffer).resize(s, s, { fit: "cover" }).png().toBuffer())
        );
        const icoBuffer = await toIco(pngBuffers);
        outputBuffer = Buffer.from(icoBuffer);
        contentType = "image/x-icon";
        extension = ".ico";
        break;
      }
      default:
        return NextResponse.json({ error: "Format non supporte" }, { status: 400 });
    }

    const originalName = file.name.replace(/\.[^/.]+$/, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="${originalName}${extension}"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur de conversion:", error);
    return NextResponse.json({ error: "Erreur lors de la conversion de l'image" }, { status: 500 });
  }
}
