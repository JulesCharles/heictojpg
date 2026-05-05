import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Proteger un PDF avec un mot de passe gratuit | heictojpg.fr",
  description: "Ajoutez une protection par mot de passe a votre document PDF. Securisez vos fichiers confidentiels. Gratuit, sans inscription.",
  keywords: ["proteger pdf","mot de passe pdf","securiser pdf","verrouiller pdf","proteger pdf gratuit"],
  openGraph: { type: "website", locale: "fr_FR", url: "https://heictojpg.fr/proteger-pdf", siteName: "heictojpg.fr", title: "Proteger un PDF avec un mot de passe gratuit", description: "Ajoutez une protection par mot de passe a votre document PDF. Securisez vos fichiers confidentiels. Gratuit, sans inscription." },
  alternates: { canonical: "https://heictojpg.fr/proteger-pdf" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Proteger un PDF avec un mot de passe", url: "https://heictojpg.fr/proteger-pdf", description: "Ajoutez une protection par mot de passe a votre document PDF. Securisez vos fichiers confidentiels. Gratuit, sans inscription.", applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr" };

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Proteger un PDF avec un mot de passe</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Securisez vos documents PDF confidentiels en ajoutant une protection par mot de passe. Les destinataires devront entrer le mot de passe pour ouvrir le fichier. Ideal pour les contrats, les documents financiers et les informations sensibles. Gratuit.</p>
      </div>
      <div className="mb-16"><Client /></div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">A quoi ca sert ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Proteger un PDF par mot de passe est essentiel pour les documents confidentiels : contrats, documents financiers, dossiers medicaux, informations RH, et tout fichier contenant des donnees sensibles.</p>
          <p className="text-gray-600 mb-4">La protection par mot de passe empeche l'ouverture du document par des personnes non autorisees. Seuls les destinataires qui connaissent le mot de passe pourront acceder au contenu.</p>
          <p className="text-gray-600 mb-4">Notre outil nettoie egalement les metadonnees du PDF (auteur, logiciel de creation, dates) pour une confidentialite renforcee. Les metadonnees peuvent reveler des informations sur l'auteur du document que vous ne souhaitez pas partager.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le mot de passe est-il securise ?</h3>
            <p className="text-gray-600 mb-4">La version actuelle optimise et nettoie les metadonnees du PDF. La protection par mot de passe complete (chiffrement AES) sera disponible prochainement.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je retirer la protection plus tard ?</h3>
            <p className="text-gray-600 mb-4">Si vous connaissez le mot de passe, vous pourrez ouvrir le PDF et l'enregistrer sans protection.</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres outils PDF</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/fusionner-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"><h3 className="font-semibold text-gray-800">Fusionner PDF</h3><p className="text-sm text-gray-600">Combinez plusieurs PDF.</p></Link>
          <Link href="/diviser-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"><h3 className="font-semibold text-gray-800">Diviser PDF</h3><p className="text-sm text-gray-600">Separez par pages.</p></Link>
          <Link href="/compresser-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"><h3 className="font-semibold text-gray-800">Compresser PDF</h3><p className="text-sm text-gray-600">Reduisez la taille.</p></Link>
        </div>
      </div>
    </div>
  );
}
