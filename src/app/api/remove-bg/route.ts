import { NextRequest, NextResponse } from "next/server";
import { removeBackground } from "@imgly/background-removal-node";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const blob = new Blob([bytes], { type: file.type });

    const result = await removeBackground(blob);
    const outputBuffer = Buffer.from(await result.arrayBuffer());

    const originalName = file.name.replace(/\.[^/.]+$/, "");

    return new NextResponse(outputBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Content-Disposition": `attachment; filename="${originalName}-sans-fond.png"`,
        "Content-Length": outputBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur suppression fond:", error);
    return NextResponse.json({ error: "Erreur lors de la suppression du fond" }, { status: 500 });
  }
}
