import { NextRequest, NextResponse } from "next/server";
import exifr from "exifr";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier fourni" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const exifData = await exifr.parse(buffer, {
      tiff: true,
      exif: true,
      gps: true,
      icc: false,
      iptc: true,
      xmp: true,
    });

    if (!exifData) {
      return NextResponse.json({ metadata: {}, message: "Aucune metadonnee trouvee" });
    }

    // Clean and organize metadata
    const metadata: Record<string, Record<string, string>> = {
      "Appareil photo": {},
      "Image": {},
      "Prise de vue": {},
      "GPS": {},
      "Fichier": {},
    };

    // Camera info
    if (exifData.Make) metadata["Appareil photo"]["Marque"] = String(exifData.Make);
    if (exifData.Model) metadata["Appareil photo"]["Modele"] = String(exifData.Model);
    if (exifData.LensModel) metadata["Appareil photo"]["Objectif"] = String(exifData.LensModel);
    if (exifData.Software) metadata["Appareil photo"]["Logiciel"] = String(exifData.Software);

    // Image info
    if (exifData.ImageWidth || exifData.ExifImageWidth) metadata["Image"]["Largeur"] = `${exifData.ImageWidth || exifData.ExifImageWidth} px`;
    if (exifData.ImageHeight || exifData.ExifImageHeight) metadata["Image"]["Hauteur"] = `${exifData.ImageHeight || exifData.ExifImageHeight} px`;
    if (exifData.Orientation) metadata["Image"]["Orientation"] = String(exifData.Orientation);
    if (exifData.ColorSpace) metadata["Image"]["Espace couleur"] = String(exifData.ColorSpace);
    if (exifData.BitDepth) metadata["Image"]["Profondeur"] = `${exifData.BitDepth} bits`;

    // Shooting info
    if (exifData.ExposureTime) metadata["Prise de vue"]["Temps d'exposition"] = `1/${Math.round(1 / exifData.ExposureTime)}s`;
    if (exifData.FNumber) metadata["Prise de vue"]["Ouverture"] = `f/${exifData.FNumber}`;
    if (exifData.ISO) metadata["Prise de vue"]["ISO"] = String(exifData.ISO);
    if (exifData.FocalLength) metadata["Prise de vue"]["Focale"] = `${exifData.FocalLength} mm`;
    if (exifData.Flash) metadata["Prise de vue"]["Flash"] = String(exifData.Flash);
    if (exifData.WhiteBalance) metadata["Prise de vue"]["Balance des blancs"] = String(exifData.WhiteBalance);
    if (exifData.DateTimeOriginal) metadata["Prise de vue"]["Date de prise"] = new Date(exifData.DateTimeOriginal).toLocaleString("fr-FR");
    if (exifData.CreateDate) metadata["Prise de vue"]["Date de creation"] = new Date(exifData.CreateDate).toLocaleString("fr-FR");

    // GPS
    if (exifData.latitude) metadata["GPS"]["Latitude"] = String(exifData.latitude.toFixed(6));
    if (exifData.longitude) metadata["GPS"]["Longitude"] = String(exifData.longitude.toFixed(6));
    if (exifData.GPSAltitude) metadata["GPS"]["Altitude"] = `${exifData.GPSAltitude.toFixed(1)} m`;

    // File info
    metadata["Fichier"]["Nom"] = file.name;
    metadata["Fichier"]["Taille"] = `${(file.size / 1024 / 1024).toFixed(2)} Mo`;
    metadata["Fichier"]["Type"] = file.type || "image/heic";

    // Remove empty categories
    const cleanMetadata: Record<string, Record<string, string>> = {};
    for (const [key, value] of Object.entries(metadata)) {
      if (Object.keys(value).length > 0) {
        cleanMetadata[key] = value;
      }
    }

    return NextResponse.json({ metadata: cleanMetadata });
  } catch (error) {
    console.error("Erreur lecture metadonnees:", error);
    return NextResponse.json({ error: "Erreur lors de la lecture des metadonnees" }, { status: 500 });
  }
}
