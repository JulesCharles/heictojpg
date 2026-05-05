export interface ConversionData {
  from: string;
  to: string;
  slug: string;
  toolPath: string;
  why: string;
  whenToConvert: string[];
  qualityTip: string;
  steps: string[];
}

export const conversions: ConversionData[] = [
  {
    from: "heic",
    to: "jpg",
    slug: "comment-convertir-heic-en-jpg",
    toolPath: "/convertir-heic-en-jpg",
    why: "Le HEIC est le format par défaut des photos iPhone depuis iOS 11, mais il n'est pas compatible avec la plupart des appareils non-Apple, logiciels de retouche et sites web. Convertir en JPG garantit une compatibilité universelle pour partager, imprimer ou publier vos photos.",
    whenToConvert: [
      "Envoyer des photos iPhone à des utilisateurs Windows ou Android",
      "Publier des images sur un site web ou un blog",
      "Télécharger des photos sur des plateformes qui n'acceptent pas le HEIC",
      "Ouvrir vos photos dans des logiciels comme GIMP, Paint ou des éditeurs en ligne",
      "Imprimer vos photos dans un laboratoire photo en ligne",
    ],
    qualityTip: "Utilisez une qualité JPEG de 90-95% pour conserver un rendu quasi identique à l'original HEIC. À 92% (notre réglage par défaut), la différence est imperceptible à l'oeil nu tout en réduisant la taille du fichier.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-heic-en-jpg dans votre navigateur",
      "Glissez-déposez vos fichiers HEIC dans la zone de dépôt (ou cliquez pour parcourir)",
      "Cliquez sur Convertir — la conversion prend quelques secondes",
      "Téléchargez vos fichiers JPG (individuellement ou en ZIP)",
    ],
  },
  {
    from: "heic",
    to: "png",
    slug: "comment-convertir-heic-en-png",
    toolPath: "/convertir-heic-en-png",
    why: "Le PNG offre une compression sans perte et supporte la transparence. Convertir HEIC en PNG est idéal si vous avez besoin de conserver chaque détail de votre photo iPhone pour de la retouche, du design ou des usages professionnels où l'on veut éviter toute dégradation.",
    whenToConvert: [
      "Retoucher vos photos sans perte de qualité (design, compositing)",
      "Utiliser vos photos comme éléments graphiques avec fond transparent",
      "Archiver vos photos dans un format sans perte universellement compatible",
      "Créer des montages photo où le détail pixel est important",
    ],
    qualityTip: "Le PNG est sans perte, donc la qualité est toujours maximale. Attention, les fichiers PNG sont beaucoup plus lourds que les JPG (3 à 5 fois). Utilisez PNG uniquement quand la qualité sans perte ou la transparence est nécessaire.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-heic-en-png",
      "Sélectionnez ou glissez vos fichiers HEIC",
      "Cliquez sur Convertir",
      "Téléchargez vos fichiers PNG",
    ],
  },
  {
    from: "heic",
    to: "webp",
    slug: "comment-convertir-heic-en-webp",
    toolPath: "/convertir-heic-en-webp",
    why: "Le WebP est le format recommandé par Google pour le web. Il offre une compression 25-35% supérieure au JPG tout en supportant la transparence. Convertir vos photos iPhone HEIC en WebP est la meilleure option pour les publier sur un site web avec des performances optimales.",
    whenToConvert: [
      "Publier des photos sur un site web ou un blog WordPress",
      "Optimiser les images pour améliorer le score Google PageSpeed",
      "Réduire le temps de chargement de vos pages web",
      "Remplacer des JPG par un format plus performant sur votre site",
    ],
    qualityTip: "Une qualité WebP de 80% offre un excellent compromis taille/qualité pour le web. Les fichiers seront environ 50-60% plus légers que les HEIC originaux avec une qualité visuelle très proche.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-heic-en-webp",
      "Sélectionnez vos fichiers HEIC",
      "Cliquez sur Convertir",
      "Téléchargez vos fichiers WebP optimisés pour le web",
    ],
  },
  {
    from: "png",
    to: "jpg",
    slug: "comment-convertir-png-en-jpg",
    toolPath: "/convertir-png-en-jpg",
    why: "Les fichiers PNG sont souvent 3 à 5 fois plus lourds que les JPG. Si votre image est une photographie sans transparence, la convertir en JPG réduit considérablement la taille du fichier tout en conservant une excellente qualité visuelle. C'est indispensable pour l'envoi par email ou la publication web.",
    whenToConvert: [
      "Réduire la taille d'une capture d'écran ou d'une photo avant envoi par email",
      "Publier des images plus légères sur un site web",
      "Télécharger des photos sur des plateformes qui limitent la taille des fichiers",
      "Convertir des exports de logiciels de design (Figma, Canva) en photos partageables",
    ],
    qualityTip: "Utilisez 85-90% de qualité pour les photos. Pour les captures d'écran contenant du texte, préférez rester en PNG ou utiliser 95% de qualité pour éviter les artefacts autour des caractères.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-png-en-jpg",
      "Glissez votre fichier PNG",
      "Cliquez sur Convertir",
      "Téléchargez votre JPG allégé",
    ],
  },
  {
    from: "jpg",
    to: "png",
    slug: "comment-convertir-jpg-en-png",
    toolPath: "/convertir-jpg-en-png",
    why: "Convertir un JPG en PNG est utile quand vous avez besoin d'un format sans perte pour de la retouche ou du compositing. Attention : la conversion ne restaure pas les détails perdus lors de la compression JPEG initiale, mais elle empêche toute dégradation supplémentaire lors des modifications.",
    whenToConvert: [
      "Préparer une image pour de la retouche sans dégradation supplémentaire",
      "Utiliser une image dans un logiciel qui préfère le PNG (design, présentation)",
      "Ajouter de la transparence à une image existante (après détourage)",
      "Éviter la re-compression lors de sauvegardes multiples",
    ],
    qualityTip: "La conversion JPG vers PNG ne peut pas améliorer la qualité de l'image originale. Le fichier PNG sera plus lourd que le JPG source, mais ne subira plus de dégradation lors des sauvegardes suivantes.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-jpg-en-png",
      "Sélectionnez votre fichier JPG",
      "Cliquez sur Convertir",
      "Téléchargez votre PNG",
    ],
  },
  {
    from: "jpg",
    to: "webp",
    slug: "comment-convertir-jpg-en-webp",
    toolPath: "/convertir-jpg-en-webp",
    why: "Le WebP offre une compression 25-35% supérieure au JPG pour une qualité visuelle équivalente. Convertir vos JPG en WebP est la manière la plus simple d'améliorer les performances de votre site web et votre score Google PageSpeed Insights.",
    whenToConvert: [
      "Optimiser les images de votre site web ou blog",
      "Améliorer votre score Google PageSpeed et Core Web Vitals",
      "Réduire la bande passante de votre serveur",
      "Migrer un site existant vers des formats modernes",
    ],
    qualityTip: "Une qualité WebP de 80% produit des fichiers 30% plus légers que le JPG source avec une qualité visuelle pratiquement identique. C'est le réglage optimal pour le web.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-jpg-en-webp",
      "Sélectionnez vos fichiers JPG",
      "Cliquez sur Convertir",
      "Téléchargez vos WebP optimisés",
    ],
  },
  {
    from: "webp",
    to: "jpg",
    slug: "comment-convertir-webp-en-jpg",
    toolPath: "/convertir-webp-en-jpg",
    why: "Bien que le WebP soit excellent pour le web, certains logiciels, plateformes et utilisateurs ne le supportent pas encore. Convertir WebP en JPG garantit que votre image sera ouvrable partout, par tout le monde, dans tous les contextes.",
    whenToConvert: [
      "Partager une image téléchargée depuis le web qui est en WebP",
      "Ouvrir une image WebP dans un logiciel qui ne le supporte pas",
      "Imprimer une image WebP (les imprimantes acceptent mieux le JPG)",
      "Envoyer une image par email à quelqu'un qui pourrait avoir un ancien système",
    ],
    qualityTip: "Utilisez 90-95% de qualité pour minimiser la perte lors de la conversion. Le fichier sera un peu plus lourd que le WebP source, mais compatible partout.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-webp-en-jpg",
      "Sélectionnez votre fichier WebP",
      "Cliquez sur Convertir",
      "Téléchargez votre JPG universel",
    ],
  },
  {
    from: "webp",
    to: "png",
    slug: "comment-convertir-webp-en-png",
    toolPath: "/convertir-webp-en-png",
    why: "Le PNG offre une compatibilité totale et une qualité sans perte. Convertir un WebP en PNG est utile pour éditer une image sans dégradation supplémentaire ou pour l'utiliser dans des logiciels qui ne supportent pas le WebP.",
    whenToConvert: [
      "Éditer une image WebP dans un logiciel de retouche ancien",
      "Conserver une image avec transparence dans un format plus largement supporté",
      "Utiliser une image dans PowerPoint, Word ou d'autres outils bureautiques",
    ],
    qualityTip: "La conversion vers PNG est sans perte. Le fichier sera plus lourd que le WebP source mais ne subira aucune dégradation.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-webp-en-png",
      "Sélectionnez votre fichier WebP",
      "Cliquez sur Convertir",
      "Téléchargez votre PNG",
    ],
  },
  {
    from: "svg",
    to: "png",
    slug: "comment-convertir-svg-en-png",
    toolPath: "/convertir-svg-en-png",
    why: "Le SVG est un format vectoriel qui ne peut pas être utilisé partout. Convertir en PNG permet d'obtenir une image raster à la taille souhaitée, compatible avec tous les logiciels, plateformes et réseaux sociaux.",
    whenToConvert: [
      "Utiliser un logo SVG sur les réseaux sociaux (qui n'acceptent pas le SVG)",
      "Insérer un graphique vectoriel dans un document Word ou PowerPoint",
      "Créer une version raster d'un logo pour l'impression",
      "Obtenir une image à taille fixe à partir d'un fichier vectoriel",
    ],
    qualityTip: "Choisissez une résolution élevée (2x ou 3x la taille d'affichage prévue) pour garantir une netteté parfaite, surtout pour les écrans Retina.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-svg-en-png",
      "Sélectionnez votre fichier SVG",
      "Cliquez sur Convertir",
      "Téléchargez votre PNG haute résolution",
    ],
  },
  {
    from: "png",
    to: "webp",
    slug: "comment-convertir-png-en-webp",
    toolPath: "/convertir-png-en-webp",
    why: "Les fichiers PNG sont souvent très lourds, surtout pour les photos et captures d'écran détaillées. WebP avec compression sans perte produit des fichiers jusqu'à 26% plus légers que PNG, et en mode avec perte, la réduction peut atteindre 80%. Idéal pour optimiser les images de votre site web.",
    whenToConvert: [
      "Optimiser des captures d'écran pour le web",
      "Réduire le poids d'images transparentes sur votre site",
      "Améliorer les performances de chargement de votre blog ou portfolio",
      "Remplacer des PNG lourds par un format moderne équivalent",
    ],
    qualityTip: "Pour les images avec transparence, utilisez le mode sans perte de WebP. Pour les photos, 80-85% de qualité avec perte est idéal.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-png-en-webp",
      "Sélectionnez vos fichiers PNG",
      "Cliquez sur Convertir",
      "Téléchargez vos WebP optimisés",
    ],
  },
  {
    from: "heic",
    to: "pdf",
    slug: "comment-convertir-heic-en-pdf",
    toolPath: "/convertir-heic-en-pdf",
    why: "Convertir des photos HEIC en PDF est utile pour créer des documents partageables, des portfolios, ou préparer des images pour l'impression. Le PDF conserve la mise en page et la qualité, et peut être ouvert partout.",
    whenToConvert: [
      "Créer un document PDF à partir de photos iPhone",
      "Préparer des images pour l'impression professionnelle",
      "Assembler plusieurs photos dans un document unique",
      "Partager des photos dans un format universellement lisible",
    ],
    qualityTip: "Pour l'impression, conservez la résolution maximale. Pour le partage en ligne, une qualité de 85-90% réduit significativement la taille du PDF.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-heic-en-pdf",
      "Sélectionnez vos fichiers HEIC",
      "Cliquez sur Convertir",
      "Téléchargez votre PDF",
    ],
  },
  {
    from: "jpg",
    to: "pdf",
    slug: "comment-convertir-jpg-en-pdf",
    toolPath: "/convertir-jpg-en-pdf",
    why: "Convertir des images JPG en PDF est l'une des opérations les plus courantes : créer un document à partir de photos, scanner des documents, préparer des fichiers pour l'impression ou l'envoi administratif.",
    whenToConvert: [
      "Créer un PDF à partir de photos ou de scans",
      "Envoyer des documents administratifs (pièces d'identité, justificatifs)",
      "Préparer un portfolio ou une présentation",
      "Assembler plusieurs images dans un seul fichier",
    ],
    qualityTip: "Pour les documents texte scannés, une qualité de 85% suffit. Pour les photos haute qualité, utilisez 95% ou plus.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-jpg-en-pdf",
      "Sélectionnez un ou plusieurs fichiers JPG",
      "Cliquez sur Convertir",
      "Téléchargez votre PDF",
    ],
  },
  {
    from: "pdf",
    to: "jpg",
    slug: "comment-convertir-pdf-en-jpg",
    toolPath: "/convertir-pdf-en-jpg",
    why: "Extraire les pages d'un PDF en images JPG permet de les partager facilement sur les réseaux sociaux, de les insérer dans une présentation, ou de les envoyer par messagerie quand le destinataire n'a pas de lecteur PDF.",
    whenToConvert: [
      "Partager une page d'un PDF sur les réseaux sociaux",
      "Insérer une page PDF dans une présentation PowerPoint",
      "Extraire les illustrations ou graphiques d'un document PDF",
      "Créer des miniatures d'un document pour un site web",
    ],
    qualityTip: "Utilisez une résolution de 150 DPI pour l'affichage écran et 300 DPI pour l'impression. Plus la résolution est élevée, plus le fichier sera lourd.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-pdf-en-jpg",
      "Sélectionnez votre fichier PDF",
      "Cliquez sur Convertir",
      "Téléchargez les images JPG de chaque page",
    ],
  },
  {
    from: "tiff",
    to: "jpg",
    slug: "comment-convertir-tiff-en-jpg",
    toolPath: "/convertir-tiff-en-jpg",
    why: "Les fichiers TIFF sont très lourds (souvent 10 à 50 Mo) et ne sont pas affichables dans les navigateurs web. Convertir en JPG réduit drastiquement la taille tout en conservant une bonne qualité visuelle pour le partage et la publication.",
    whenToConvert: [
      "Partager des scans ou des photos professionnelles par email",
      "Publier des images TIFF sur le web ou les réseaux sociaux",
      "Réduire la taille de fichiers TIFF volumineux",
      "Rendre des documents numérisés compatibles avec tous les appareils",
    ],
    qualityTip: "Pour les scans de documents, 85% de qualité suffit. Pour les photos professionnelles, utilisez 92-95% pour conserver les détails.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-tiff-en-jpg",
      "Sélectionnez votre fichier TIFF",
      "Cliquez sur Convertir",
      "Téléchargez votre JPG",
    ],
  },
  {
    from: "bmp",
    to: "jpg",
    slug: "comment-convertir-bmp-en-jpg",
    toolPath: "/convertir-bmp-en-jpg",
    why: "Les fichiers BMP sont extrêmement volumineux car ils ne sont pas compressés. Convertir en JPG réduit la taille du fichier de 90% ou plus, rendant l'image facilement partageable et compatible avec tous les appareils modernes.",
    whenToConvert: [
      "Réduire la taille d'un fichier BMP avant envoi",
      "Publier une image BMP sur le web",
      "Convertir d'anciens fichiers vers un format moderne",
      "Traiter des captures d'écran Windows au format BMP",
    ],
    qualityTip: "90% de qualité JPG est largement suffisant. Le gain de taille sera spectaculaire : un BMP de 30 Mo deviendra un JPG d'environ 2-3 Mo.",
    steps: [
      "Ouvrez heictojpg.fr/convertir-bmp-en-jpg",
      "Sélectionnez votre fichier BMP",
      "Cliquez sur Convertir",
      "Téléchargez votre JPG",
    ],
  },
];

export function getConversion(slug: string): ConversionData | undefined {
  return conversions.find((c) => c.slug === slug);
}

export const conversionSlugs = conversions.map((c) => c.slug);
