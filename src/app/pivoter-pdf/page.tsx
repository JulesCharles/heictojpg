import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Pivoter les pages d'un PDF gratuit | heictojpg.fr",
  description: "Pivotez les pages de votre PDF de 90, 180 ou 270 degrés. Toutes les pages ou une sélection. Gratuit, sans inscription.",
  keywords: ["pivoter pdf","tourner pdf","rotation pdf","pivoter page pdf gratuit","faire pivoter pdf"],
  openGraph: { type: "website", locale: "fr_FR", url: "https://heictojpg.fr/pivoter-pdf", siteName: "heictojpg.fr", title: "Pivoter les pages d'un PDF gratuit", description: "Pivotez les pages de votre PDF de 90, 180 ou 270 degrés. Toutes les pages ou une sélection. Gratuit, sans inscription." },
  alternates: { canonical: "https://heictojpg.fr/pivoter-pdf" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Pivoter les pages d'un PDF", url: "https://heictojpg.fr/pivoter-pdf", description: "Pivotez les pages de votre PDF de 90, 180 ou 270 degrés. Toutes les pages ou une sélection. Gratuit, sans inscription.", applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr" };

export default function Page() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Pivoter les pages d'un PDF</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Pivotez les pages de votre document PDF de 90, 180 ou 270 degrés. Corrigez l'orientation de documents scannés, de pages en mode paysage, ou de PDF mal orientés. Appliquez la rotation à toutes les pages ou à une sélection. Gratuit.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-16"><Client /></div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">À quoi ça sert ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La rotation de pages PDF est souvent nécessaire pour les documents scannés. Les scanners produisent parfois des pages en orientation incorrecte, notamment quand on mélange des pages portrait et paysage dans un même scan.</p>
          <p className="text-gray-600 mb-4">Notre outil vous permet de pivoter les pages de 90 degrés (quart de tour), 180 degrés (demi-tour) ou 270 degrés (trois quarts de tour). Vous pouvez appliquer la rotation à toutes les pages ou seulement à certaines pages en spécifiant leurs numéros.</p>
          <p className="text-gray-600 mb-4">La rotation est également utile pour les présentations PowerPoint exportées en PDF en mode paysage que vous souhaitez réorienter en portrait, ou inversement.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je pivoter seulement certaines pages ?</h3>
            <p className="text-gray-600 mb-4">Oui, entrez les numéros des pages à pivoter (ex: 1, 3, 5) ou tapez 'all' pour pivoter toutes les pages.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualité est-elle affectée ?</h3>
            <p className="text-gray-600 mb-4">Non, la rotation modifie uniquement l'orientation de la page sans re-compresser le contenu.</p>
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
