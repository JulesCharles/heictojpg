import type { Metadata } from "next";
import Link from "next/link";
import Client from "./client";

export const metadata: Metadata = {
  title: "Supprimer des pages d'un PDF gratuit | heictojpg.fr",
  description: "Supprimez des pages specifiques de votre document PDF. Indiquez les numeros de page a retirer. Gratuit, sans inscription.",
  keywords: ["supprimer pages pdf","retirer page pdf","enlever page pdf","supprimer page pdf gratuit"],
  openGraph: { type: "website", locale: "fr_FR", url: "https://heictojpg.fr/supprimer-pages-pdf", siteName: "heictojpg.fr", title: "Supprimer des pages d'un PDF gratuit", description: "Supprimez des pages specifiques de votre document PDF. Indiquez les numeros de page a retirer. Gratuit, sans inscription." },
  alternates: { canonical: "https://heictojpg.fr/supprimer-pages-pdf" },
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", name: "Supprimer des pages d'un PDF", url: "https://heictojpg.fr/supprimer-pages-pdf", description: "Supprimez des pages specifiques de votre document PDF. Indiquez les numeros de page a retirer. Gratuit, sans inscription.", applicationCategory: "MultimediaApplication", operatingSystem: "Tout navigateur web", offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" }, inLanguage: "fr" };

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Supprimer des pages d'un PDF</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Retirez les pages inutiles de votre document PDF en indiquant simplement les numeros de page a supprimer. Ideal pour nettoyer un document avant envoi, retirer des pages blanches ou des couvertures. Gratuit, sans inscription.</p>
      </div>
      <div className="mb-16"><Client /></div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">A quoi ca sert ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Supprimer des pages d'un PDF est une operation courante. Vous recevez un document de 20 pages mais seules certaines pages vous interessent, ou vous devez retirer des pages blanches, des couvertures ou des annexes avant d'envoyer le document.</p>
          <p className="text-gray-600 mb-4">Notre outil vous permet de specifier les numeros des pages a supprimer (separees par des virgules) et genere un nouveau PDF sans ces pages. Le contenu, la mise en page et les polices des pages restantes sont parfaitement preserves.</p>
          <p className="text-gray-600 mb-4">Cette fonctionnalite est particulierement utile pour les documents administratifs, les contrats (retirer les pages de conditions generales avant signature), les rapports (extraire uniquement les pages pertinentes) et les presentations (retirer les slides inutiles).</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment specifier les pages a supprimer ?</h3>
            <p className="text-gray-600 mb-4">Entrez les numeros de page separes par des virgules. Par exemple '1, 3, 5' supprimera les pages 1, 3 et 5.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le reste du document est-il modifie ?</h3>
            <p className="text-gray-600 mb-4">Non, seules les pages specifiees sont retirees. Le contenu et la mise en page des autres pages restent identiques.</p>
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
