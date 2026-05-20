import type { Metadata } from "next";
import ImageConvertForm from "@/components/ImageConvertForm";
import RelatedTools from "@/components/RelatedTools";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Convertir WebP en GIF en ligne gratuit | heictojpg.fr",
  description: "Convertissez vos images WebP en GIF pour une compatibilité maximale avec les emails et anciens systèmes. Gratuit.",
  keywords: ["convertir webp en gif","webp to gif","webp gif gratuit","webp vers gif"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertir-webp-en-gif",
    siteName: "heictojpg.fr",
    title: "Convertir WebP en GIF gratuitement en ligne",
    description: "Convertissez vos images WebP en GIF pour une compatibilité maximale avec les emails et anciens systèmes. Gratuit.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertir-webp-en-gif" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Convertisseur WebP en GIF",
      url: "https://heictojpg.fr/convertir-webp-en-gif",
      description: "Convertissez vos images WebP en GIF pour une compatibilité maximale avec les emails et anciens systèmes. Gratuit.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Le GIF est-il adapté aux photos ?",
          acceptedAnswer: { "@type": "Answer", text: "Non, le GIF est limité à 256 couleurs, ce qui provoque une perte de qualité sur les photos. Utilisez plutôt la conversion WebP vers JPG pour les photographies." },
        },
        {
          "@type": "Question",
          name: "Mon email marketing ne supporte pas le WebP, que faire ?",
          acceptedAnswer: { "@type": "Answer", text: "Convertissez vos images en GIF (pour les graphiques) ou en JPG (pour les photos) avant de les intégrer dans vos newsletters. Le GIF et le JPG sont supportés par tous les clients email." },
        }
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertir WebP en GIF", href: "/convertir-webp-en-gif" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Convertir WebP en GIF gratuitement</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Transformez vos images WebP en GIF pour les utiliser dans les newsletters email, les anciens systèmes et toute plateforme qui ne supporte pas le WebP.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ImageConvertForm
          title="WebP &rarr; GIF"
          acceptedFormats=".webp,image/webp"
          acceptLabel="Sélectionner un fichier WebP"
          outputFormat="gif"
          apiEndpoint="/api/convert-image"
          outputExtension=".gif"
          acceptedMimeTypes={["image/webp"]}
          acceptedExtensions={[".webp"]}
          errorMessage="Veuillez sélectionner un fichier WebP valide."
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pourquoi convertir WebP en GIF ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Le format WebP n'est pas toujours supporté dans les clients email (Outlook, certains webmails), les anciens CMS et certaines applications legacy. Convertir en GIF garantit une compatibilité absolue dans tous ces contextes.</p>
          <p className="text-gray-600 mb-4">Le GIF est le plus ancien format d'image du web (1987) et reste supporté par absolument tous les systèmes. Bien qu'il soit limité à 256 couleurs, il est parfait pour les graphiques simples, les logos et les icônes.</p>
          <p className="text-gray-600 mb-4">Pour les photographies, le GIF n'est pas optimal à cause de sa palette de couleurs limitée. Dans ce cas, privilégiez la conversion WebP vers JPG ou WebP vers PNG.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions fréquentes</h2>
        <div className="prose prose-gray max-w-none">

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Le GIF est-il adapté aux photos ?</h3>
            <p className="text-gray-600 mb-4">Non, le GIF est limité à 256 couleurs, ce qui provoque une perte de qualité sur les photos. Utilisez plutôt la conversion WebP vers JPG pour les photographies.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Mon email marketing ne supporte pas le WebP, que faire ?</h3>
            <p className="text-gray-600 mb-4">Convertissez vos images en GIF (pour les graphiques) ou en JPG (pour les photos) avant de les intégrer dans vos newsletters. Le GIF et le JPG sont supportés par tous les clients email.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertir-webp-en-gif" />
    </div>
    </>
  );
}
