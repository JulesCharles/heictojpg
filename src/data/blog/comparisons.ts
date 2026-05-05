export interface ComparisonData {
  formatA: string;
  formatB: string;
  slug: string;
  verdict: string;
  criteria: {
    name: string;
    a: string;
    b: string;
    winner: "a" | "b" | "tie";
  }[];
  useA: string[];
  useB: string[];
}

export const comparisons: ComparisonData[] = [
  {
    formatA: "heic",
    formatB: "jpg",
    slug: "heic-vs-jpg",
    verdict:
      "Le HEIC est techniquement supérieur (meilleure compression, plus de fonctionnalités) mais le JPG reste incontournable pour le partage grâce à sa compatibilité universelle. Gardez vos photos en HEIC sur iPhone, convertissez en JPG pour partager.",
    criteria: [
      { name: "Compression", a: "50% plus léger que JPG", b: "Standard, fichiers plus lourds", winner: "a" },
      { name: "Compatibilité", a: "Apple uniquement", b: "Universelle (tous appareils)", winner: "b" },
      { name: "Qualité d'image", a: "16 bits, plus de détails", b: "8 bits, artefacts à forte compression", winner: "a" },
      { name: "Transparence", a: "Oui", b: "Non", winner: "a" },
      { name: "Support web", a: "Safari uniquement", b: "Tous les navigateurs", winner: "b" },
      { name: "Retouche photo", a: "Peu de logiciels compatibles", b: "Tous les logiciels", winner: "b" },
      { name: "Animation", a: "Oui (Live Photos)", b: "Non", winner: "a" },
      { name: "Métadonnées", a: "Étendues (profondeur, HDR)", b: "EXIF standard", winner: "a" },
    ],
    useA: [
      "Stockage de photos sur iPhone et iPad pour économiser de l'espace",
      "Synchronisation via iCloud entre appareils Apple",
      "Conservation des Live Photos et données de profondeur",
      "Archivage haute qualité quand on reste dans l'écosystème Apple",
    ],
    useB: [
      "Partage de photos avec des utilisateurs non-Apple",
      "Publication sur le web, les réseaux sociaux ou par email",
      "Impression photo dans un laboratoire en ligne",
      "Utilisation dans des logiciels de retouche ou de bureautique",
    ],
  },
  {
    formatA: "png",
    formatB: "jpg",
    slug: "png-vs-jpg",
    verdict:
      "Le PNG est idéal pour les logos, icônes et images avec transparence ou texte. Le JPG est meilleur pour les photographies et les images réalistes. Le choix dépend du contenu de l'image, pas d'une préférence générale.",
    criteria: [
      { name: "Compression", a: "Sans perte (fichiers lourds)", b: "Avec perte (fichiers légers)", winner: "b" },
      { name: "Qualité", a: "Parfaite (pixel-perfect)", b: "Bonne mais dégradation possible", winner: "a" },
      { name: "Transparence", a: "Oui (canal alpha)", b: "Non", winner: "a" },
      { name: "Taille photo", a: "5-15 Mo pour une photo", b: "1-5 Mo pour une photo", winner: "b" },
      { name: "Taille logo", a: "5-50 Ko (très léger)", b: "10-100 Ko (artefacts visibles)", winner: "a" },
      { name: "Texte et lignes", a: "Netteté parfaite", b: "Flou et artefacts possibles", winner: "a" },
      { name: "Photos", a: "Trop lourd, inutilement", b: "Compromis idéal poids/qualité", winner: "b" },
    ],
    useA: [
      "Logos, icônes et favicons avec fond transparent",
      "Captures d'écran contenant du texte ou du code",
      "Infographies, schémas et illustrations avec aplats de couleur",
      "Images pour le design (Figma, Photoshop, Canva) nécessitant de la précision",
    ],
    useB: [
      "Photographies (portraits, paysages, produits)",
      "Images de blog et d'articles",
      "Photos de profil et couvertures de réseaux sociaux",
      "Toute image réaliste où il faut limiter la taille du fichier",
    ],
  },
  {
    formatA: "webp",
    formatB: "jpg",
    slug: "webp-vs-jpg",
    verdict:
      "Le WebP est objectivement supérieur au JPG pour le web : fichiers plus légers, support de la transparence, recommandé par Google. Si votre audience utilise des navigateurs modernes (ce qui est le cas pour 95%+ des utilisateurs en 2026), privilégiez le WebP.",
    criteria: [
      { name: "Compression", a: "25-35% plus léger que JPG", b: "Standard", winner: "a" },
      { name: "Qualité", a: "Excellente à taille équivalente", b: "Bonne", winner: "a" },
      { name: "Transparence", a: "Oui", b: "Non", winner: "a" },
      { name: "Animation", a: "Oui", b: "Non", winner: "a" },
      { name: "Support navigateurs", a: "Tous les modernes (95%+)", b: "Absolument tous", winner: "b" },
      { name: "Support logiciels", a: "Moyen (en progrès)", b: "Universel", winner: "b" },
      { name: "SEO Google", a: "Recommandé par Google", b: "Bien supporté", winner: "a" },
      { name: "Vitesse d'encodage", a: "Plus lent", b: "Très rapide", winner: "b" },
    ],
    useA: [
      "Toutes les images d'un site web ou d'un blog",
      "Optimisation des Core Web Vitals et du score PageSpeed",
      "Remplacement des GIF animés par des animations plus légères",
      "Images avec transparence sur le web (alternative au PNG)",
    ],
    useB: [
      "Partage par email avec des destinataires potentiellement sur de vieux systèmes",
      "Upload sur des plateformes qui n'acceptent pas le WebP",
      "Impression photo (les labos acceptent mieux le JPG)",
      "Quand la compatibilité absolue est prioritaire sur la performance",
    ],
  },
  {
    formatA: "avif",
    formatB: "webp",
    slug: "avif-vs-webp",
    verdict:
      "L'AVIF offre une compression nettement supérieure au WebP (20-30% plus léger) et supporte le HDR. Cependant, l'encodage est plus lent et le support navigateur est moins complet. L'AVIF est le futur, le WebP est le présent stable.",
    criteria: [
      { name: "Compression", a: "20-30% plus léger que WebP", b: "25-35% plus léger que JPG", winner: "a" },
      { name: "Qualité", a: "Excellente, surtout à bas débit", b: "Très bonne", winner: "a" },
      { name: "HDR", a: "Oui (10/12 bits)", b: "Non (8 bits)", winner: "a" },
      { name: "Support navigateurs", a: "Chrome, Firefox, Safari 16.4+", b: "Tous les modernes depuis 2020", winner: "b" },
      { name: "Vitesse d'encodage", a: "Très lent", b: "Rapide", winner: "b" },
      { name: "Brevets", a: "Libre de droits", b: "Google (VP8)", winner: "a" },
      { name: "Maturité", a: "Relativement récent (2019)", b: "Mature et stable (2010)", winner: "b" },
    ],
    useA: [
      "Sites web haut de gamme ciblant des navigateurs récents",
      "Portfolios photo où la qualité d'image est critique",
      "Contenu HDR pour écrans compatibles",
      "Applications progressives (PWA) visant la performance maximale",
    ],
    useB: [
      "Sites web grand public avec un large spectre d'utilisateurs",
      "Quand la vitesse d'encodage est importante (génération dynamique)",
      "Blogs et sites de contenu où la stabilité prime",
      "Projets où la compatibilité navigateur doit être maximale",
    ],
  },
  {
    formatA: "png",
    formatB: "webp",
    slug: "png-vs-webp",
    verdict:
      "Le WebP sans perte est 26% plus léger que le PNG, et en mode avec perte, la réduction atteint 60-80%. Les deux supportent la transparence. Pour le web, le WebP est clairement supérieur. Pour le design et l'archivage, le PNG reste un choix solide par sa simplicité et sa compatibilité logicielle.",
    criteria: [
      { name: "Taille fichier (sans perte)", a: "Référence", b: "26% plus léger", winner: "b" },
      { name: "Taille fichier (avec perte)", a: "N/A (PNG est sans perte)", b: "60-80% plus léger", winner: "b" },
      { name: "Transparence", a: "Oui (canal alpha complet)", b: "Oui (canal alpha complet)", winner: "tie" },
      { name: "Qualité", a: "Parfaite (sans perte)", b: "Excellente (modes lossy et lossless)", winner: "tie" },
      { name: "Support logiciels", a: "Universel", b: "Bon mais pas universel", winner: "a" },
      { name: "Support navigateurs", a: "Tous", b: "Tous les modernes (95%+)", winner: "a" },
      { name: "SEO", a: "Bon", b: "Recommandé par Google", winner: "b" },
    ],
    useA: [
      "Design et retouche photo (Figma, Photoshop, Canva)",
      "Captures d'écran pour documentation technique",
      "Archivage d'images en qualité parfaite",
      "Échange avec des logiciels qui ne supportent pas le WebP",
    ],
    useB: [
      "Toutes les images d'un site web (photos, logos, icônes)",
      "Remplacement des PNG lourds pour améliorer le temps de chargement",
      "Images avec transparence pour le web",
      "Optimisation SEO et Core Web Vitals",
    ],
  },
  {
    formatA: "heic",
    formatB: "webp",
    slug: "heic-vs-webp",
    verdict:
      "Le HEIC est optimisé pour le stockage mobile (iPhone), le WebP pour le web. Ils ont des compressions comparables mais des écosystèmes différents. Si vous publiez sur le web, convertissez en WebP. Si vous restez sur Apple, gardez HEIC.",
    criteria: [
      { name: "Compression", a: "Excellente (codec HEVC)", b: "Très bonne (codec VP8)", winner: "tie" },
      { name: "Qualité", a: "16 bits, HDR possible", b: "8 bits, pas de HDR", winner: "a" },
      { name: "Support web", a: "Safari uniquement", b: "Tous les navigateurs modernes", winner: "b" },
      { name: "Écosystème", a: "Apple (iPhone, Mac, iPad)", b: "Web (tous appareils)", winner: "tie" },
      { name: "Transparence", a: "Oui", b: "Oui", winner: "tie" },
      { name: "Animation", a: "Oui (Live Photos)", b: "Oui", winner: "tie" },
      { name: "Brevets", a: "HEVC (brevets)", b: "VP8 (Google, plus ouvert)", winner: "b" },
    ],
    useA: [
      "Stockage natif sur iPhone (format par défaut)",
      "Synchronisation iCloud",
      "Photos avec Live Photos et données de profondeur",
    ],
    useB: [
      "Publication d'images sur le web",
      "Optimisation de sites web et blogs",
      "Partage multi-plateforme",
    ],
  },
  {
    formatA: "avif",
    formatB: "jpg",
    slug: "avif-vs-jpg",
    verdict:
      "L'AVIF est techniquement bien supérieur au JPG sur tous les aspects de compression et de qualité. Cependant, le JPG reste plus compatible et plus rapide à encoder. Pour les sites web modernes, l'AVIF est le meilleur choix. Pour le partage universel, le JPG reste roi.",
    criteria: [
      { name: "Compression", a: "50-60% plus léger que JPG", b: "Standard", winner: "a" },
      { name: "Qualité", a: "Supérieure (10-12 bits, HDR)", b: "Bonne (8 bits)", winner: "a" },
      { name: "Transparence", a: "Oui", b: "Non", winner: "a" },
      { name: "Support navigateurs", a: "Majeurs (Chrome, FF, Safari 16.4+)", b: "Tous sans exception", winner: "b" },
      { name: "Vitesse encodage", a: "Très lent", b: "Instantané", winner: "b" },
      { name: "Support logiciels", a: "Limité", b: "Universel", winner: "b" },
    ],
    useA: [
      "Sites web performants visant le meilleur score PageSpeed",
      "Galeries photo en ligne où la qualité est prioritaire",
      "Applications web modernes (PWA)",
    ],
    useB: [
      "Partage universel (email, messagerie, réseaux sociaux)",
      "Impression photo",
      "Compatibilité avec tous les logiciels et plateformes",
    ],
  },
  {
    formatA: "svg",
    formatB: "png",
    slug: "svg-vs-png",
    verdict:
      "Le SVG est idéal pour les graphiques vectoriels (logos, icônes, illustrations simples) : il est infiniment redimensionnable et souvent plus léger. Le PNG est nécessaire pour les images raster (photos, captures d'écran) ou les illustrations très complexes.",
    criteria: [
      { name: "Type", a: "Vectoriel (formes géométriques)", b: "Raster (pixels)", winner: "tie" },
      { name: "Redimensionnement", a: "Infini, sans perte", b: "Perte de qualité en agrandissant", winner: "a" },
      { name: "Taille (logos)", a: "1-10 Ko", b: "10-100 Ko", winner: "a" },
      { name: "Taille (photos)", a: "Énorme ou impossible", b: "5-15 Mo", winner: "b" },
      { name: "Interactivité", a: "CSS, JavaScript, animations", b: "Image statique", winner: "a" },
      { name: "Compatibilité", a: "Web et logiciels vectoriels", b: "Universelle", winner: "b" },
    ],
    useA: [
      "Logos de sites web et d'applications",
      "Icônes et éléments d'interface (UI)",
      "Graphiques, schémas et diagrammes",
      "Illustrations simples et responsive design",
    ],
    useB: [
      "Photographies et images réalistes",
      "Captures d'écran et screenshots",
      "Illustrations très détaillées",
      "Export final d'un logo pour les réseaux sociaux",
    ],
  },
];

export function getComparison(slug: string): ComparisonData | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export const comparisonSlugs = comparisons.map((c) => c.slug);
