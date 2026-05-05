import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import JSZip from "jszip";
import { writeFileSync, readFileSync, mkdirSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { randomUUID } from "crypto";
import { exec } from "child_process";

function runConversion(inputPath: string, outputDir: string, scale: number): Promise<{ pages: string[]; pageCount: number }> {
  return new Promise((resolve, reject) => {
    // Use exec with a simple node command that runs the external script
    const cmd = `node "${join(process.cwd(), "scripts", "pdf-to-image.mjs")}" "${inputPath}" "${outputDir}" jpg ${scale}`;
    exec(cmd, { timeout: 30000 }, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(stderr || error.message));
        return;
      }
      try {
        resolve(JSON.parse(stdout.trim()));
      } catch {
        reject(new Error("Parse error: " + stdout.substring(0, 200)));
      }
    });
  });
}

export async function POST(request: NextRequest) {
  const id = randomUUID();
  const tempDir = join(tmpdir(), `pdf-${id}`);

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const format = (formData.get("format") as string) || "jpg";
    const dpi = parseInt(formData.get("dpi") as string) || 150;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      return NextResponse.json({ error: "Le fichier doit etre au format PDF" }, { status: 400 });
    }

    mkdirSync(tempDir, { recursive: true });
    const inputPath = join(tempDir, "input.pdf");
    const bytes = await file.arrayBuffer();
    writeFileSync(inputPath, Buffer.from(bytes));

    const scale = dpi / 72;
    const result = await runConversion(inputPath, tempDir, scale);

    const images: { name: string; buffer: Buffer }[] = [];

    for (let i = 0; i < result.pages.length; i++) {
      const pngBuffer = readFileSync(result.pages[i]);
      let outputBuffer: Buffer;
      let ext: string;

      if (format === "png") {
        outputBuffer = await sharp(pngBuffer).png().toBuffer();
        ext = "png";
      } else {
        outputBuffer = await sharp(pngBuffer).jpeg({ quality: 92 }).toBuffer();
        ext = "jpg";
      }

      images.push({ name: `page-${i + 1}.${ext}`, buffer: outputBuffer });
    }

    const originalName = file.name.replace(/\.pdf$/i, "");

    if (images.length === 1) {
      const contentType = format === "png" ? "image/png" : "image/jpeg";
      return new NextResponse(images[0].buffer as any, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Content-Disposition": `attachment; filename="${originalName}.${format === "png" ? "png" : "jpg"}"`,
          "Content-Length": images[0].buffer.length.toString(),
        },
      });
    }

    const zip = new JSZip();
    for (const img of images) {
      zip.file(img.name, img.buffer);
    }
    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    return new NextResponse(zipBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${originalName}-images.zip"`,
        "Content-Length": zipBuffer.length.toString(),
        "X-Page-Count": result.pageCount.toString(),
      },
    });
  } catch (error) {
    console.error("Erreur conversion PDF en image:", error);
    return NextResponse.json(
      { error: "Erreur lors de la conversion du PDF" },
      { status: 500 }
    );
  } finally {
    try { rmSync(tempDir, { recursive: true, force: true }); } catch {}
  }
}
