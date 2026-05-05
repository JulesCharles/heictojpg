export interface ActionDeviceData {
  action: string;
  actionVerb: string;
  device: string;
  deviceName: string;
  slug: string;
  toolPath: string;
  intro: string;
  methods: {
    title: string;
    steps: string[];
    pros: string;
    cons: string;
  }[];
  tips: string[];
}

export const actionsDevices: ActionDeviceData[] = [
  {
    action: "compresser-image",
    actionVerb: "compresser une image",
    device: "iphone",
    deviceName: "iPhone",
    slug: "compresser-image-sur-iphone",
    toolPath: "/compresser-image",
    intro:
      "Les photos prises avec un iPhone pèsent entre 2 et 8 Mo en HEIC, et jusqu'à 15 Mo en mode 48 MP sur les modèles Pro. Que ce soit pour envoyer des photos par email, les partager sur WhatsApp ou libérer de l'espace, voici toutes les méthodes pour compresser vos images directement depuis votre iPhone.",
    methods: [
      {
        title: "Utiliser heictojpg.fr depuis Safari",
        steps: [
          "Ouvrez Safari sur votre iPhone",
          "Allez sur heictojpg.fr/compresser-image",
          "Appuyez sur le bouton pour sélectionner vos photos",
          "Choisissez les images depuis votre pellicule",
          "Réglez le niveau de qualité (70-80% est optimal)",
          "Téléchargez les images compressées",
        ],
        pros: "Gratuit, sans application à installer, compression réglable",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Envoyer par email (compression automatique iOS)",
        steps: [
          "Ouvrez l'app Photos et sélectionnez votre image",
          "Appuyez sur le bouton Partager",
          "Choisissez Mail",
          "iOS vous propose de choisir la taille : Petite, Moyenne, Grande ou Réelle",
          "Sélectionnez Moyenne ou Petite selon votre besoin",
        ],
        pros: "Intégré à iOS, aucune app nécessaire",
        cons: "Uniquement via email, choix de qualité limité",
      },
      {
        title: "Utiliser l'app Raccourcis d'iOS",
        steps: [
          "Ouvrez l'app Raccourcis",
          "Créez un nouveau raccourci",
          "Ajoutez l'action Redimensionner l'image (ex: largeur 1920px)",
          "Ajoutez Convertir l'image en JPEG avec qualité 0.7",
          "Ajoutez Enregistrer dans l'album photo",
          "Lancez le raccourci depuis le menu Partager de l'app Photos",
        ],
        pros: "Automatisé, réglages personnalisables, fonctionne hors ligne",
        cons: "Configuration initiale nécessaire",
      },
      {
        title: "Passer en format HEIC (prévention)",
        steps: [
          "Allez dans Réglages > Appareil photo > Formats",
          "Sélectionnez Haute efficacité",
          "Vos futures photos seront automatiquement 50% plus légères",
        ],
        pros: "Réduction automatique, aucune perte visible",
        cons: "Ne compresse pas les photos existantes, HEIC moins compatible",
      },
    ],
    tips: [
      "Pour les réseaux sociaux, 70-80% de qualité JPG est largement suffisant car Instagram et Facebook recompressent de toute façon",
      "Pour l'email, visez moins de 2 Mo par photo pour éviter les rejets de serveur",
      "Activez Optimiser le stockage iPhone dans Réglages > Photos pour que iOS gère automatiquement l'espace",
      "Le mode 48 MP des iPhone Pro produit des fichiers 3x plus lourds : désactivez-le si vous n'avez pas besoin de cette résolution",
    ],
  },
  {
    action: "compresser-image",
    actionVerb: "compresser une image",
    device: "mac",
    deviceName: "Mac",
    slug: "compresser-image-sur-mac",
    toolPath: "/compresser-image",
    intro:
      "Sur Mac, vous avez plusieurs options pour réduire la taille de vos images, des outils intégrés à macOS aux solutions en ligne. Que vous ayez une seule photo ou un lot de centaines d'images, voici comment compresser efficacement.",
    methods: [
      {
        title: "Utiliser Aperçu (intégré à macOS)",
        steps: [
          "Ouvrez votre image avec Aperçu (double-clic par défaut)",
          "Allez dans Fichier > Exporter",
          "Choisissez le format JPEG",
          "Ajustez le curseur de qualité (80% est un bon compromis)",
          "Cliquez sur Enregistrer",
        ],
        pros: "Intégré à macOS, gratuit, simple",
        cons: "Pas de traitement batch facile, pas d'aperçu de la taille finale",
      },
      {
        title: "Utiliser heictojpg.fr",
        steps: [
          "Ouvrez heictojpg.fr/compresser-image dans votre navigateur",
          "Glissez-déposez vos images",
          "Réglez la qualité souhaitée",
          "Téléchargez les images compressées",
        ],
        pros: "Traitement de plusieurs images, aperçu du gain de taille, gratuit",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Utiliser sips en Terminal (avancé)",
        steps: [
          "Ouvrez Terminal",
          "Pour compresser un JPG : sips -s formatOptions 80 image.jpg --out compressed.jpg",
          "Pour un lot : for f in *.jpg; do sips -s formatOptions 70 \"$f\" --out \"compressed/$f\"; done",
        ],
        pros: "Puissant, batch facile, scriptable, intégré à macOS",
        cons: "Ligne de commande, pas intuitif pour les débutants",
      },
    ],
    tips: [
      "Aperçu peut aussi redimensionner : Outils > Ajuster la taille pour réduire les dimensions",
      "Pour les photos Retina, diviser les dimensions par 2 suffit souvent pour le web",
      "Le format HEIC natif de macOS est déjà 50% plus léger que JPG à qualité égale",
    ],
  },
  {
    action: "compresser-image",
    actionVerb: "compresser une image",
    device: "windows",
    deviceName: "Windows",
    slug: "compresser-image-sur-windows",
    toolPath: "/compresser-image",
    intro:
      "Windows offre plusieurs solutions pour compresser vos images, de l'outil Paint intégré aux solutions en ligne. Voici les méthodes les plus efficaces pour réduire la taille de vos photos sur PC.",
    methods: [
      {
        title: "Utiliser Paint (intégré à Windows)",
        steps: [
          "Ouvrez votre image avec Paint",
          "Cliquez sur Fichier > Enregistrer sous > Image JPEG",
          "Paint compresse automatiquement en JPEG",
          "Pour réduire davantage : Accueil > Redimensionner > choisissez un pourcentage plus petit",
        ],
        pros: "Intégré à Windows, aucune installation",
        cons: "Pas de contrôle sur la qualité de compression, basique",
      },
      {
        title: "Utiliser heictojpg.fr",
        steps: [
          "Ouvrez heictojpg.fr/compresser-image dans votre navigateur",
          "Glissez-déposez vos images",
          "Ajustez le niveau de qualité",
          "Téléchargez les images compressées",
        ],
        pros: "Contrôle précis de la qualité, traitement batch, gratuit",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Utiliser Photos de Windows 11",
        steps: [
          "Ouvrez votre image dans l'app Photos",
          "Cliquez sur les trois points (...) > Redimensionner",
          "Choisissez une taille prédéfinie ou personnalisée",
          "Enregistrez la copie redimensionnée",
        ],
        pros: "Intégré à Windows 11, interface simple",
        cons: "Options limitées, pas disponible sur Windows 10",
      },
    ],
    tips: [
      "Pour le web, visez une taille finale de 100-200 Ko par image",
      "Redimensionner les dimensions (ex: 1920px de large max) a souvent plus d'impact que la compression seule",
      "Si vous avez des fichiers HEIC depuis un iPhone, convertissez-les d'abord en JPG sur heictojpg.fr",
    ],
  },
  {
    action: "redimensionner-image",
    actionVerb: "redimensionner une image",
    device: "iphone",
    deviceName: "iPhone",
    slug: "redimensionner-image-sur-iphone",
    toolPath: "/redimensionner-image",
    intro:
      "Les photos iPhone sont prises en 12 ou 48 mégapixels, ce qui donne des images de 4032x3024 pixels ou plus. C'est souvent trop grand pour le web, l'email ou les réseaux sociaux. Voici comment redimensionner vos photos directement depuis votre iPhone.",
    methods: [
      {
        title: "Utiliser heictojpg.fr depuis Safari",
        steps: [
          "Ouvrez Safari et allez sur heictojpg.fr/redimensionner-image",
          "Sélectionnez votre photo depuis la pellicule",
          "Entrez les dimensions souhaitées (ex: 1080px pour Instagram)",
          "Téléchargez l'image redimensionnée",
        ],
        pros: "Dimensions précises, gratuit, sans app",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Utiliser l'app Raccourcis d'iOS",
        steps: [
          "Ouvrez Raccourcis et créez un nouveau raccourci",
          "Ajoutez Sélectionner des photos",
          "Ajoutez Redimensionner l'image avec la largeur souhaitée",
          "Ajoutez Enregistrer dans l'album photo",
          "Exécutez le raccourci",
        ],
        pros: "Fonctionne hors ligne, automatisable, réutilisable",
        cons: "Configuration initiale",
      },
    ],
    tips: [
      "Instagram : 1080x1080 (carré), 1080x1350 (portrait), 1080x566 (paysage)",
      "Facebook : 1200x630 pour les publications, 820x312 pour la couverture",
      "LinkedIn : 1200x627 pour les publications, 1584x396 pour la bannière",
      "Email : 800-1200px de large est généralement suffisant",
    ],
  },
  {
    action: "redimensionner-image",
    actionVerb: "redimensionner une image",
    device: "mac",
    deviceName: "Mac",
    slug: "redimensionner-image-sur-mac",
    toolPath: "/redimensionner-image",
    intro:
      "macOS intègre plusieurs outils pour redimensionner vos images, d'Aperçu au Terminal. Que vous ayez besoin de redimensionner une seule photo ou un lot entier, voici les meilleures méthodes.",
    methods: [
      {
        title: "Utiliser Aperçu",
        steps: [
          "Ouvrez votre image avec Aperçu",
          "Allez dans Outils > Ajuster la taille",
          "Entrez les nouvelles dimensions (décochez Échantillonner l'image pour juste changer la résolution)",
          "Cliquez sur OK puis Fichier > Enregistrer",
        ],
        pros: "Intégré à macOS, simple, rapide",
        cons: "Pas idéal pour le batch (mais possible en sélectionnant plusieurs images)",
      },
      {
        title: "Utiliser heictojpg.fr",
        steps: [
          "Ouvrez heictojpg.fr/redimensionner-image",
          "Glissez votre image",
          "Définissez les dimensions ou le pourcentage",
          "Téléchargez",
        ],
        pros: "Interface claire avec aperçu, gratuit",
        cons: "Connexion internet nécessaire",
      },
      {
        title: "Utiliser sips en Terminal",
        steps: [
          "Ouvrez Terminal",
          "sips --resampleWidth 1920 image.jpg --out resized.jpg",
          "Pour un lot : for f in *.jpg; do sips --resampleWidth 1920 \"$f\" --out \"resized/$f\"; done",
        ],
        pros: "Très rapide en batch, scriptable",
        cons: "Ligne de commande",
      },
    ],
    tips: [
      "Aperçu gère aussi le batch : sélectionnez plusieurs images dans le Finder, ouvrez-les toutes dans Aperçu, sélectionnez-les dans la barre latérale, puis Outils > Ajuster la taille",
      "Pour les écrans Retina, exportez à 2x la taille d'affichage prévue",
    ],
  },
  {
    action: "redimensionner-image",
    actionVerb: "redimensionner une image",
    device: "windows",
    deviceName: "Windows",
    slug: "redimensionner-image-sur-windows",
    toolPath: "/redimensionner-image",
    intro:
      "Besoin de réduire la taille d'une photo pour l'envoyer par email ou la publier en ligne ? Windows propose plusieurs solutions, des outils intégrés aux services en ligne.",
    methods: [
      {
        title: "Utiliser Paint",
        steps: [
          "Ouvrez votre image dans Paint",
          "Cliquez sur Accueil > Redimensionner",
          "Choisissez Pixels ou Pourcentage",
          "Entrez les nouvelles dimensions",
          "Enregistrez (Fichier > Enregistrer sous > JPEG)",
        ],
        pros: "Intégré à Windows, simple",
        cons: "Basique, pas de batch",
      },
      {
        title: "Utiliser heictojpg.fr",
        steps: [
          "Ouvrez heictojpg.fr/redimensionner-image",
          "Sélectionnez votre image",
          "Entrez les dimensions",
          "Téléchargez",
        ],
        pros: "Interface intuitive, gratuit",
        cons: "Connexion internet",
      },
      {
        title: "Utiliser PowerToys (Microsoft)",
        steps: [
          "Installez Microsoft PowerToys depuis le Microsoft Store",
          "Activez le module Image Resizer dans les paramètres",
          "Clic droit sur une image (ou plusieurs) dans l'Explorateur",
          "Choisissez Redimensionner les images",
          "Sélectionnez une taille prédéfinie ou personnalisée",
        ],
        pros: "Batch facile, intégré à l'Explorateur, gratuit (Microsoft)",
        cons: "Installation nécessaire",
      },
    ],
    tips: [
      "PowerToys Image Resizer est la meilleure solution gratuite pour le batch sur Windows",
      "Pour les photos d'identité : 35x45mm à 300 DPI = 413x531 pixels",
    ],
  },
  {
    action: "convertir-heic",
    actionVerb: "convertir un fichier HEIC",
    device: "windows",
    deviceName: "Windows",
    slug: "convertir-heic-sur-windows",
    toolPath: "/convertir-heic-en-jpg",
    intro:
      "Windows ne supporte pas nativement le format HEIC d'Apple. Si vous avez reçu ou transféré des photos iPhone sur votre PC, vous ne pourrez probablement pas les ouvrir. Voici les meilleures solutions gratuites pour convertir vos fichiers HEIC en JPG sur Windows.",
    methods: [
      {
        title: "Convertir en ligne avec heictojpg.fr",
        steps: [
          "Ouvrez heictojpg.fr/convertir-heic-en-jpg dans votre navigateur",
          "Glissez-déposez vos fichiers HEIC",
          "Cliquez sur Convertir",
          "Téléchargez vos JPG",
        ],
        pros: "Gratuit, sans installation, rapide, batch possible",
        cons: "Connexion internet nécessaire",
      },
      {
        title: "Installer l'extension HEIF via le Microsoft Store",
        steps: [
          "Ouvrez le Microsoft Store",
          "Recherchez HEIF Image Extensions",
          "Installez l'extension gratuite de Microsoft",
          "Vos fichiers HEIC s'ouvriront désormais dans l'app Photos",
        ],
        pros: "Solution permanente, intégrée à Windows",
        cons: "Ne convertit pas les fichiers, les rend juste lisibles",
      },
      {
        title: "Configurer l'iPhone pour transférer en JPG",
        steps: [
          "Sur votre iPhone : Réglages > Photos",
          "Dans Transfert vers Mac ou PC, sélectionnez Automatique",
          "Les futurs transferts seront automatiquement convertis en JPG",
        ],
        pros: "Solution à la source, aucune conversion ultérieure",
        cons: "Ne s'applique qu'aux futurs transferts",
      },
    ],
    tips: [
      "L'extension HEVC Video Extensions peut aussi être nécessaire pour certains fichiers",
      "Si vous transférez régulièrement des photos depuis un iPhone, configurez le transfert automatique en JPG",
      "Les fichiers .HEIC et .HEIF sont le même format, seule l'extension diffère",
    ],
  },
  {
    action: "convertir-heic",
    actionVerb: "convertir un fichier HEIC",
    device: "android",
    deviceName: "Android",
    slug: "convertir-heic-sur-android",
    toolPath: "/convertir-heic-en-jpg",
    intro:
      "Vous avez reçu des photos d'un ami qui utilise un iPhone et vous ne pouvez pas les ouvrir sur votre téléphone Android ? Les fichiers HEIC ne sont pas toujours bien supportés sur Android. Voici comment les convertir.",
    methods: [
      {
        title: "Utiliser heictojpg.fr depuis Chrome",
        steps: [
          "Ouvrez Chrome sur votre Android",
          "Allez sur heictojpg.fr/convertir-heic-en-jpg",
          "Sélectionnez les fichiers HEIC",
          "Convertissez et téléchargez les JPG",
        ],
        pros: "Gratuit, sans app, fonctionne sur tous les Android",
        cons: "Connexion internet nécessaire",
      },
      {
        title: "Demander à l'expéditeur d'envoyer en JPG",
        steps: [
          "L'utilisateur iPhone va dans Réglages > Appareil photo > Formats",
          "Il sélectionne Le plus compatible",
          "Ou bien : Réglages > Photos > Transfert > Automatique",
        ],
        pros: "Solution à la source, pas de manipulation de votre côté",
        cons: "Dépend de l'autre personne",
      },
      {
        title: "Utiliser Google Photos",
        steps: [
          "Ouvrez le fichier HEIC dans Google Photos (si supporté par votre version)",
          "Partagez la photo ou exportez-la, Google la convertira automatiquement",
        ],
        pros: "Déjà installé sur la plupart des Android",
        cons: "Le support HEIC varie selon la version d'Android et le fabricant",
      },
    ],
    tips: [
      "Android 10+ supporte partiellement le HEIC, mais le niveau de support dépend du fabricant",
      "Samsung, Google Pixel et OnePlus ont généralement un meilleur support HEIC que les autres marques",
      "Si vous recevez régulièrement des HEIC, ajoutez heictojpg.fr en favori dans Chrome",
    ],
  },
  {
    action: "supprimer-fond",
    actionVerb: "supprimer le fond d'une image",
    device: "iphone",
    deviceName: "iPhone",
    slug: "supprimer-fond-image-sur-iphone",
    toolPath: "/supprimer-fond-image",
    intro:
      "Depuis iOS 16, l'iPhone intègre une fonction native de détourage automatique. Mais il existe aussi d'autres méthodes pour supprimer le fond d'une image directement depuis votre téléphone Apple.",
    methods: [
      {
        title: "Utiliser la fonction native iOS 16+ (appui long)",
        steps: [
          "Ouvrez votre photo dans l'app Photos",
          "Appuyez longuement sur le sujet de la photo",
          "Le sujet se découpe automatiquement avec un effet de brillance",
          "Appuyez sur Copier ou Partager pour utiliser le sujet détouré",
        ],
        pros: "Intégré à iOS, très rapide, fonctionne hors ligne",
        cons: "Pas d'export direct en PNG transparent, résultat variable",
      },
      {
        title: "Utiliser heictojpg.fr depuis Safari",
        steps: [
          "Ouvrez Safari et allez sur heictojpg.fr/supprimer-fond-image",
          "Sélectionnez votre photo",
          "L'IA supprime le fond automatiquement",
          "Téléchargez le résultat en PNG transparent",
        ],
        pros: "Export PNG transparent, IA performante, gratuit",
        cons: "Connexion internet nécessaire",
      },
    ],
    tips: [
      "La fonction native iOS fonctionne mieux avec des sujets bien définis (personnes, animaux, objets)",
      "Pour un fond transparent réel (PNG), utilisez heictojpg.fr car la méthode native ne produit pas de fichier PNG directement",
      "Utilisez un fond uni clair pour de meilleurs résultats de détourage",
    ],
  },
  {
    action: "supprimer-fond",
    actionVerb: "supprimer le fond d'une image",
    device: "mac",
    deviceName: "Mac",
    slug: "supprimer-fond-image-sur-mac",
    toolPath: "/supprimer-fond-image",
    intro:
      "Que vous souhaitiez détourer un produit pour votre boutique en ligne, isoler un logo ou créer un montage photo, voici les meilleures méthodes pour supprimer l'arrière-plan d'une image sur Mac.",
    methods: [
      {
        title: "Utiliser Aperçu (macOS Ventura+)",
        steps: [
          "Ouvrez votre image avec Aperçu",
          "Utilisez l'outil Baguette magique (barre d'outils d'annotation)",
          "Cliquez sur le fond à supprimer",
          "Appuyez sur Supprimer",
          "Exportez en PNG pour conserver la transparence",
        ],
        pros: "Intégré à macOS, gratuit",
        cons: "Résultat basique, contours parfois imprécis",
      },
      {
        title: "Utiliser heictojpg.fr",
        steps: [
          "Allez sur heictojpg.fr/supprimer-fond-image",
          "Glissez votre image",
          "L'IA détoure automatiquement le sujet",
          "Téléchargez le PNG avec fond transparent",
        ],
        pros: "IA performante, résultat professionnel, gratuit",
        cons: "Connexion internet",
      },
    ],
    tips: [
      "Pour les photos de produits e-commerce, un fond blanc ou uni donne les meilleurs résultats de détourage",
      "Exportez toujours en PNG pour conserver la transparence (le JPG ne la supporte pas)",
    ],
  },
  {
    action: "supprimer-fond",
    actionVerb: "supprimer le fond d'une image",
    device: "windows",
    deviceName: "Windows",
    slug: "supprimer-fond-image-sur-windows",
    toolPath: "/supprimer-fond-image",
    intro:
      "Sur Windows, vous avez plusieurs options pour supprimer le fond d'une image, de Paint 3D aux outils en ligne basés sur l'IA. Voici les méthodes les plus efficaces.",
    methods: [
      {
        title: "Utiliser Paint (Windows 11 avec Copilot)",
        steps: [
          "Ouvrez votre image dans Paint",
          "Cliquez sur l'outil Supprimer l'arrière-plan dans la barre d'outils",
          "Paint supprime automatiquement le fond",
          "Enregistrez en PNG",
        ],
        pros: "Intégré à Windows 11, gratuit, simple",
        cons: "Uniquement Windows 11 récent, qualité variable",
      },
      {
        title: "Utiliser heictojpg.fr",
        steps: [
          "Ouvrez heictojpg.fr/supprimer-fond-image",
          "Sélectionnez votre image",
          "L'IA supprime le fond automatiquement",
          "Téléchargez le PNG transparent",
        ],
        pros: "IA performante, fonctionne sur tout Windows, gratuit",
        cons: "Connexion internet",
      },
      {
        title: "Utiliser PowerPoint",
        steps: [
          "Insérez votre image dans PowerPoint",
          "Sélectionnez l'image > Format > Supprimer l'arrière-plan",
          "Ajustez les zones (vert = garder, rouge = supprimer)",
          "Clic droit > Enregistrer en tant qu'image (PNG)",
        ],
        pros: "Déjà installé sur la plupart des PC, contrôle manuel",
        cons: "Pas toujours précis, processus un peu long",
      },
    ],
    tips: [
      "Paint sous Windows 11 24H2+ intègre un bouton de suppression de fond par IA directement dans la barre d'outils",
      "Si vous n'avez pas Windows 11, heictojpg.fr est la meilleure option gratuite",
      "Enregistrez toujours en PNG pour conserver la transparence",
    ],
  },
];

export function getActionDevice(slug: string): ActionDeviceData | undefined {
  return actionsDevices.find((ad) => ad.slug === slug);
}

export const actionDeviceSlugs = actionsDevices.map((ad) => ad.slug);
