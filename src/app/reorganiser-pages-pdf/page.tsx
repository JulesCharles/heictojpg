import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Reorganiser les pages d'un PDF gratuit | heictojpg.fr",
  description: "Changez l'ordre des pages de votre PDF. Reorganisez, inversez ou personnalisez la pagination. Gratuit, sans inscription.",
  keywords: ["reorganiser pages pdf","changer ordre pages pdf","reordonner pdf","inverser pages pdf"],
  openGraph: { type: "website", locale: "fr_FR", url: "https://heictojpg.fr/reorganiser-pages-pdf", siteName: "heictojpg.fr", title: "Reorganiser les pages d'un PDF gratuit", description: "Changez l'ordre des pages de votre PDF. Reorganisez, inversez ou personnalisez la pagination. Gratuit, sans inscription." },
  alternates: { canonical: "https://heictojpg.fr/reorganiser-pages-pdf" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Reorganiser les pages d'un PDF", url: "https://heictojpg.fr/reorganiser-pages-pdf", description: "Changez l'ordre des pages de votre PDF. Reorganisez, inversez ou personnalisez la pagination. Gratuit, sans inscription.", applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr" };

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Reorganiser les pages d'un PDF</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Changez l'ordre des pages de votre document PDF en specifiant le nouvel ordre souhaite. Inversez la pagination, deplacez des pages, ou reorganisez completement votre document. Gratuit, sans inscription.</p>
      </div>
      <div className="mb-16"><Client /></div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">A quoi ca sert ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Reorganiser les pages d'un PDF est utile quand vous assemblez un document a partir de plusieurs sources et que l'ordre des pages n'est pas correct, ou quand vous souhaitez inverser la pagination d'un document.</p>
          <p className="text-gray-600 mb-4">Notre outil vous permet de specifier le nouvel ordre des pages en entrant les numeros dans l'ordre souhaite. Par exemple, pour un PDF de 5 pages, entrer '3, 1, 2, 5, 4' placera la page 3 en premier, suivie des pages 1, 2, 5 et 4.</p>
          <p className="text-gray-600 mb-4">Vous pouvez egalement utiliser cet outil pour extraire certaines pages en ne specifiant que les numeros des pages que vous souhaitez conserver. Par exemple, '1, 3, 5' creera un nouveau PDF contenant uniquement les pages 1, 3 et 5.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment inverser l'ordre de toutes les pages ?</h3>
            <p className="text-gray-600 mb-4">Pour un PDF de 5 pages, entrez '5, 4, 3, 2, 1'. Les pages seront inversees dans le nouveau document.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je dupliquer une page ?</h3>
            <p className="text-gray-600 mb-4">Oui, vous pouvez repeter un numero. Par exemple '1, 1, 2, 3' placera la page 1 deux fois au debut.</p>
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
