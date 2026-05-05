"use client";
import EditImageForm from "@/components/EditImageForm";

export default function StripExifClient() {
  return <EditImageForm title="Supprimer les métadonnées" action="strip" apiEndpoint="/api/strip-exif" />;
}