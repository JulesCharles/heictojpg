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
  {
    action: "compresser-image",
    actionVerb: "compresser une image",
    device: "android",
    deviceName: "Android",
    slug: "compresser-image-sur-android",
    toolPath: "/compresser-image",
    intro:
      "Les smartphones Android prennent des photos de plus en plus lourdes, souvent entre 3 et 12 Mo selon le capteur. Pour les envoyer par messagerie, les uploader sur un site ou libérer de l'espace de stockage, il est souvent nécessaire de compresser vos images. Voici les meilleures méthodes sur Android.",
    methods: [
      {
        title: "Utiliser heictojpg.fr depuis Chrome",
        steps: [
          "Ouvrez Chrome sur votre téléphone Android",
          "Allez sur heictojpg.fr/compresser-image",
          "Appuyez sur le bouton pour sélectionner vos photos depuis la galerie",
          "Réglez le curseur de qualité (70-80% offre un bon équilibre taille/qualité)",
          "Téléchargez les images compressées dans votre dossier Téléchargements",
        ],
        pros: "Gratuit, sans installation, contrôle précis de la qualité, batch possible",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Partager via Google Photos (compression implicite)",
        steps: [
          "Ouvrez Google Photos et sélectionnez une image",
          "Appuyez sur Partager puis choisissez le destinataire ou l'application",
          "Google Photos peut réduire la qualité lors du partage selon les paramètres",
          "Vérifiez dans Paramètres > Sauvegarde > Qualité de sauvegarde : Économiseur d'espace compresse automatiquement",
        ],
        pros: "Déjà installé sur la plupart des Android, processus familier",
        cons: "Peu de contrôle sur le taux de compression, réduction de qualité imprévisible",
      },
      {
        title: "Utiliser une application tierce (Photo Compress)",
        steps: [
          "Installez Photo Compress 2.0 depuis le Google Play Store",
          "Ouvrez l'app et sélectionnez les photos à compresser",
          "Choisissez le niveau de compression souhaité",
          "Prévisualisez le résultat avant/après avec la taille estimée",
          "Enregistrez les images compressées",
        ],
        pros: "Aperçu avant/après, compression batch, fonctionne hors ligne",
        cons: "Publicités dans la version gratuite, application tierce à installer",
      },
      {
        title: "Modifier les réglages de l'appareil photo",
        steps: [
          "Ouvrez l'application Appareil photo de votre téléphone",
          "Accédez aux Paramètres (icône engrenage)",
          "Recherchez la résolution ou la taille des photos",
          "Réduisez la résolution (ex: passer de 108 MP à 12 MP)",
          "Vos futures photos seront automatiquement plus légères",
        ],
        pros: "Solution préventive, aucune manipulation ultérieure nécessaire",
        cons: "Ne compresse pas les photos existantes, réduit la résolution réelle",
      },
    ],
    tips: [
      "Pour WhatsApp et Telegram, une qualité de 70% est amplement suffisante car ces apps recompressent de toute façon les images",
      "Si votre téléphone prend des photos en 108 MP ou 200 MP, passer en 12 MP réduit la taille de 5 à 10 fois sans perte visible à l'écran",
      "Vérifiez si votre galerie Samsung ou Xiaomi intègre déjà un outil de redimensionnement dans l'éditeur de photos",
      "Pour les pièces jointes email, visez moins de 1 Mo par image afin d'éviter les rejets par les serveurs de messagerie",
    ],
  },
  {
    action: "redimensionner-image",
    actionVerb: "redimensionner une image",
    device: "android",
    deviceName: "Android",
    slug: "redimensionner-image-sur-android",
    toolPath: "/redimensionner-image",
    intro:
      "Les appareils Android modernes capturent des photos en très haute résolution (jusqu'à 200 mégapixels sur certains modèles). Pour les réseaux sociaux, un site web ou un envoi par email, il est souvent nécessaire de redimensionner ces images. Voici les méthodes les plus pratiques sur Android.",
    methods: [
      {
        title: "Utiliser heictojpg.fr depuis Chrome",
        steps: [
          "Ouvrez Chrome et accédez à heictojpg.fr/redimensionner-image",
          "Appuyez pour sélectionner une ou plusieurs photos depuis votre galerie",
          "Entrez les dimensions souhaitées en pixels (ex: 1080px de large pour Instagram)",
          "Activez ou non le maintien des proportions",
          "Téléchargez l'image redimensionnée",
        ],
        pros: "Dimensions précises au pixel près, gratuit, sans app à installer",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Utiliser l'éditeur Samsung Gallery",
        steps: [
          "Ouvrez Samsung Gallery et sélectionnez votre photo",
          "Appuyez sur l'icône crayon (Modifier)",
          "Appuyez sur les trois points (...) puis sur Redimensionner",
          "Choisissez un pourcentage de réduction (75%, 50%, 25%)",
          "Enregistrez la copie redimensionnée",
        ],
        pros: "Intégré aux Samsung Galaxy, simple, rapide",
        cons: "Uniquement sur Samsung, choix limité à des pourcentages",
      },
      {
        title: "Utiliser l'application Image Size",
        steps: [
          "Installez Image Size depuis le Google Play Store",
          "Ouvrez l'app et sélectionnez votre photo",
          "Entrez les dimensions exactes en pixels, millimètres ou pouces",
          "Prévisualisez le résultat",
          "Enregistrez ou partagez directement",
        ],
        pros: "Dimensions précises, choix d'unités (px, mm, cm, pouces), fonctionne hors ligne",
        cons: "Publicités dans la version gratuite",
      },
      {
        title: "Recadrer dans Google Photos",
        steps: [
          "Ouvrez votre photo dans Google Photos",
          "Appuyez sur Modifier puis sur Recadrer",
          "Sélectionnez un ratio prédéfini (16:9, 4:3, 1:1) ou ajustez manuellement",
          "Enregistrez la copie",
        ],
        pros: "Déjà installé, ratios prédéfinis pratiques pour les réseaux sociaux",
        cons: "Recadre mais ne redimensionne pas les pixels réels, moins de contrôle",
      },
    ],
    tips: [
      "Pour Instagram, utilisez 1080x1080 (carré), 1080x1350 (portrait) ou 1080x608 (paysage)",
      "Pour réduire significativement la taille d'un fichier, redimensionnez d'abord puis compressez ensuite",
      "Les photos prises en mode 108 MP ou 200 MP peuvent dépasser 20 Mo : redimensionner à 4000px de large reste largement suffisant pour l'impression A4",
      "Pensez à conserver l'original avant de redimensionner, au cas où vous auriez besoin de la pleine résolution plus tard",
    ],
  },
  {
    action: "supprimer-fond-image",
    actionVerb: "supprimer le fond d'une image",
    device: "android",
    deviceName: "Android",
    slug: "supprimer-fond-image-sur-android",
    toolPath: "/supprimer-fond-image",
    intro:
      "Besoin de détourer un objet, isoler une personne ou supprimer l'arrière-plan d'une photo sur votre téléphone Android ? Contrairement à iOS, Android n'intègre pas de fonction native de détourage, mais il existe plusieurs solutions efficaces.",
    methods: [
      {
        title: "Utiliser heictojpg.fr depuis Chrome",
        steps: [
          "Ouvrez Chrome sur votre Android",
          "Allez sur heictojpg.fr/supprimer-fond-image",
          "Sélectionnez la photo dont vous voulez supprimer le fond",
          "L'IA analyse et détoure automatiquement le sujet",
          "Téléchargez le résultat en PNG avec fond transparent",
        ],
        pros: "IA performante, export PNG transparent, gratuit, sans installation",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Utiliser Google Photos Magic Eraser (Pixel)",
        steps: [
          "Ouvrez Google Photos sur votre Pixel (ou smartphone avec Google One)",
          "Sélectionnez la photo et appuyez sur Modifier",
          "Accédez à Outils puis Gomme magique",
          "Sélectionnez ou entourez les éléments d'arrière-plan à supprimer",
          "Google remplit automatiquement la zone effacée",
        ],
        pros: "Intégré à Google Photos, résultat bluffant sur les éléments indésirables",
        cons: "Efface des éléments du fond mais ne crée pas de fond transparent, limité aux Pixel ou abonnés Google One",
      },
      {
        title: "Utiliser l'application Remove.bg",
        steps: [
          "Installez Remove.bg depuis le Google Play Store",
          "Ouvrez l'app et sélectionnez votre photo",
          "L'IA supprime automatiquement l'arrière-plan",
          "Prévisualisez le résultat et ajustez si nécessaire",
          "Enregistrez le PNG transparent ou choisissez un nouveau fond",
        ],
        pros: "IA très précise, possibilité de changer le fond, aperçu immédiat",
        cons: "Résolution limitée en version gratuite, nécessite un compte pour la HD",
      },
      {
        title: "Utiliser Samsung Object Eraser (Galaxy)",
        steps: [
          "Ouvrez Samsung Gallery et sélectionnez votre photo",
          "Appuyez sur l'icône crayon pour modifier",
          "Appuyez sur les trois points (...) puis Gomme d'objets",
          "Touchez ou entourez l'objet ou la zone de fond à supprimer",
          "Samsung remplit intelligemment la zone supprimée",
        ],
        pros: "Intégré aux Samsung Galaxy récents, fonctionne hors ligne, résultat naturel",
        cons: "Uniquement sur Samsung Galaxy, ne crée pas de fond transparent (remplit le fond)",
      },
    ],
    tips: [
      "Pour un vrai fond transparent (PNG), privilégiez heictojpg.fr ou Remove.bg car les outils natifs Google et Samsung remplissent la zone plutôt que de la rendre transparente",
      "Prenez vos photos sur un fond uni et contrasté pour faciliter le détourage automatique",
      "Les sujets avec des cheveux fins ou des bords complexes donnent de meilleurs résultats avec les outils IA qu'avec les outils manuels",
      "Vérifiez toujours les contours du sujet détouré en zoomant avant de télécharger le résultat final",
    ],
  },
  {
    action: "convertir-heic",
    actionVerb: "convertir un fichier HEIC",
    device: "iphone",
    deviceName: "iPhone",
    slug: "convertir-heic-sur-iphone",
    toolPath: "/convertir-heic-en-jpg",
    intro:
      "Votre iPhone prend des photos au format HEIC par défaut depuis iOS 11, ce qui pose parfois des problèmes de compatibilité lorsque vous partagez vos images avec des appareils non-Apple ou des sites web. Voici comment convertir vos fichiers HEIC en JPG directement depuis votre iPhone.",
    methods: [
      {
        title: "Utiliser heictojpg.fr depuis Safari",
        steps: [
          "Ouvrez Safari sur votre iPhone",
          "Allez sur heictojpg.fr/convertir-heic-en-jpg",
          "Appuyez pour sélectionner vos photos HEIC depuis la pellicule",
          "La conversion en JPG se lance automatiquement",
          "Téléchargez les fichiers JPG convertis",
        ],
        pros: "Gratuit, rapide, conversion batch possible, qualité préservée",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Changer le format dans Réglages > Appareil photo",
        steps: [
          "Ouvrez Réglages sur votre iPhone",
          "Allez dans Appareil photo > Formats",
          "Sélectionnez Le plus compatible (au lieu de Haute efficacité)",
          "Vos futures photos seront prises directement en JPG",
        ],
        pros: "Solution permanente, aucune conversion nécessaire, compatible partout",
        cons: "Les photos JPG sont environ 2x plus lourdes que le HEIC, ne convertit pas les photos existantes",
      },
      {
        title: "Copier-coller via l'app Fichiers",
        steps: [
          "Ouvrez l'app Photos et sélectionnez une image HEIC",
          "Appuyez sur Partager puis Enregistrer dans Fichiers",
          "Ouvrez l'app Fichiers et localisez votre image",
          "Appuyez longuement sur le fichier puis Copier",
          "Collez-le dans un autre dossier : iOS le convertit souvent en JPG automatiquement",
        ],
        pros: "Aucune app tierce, fonctionne hors ligne",
        cons: "La conversion n'est pas garantie dans tous les cas, processus un peu long",
      },
      {
        title: "Créer un raccourci iOS de conversion",
        steps: [
          "Ouvrez l'app Raccourcis et appuyez sur +",
          "Ajoutez l'action Sélectionner des photos (activez Sélectionner plusieurs)",
          "Ajoutez l'action Convertir l'image et choisissez JPEG comme format de sortie",
          "Ajoutez Enregistrer dans l'album photo",
          "Nommez votre raccourci (ex: HEIC vers JPG) et exécutez-le",
        ],
        pros: "Fonctionne hors ligne, batch possible, réutilisable à volonté, automatisable",
        cons: "Configuration initiale nécessaire, quelques minutes pour créer le raccourci",
      },
    ],
    tips: [
      "Pour un partage ponctuel, iOS convertit automatiquement en JPG quand vous envoyez une photo par email ou AirDrop vers un appareil non-Apple",
      "Le réglage Transfert vers Mac ou PC > Automatique (dans Réglages > Photos) convertit automatiquement les HEIC en JPG lors du transfert USB",
      "Le format HEIC offre une meilleure qualité à taille égale : ne passez en JPG permanent que si vous avez vraiment des problèmes de compatibilité",
      "Le raccourci iOS peut être ajouté à votre écran d'accueil pour un accès rapide en un seul tap",
    ],
  },
  {
    action: "convertir-heic",
    actionVerb: "convertir un fichier HEIC",
    device: "mac",
    deviceName: "Mac",
    slug: "convertir-heic-sur-mac",
    toolPath: "/convertir-heic-en-jpg",
    intro:
      "Vous avez des fichiers HEIC provenant de votre iPhone ou d'un autre appareil Apple et vous avez besoin de les convertir en JPG pour les partager ou les utiliser sur d'autres plateformes ? macOS offre plusieurs méthodes intégrées, en plus des outils en ligne.",
    methods: [
      {
        title: "Utiliser heictojpg.fr",
        steps: [
          "Ouvrez votre navigateur et allez sur heictojpg.fr/convertir-heic-en-jpg",
          "Glissez-déposez vos fichiers HEIC sur la page",
          "La conversion démarre automatiquement",
          "Téléchargez les fichiers JPG convertis",
        ],
        pros: "Gratuit, rapide, conversion batch, aucune installation",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Exporter avec Aperçu (Preview)",
        steps: [
          "Ouvrez votre fichier HEIC avec Aperçu (double-clic)",
          "Allez dans Fichier > Exporter",
          "Sélectionnez JPEG dans le menu déroulant Format",
          "Ajustez la qualité avec le curseur si souhaité",
          "Cliquez sur Enregistrer",
        ],
        pros: "Intégré à macOS, contrôle de la qualité, simple",
        cons: "Un fichier à la fois (sauf en sélection multiple), processus manuel",
      },
      {
        title: "Créer un flux Automator pour la conversion batch",
        steps: [
          "Ouvrez Automator et choisissez Action rapide",
          "Le flux reçoit des fichiers image dans le Finder",
          "Ajoutez l'action Modifier le type des images et sélectionnez JPEG",
          "Enregistrez le flux (ex: Convertir HEIC en JPG)",
          "Désormais, clic droit sur des fichiers HEIC > Actions rapides > Convertir HEIC en JPG",
        ],
        pros: "Conversion batch en un clic droit, intégré au Finder, réutilisable",
        cons: "Configuration initiale, Automator est remplacé par Raccourcis sur les Mac récents",
      },
      {
        title: "Utiliser la commande sips en Terminal",
        steps: [
          "Ouvrez Terminal",
          "Pour un fichier : sips -s format jpeg photo.HEIC --out photo.jpg",
          "Pour un lot entier : for f in *.HEIC; do sips -s format jpeg \"$f\" --out \"${f%.HEIC}.jpg\"; done",
          "Les fichiers JPG apparaissent dans le même dossier",
        ],
        pros: "Très rapide, batch facile, scriptable, intégré à macOS",
        cons: "Ligne de commande, pas intuitif pour les débutants",
      },
    ],
    tips: [
      "Aperçu permet aussi le batch : sélectionnez plusieurs fichiers HEIC dans le Finder, ouvrez-les tous dans Aperçu, puis Fichier > Exporter les images sélectionnées",
      "La commande sips est idéale si vous devez convertir régulièrement des lots de fichiers HEIC : créez un alias dans votre .zshrc pour gagner du temps",
      "Si vous utilisez macOS Monterey ou plus récent, vous pouvez aussi utiliser l'app Raccourcis au lieu d'Automator pour créer un flux de conversion",
    ],
  },
  {
    action: "recadrer-image",
    actionVerb: "recadrer une image",
    device: "iphone",
    deviceName: "iPhone",
    slug: "recadrer-image-sur-iphone",
    toolPath: "/recadrer-image",
    intro:
      "Recadrer une photo sur iPhone est une opération courante : supprimer un élément gênant en bordure, adapter le format à un réseau social ou recentrer un sujet. iOS propose un outil intégré, mais d'autres options existent pour plus de contrôle.",
    methods: [
      {
        title: "Utiliser heictojpg.fr depuis Safari",
        steps: [
          "Ouvrez Safari sur votre iPhone",
          "Allez sur heictojpg.fr/recadrer-image",
          "Sélectionnez votre photo depuis la pellicule",
          "Définissez la zone de recadrage avec des dimensions précises ou un ratio",
          "Téléchargez l'image recadrée",
        ],
        pros: "Dimensions précises au pixel près, ratios personnalisés, gratuit",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Utiliser l'app Photos intégrée",
        steps: [
          "Ouvrez votre photo dans l'app Photos",
          "Appuyez sur Modifier en haut à droite",
          "Appuyez sur l'icône de recadrage (carrés imbriqués) en bas",
          "Faites glisser les poignées pour ajuster la zone de recadrage",
          "Choisissez un ratio prédéfini (Carré, 16:9, 4:3, etc.) ou gardez le format libre",
          "Appuyez sur OK pour enregistrer",
        ],
        pros: "Intégré à iOS, rapide, ratios prédéfinis, modification non destructive (réversible)",
        cons: "Pas de saisie de dimensions en pixels, peu de contrôle précis",
      },
      {
        title: "Créer un raccourci iOS de recadrage",
        steps: [
          "Ouvrez l'app Raccourcis et créez un nouveau raccourci",
          "Ajoutez Sélectionner des photos",
          "Ajoutez Recadrer l'image avec les dimensions souhaitées",
          "Ajoutez Enregistrer dans l'album photo",
          "Exécutez le raccourci pour un recadrage automatisé",
        ],
        pros: "Recadrage automatisé avec des dimensions fixes, idéal pour les formats répétitifs",
        cons: "Configuration initiale, moins visuel que l'éditeur Photos",
      },
      {
        title: "Utiliser l'app Snapseed (Google)",
        steps: [
          "Installez Snapseed depuis l'App Store",
          "Ouvrez votre photo dans l'app",
          "Appuyez sur Outils puis Recadrer",
          "Choisissez un ratio prédéfini ou Libre",
          "Ajustez la zone de recadrage et validez",
          "Exportez l'image",
        ],
        pros: "Ratios nombreux, outils d'édition complets, gratuit sans publicité",
        cons: "Application tierce à installer",
      },
    ],
    tips: [
      "Dans l'app Photos, le recadrage est non destructif : vous pouvez revenir à l'original à tout moment en appuyant sur Modifier puis Revenir",
      "Pour les stories Instagram, recadrez en 9:16 ; pour les publications, en 1:1 (carré) ou 4:5 (portrait)",
      "Snapseed offre aussi des outils de retouche avancés (luminosité, contraste, netteté) en complément du recadrage",
      "Si vous recadrez souvent au même format, créez un raccourci iOS dédié pour gagner du temps",
    ],
  },
  {
    action: "recadrer-image",
    actionVerb: "recadrer une image",
    device: "mac",
    deviceName: "Mac",
    slug: "recadrer-image-sur-mac",
    toolPath: "/recadrer-image",
    intro:
      "Recadrer une image sur Mac est un besoin fréquent, que ce soit pour adapter une photo à un format précis, supprimer des bordures inutiles ou recentrer un sujet. macOS intègre plusieurs outils capables de le faire sans installer de logiciel supplémentaire.",
    methods: [
      {
        title: "Utiliser heictojpg.fr",
        steps: [
          "Ouvrez votre navigateur et allez sur heictojpg.fr/recadrer-image",
          "Glissez-déposez votre image sur la page",
          "Définissez les dimensions exactes ou choisissez un ratio (1:1, 16:9, 4:3, etc.)",
          "Ajustez la zone de recadrage visuellement",
          "Téléchargez l'image recadrée",
        ],
        pros: "Dimensions précises, ratios personnalisés, gratuit, aucune installation",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Utiliser Aperçu avec l'outil de recadrage",
        steps: [
          "Ouvrez votre image avec Aperçu (double-clic)",
          "Cliquez sur le bouton Annoter (icône crayon) dans la barre d'outils",
          "Sélectionnez l'outil de sélection rectangulaire",
          "Tracez un rectangle sur la zone à conserver",
          "Allez dans Outils > Recadrer (ou Cmd+K)",
          "Enregistrez le fichier",
        ],
        pros: "Intégré à macOS, gratuit, rapide",
        cons: "Pas de saisie de ratio prédéfini, sélection à main levée uniquement",
      },
      {
        title: "Utiliser l'app Photos de macOS",
        steps: [
          "Ouvrez votre photo dans l'app Photos",
          "Double-cliquez puis cliquez sur Modifier",
          "Sélectionnez l'onglet Recadrer",
          "Choisissez un ratio prédéfini dans la barre latérale (Carré, 16:9, 4:3, etc.)",
          "Ajustez la zone et cliquez sur OK",
        ],
        pros: "Ratios prédéfinis, modification non destructive, intégré à macOS",
        cons: "Uniquement pour les photos importées dans la photothèque",
      },
      {
        title: "Utiliser Aperçu avec l'annotation Markup",
        steps: [
          "Ouvrez l'image dans Aperçu",
          "Activez la barre d'outils d'annotation (Présentation > Afficher la barre d'outils d'annotation)",
          "Utilisez la sélection rectangulaire pour entourer la zone souhaitée",
          "Maintenez Maj pour un carré parfait ou contrôlez les dimensions dans l'inspecteur",
          "Cmd+K pour recadrer",
        ],
        pros: "Contrôle de la sélection avec les touches modificatrices, dimensions affichées",
        cons: "Processus en plusieurs étapes, pas de ratios prédéfinis directement",
      },
    ],
    tips: [
      "Dans Aperçu, maintenez la touche Maj enfoncée pendant la sélection pour obtenir un carré parfait",
      "L'app Photos conserve toujours l'original : vous pouvez annuler le recadrage à tout moment",
      "Pour recadrer plusieurs images au même format, utilisez Automator ou l'app Raccourcis avec l'action Recadrer l'image",
    ],
  },
  {
    action: "recadrer-image",
    actionVerb: "recadrer une image",
    device: "windows",
    deviceName: "Windows",
    slug: "recadrer-image-sur-windows",
    toolPath: "/recadrer-image",
    intro:
      "Windows propose plusieurs outils intégrés pour recadrer vos images, que ce soit pour ajuster le cadrage d'une photo, préparer une image pour un site web ou découper une capture d'écran. Voici les méthodes les plus pratiques sans installer de logiciel.",
    methods: [
      {
        title: "Utiliser heictojpg.fr",
        steps: [
          "Ouvrez votre navigateur et allez sur heictojpg.fr/recadrer-image",
          "Glissez-déposez votre image ou cliquez pour la sélectionner",
          "Choisissez un ratio prédéfini ou entrez des dimensions personnalisées",
          "Positionnez la zone de recadrage sur la partie à conserver",
          "Téléchargez l'image recadrée",
        ],
        pros: "Dimensions précises au pixel, ratios personnalisés, gratuit, fonctionne sur tout navigateur",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Utiliser l'app Photos de Windows",
        steps: [
          "Ouvrez votre image avec l'app Photos (double-clic)",
          "Cliquez sur l'icône Modifier l'image (ou Ctrl+E)",
          "Sélectionnez l'outil Recadrer",
          "Choisissez un ratio (Libre, 16:9, 4:3, Carré, etc.)",
          "Ajustez la zone de recadrage avec les poignées",
          "Cliquez sur Enregistrer une copie",
        ],
        pros: "Intégré à Windows 10 et 11, ratios prédéfinis, interface intuitive",
        cons: "Pas de saisie de dimensions en pixels, options basiques",
      },
      {
        title: "Utiliser Paint",
        steps: [
          "Ouvrez votre image dans Paint",
          "Cliquez sur l'outil Sélectionner > Sélection rectangulaire",
          "Tracez un rectangle sur la zone à conserver",
          "Cliquez sur Recadrer dans la barre d'outils",
          "Enregistrez le résultat (Fichier > Enregistrer sous)",
        ],
        pros: "Intégré à toutes les versions de Windows, simple, léger",
        cons: "Pas de ratios prédéfinis, sélection à main levée uniquement, pas de guides",
      },
      {
        title: "Utiliser l'Outil Capture d'écran (Snipping Tool)",
        steps: [
          "Ouvrez votre image en plein écran dans n'importe quelle visionneuse",
          "Appuyez sur Win+Maj+S pour lancer la capture",
          "Sélectionnez la zone rectangulaire à capturer",
          "L'image recadrée est copiée dans le presse-papiers",
          "Collez-la (Ctrl+V) dans Paint ou un autre éditeur et enregistrez",
        ],
        pros: "Très rapide, raccourci clavier pratique, fonctionne partout",
        cons: "La résolution dépend de l'affichage écran, pas de dimensions précises",
      },
    ],
    tips: [
      "L'app Photos de Windows 11 propose des ratios prédéfinis très pratiques pour les réseaux sociaux",
      "Dans Paint, notez les coordonnées affichées en bas de l'écran pour contrôler la taille de votre sélection",
      "L'Outil Capture est idéal pour recadrer rapidement une image affichée à l'écran, mais pas pour un recadrage précis au pixel",
      "Pour un recadrage en lot de plusieurs images, heictojpg.fr est la solution la plus rapide sans logiciel",
    ],
  },
  {
    action: "recadrer-image",
    actionVerb: "recadrer une image",
    device: "android",
    deviceName: "Android",
    slug: "recadrer-image-sur-android",
    toolPath: "/recadrer-image",
    intro:
      "Recadrer une photo sur Android est une manipulation fréquente pour améliorer la composition, adapter une image à un format de réseau social ou supprimer des éléments indésirables sur les bords. Voici les meilleures méthodes disponibles sur votre smartphone Android.",
    methods: [
      {
        title: "Utiliser heictojpg.fr depuis Chrome",
        steps: [
          "Ouvrez Chrome sur votre téléphone Android",
          "Allez sur heictojpg.fr/recadrer-image",
          "Sélectionnez votre photo depuis la galerie",
          "Définissez les dimensions ou le ratio souhaité",
          "Ajustez la zone de recadrage visuellement",
          "Téléchargez l'image recadrée",
        ],
        pros: "Dimensions précises en pixels, ratios personnalisés, gratuit, sans installation",
        cons: "Nécessite une connexion internet",
      },
      {
        title: "Utiliser Google Photos",
        steps: [
          "Ouvrez votre photo dans Google Photos",
          "Appuyez sur Modifier (icône curseurs)",
          "Appuyez sur l'icône de recadrage",
          "Choisissez un ratio prédéfini (Libre, Carré, 16:9, 4:3, 3:2)",
          "Faites glisser les coins pour ajuster la zone",
          "Appuyez sur Enregistrer la copie",
        ],
        pros: "Déjà installé, ratios prédéfinis, interface fluide, modification non destructive",
        cons: "Pas de saisie de dimensions en pixels",
      },
      {
        title: "Utiliser Samsung Gallery (Galaxy)",
        steps: [
          "Ouvrez votre photo dans Samsung Gallery",
          "Appuyez sur l'icône crayon (Modifier)",
          "Sélectionnez l'outil de recadrage",
          "Choisissez un ratio (Libre, 1:1, 16:9, 4:3, etc.)",
          "Ajustez la zone et validez",
          "Enregistrez",
        ],
        pros: "Intégré aux Samsung Galaxy, nombreux ratios, simple d'utilisation",
        cons: "Uniquement sur Samsung, pas de dimensions en pixels",
      },
      {
        title: "Utiliser une application tierce (Snapseed)",
        steps: [
          "Installez Snapseed depuis le Google Play Store",
          "Ouvrez votre photo dans l'application",
          "Appuyez sur Outils puis Recadrer",
          "Sélectionnez un ratio ou utilisez le mode Libre",
          "Ajustez la zone de recadrage",
          "Validez et exportez l'image",
        ],
        pros: "Gratuit, sans publicité, nombreux ratios, outils d'édition complémentaires",
        cons: "Application tierce à installer",
      },
    ],
    tips: [
      "Google Photos permet de revenir à l'original après un recadrage : ouvrez la photo modifiée, appuyez sur Modifier puis Rétablir",
      "Pour les stories Instagram ou TikTok, recadrez en 9:16 (format portrait plein écran)",
      "Snapseed est particulièrement utile car il offre aussi des outils de retouche (luminosité, netteté, filtres) en plus du recadrage",
      "Si vous devez recadrer au pixel près pour un site web ou un projet graphique, heictojpg.fr est la meilleure option sur mobile",
    ],
  },
];

export function getActionDevice(slug: string): ActionDeviceData | undefined {
  return actionsDevices.find((ad) => ad.slug === slug);
}

export const actionDeviceSlugs = actionsDevices.map((ad) => ad.slug);
