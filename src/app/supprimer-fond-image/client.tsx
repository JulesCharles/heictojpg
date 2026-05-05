"use client";

import EditImageForm from "@/components/EditImageForm";

export default function RemoveBgClient() {
  return (
    <EditImageForm
      title="Supprimer le fond"
      action="remove-bg"
      apiEndpoint="/api/remove-bg"
    />
  );
}
