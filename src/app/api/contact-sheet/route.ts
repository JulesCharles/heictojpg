import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll("file") as File[];
    if (files.length < 2) return NextResponse.json({ error: "Minimum 2 images requises" }, { status: 400 });

    const columns = Math.min(parseInt(formData.get("columns") as string) || 3, 6);
    const padding = Math.min(parseInt(formData.get("padding") as string) || 10, 50);
    const bgColor = (formData.get("bgColor") as string) || "#ffffff";

    // Process all images to a standard size
    const cellWidth = 400;
    const cellHeight = 400;
    const rows = Math.ceil(files.length / columns);

    const totalWidth = columns * cellWidth + (columns + 1) * padding;
    const totalHeight = rows * cellHeight + (rows + 1) * padding;

    const composites: { input: Buffer; top: number; left: number }[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const buffer = Buffer.from(await file.arrayBuffer());
      const resized = await sharp(buffer)
        .resize(cellWidth, cellHeight, { fit: "cover" })
        .jpeg({ quality: 90 })
        .toBuffer();

      const row = Math.floor(i / columns);
      const col = i % columns;
      const left = padding + col * (cellWidth + padding);
      const top = padding + row * (cellHeight + padding);

      composites.push({ input: resized, top, left });
    }

    const outputBuffer = await sharp({
      create: {
        width: totalWidth,
        height: totalHeight,
        channels: 3,
        background: bgColor,
      },
    })
      .composite(composites)
      .jpeg({ quality: 92 })
      .toBuffer();

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "image/jpeg",
        "Content-Disposition": `attachment; filename="planche-contact.jpg"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur planche contact:", error);
    return NextResponse.json({ error: "Erreur lors de la creation" }, { status: 500 });
  }
}
