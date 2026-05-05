// Standalone script: converts PDF pages to PNG images
// Uses pdfjs-dist legacy build + canvas for Node.js
// Called via child_process from the API route

import { readFileSync, writeFileSync } from "fs";
import { createCanvas } from "canvas";

// Use legacy build which works in Node.js without DOM
const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");

// Point to the worker file (required even for fake worker setup)
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));
pdfjs.GlobalWorkerOptions.workerSrc = join(__dirname, "..", "node_modules", "pdfjs-dist", "legacy", "build", "pdf.worker.mjs");

const [,, inputPath, outputDir, _format, scaleStr] = process.argv;
const scale = parseFloat(scaleStr) || 2;

const data = new Uint8Array(readFileSync(inputPath));

const doc = await pdfjs.getDocument({
  data,
  useSystemFonts: true,
  isEvalSupported: false,
  disableFontFace: true,
}).promise;

const pageCount = doc.numPages;
const results = [];

for (let i = 1; i <= pageCount; i++) {
  const page = await doc.getPage(i);
  const viewport = page.getViewport({ scale });

  const canvas = createCanvas(
    Math.floor(viewport.width),
    Math.floor(viewport.height)
  );
  const context = canvas.getContext("2d");
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({ canvasContext: context, viewport }).promise;

  const outPath = `${outputDir}/page-${i}.png`;
  writeFileSync(outPath, canvas.toBuffer("image/png"));
  results.push(outPath);
}

console.log(JSON.stringify({ pages: results, pageCount }));
process.exit(0);
