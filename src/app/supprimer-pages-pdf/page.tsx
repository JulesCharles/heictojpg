import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Supprimer des pages d'un PDF gratuit | heictojpg.fr",
  description: "Supprimez des pages spécifiques de votre document PDF. Indiquez les numéros de page à retirer. Gratuit, sans inscription.",
  keywords: ["supprimer pages pdf","retirer page pdf","enlever page pdf","supprimer page pdf gratuit"],
  openGraph: { type: "website", locale: "fr_FR", url: "https://heictojpg.fr/supprimer-pages-pdf", siteName: "heictojpg.fr", title: "Supprimer des pages d'un PDF gratuit", description: "Supprimez des pages spécifiques de votre document PDF. Indiquez les numéros de page à retirer. Gratuit, sans inscription." },
  alternates: { canonical: "https://heictojpg.fr/supprimer-pages-pdf" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Supprimer des pages d'un PDF", url: "https://heictojpg.fr/supprimer-pages-pdf", description: "Supprimez des pages spécifiques de votre document PDF. Indiquez les numéros de page à retirer. Gratuit, sans inscription.", applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr" };

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Supprimer des pages d'un PDF</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Retirez les pages inutiles de votre document PDF en indiquant simplement les numéros de page à supprimer. Idéal pour nettoyer un document avant envoi, retirer des pages blanches ou des couvertures. Gratuit, sans inscription.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16"><Client /></div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">À quoi ça sert ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Supprimer des pages d'un PDF est une opération courante. Vous recevez un document de 20 pages mais seules certaines pages vous intéressent, ou vous devez retirer des pages blanches, des couvertures ou des annexes avant d'envoyer le document.</p>
          <p className="text-gray-600 mb-4">Notre outil vous permet de spécifier les numéros des pages à supprimer (séparées par des virgules) et génère un nouveau PDF sans ces pages. Le contenu, la mise en page et les polices des pages restantes sont parfaitement préservés.</p>
          <p className="text-gray-600 mb-4">Cette fonctionnalité est particulièrement utile pour les documents administratifs, les contrats (retirer les pages de conditions générales avant signature), les rapports (extraire uniquement les pages pertinentes) et les présentations (retirer les slides inutiles).</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment spécifier les pages à supprimer ?</h3>
            <p className="text-gray-600 mb-4">Entrez les numéros de page séparés par des virgules. Par exemple '1, 3, 5' supprimera les pages 1, 3 et 5.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le reste du document est-il modifié ?</h3>
            <p className="text-gray-600 mb-4">Non, seules les pages spécifiées sont retirées. Le contenu et la mise en page des autres pages restent identiques.</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Autres outils PDF</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/fusionner-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"><h3 className="font-semibold text-gray-800">Fusionner PDF</h3><p className="text-sm text-gray-600">Combinez plusieurs PDF.</p></Link>
          <Link href="/diviser-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"><h3 className="font-semibold text-gray-800">Diviser PDF</h3><p className="text-sm text-gray-600">Séparez par pages.</p></Link>
          <Link href="/compresser-pdf" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"><h3 className="font-semibold text-gray-800">Compresser PDF</h3><p className="text-sm text-gray-600">Réduisez la taille.</p></Link>
        </div>
      </div>

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
