import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ - Questions fréquentes sur la conversion HEIC en JPG",
  description:
    "Retrouvez les réponses aux questions les plus fréquentes sur la conversion de fichiers HEIC en JPG. Format HEIC, qualité, confidentialité, compatibilité et plus.",
  openGraph: {
    type: "website",
    title: "FAQ - Questions fréquentes sur la conversion HEIC en JPG",
    description:
      "Retrouvez les réponses aux questions les plus fréquentes sur la conversion de fichiers HEIC en JPG.",
    url: "https://heictojpg.fr/faq",
    siteName: "heictojpg.fr",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "FAQ - Questions fréquentes sur la conversion HEIC en JPG",
    description:
      "Retrouvez les réponses aux questions les plus fréquentes sur la conversion de fichiers HEIC en JPG.",
  },
  alternates: {
    canonical: "https://heictojpg.fr/faq",
  },
};

const faqItems = [
  {
    question: "Qu'est-ce que le format HEIC ?",
    answer:
      "Le format HEIC (High Efficiency Image Container) est un format d'image développé par le Moving Picture Experts Group (MPEG). Adopté par Apple depuis iOS 11 en 2017, il utilise le codec HEVC pour compresser les images de manière plus efficace que le JPEG. Un fichier HEIC occupe environ 50% moins d'espace qu'un JPEG équivalent tout en conservant la même qualité visuelle.",
  },
  {
    question: "Pourquoi mes photos iPhone sont en HEIC ?",
    answer:
      "Apple a choisi le format HEIC comme format par défaut pour les photos iPhone afin d'économiser de l'espace de stockage. Comme le HEIC offre une compression deux fois plus efficace que le JPEG, vos photos prennent moins de place sur votre iPhone et dans iCloud. Ce choix permet de stocker davantage de photos sans augmenter la capacité de stockage.",
  },
  {
    question: "Comment convertir HEIC en JPG ?",
    answer:
      "La méthode la plus simple est d'utiliser notre convertisseur en ligne gratuit sur heictojpg.fr. Il vous suffit de glisser-déposer vos fichiers HEIC, et la conversion se fait en quelques secondes. Vous pouvez aussi utiliser les outils natifs de votre appareil : Aperçu sur Mac, l'application Photos sur Windows, ou modifier les réglages de votre iPhone pour capturer directement en JPG.",
  },
  {
    question: "La conversion est-elle gratuite ?",
    answer:
      "Oui, notre service de conversion HEIC vers JPG est entièrement gratuit et sans limitation. Vous pouvez convertir autant de fichiers que vous le souhaitez, sans inscription, sans publicité intrusive et sans filigrane ajouté à vos images.",
  },
  {
    question: "Mes fichiers sont-ils conservés sur vos serveurs ?",
    answer:
      "Non, vos fichiers ne sont jamais conservés sur nos serveurs. La conversion s'effectue de manière sécurisée et vos images sont automatiquement supprimées dès que le traitement est terminé. Nous ne stockons, n'analysons ni ne partageons aucune de vos photos. Votre vie privée est notre priorité.",
  },
  {
    question: "Quelle est la qualité après conversion ?",
    answer:
      "Notre convertisseur préserve la qualité maximale de vos images lors de la conversion. La résolution originale, les couleurs et les métadonnées EXIF (date, localisation, paramètres de prise de vue) sont conservées. Le fichier JPG résultant est visuellement identique à l'original HEIC.",
  },
  {
    question: "Puis-je convertir plusieurs fichiers à la fois ?",
    answer:
      "Oui, notre outil prend en charge la conversion par lots. Vous pouvez sélectionner plusieurs fichiers HEIC en même temps et les convertir tous simultanément en JPG. C'est particulièrement pratique lorsque vous devez traiter un grand nombre de photos iPhone d'un coup.",
  },
  {
    question: "Le format HEIC est-il meilleur que JPG ?",
    answer:
      "Le HEIC présente des avantages techniques par rapport au JPG : meilleure compression (fichiers 50% plus légers), support des couleurs étendues (P3), gestion de la transparence et stockage de plusieurs images dans un même fichier. Cependant, le JPG reste supérieur en termes de compatibilité universelle : il est reconnu par tous les navigateurs, logiciels et appareils sans exception.",
  },
  {
    question: "Comment changer le format photo par défaut sur iPhone ?",
    answer:
      "Pour que votre iPhone prenne directement les photos en JPG, allez dans Réglages > Appareil photo > Formats, puis sélectionnez « Le plus compatible » au lieu de « Haute efficacité ». Attention : ce changement augmentera la taille de vos photos d'environ 50%, ce qui consommera plus d'espace de stockage sur votre appareil.",
  },
  {
    question: "Quels navigateurs supportent le format HEIC ?",
    answer:
      "Le support natif du HEIC dans les navigateurs est encore limité. Safari sur macOS et iOS affiche les fichiers HEIC nativement. En revanche, Chrome, Firefox, Edge et la plupart des autres navigateurs ne supportent pas encore ce format directement. C'est pourquoi la conversion en JPG reste nécessaire pour partager vos images sur le web.",
  },
];

export default function FAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://heictojpg.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://heictojpg.fr/faq",
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Questions fréquentes
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Retrouvez les réponses aux questions les plus courantes sur le format
          HEIC et la conversion vers JPG.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              {item.question}
            </h2>
            <p className="text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6 text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Vous avez des photos HEIC à convertir ?
        </h3>
        <p className="text-gray-600 mb-4">
          Utilisez notre outil gratuit pour convertir vos fichiers HEIC en JPG
          en quelques secondes.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Convertir mes photos HEIC en JPG
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          En savoir plus
        </h2>
        <p className="text-gray-600 mb-4">
          Consultez nos guides détaillés pour approfondir vos connaissances
          sur le format HEIC et la conversion :
        </p>
        <ul className="space-y-2">
          <li>
            <Link
              href="/blog/convertir-heic-en-jpg-sans-perte-qualite"
              className="text-blue-600 hover:text-blue-800"
            >
              Comment convertir HEIC en JPG sans perte de qualité
            </Link>
          </li>
          <li>
            <Link
              href="/blog/pourquoi-apple-utilise-format-heic"
              className="text-blue-600 hover:text-blue-800"
            >
              Pourquoi Apple utilise-t-il le format HEIC ?
            </Link>
          </li>
          <li>
            <Link
              href="/blog/optimiser-photos-web-heic-jpg-webp"
              className="text-blue-600 hover:text-blue-800"
            >
              Optimiser ses photos pour le web : HEIC vs JPG vs WebP
            </Link>
          </li>
          <li>
            <Link
              href="/convertir-heic-en-jpg-sur-mac"
              className="text-blue-600 hover:text-blue-800"
            >
              Convertir HEIC en JPG sur Mac
            </Link>
          </li>
          <li>
            <Link
              href="/convertir-heic-en-jpg-sur-iphone"
              className="text-blue-600 hover:text-blue-800"
            >
              Convertir HEIC en JPG sur iPhone
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
