import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("files") as File[];
    const delay = parseInt(formData.get("delay") as string) || 500;

    if (files.length < 2) {
      return NextResponse.json({ error: "Au moins 2 images sont requises" }, { status: 400 });
    }

    // Get dimensions from first image
    const firstBuffer = Buffer.from(await files[0].arrayBuffer());
    const firstMeta = await sharp(firstBuffer).metadata();
    const width = firstMeta.width || 480;
    const height = firstMeta.height || 480;

    // Cap dimensions to avoid memory issues
    const maxDim = 800;
    const scale = Math.min(1, maxDim / Math.max(width, height));
    const outW = Math.round(width * scale);
    const outH = Math.round(height * scale);

    // Convert all frames to raw RGBA at same dimensions
    const rawFrames: Buffer[] = [];
    for (const file of files) {
      const buf = Buffer.from(await file.arrayBuffer());
      const raw = await sharp(buf)
        .resize(outW, outH, { fit: "cover" })
        .ensureAlpha()
        .raw()
        .toBuffer();
      rawFrames.push(raw);
    }

    // Combine raw frames into a single tall image (vertical strip)
    const combinedRaw = Buffer.concat(rawFrames);

    // Use sharp to create animated GIF from raw multi-page input
    const gif = await sharp(combinedRaw, {
      raw: {
        width: outW,
        height: outH * files.length,
        channels: 4,
      },
    })
      .gif({
        delay: Array(files.length).fill(delay),
        loop: 0,
      })
      .toBuffer();

    return new NextResponse(gif as any, {
      status: 200,
      headers: {
        "Content-Type": "image/gif",
        "Content-Disposition": 'attachment; filename="animation.gif"',
        "Content-Length": gif.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur creation GIF:", error);
    return NextResponse.json({ error: "Erreur lors de la creation du GIF" }, { status: 500 });
  }
}
