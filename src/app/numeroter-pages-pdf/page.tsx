import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Ajouter des numeros de page a un PDF gratuit | heictojpg.fr",
  description: "Ajoutez automatiquement des numeros de page a votre document PDF. Gratuit, rapide, sans inscription.",
  keywords: ["numeroter pages pdf","ajouter numero page pdf","pagination pdf","numeros de page pdf gratuit"],
  openGraph: { type: "website", locale: "fr_FR", url: "https://heictojpg.fr/numeroter-pages-pdf", siteName: "heictojpg.fr", title: "Ajouter des numeros de page a un PDF gratuit", description: "Ajoutez automatiquement des numeros de page a votre document PDF. Gratuit, rapide, sans inscription." },
  alternates: { canonical: "https://heictojpg.fr/numeroter-pages-pdf" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Ajouter des numeros de page a un PDF", url: "https://heictojpg.fr/numeroter-pages-pdf", description: "Ajoutez automatiquement des numeros de page a votre document PDF. Gratuit, rapide, sans inscription.", applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr" };

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Ajouter des numeros de page a un PDF</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Ajoutez automatiquement des numeros de page (1/10, 2/10...) en bas de chaque page de votre document PDF. Ideal pour les rapports, memoires, dossiers administratifs et presentations. Gratuit, sans inscription.</p>
      </div>
      <div className="mb-16"><Client /></div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">A quoi ca sert ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Ajouter des numeros de page a un PDF est essentiel pour les documents professionnels. Les rapports, memoires, dossiers juridiques et presentations necessitent une pagination claire pour faciliter la navigation et le referencement des pages.</p>
          <p className="text-gray-600 mb-4">Notre outil ajoute automatiquement un numero de page au format "1 / 10" en bas de chaque page de votre document. Le numero est centre et discret pour ne pas interferer avec le contenu existant.</p>
          <p className="text-gray-600 mb-4">La numerotation est particulierement importante pour les documents imprimes : elle permet au lecteur de se reperer facilement et de referencer des passages specifiques. Pour les documents numeriques, elle facilite la navigation et les discussions en reunion ("page 5, paragraphe 2").</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Les numeros sont-ils personnalisables ?</h3>
            <p className="text-gray-600 mb-4">Les numeros sont ajoutes au format 'page / total' en bas de chaque page, en gris discret. La taille de police par defaut est de 12 points.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le contenu existant est-il modifie ?</h3>
            <p className="text-gray-600 mb-4">Non, les numeros sont superposes en bas de page sans modifier le contenu existant du PDF.</p>
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
