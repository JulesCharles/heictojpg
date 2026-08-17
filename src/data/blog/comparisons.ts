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
  title?: string;
  excerpt?: string;
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
  {
    formatA: "heic",
    formatB: "avif",
    slug: "heic-vs-avif",
    verdict:
      "Le HEIC et l'AVIF sont deux formats modernes offrant une compression excellente, mais avec des philosophies differentes. Le HEIC est ancre dans l'ecosysteme Apple avec un support natif sur iPhone et Mac, tandis que l'AVIF est un format libre, mieux supporte sur le web. Pour les utilisateurs Apple, le HEIC reste pratique au quotidien. Pour le web et les projets multiplateformes, l'AVIF est le choix d'avenir.",
    criteria: [
      { name: "Compression", a: "Excellente (codec HEVC)", b: "Excellente (codec AV1, legerement meilleur)", winner: "b" },
      { name: "Qualite d'image", a: "16 bits, tres bonne", b: "10-12 bits, excellente a bas debit", winner: "tie" },
      { name: "HDR", a: "Oui (Dolby Vision, HDR10)", b: "Oui (HDR10, PQ, HLG)", winner: "tie" },
      { name: "Support web", a: "Safari uniquement", b: "Chrome, Firefox, Safari 16.4+", winner: "b" },
      { name: "Support mobile", a: "Natif sur iOS", b: "Android 12+, iOS limite", winner: "a" },
      { name: "Brevets", a: "HEVC (brevets, licences couteuses)", b: "Libre de droits (AOM)", winner: "b" },
      { name: "Ecosysteme Apple", a: "Parfaitement integre", b: "Support limite", winner: "a" },
    ],
    useA: [
      "Stockage de photos sur iPhone et iPad (format natif)",
      "Synchronisation entre appareils Apple via iCloud",
      "Conservation des Live Photos et donnees de profondeur",
      "Archivage dans un flux de travail 100% Apple",
    ],
    useB: [
      "Publication d'images sur le web avec compression maximale",
      "Projets open source et multiplateformes",
      "Sites web modernes visant les meilleurs Core Web Vitals",
      "Contenu HDR pour ecrans compatibles sur le web",
    ],
  },
  {
    formatA: "gif",
    formatB: "webp",
    slug: "gif-vs-webp",
    verdict:
      "Le GIF est un format historique universellement reconnu, mais techniquement depasse. Le WebP offre des animations plus legeres (jusqu'a 60-80% de reduction), plus de couleurs, et une meilleure qualite. Pour le web moderne, le WebP anime remplace avantageusement le GIF. Le GIF reste pertinent pour les messageries et les usages ou la compatibilite absolue est requise.",
    criteria: [
      { name: "Taille animation", a: "Tres lourd (souvent 5-20 Mo)", b: "60-80% plus leger que le GIF", winner: "b" },
      { name: "Qualite d'image", a: "Limitee (tramage visible)", b: "Nettement superieure", winner: "b" },
      { name: "Couleurs", a: "256 couleurs maximum", b: "16,7 millions de couleurs (24 bits)", winner: "b" },
      { name: "Transparence", a: "Binaire (oui/non, pas de semi-transparence)", b: "Canal alpha complet (semi-transparence)", winner: "b" },
      { name: "Support navigateurs", a: "Tous sans exception", b: "Tous les modernes (95%+)", winner: "a" },
      { name: "Support messagerie", a: "Universel (iMessage, WhatsApp, Slack, etc.)", b: "Limite (peu de messageries)", winner: "a" },
      { name: "Creation", a: "Tres simple, outils partout", b: "Plus technique, moins d'outils dedies", winner: "a" },
    ],
    useA: [
      "Partage de reactions et memes sur les messageries",
      "Emails marketing (compatibilite maximale des clients mail)",
      "Animations simples avec peu de couleurs",
      "Plateformes qui n'acceptent pas le WebP (Giphy, Tenor)",
    ],
    useB: [
      "Animations sur un site web ou un blog",
      "Remplacement de GIF lourds pour ameliorer la performance",
      "Animations avec des degradees, photos ou beaucoup de couleurs",
      "Optimisation du temps de chargement et des Core Web Vitals",
    ],
  },
  {
    formatA: "tiff",
    formatB: "jpg",
    slug: "tiff-vs-jpg",
    verdict:
      "Le TIFF est le format de reference pour l'impression professionnelle et l'archivage : qualite sans perte, support des calques et des profils colorimétriques avances. Le JPG est ideal pour le partage, le web et les usages courants grace a sa compression efficace et sa compatibilite universelle. Le choix depend de votre objectif : qualite maximale (TIFF) ou praticite (JPG).",
    criteria: [
      { name: "Compression", a: "Sans perte (ou non compresse)", b: "Avec perte (reglable)", winner: "b" },
      { name: "Qualite", a: "Parfaite, aucune degradation", b: "Bonne, mais artefacts possibles", winner: "a" },
      { name: "Taille fichier", a: "Tres lourd (20-100 Mo par photo)", b: "Leger (1-5 Mo par photo)", winner: "b" },
      { name: "Impression pro", a: "Standard de l'industrie (CMJN, 16 bits)", b: "Acceptable mais limite (RVB, 8 bits)", winner: "a" },
      { name: "Support logiciels", a: "Photoshop, Lightroom, InDesign, GIMP", b: "Tous les logiciels sans exception", winner: "b" },
      { name: "Support web", a: "Non supporte par les navigateurs", b: "Universel", winner: "b" },
      { name: "Metadonnees", a: "Tres riches (calques, profils ICC, annotations)", b: "EXIF standard", winner: "a" },
    ],
    useA: [
      "Impression professionnelle (affiches, magazines, livres photo)",
      "Archivage de photos en qualite maximale sans perte",
      "Flux de travail PAO (InDesign, QuarkXPress)",
      "Numerisation de documents et d'oeuvres d'art",
    ],
    useB: [
      "Partage de photos par email ou messagerie",
      "Publication sur le web et les reseaux sociaux",
      "Stockage de photos personnelles avec un bon ratio qualite/taille",
      "Usage dans des applications bureautiques (Word, PowerPoint)",
    ],
  },
  {
    formatA: "pdf",
    formatB: "jpg",
    slug: "pdf-vs-jpg",
    verdict:
      "Le PDF et le JPG sont des formats complementaires avec des usages tres differents. Le PDF excelle pour les documents multi-pages, les textes et les mises en page complexes. Le JPG est le format ideal pour les images individuelles et le partage visuel. Choisissez le PDF pour les documents, le JPG pour les photos.",
    criteria: [
      { name: "Type de contenu", a: "Documents, textes, mises en page", b: "Images et photographies", winner: "tie" },
      { name: "Multi-pages", a: "Oui (illimite)", b: "Non (une seule image)", winner: "a" },
      { name: "Texte selectionnable", a: "Oui (texte natif ou OCR)", b: "Non (pixels uniquement)", winner: "a" },
      { name: "Taille fichier", a: "Variable (souvent lourd si images)", b: "Leger pour les photos", winner: "b" },
      { name: "Partage", a: "Excellent pour les documents officiels", b: "Excellent pour les photos et visuels", winner: "tie" },
      { name: "Impression", a: "Mise en page fidele (WYSIWYG)", b: "Bonne qualite photo", winner: "a" },
      { name: "Edition", a: "Difficile sans logiciel dedie", b: "Simple avec tout editeur d'image", winner: "b" },
    ],
    useA: [
      "Documents officiels (contrats, factures, CV)",
      "Presentations et rapports multi-pages",
      "Portfolios et catalogues avec mise en page complexe",
      "Archivage de documents avec texte selectionnable",
    ],
    useB: [
      "Partage de photos individuelles",
      "Images pour le web et les reseaux sociaux",
      "Miniatures et aperçus visuels",
      "Photos produit pour le e-commerce",
    ],
    title: "PDF vs JPG : Quelle Différence ? Quel Format Choisir en 2026",
    excerpt: "PDF ou JPG pour vos documents et photos ? On compare qualité, poids, compatibilité et impression. Avec des exemples concrets pour choisir le bon format selon votre usage.",
  },
];

export function getComparison(slug: string): ComparisonData | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export const comparisonSlugs = comparisons.map((c) => c.slug);
