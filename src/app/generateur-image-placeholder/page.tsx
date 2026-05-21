import type { Metadata } from "next";
import Client from "./client";
import PageHero from "@/components/PageHero";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
  title: "Generateur d'Images Placeholder Gratuit en Ligne | heictojpg.fr",
  description: "Generez des images placeholder personnalisees pour vos maquettes et wireframes. Choisissez les dimensions, couleurs et texte. Gratuit, sans inscription.",
  keywords: ["image placeholder","generateur placeholder","image fictive","maquette image","wireframe placeholder","placeholder generator"],
  openGraph: {
    type: "website", locale: "fr_FR",
    url: "https://heictojpg.fr/generateur-image-placeholder",
    siteName: "heictojpg.fr",
    title: "Generateur d'Images Placeholder Gratuit en Ligne",
    description: "Generez des images placeholder personnalisees pour vos maquettes et wireframes. Choisissez les dimensions, couleurs et texte. Gratuit, sans inscription.",
  },
  alternates: { canonical: "https://heictojpg.fr/generateur-image-placeholder" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Generateur d'Images Placeholder",
      url: "https://heictojpg.fr/generateur-image-placeholder",
      description: "Generez des images placeholder personnalisees pour vos maquettes et wireframes. Choisissez les dimensions, couleurs et texte. Gratuit, sans inscription.",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Tout navigateur web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      inLanguage: "fr",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Qu'est-ce qu'une image placeholder ?", acceptedAnswer: { "@type": "Answer", text: "Une image placeholder (ou image de substitution) est une image temporaire utilisee dans les maquettes, wireframes et prototypes de sites web ou d'applications. Elle indique l'emplacement et les dimensions d'une future image reelle." } },
        { "@type": "Question", name: "Dans quels cas utiliser des images placeholder ?", acceptedAnswer: { "@type": "Answer", text: "Les images placeholder sont utilisees lors du developpement web, la creation de maquettes, les presentations clients, les wireframes UX/UI, et partout ou vous avez besoin d'indiquer un emplacement d'image avant d'avoir le contenu final." } },
        { "@type": "Question", name: "Quelle est la taille maximale supportee ?", acceptedAnswer: { "@type": "Answer", text: "Vous pouvez generer des images jusqu'a 4096x4096 pixels. Pour la plupart des usages web et maquettes, les presets proposes (de 150x150 a 1920x1080) couvrent les besoins courants." } },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Generateur d'Images Placeholder", href: "/generateur-image-placeholder" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Generateur d'images placeholder</h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">Creez des images placeholder personnalisees en quelques clics. Definissez les dimensions, les couleurs et le texte pour vos maquettes, wireframes et prototypes.</p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <Client />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Qu'est-ce qu'une image placeholder ?</h2>
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">Une image placeholder (ou image de substitution) est une image temporaire utilisee dans le processus de conception et de developpement web. Elle sert a representer visuellement l'emplacement et les proportions d'une image finale qui n'est pas encore disponible. C'est un outil indispensable pour les designers et developpeurs.</p>
          <p className="text-gray-600 mb-4">Les images placeholder sont essentielles lors de la creation de maquettes (mockups), de wireframes et de prototypes. Elles permettent aux equipes de visualiser la mise en page d'un site web ou d'une application sans attendre que tout le contenu visuel soit pret. Elles affichent generalement les dimensions de l'image pour faciliter le travail d'integration.</p>
          <p className="text-gray-600 mb-4">Notre generateur vous permet de creer des images placeholder entierement personnalisees : choisissez les dimensions exactes dont vous avez besoin, la couleur de fond, la couleur du texte, et meme un texte personnalise. Utilisez les presets rapides pour les tailles les plus courantes ou definissez vos propres dimensions jusqu'a 4096x4096 pixels.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="prose prose-gray max-w-none">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Qu'est-ce qu'une image placeholder ?</h3>
            <p className="text-gray-600 mb-4">Une image placeholder (ou image de substitution) est une image temporaire utilisee dans les maquettes, wireframes et prototypes de sites web ou d'applications. Elle indique l'emplacement et les dimensions d'une future image reelle.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Dans quels cas utiliser des images placeholder ?</h3>
            <p className="text-gray-600 mb-4">Les images placeholder sont utilisees lors du developpement web, la creation de maquettes, les presentations clients, les wireframes UX/UI, et partout ou vous avez besoin d'indiquer un emplacement d'image avant d'avoir le contenu final.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelle est la taille maximale supportee ?</h3>
            <p className="text-gray-600 mb-4">Vous pouvez generer des images jusqu'a 4096x4096 pixels. Pour la plupart des usages web et maquettes, les presets proposes (de 150x150 a 1920x1080) couvrent les besoins courants.</p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/generateur-image-placeholder" />
    </div>
    </>
  );
}
