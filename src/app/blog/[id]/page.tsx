import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const blogPosts = {
  "1": {
    title: "Comment convertir HEIC en JPG sans perte de qualité",
    date: "15 janvier 2025",
    readTime: "5 min",
    content: `
Depuis iOS 11, Apple utilise par défaut le format HEIC pour stocker les photos prises avec votre iPhone. Si ce format présente de nombreux avantages, il peut poser des problèmes de compatibilité lorsque vous souhaitez partager vos images sur d'autres plateformes. Heureusement, il existe plusieurs méthodes simples et efficaces pour convertir HEIC en JPG tout en préservant la qualité de vos photos iPhone.

## Qu'est-ce que le format HEIC et pourquoi le convertir ?

Le format HEIC (High Efficiency Image Container) est une évolution technologique majeure d'Apple. Il permet de réduire la taille des fichiers photo jusqu'à 50% par rapport au format JPEG traditionnel, tout en conservant une qualité d'image identique. Cependant, tous les navigateurs web et logiciels ne supportent pas encore ce format récent.

La conversion HEIC devient nécessaire lorsque vous voulez :
- Partager vos photos sur les réseaux sociaux depuis un ordinateur
- Ouvrir vos images dans des logiciels de retouche classiques
- Envoyer des photos par email à des personnes utilisant des appareils non-Apple
- Créer un site web avec vos photos personnelles

## Les meilleures méthodes pour convertir HEIC en JPG

### Conversion en ligne gratuite

La méthode la plus simple consiste à utiliser un convertisseur HEIC en ligne. Notre outil gratuit vous permet de transformer vos fichiers HEIC en quelques secondes, directement depuis votre navigateur. L'avantage principal : aucun logiciel à installer et vos fichiers ne sont pas conservés sur nos serveurs.

Le processus est très simple : sélectionnez votre photo iPhone au format HEIC, cliquez sur "Convertir", puis téléchargez votre image JPG. La conversion préserve la résolution originale et les métadonnées importantes comme la géolocalisation.

### Conversion sur iPhone avec l'app Photos

Votre iPhone peut également créer des copies JPG de vos photos HEIC. Dans l'app Photos, sélectionnez l'image souhaitée, appuyez sur "Partager", puis choisissez "Copier la photo". Ensuite, collez l'image dans une app comme Mail : iOS créera automatiquement une version JPG compatible.

### Utilisation de logiciels desktop

Pour traiter plusieurs photos simultanément, des logiciels comme GIMP, Photoshop ou des convertisseurs batch peuvent s'avérer utiles. Ces solutions conviennent particulièrement aux photographes professionnels qui manipulent de gros volumes d'images.

## Comment préserver la qualité lors de la conversion

La qualité finale de votre image JPG dépend de plusieurs paramètres techniques. Un bon convertisseur HEIC préserve :

**La résolution originale** : Vos photos 12 mégapixels restent en 12 mégapixels après conversion. Aucune perte de détail n'intervient au niveau des pixels.

**Les couleurs et la luminosité** : Les profils colorimétriques sont conservés pour maintenir l'aspect visuel original de votre photo iPhone.

**Les métadonnées EXIF** : Date de prise de vue, paramètres de l'appareil photo, géolocalisation... toutes ces informations restent intactes.

Pour une qualité optimale, choisissez un taux de compression JPG élevé (90-95%). Utilisez notre outil gratuit qui applique automatiquement ces paramètres optimaux pour préserver au maximum la qualité de vos photos.
    `,
  },
  "2": {
    title: "Pourquoi Apple utilise-t-il le format HEIC ?",
    date: "12 janvier 2025",
    readTime: "3 min",
    content: `
Depuis septembre 2017 et le lancement d'iOS 11, Apple a fait un choix technologique majeur : remplacer le traditionnel format JPEG par le HEIC pour toutes les nouvelles photos prises avec l'iPhone. Cette décision, qui peut sembler anodine, cache en réalité une stratégie technique et commerciale réfléchie. Découvrons ensemble les raisons qui ont poussé la marque à la pomme à adopter ce nouveau standard d'image.

## Une révolution technique : l'efficacité avant tout

Apple n'a pas choisi le format HEIC par hasard. Cette technologie, basée sur le codec HEVC (High Efficiency Video Coding), représente une avancée majeure par rapport au JPEG, inventé dans les années 1990.

Le principal avantage du HEIC ? **L'efficacité de compression**. Une photo iPhone en HEIC occupe environ 50% moins d'espace de stockage qu'un équivalent JPEG, tout en conservant une qualité visuelle identique. Concrètement, là où vous stockiez 100 photos en JPEG, vous pouvez désormais en conserver 200 en HEIC sur le même espace.

Cette économie d'espace profite directement aux utilisateurs d'iPhone, surtout ceux qui ne souscrivent pas aux plans de stockage iCloud payants. Apple répond ainsi à une demande croissante : pouvoir prendre plus de photos sans saturer constamment la mémoire de son téléphone.

## La stratégie écosystème d'Apple

Comme souvent chez Apple, l'adoption du format HEIC s'inscrit dans une logique d'écosystème fermé. La marque souhaite que ses utilisateurs restent dans son environnement technologique, de l'iPhone au Mac en passant par iCloud.

Le format HEIC fonctionne parfaitement entre tous les appareils Apple récents. Vos photos se synchronisent automatiquement via iCloud, s'affichent sans problème sur votre Mac et se partagent facilement via AirDrop. Cette fluidité encourage les utilisateurs à rester fidèles à la marque.

## Les avantages techniques du HEIC

### Meilleure gestion des couleurs

Le format HEIC supporte nativement l'espace colorimétrique P3, plus large que le sRGB traditionnel du JPEG. Vos photos iPhone conservent donc plus de nuances de couleurs, particulièrement visible sur les écrans modernes compatibles P3 comme ceux des iPhone et Mac récents.

### Support natif des métadonnées avancées

HEIC peut stocker bien plus d'informations que le JPEG : plusieurs images dans un même conteneur (idéal pour les Live Photos), des données de profondeur pour le mode Portrait, ou encore des informations étendues sur les conditions de prise de vue.
    `,
  },
  "3": {
    title: "Optimiser ses photos pour le web : HEIC vs JPG vs WebP",
    date: "8 janvier 2025",
    readTime: "7 min",
    content: `
Dans l'univers de la création de contenu web, choisir le bon format d'image peut considérablement impacter les performances de votre site. Entre HEIC, JPG et WebP, chaque format présente des avantages spécifiques selon le contexte d'usage. Que vous soyez blogueur, e-commerçant ou créateur de contenu, comprendre ces différences vous aidera à optimiser vos photos pour offrir la meilleure expérience utilisateur possible.

## HEIC : l'excellence mobile qui reste confidentielle sur le web

Le format HEIC, utilisé par défaut sur les iPhone depuis iOS 11, excelle en matière de compression. Une photo HEIC occupe environ 50% moins d'espace qu'un équivalent JPEG, avec une qualité visuelle identique. Cette efficacité en fait le choix parfait pour le stockage mobile et la synchronisation iCloud.

Cependant, **HEIC reste très peu adapté au web**. La majorité des navigateurs ne l'affichent pas nativement, forçant les créateurs de contenu à convertir leurs photos iPhone avant publication. Safari sur macOS et iOS supporte HEIC, mais Chrome, Firefox et Edge l'ignorent encore largement.

Si vous travaillez avec des photos prises sur iPhone, convertir HEIC en JPG devient indispensable avant de les intégrer à votre site web. Cette étape garantit une compatibilité universelle et évite les problèmes d'affichage pour vos visiteurs.

## JPG : le standard incontournable et universel

Le format JPEG demeure la référence absolue pour les photos sur internet. Créé dans les années 1990, il bénéficie d'une **compatibilité universelle** : tous les navigateurs, appareils et plateformes l'affichent sans exception.

### Les avantages du JPG pour le web

**Taille de fichier maîtrisée** : Le JPG permet d'ajuster finement la compression selon vos besoins. Pour une photo de blog, une qualité 80-85% offre un excellent compromis poids/qualité. Les images e-commerce nécessitent souvent 90-95% pour révéler tous les détails produit.

**Référencement optimisé** : Google Images indexe parfaitement les fichiers JPG. Leur nom de fichier, texte alternatif et métadonnées EXIF contribuent efficacement au SEO de votre site.

## WebP : l'avenir moderne avec quelques réserves

Développé par Google, WebP représente l'évolution logique du JPG. Ce format moderne réduit la taille des fichiers de 25 à 35% par rapport au JPEG, tout en supportant la transparence comme le PNG.

### Pourquoi adopter WebP ?

**Performances accrues** : Vos pages se chargent plus rapidement grâce aux fichiers WebP allégés. Google privilégie les sites rapides dans ses résultats de recherche, un avantage SEO non négligeable.
    `,
  },
  "4": {
    title: "Gérer l'espace de stockage sur iPhone avec la conversion HEIC",
    date: "5 janvier 2025",
    readTime: "4 min",
    content: `
L'espace de stockage constitue l'un des défis quotidiens des utilisateurs d'iPhone, particulièrement ceux qui possèdent des modèles 64 ou 128 Go. Les photos représentent souvent la première cause de saturation de la mémoire. Heureusement, le format HEIC d'Apple et quelques stratégies de conversion intelligentes peuvent vous aider à libérer significativement de l'espace tout en conservant vos précieux souvenirs.

## Comprendre l'impact du stockage photo sur votre iPhone

Une photo prise avec un iPhone récent en format HEIC pèse en moyenne 1,5 à 3 Mo selon les conditions de prise de vue. Cela peut sembler raisonnable, mais ces chiffres s'accumulent rapidement : 1000 photos représentent déjà 2 à 3 Go d'espace utilisé.

Le **mode Portrait** et les **Live Photos** consomment davantage d'espace. Une Live Photo HEIC occupe environ 4 à 6 Mo (image + séquence vidéo), tandis qu'une photo Portrait peut atteindre 5 Mo avec ses données de profondeur. Si vous utilisez fréquemment ces modes, votre stockage se remplit encore plus vite.

## Le format HEIC : votre allié pour économiser l'espace

Depuis iOS 11, Apple utilise par défaut le format HEIC qui **réduit la taille des photos de 50%** par rapport au JPEG classique, sans perte de qualité visuelle. Cette optimisation se révèle particulièrement efficace pour :

- Les photos avec beaucoup de détails (paysages, architecture)
- Les images contenant des dégradés de couleurs
- Les clichés pris en conditions de faible luminosité

Un exemple concret : une photo de coucher de soleil qui aurait pesé 6 Mo en JPEG n'occupe que 3 Mo en HEIC. Sur 1000 photos similaires, vous économisez 3 Go d'espace de stockage !

## Stratégies de conversion pour optimiser votre stockage

### Conversion HEIC vers JPG pour l'archivage cloud

Paradoxalement, convertir certaines photos HEIC en JPG peut vous faire gagner de l'espace. Cette stratégie fonctionne quand vous archivez vos images sur des services cloud non-Apple (Google Photos, Dropbox, OneDrive) qui compressent automatiquement les fichiers JPG.

Le processus optimal :
1. Sélectionnez vos photos les moins importantes (captures d'écran, photos de documents)
2. Convertissez-les de HEIC vers JPG avec une qualité 75-80%
3. Sauvegardez-les sur votre service cloud préféré
4. Supprimez les originaux HEIC de votre iPhone

Cette méthode peut libérer 30 à 40% d'espace sur vos photos archivées.
    `,
  },
};

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: `${post.title} - Blog HEIC → JPG`,
    description: `${post.title}. Guide complet pour convertir vos photos iPhone du format HEIC vers JPG.`,
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au blog
        </Link>

        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-gray-600 space-x-2">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime} de lecture</span>
          </div>
        </div>

        <div className="w-full h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
          <span className="text-gray-500">Image placeholder</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={index} className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={index} className="text-gray-600 mb-4">
                  <strong>{paragraph.replace(/\*\*/g, '')}</strong>
                </p>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <li key={index} className="text-gray-600 mb-1">
                  {paragraph.replace('- ', '')}
                </li>
              );
            }
            if (paragraph.trim() === '') {
              return null;
            }
            return (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Besoin de convertir vos photos HEIC ?
            </h3>
            <p className="text-gray-600 mb-6">
              Utilisez notre outil gratuit pour convertir vos fichiers HEIC en JPG en quelques secondes.
            </p>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Convertir mes photos HEIC
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];
}