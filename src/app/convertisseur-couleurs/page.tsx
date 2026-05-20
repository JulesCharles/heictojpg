import type { Metadata } from "next";
import RelatedTools from "@/components/RelatedTools";
import ColorConvertForm from "@/components/ColorConvertForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdBanner from "@/components/AdBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Convertisseur de couleurs HEX RGB HSL en ligne | heictojpg.fr",
  description: "Convertissez vos couleurs entre HEX, RGB et HSL instantanement. Outil gratuit en ligne avec apercu en temps reel et copie en un clic.",
  keywords: [
    "convertisseur couleurs",
    "hex en rgb",
    "rgb en hex",
    "hsl en rgb",
    "convertir couleur",
    "color converter",
    "hex to rgb",
    "rgb to hsl",
    "code couleur",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://heictojpg.fr/convertisseur-couleurs",
    siteName: "heictojpg.fr",
    title: "Convertisseur de couleurs HEX / RGB / HSL",
    description: "Convertissez vos couleurs entre HEX, RGB et HSL instantanement.",
  },
  alternates: { canonical: "https://heictojpg.fr/convertisseur-couleurs" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Convertisseur de couleurs",
  url: "https://heictojpg.fr/convertisseur-couleurs",
  description: "Convertissez des couleurs entre HEX, RGB et HSL en temps reel.",
  applicationCategory: "DesignApplication",
  operatingSystem: "Tout navigateur web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "fr",
};

export default function ConvertisseurCouleurs() {
  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Convertisseur de couleurs", href: "/convertisseur-couleurs" }]} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Convertisseur de couleurs HEX / RGB / HSL
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Convertissez instantanement vos couleurs entre les formats HEX, RGB et HSL.
          Modifiez une valeur et les autres se mettent a jour automatiquement.
          Copiez le code couleur en un clic.
        </p>
      </PageHero>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container mx-auto px-4 py-12 max-w-4xl">

      <div className="mb-16">
        <ColorConvertForm />
      </div>

      <AdBanner slot="SLOT_1" format="horizontal" />

      <div className="bg-white rounded-lg shadow-sm p-8 mb-8 mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Comprendre les formats de couleurs
        </h2>
        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">HEX (Hexadecimal)</h3>
          <p className="text-gray-600 mb-4">
            Le format HEX represente les couleurs avec un code de 6 caracteres precede d&apos;un #.
            Chaque paire de caracteres (00 a FF) represente l&apos;intensite du rouge, du vert et du bleu.
            Exemple : <code className="bg-gray-100 px-1 rounded">#3b82f6</code> est un bleu vif.
            C&apos;est le format le plus utilise en CSS et en design web.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">RGB (Red, Green, Blue)</h3>
          <p className="text-gray-600 mb-4">
            Le format RGB definit une couleur par ses composantes rouge, verte et bleue, chacune allant de 0 a 255.
            Exemple : <code className="bg-gray-100 px-1 rounded">rgb(59, 130, 246)</code>.
            C&apos;est le modele de couleur additif utilise par les ecrans.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">HSL (Hue, Saturation, Lightness)</h3>
          <p className="text-gray-600 mb-4">
            Le format HSL est plus intuitif : la teinte (H) va de 0 a 360 degres sur le cercle chromatique,
            la saturation (S) de 0% (gris) a 100% (couleur vive), et la luminosite (L) de 0% (noir) a 100% (blanc).
            Exemple : <code className="bg-gray-100 px-1 rounded">hsl(217, 91%, 60%)</code>.
            Ideal pour creer des palettes harmonieuses.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Questions frequentes</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Comment convertir HEX en RGB ?</h3>
            <p className="text-gray-600 text-sm">
              Chaque paire de caracteres du code HEX correspond a une valeur RGB.
              Par exemple, #FF8000 donne R=255 (FF), G=128 (80), B=0 (00). Notre outil fait ce calcul automatiquement.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Quel format utiliser en CSS ?</h3>
            <p className="text-gray-600 text-sm">
              Les trois formats sont valides en CSS. Le HEX est le plus courant, le RGB est explicite,
              et le HSL est pratique pour ajuster la luminosite ou la saturation d&apos;une couleur.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Quelle est la difference entre RGB et HSL ?</h3>
            <p className="text-gray-600 text-sm">
              RGB decrit une couleur par ses composantes de lumiere (rouge, vert, bleu).
              HSL la decrit de maniere plus humaine : teinte, saturation et luminosite.
              Les deux representent les memes couleurs, mais HSL est plus intuitif pour creer des variantes.
            </p>
          </div>
        </div>
      </div>

      <RelatedTools currentPath="/convertisseur-couleurs" />
    </div>
    </>
  );
}
