import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ConversionHistoryClient from "./history-client";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Historique de conversions | heictojpg.fr",
  description: "Consultez l'historique de vos 30 dernieres conversions. Fonctionnalite reservee aux abonnes Pro.",
  robots: { index: false },
};

export default function HistoriquePage() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Historique", href: "/historique" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Historique de conversions</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Retrouvez vos 30 dernieres conversions. L&apos;historique est stocke localement sur votre navigateur.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <ConversionHistoryClient />
      </div>
    </>
  );
}
