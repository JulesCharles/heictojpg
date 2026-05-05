import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Pivoter les pages d'un PDF gratuit | heictojpg.fr",
  description: "Pivotez les pages de votre PDF de 90, 180 ou 270 degres. Toutes les pages ou une selection. Gratuit, sans inscription.",
  keywords: ["pivoter pdf","tourner pdf","rotation pdf","pivoter page pdf gratuit","faire pivoter pdf"],
  openGraph: { type: "website", locale: "fr_FR", url: "https://heictojpg.fr/pivoter-pdf", siteName: "heictojpg.fr", title: "Pivoter les pages d'un PDF gratuit", description: "Pivotez les pages de votre PDF de 90, 180 ou 270 degres. Toutes les pages ou une selection. Gratuit, sans inscription." },
  alternates: { canonical: "https://heictojpg.fr/pivoter-pdf" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Pivoter les pages d'un PDF", url: "https://heictojpg.fr/pivoter-pdf", description: "Pivotez les pages de votre PDF de 90, 180 ou 270 degres. Toutes les pages ou une selection. Gratuit, sans inscription.", applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr" };

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Pivoter les pages d'un PDF</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Pivotez les pages de votre document PDF de 90, 180 ou 270 degres. Corrigez l'orientation de documents scannes, de pages en mode paysage, ou de PDF mal orientes. Appliquez la rotation a toutes les pages ou a une selection. Gratuit.</p>
      </div>
      <div className="mb-16"><Client /></div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">A quoi ca sert ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">La rotation de pages PDF est souvent necessaire pour les documents scannes. Les scanners produisent parfois des pages en orientation incorrecte, notamment quand on melange des pages portrait et paysage dans un meme scan.</p>
          <p className="text-gray-600 mb-4">Notre outil vous permet de pivoter les pages de 90 degres (quart de tour), 180 degres (demi-tour) ou 270 degres (trois quarts de tour). Vous pouvez appliquer la rotation a toutes les pages ou seulement a certaines pages en specifiant leurs numeros.</p>
          <p className="text-gray-600 mb-4">La rotation est egalement utile pour les presentations PowerPoint exportees en PDF en mode paysage que vous souhaitez reorienter en portrait, ou inversement.</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Puis-je pivoter seulement certaines pages ?</h3>
            <p className="text-gray-600 mb-4">Oui, entrez les numeros des pages a pivoter (ex: 1, 3, 5) ou tapez 'all' pour pivoter toutes les pages.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">La qualite est-elle affectee ?</h3>
            <p className="text-gray-600 mb-4">Non, la rotation modifie uniquement l'orientation de la page sans re-compresser le contenu.</p>
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
