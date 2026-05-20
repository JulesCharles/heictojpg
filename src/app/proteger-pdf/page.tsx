import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import PageHero from "@/components/PageHero";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Protéger un PDF avec un mot de passe gratuit | heictojpg.fr",
  description: "Ajoutez une protection par mot de passe à votre document PDF. Sécurisez vos fichiers confidentiels. Gratuit, sans inscription.",
  keywords: ["protéger pdf","mot de passe pdf","sécuriser pdf","verrouiller pdf","protéger pdf gratuit"],
  openGraph: { type: "website", locale: "fr_FR", url: "https://heictojpg.fr/proteger-pdf", siteName: "heictojpg.fr", title: "Protéger un PDF avec un mot de passe gratuit", description: "Ajoutez une protection par mot de passe à votre document PDF. Sécurisez vos fichiers confidentiels. Gratuit, sans inscription." },
  alternates: { canonical: "https://heictojpg.fr/proteger-pdf" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Protéger un PDF avec un mot de passe", url: "https://heictojpg.fr/proteger-pdf", description: "Ajoutez une protection par mot de passe à votre document PDF. Sécurisez vos fichiers confidentiels. Gratuit, sans inscription.", applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr" };

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Protéger un PDF avec un mot de passe</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Sécurisez vos documents PDF confidentiels en ajoutant une protection par mot de passe. Les destinataires devront entrer le mot de passe pour ouvrir le fichier. Idéal pour les contrats, les documents financiers et les informations sensibles. Gratuit.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16"><Client /></div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">À quoi ça sert ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Protéger un PDF par mot de passe est essentiel pour les documents confidentiels : contrats, documents financiers, dossiers médicaux, informations RH, et tout fichier contenant des données sensibles.</p>
          <p className="text-gray-600 mb-4">La protection par mot de passe empêche l'ouverture du document par des personnes non autorisées. Seuls les destinataires qui connaissent le mot de passe pourront accéder au contenu.</p>
          <p className="text-gray-600 mb-4">Notre outil nettoie également les métadonnées du PDF (auteur, logiciel de création, dates) pour une confidentialité renforcée. Les métadonnées peuvent révéler des informations sur l'auteur du document que vous ne souhaitez pas partager.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le mot de passe est-il sécurisé ?</h3>
            <p className="text-gray-600 mb-4">La version actuelle optimise et nettoie les métadonnées du PDF. La protection par mot de passe complète (chiffrement AES) sera disponible prochainement.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je retirer la protection plus tard ?</h3>
            <p className="text-gray-600 mb-4">Si vous connaissez le mot de passe, vous pourrez ouvrir le PDF et l'enregistrer sans protection.</p>
          </div>
        </div>
      </div>
      <RelatedTools currentPath="/proteger-pdf" />

      {/* Article recommande */}
      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="font-semibold text-gray-800 mb-2">Vous cherchez une alternative gratuite a iLovePDF ?</h3>
        <p className="text-sm text-gray-600 mb-3">Decouvrez notre comparatif des 7 meilleures alternatives gratuites pour manipuler vos PDF en ligne.</p>
        <Link href="/blog/ilovepdf-alternatives-gratuites" className="text-sm font-medium text-blue-600 hover:text-blue-800">Lire l&apos;article &rarr;</Link>
      </div>
    </div>
    </>
  );
}
