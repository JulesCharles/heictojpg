import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Ajouter des numéros de page à un PDF gratuit | heictojpg.fr",
  description: "Ajoutez automatiquement des numéros de page à votre document PDF. Gratuit, rapide, sans inscription.",
  keywords: ["numéroter pages pdf","ajouter numéro page pdf","pagination pdf","numéros de page pdf gratuit"],
  openGraph: { type: "website", locale: "fr_FR", url: "https://heictojpg.fr/numeroter-pages-pdf", siteName: "heictojpg.fr", title: "Ajouter des numéros de page à un PDF gratuit", description: "Ajoutez automatiquement des numéros de page à votre document PDF. Gratuit, rapide, sans inscription." },
  alternates: { canonical: "https://heictojpg.fr/numeroter-pages-pdf" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Ajouter des numéros de page à un PDF", url: "https://heictojpg.fr/numeroter-pages-pdf", description: "Ajoutez automatiquement des numéros de page à votre document PDF. Gratuit, rapide, sans inscription.", applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr" };

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Ajouter des numéros de page à un PDF</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Ajoutez automatiquement des numéros de page (1/10, 2/10...) en bas de chaque page de votre document PDF. Idéal pour les rapports, mémoires, dossiers administratifs et présentations. Gratuit, sans inscription.</p>
      </div>
      <div className="mb-16"><Client /></div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">À quoi ça sert ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Ajouter des numéros de page à un PDF est essentiel pour les documents professionnels. Les rapports, mémoires, dossiers juridiques et présentations nécessitent une pagination claire pour faciliter la navigation et le référencement des pages.</p>
          <p className="text-gray-600 mb-4">Notre outil ajoute automatiquement un numéro de page au format "1 / 10" en bas de chaque page de votre document. Le numéro est centré et discret pour ne pas interférer avec le contenu existant.</p>
          <p className="text-gray-600 mb-4">La numérotation est particulièrement importante pour les documents imprimés : elle permet au lecteur de se repérer facilement et de référencer des passages spécifiques. Pour les documents numériques, elle facilite la navigation et les discussions en réunion ("page 5, paragraphe 2").</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Les numéros sont-ils personnalisables ?</h3>
            <p className="text-gray-600 mb-4">Les numéros sont ajoutés au format 'page / total' en bas de chaque page, en gris discret. La taille de police par défaut est de 12 points.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le contenu existant est-il modifié ?</h3>
            <p className="text-gray-600 mb-4">Non, les numéros sont superposés en bas de page sans modifier le contenu existant du PDF.</p>
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
  );
}
