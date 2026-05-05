"use client";
import EditImageForm from "@/components/EditImageForm";

export default function StripExifClient() {
  return <EditImageForm title="Supprimer les metadonnees" action="strip" apiEndpoint="/api/strip-exif" />;
}