import type { Metadata } from "next";
import Link from "next/link";
import ExifEditorForm from "@/components/ExifEditorForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Editeur de metadonnees EXIF en ligne | heictojpg.fr",
  description: "Lisez, modifiez ou supprimez les metadonnees EXIF de vos photos. Ajoutez un copyright, changez le DPI ou nettoyez les donnees GPS. Gratuit, sans inscription.",
  keywords: [
    "editeur exif",
    "modifier metadonnees image",
    "supprimer exif",
    "ajouter copyright photo",
    "changer dpi image",
    "supprimer gps photo",
    "exif editor en ligne",
    "metadonnees photo",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/modifier-metadonnees-image",
    siteName: "heictojpg.fr",
    title: "Editeur de metadonnees EXIF en ligne",
    description: "Lisez, modifiez ou supprimez les metadonnees EXIF de vos photos en ligne.",
  },
  alternates: { canonical: "https://heictojpg.fr/modifier-metadonnees-image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Editeur de metadonnees EXIF",
  url: "https://heictojpg.fr/modifier-metadonnees-image",
  description: "Lisez, modifiez ou supprimez les metadonnees EXIF de vos images en ligne.",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ModifierMetadonnees() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Editeur de metadonnees EXIF", href: "/modifier-metadonnees-image" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Editeur de metadonnees EXIF
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Lisez, modifiez ou supprimez les metadonnees EXIF de vos photos.
          Ajoutez un copyright, changez la resolution DPI ou nettoyez les informations
          de localisation GPS avant de partager vos images.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ExifEditorForm />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Qu&apos;est-ce que les metadonnees EXIF ?
        </h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            Les metadonnees EXIF (Exchangeable Image File Format) sont des informations enregistrees
            automatiquement par votre appareil photo ou smartphone lorsque vous prenez une photo.
            Elles incluent la date, l&apos;heure, le modele d&apos;appareil, les reglages (ISO, ouverture, vitesse),
            et souvent les coordonnees GPS du lieu de prise de vue.
          </p>
          <p className="text-gray-600 mb-4">
            Ces donnees sont utiles pour organiser vos photos, mais elles peuvent aussi poser des problemes
            de vie privee. Partager une photo avec ses metadonnees GPS revele votre localisation exacte.
            Notre editeur vous permet de controler ces informations avant de partager vos images.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">Fonctionnalites</h3>
          <ul className="text-gray-600 space-y-2">
            <li>&bull; <strong>Lire les metadonnees :</strong> affichez toutes les informations EXIF d&apos;une image</li>
            <li>&bull; <strong>Supprimer les EXIF :</strong> nettoyez toutes les metadonnees pour proteger votre vie privee</li>
            <li>&bull; <strong>Ajouter un copyright :</strong> inscrivez votre nom ou marque dans les metadonnees</li>
            <li>&bull; <strong>Changer le DPI :</strong> modifiez la resolution pour l&apos;impression (72, 150 ou 300 DPI)</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Pourquoi supprimer les metadonnees EXIF ?</h3>
            <p className="text-gray-600 text-sm">
              Les metadonnees contiennent des informations sensibles comme votre localisation GPS, le modele de votre telephone
              et la date exacte de la photo. Les supprimer avant de publier en ligne protege votre vie privee.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">A quoi sert le copyright dans les metadonnees ?</h3>
            <p className="text-gray-600 text-sm">
              Inscrire un copyright dans les metadonnees permet d&apos;identifier l&apos;auteur d&apos;une photo.
              Meme si ce n&apos;est pas une protection juridique en soi, cela facilite l&apos;attribution et decourage
              l&apos;utilisation non autorisee.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Quand faut-il changer le DPI ?</h3>
            <p className="text-gray-600 text-sm">
              Le DPI (points par pouce) est important pour l&apos;impression. 72 DPI suffit pour le web,
              150 DPI pour les documents, et 300 DPI est le standard pour l&apos;impression photo de qualite.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outils associes</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/lire-metadonnees-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Lire les metadonnees</h3>
            <p className="text-sm text-gray-600">Analysez les EXIF de n&apos;importe quelle image.</p>
          </Link>
          <Link href="/supprimer-metadonnees-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Supprimer les EXIF</h3>
            <p className="text-sm text-gray-600">Nettoyez les metadonnees rapidement.</p>
          </Link>
          <Link href="/changer-dpi-image" className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-gray-800">Changer le DPI</h3>
            <p className="text-sm text-gray-600">Modifiez la resolution pour l&apos;impression.</p>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}
