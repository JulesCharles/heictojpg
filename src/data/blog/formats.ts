export interface FormatData {
  id: string;
  name: string;
  fullName: string;
  extension: string;
  year: number;
  creator: string;
  type: "raster" | "vector" | "container";
  lossy: boolean;
  transparency: boolean;
  animation: boolean;
  maxColors: string;
  typicalSize: string;
  browserSupport: string;
  bestFor: string[];
  advantages: string[];
  disadvantages: string[];
  description: string;
  techDescription: string;
}

export const formats: Record<string, FormatData> = {
  heic: {
    id: "heic",
    name: "HEIC",
    fullName: "High Efficiency Image Container",
    extension: ".heic / .heif",
    year: 2017,
    creator: "MPEG (adopté par Apple)",
    type: "raster",
    lossy: true,
    transparency: true,
    animation: true,
    maxColors: "16 bits par canal (plus de 281 billions de couleurs)",
    typicalSize: "1,5 à 3 Mo pour une photo iPhone 12 MP",
    browserSupport: "Safari uniquement (macOS/iOS). Chrome, Firefox et Edge ne le supportent pas.",
    bestFor: [
      "Stockage de photos sur iPhone et iPad",
      "Synchronisation via iCloud",
      "Live Photos et mode Portrait Apple",
      "Archivage haute qualité sur appareils Apple",
    ],
    advantages: [
      "Compression 50% supérieure au JPEG à qualité égale",
      "Support des Live Photos et données de profondeur",
      "Profondeur de couleur 16 bits (vs 8 bits pour JPEG)",
      "Plusieurs images dans un seul fichier conteneur",
      "Métadonnées étendues (EXIF, XMP)",
    ],
    disadvantages: [
      "Compatibilité quasi exclusivement limitée à l'écosystème Apple",
      "Non supporté par la majorité des navigateurs web",
      "Nécessite des extensions sur Windows pour être ouvert",
      "Format protégé par des brevets (codec HEVC)",
      "Peu de logiciels de retouche le supportent nativement",
    ],
    description:
      "Le format HEIC est le format d'image par défaut sur les appareils Apple depuis iOS 11 (2017). Basé sur le codec HEVC (H.265), il offre une compression remarquable tout en préservant une qualité d'image supérieure au JPEG. Chaque photo prise avec un iPhone moderne est enregistrée en HEIC, ce qui permet de stocker deux fois plus de photos dans le même espace.",
    techDescription:
      "HEIC utilise le codec vidéo HEVC (High Efficiency Video Coding, aussi appelé H.265) pour compresser les images fixes. Ce codec, initialement conçu pour la vidéo 4K, applique des algorithmes de prédiction intra-trame et de transformées en cosinus discrète pour atteindre des taux de compression supérieurs au JPEG. Le conteneur HEIF peut stocker plusieurs images, des séquences d'images (Live Photos), des données de profondeur et des métadonnées étendues dans un seul fichier.",
  },
  jpg: {
    id: "jpg",
    name: "JPG",
    fullName: "Joint Photographic Experts Group",
    extension: ".jpg / .jpeg",
    year: 1992,
    creator: "Joint Photographic Experts Group (ISO/CEI)",
    type: "raster",
    lossy: true,
    transparency: false,
    animation: false,
    maxColors: "8 bits par canal (16,7 millions de couleurs)",
    typicalSize: "3 à 8 Mo pour une photo 12 MP",
    browserSupport: "Tous les navigateurs, tous les appareils, toutes les plateformes. Compatibilité universelle.",
    bestFor: [
      "Photographies sur le web",
      "Partage par email et réseaux sociaux",
      "Images de produits e-commerce",
      "Impression photo standard",
    ],
    advantages: [
      "Compatibilité universelle (tous les appareils et logiciels)",
      "Taux de compression ajustable selon les besoins",
      "Excellent support SEO (Google Images)",
      "Taille de fichier prévisible et maîtrisable",
      "Standard de l'industrie depuis plus de 30 ans",
    ],
    disadvantages: [
      "Compression avec perte (dégradation à chaque sauvegarde)",
      "Pas de support de la transparence",
      "Profondeur de couleur limitée à 8 bits",
      "Artefacts visibles à forte compression (blocs, bandes)",
      "Pas d'animation native",
    ],
    description:
      "Le format JPEG est le format d'image le plus utilisé au monde depuis sa création en 1992. Il utilise un algorithme de compression avec perte qui réduit la taille des fichiers en éliminant certaines informations visuelles peu perceptibles par l'oeil humain. Sa compatibilité universelle en fait le format de référence pour le partage de photos.",
    techDescription:
      "JPEG utilise la transformée en cosinus discrète (DCT) pour convertir les données spatiales de l'image en données fréquentielles. Les hautes fréquences (détails fins) sont quantifiées plus agressivement que les basses fréquences, ce qui réduit la taille du fichier. Le processus comprend la conversion de l'espace colorimétrique (RGB vers YCbCr), le sous-échantillonnage de la chrominance, la DCT par blocs de 8x8 pixels, la quantification et le codage entropique (Huffman).",
  },
  png: {
    id: "png",
    name: "PNG",
    fullName: "Portable Network Graphics",
    extension: ".png",
    year: 1996,
    creator: "W3C / groupe PNG",
    type: "raster",
    lossy: false,
    transparency: true,
    animation: false,
    maxColors: "16 bits par canal (48 bits au total)",
    typicalSize: "5 à 15 Mo pour une photo 12 MP (beaucoup plus lourd que JPG)",
    browserSupport: "Tous les navigateurs, tous les appareils. Compatibilité universelle.",
    bestFor: [
      "Logos et icônes avec fond transparent",
      "Captures d'écran et images contenant du texte",
      "Infographies et illustrations avec aplats de couleur",
      "Images nécessitant une qualité pixel-perfect",
    ],
    advantages: [
      "Compression sans perte (qualité intacte à chaque sauvegarde)",
      "Support de la transparence (canal alpha)",
      "Idéal pour le texte, les logos et les graphiques",
      "Profondeur de couleur jusqu'à 48 bits",
      "Standard web ouvert et libre de droits",
    ],
    disadvantages: [
      "Fichiers beaucoup plus lourds que JPG pour les photographies",
      "Pas adapté aux photos complexes avec de nombreuses nuances",
      "Pas d'animation native (APNG existe mais peu supporté)",
      "Compression inefficace sur les images photographiques",
    ],
    description:
      "Le format PNG a été créé en 1996 comme alternative libre au format GIF, alors protégé par un brevet. Il utilise une compression sans perte qui préserve chaque pixel de l'image originale. Le PNG est le format de choix pour les logos, icônes, captures d'écran et toute image nécessitant de la transparence ou une fidélité parfaite.",
    techDescription:
      "PNG utilise l'algorithme de compression DEFLATE (combinaison de LZ77 et du codage de Huffman) précédée d'une étape de filtrage prédictif par ligne. Chaque ligne de pixels est filtrée selon l'un des cinq filtres disponibles (None, Sub, Up, Average, Paeth) pour maximiser la compressibilité. Le format supporte plusieurs modes de couleur : niveaux de gris, RGB, palette indexée, avec ou sans canal alpha pour la transparence.",
  },
  webp: {
    id: "webp",
    name: "WebP",
    fullName: "Web Picture format",
    extension: ".webp",
    year: 2010,
    creator: "Google",
    type: "raster",
    lossy: true,
    transparency: true,
    animation: true,
    maxColors: "8 bits par canal (16,7 millions de couleurs)",
    typicalSize: "25 à 35% plus léger que JPG à qualité équivalente",
    browserSupport: "Chrome, Firefox, Safari (14+), Edge, Opera. Tous les navigateurs modernes depuis 2020.",
    bestFor: [
      "Images pour le web (sites, blogs, e-commerce)",
      "Optimisation des Core Web Vitals et PageSpeed",
      "Remplacement polyvalent de JPG, PNG et GIF",
      "Applications web progressives (PWA)",
    ],
    advantages: [
      "25 à 35% plus léger que JPG à qualité équivalente",
      "Support de la transparence (comme PNG) et de l'animation (comme GIF)",
      "Compression avec ou sans perte au choix",
      "Recommandé par Google pour le web",
      "Supporté par tous les navigateurs modernes",
    ],
    disadvantages: [
      "Compatibilité limitée avec certains logiciels de retouche anciens",
      "Moins bien indexé que JPG par certains moteurs d'images",
      "Profondeur de couleur limitée à 8 bits",
      "Encodage plus lent que JPG",
    ],
    description:
      "Le format WebP a été développé par Google en 2010 pour offrir des images plus légères sur le web sans sacrifier la qualité. Il combine les avantages du JPG (compression efficace des photos) et du PNG (transparence) en un seul format. Depuis 2020, WebP est supporté par tous les navigateurs modernes et est devenu le standard recommandé par Google pour les performances web.",
    techDescription:
      "WebP utilise le codec VP8 (compression avec perte) ou VP8L (sans perte). En mode avec perte, il applique une prédiction par blocs similaire au codec vidéo VP8, suivie d'une transformée en cosinus discrète et d'un codage arithmétique. En mode sans perte, il utilise des transformées spatiales, un codage de couleur prédictif, un cache de pixels et un codage entropique adaptatif. Le conteneur est basé sur le format RIFF.",
  },
  avif: {
    id: "avif",
    name: "AVIF",
    fullName: "AV1 Image File Format",
    extension: ".avif",
    year: 2019,
    creator: "Alliance for Open Media (AOMedia)",
    type: "raster",
    lossy: true,
    transparency: true,
    animation: true,
    maxColors: "10 ou 12 bits par canal, support HDR",
    typicalSize: "50% plus léger que JPG, 20% plus léger que WebP",
    browserSupport: "Chrome (85+), Firefox (93+), Safari (16.4+). Support croissant mais incomplet sur anciens appareils.",
    bestFor: [
      "Sites web performants ciblant des navigateurs modernes",
      "Galeries photo et portfolios en ligne",
      "Images HDR et à large gamut de couleurs",
      "Applications web progressives",
    ],
    advantages: [
      "Compression jusqu'à 50% meilleure que WebP",
      "Support du HDR et de l'espace colorimétrique étendu",
      "Profondeur de couleur 10 ou 12 bits",
      "Support de la transparence et de l'animation",
      "Format libre de droits (pas de brevets)",
    ],
    disadvantages: [
      "Encodage beaucoup plus lent que JPG ou WebP",
      "Support navigateur encore incomplet sur anciens appareils",
      "Peu de logiciels de retouche le supportent nativement",
      "Taille maximale d'image limitée dans certaines implémentations",
      "Décodage plus gourmand en ressources",
    ],
    description:
      "Le format AVIF, basé sur le codec vidéo AV1, représente la dernière génération de formats d'image pour le web. Lancé en 2019, il offre une compression nettement supérieure à WebP et JPG tout en supportant le HDR et des profondeurs de couleur étendues. C'est un format libre de droits, soutenu par l'Alliance for Open Media (Google, Apple, Mozilla, Microsoft, Netflix, Amazon).",
    techDescription:
      "AVIF utilise le codec vidéo AV1 (AOMedia Video 1) pour compresser les images fixes. AV1 emploie des blocs de taille variable (jusqu'à 128x128 pixels), plus de 50 modes de prédiction intra-trame, des filtres de restauration en boucle et un codage entropique symbolique. Le conteneur est basé sur le format ISOBMFF (ISO Base Media File Format), le même que HEIF. L'encodage est significativement plus lent que les formats concurrents mais produit des fichiers plus compacts.",
  },
  svg: {
    id: "svg",
    name: "SVG",
    fullName: "Scalable Vector Graphics",
    extension: ".svg",
    year: 2001,
    creator: "W3C (World Wide Web Consortium)",
    type: "vector",
    lossy: false,
    transparency: true,
    animation: true,
    maxColors: "Illimité (défini par code, pas par pixels)",
    typicalSize: "1 à 50 Ko pour un logo, potentiellement plus pour des illustrations complexes",
    browserSupport: "Tous les navigateurs modernes. Support natif universel.",
    bestFor: [
      "Logos et icônes",
      "Illustrations et graphiques",
      "Éléments d'interface utilisateur (UI)",
      "Graphiques responsive qui s'adaptent à toutes les tailles",
    ],
    advantages: [
      "Redimensionnable à l'infini sans perte de qualité",
      "Fichiers très légers pour les graphiques simples",
      "Modifiable avec CSS et JavaScript",
      "Parfait pour le responsive design",
      "Indexable par les moteurs de recherche (code XML)",
    ],
    disadvantages: [
      "Totalement inadapté aux photographies",
      "Fichiers lourds pour les illustrations très détaillées",
      "Complexité technique pour la création",
      "Risques de sécurité potentiels (exécution de code)",
      "Rendu variable selon les navigateurs pour les SVG complexes",
    ],
    description:
      "Le SVG est un format d'image vectoriel basé sur le langage XML. Contrairement aux formats raster (JPG, PNG) qui stockent des pixels, le SVG décrit des formes géométriques (lignes, courbes, rectangles, texte) via du code. Il est donc infiniment redimensionnable sans aucune perte de qualité, ce qui en fait le format idéal pour les logos, icônes et illustrations web.",
    techDescription:
      "SVG est un langage de balisage XML qui définit des graphiques 2D. Il supporte les formes primitives (rect, circle, ellipse, line, polyline, polygon), les chemins (path avec commandes M, L, C, Q, A, Z), le texte, les transformations géométriques (translate, rotate, scale), les dégradés, les filtres, le clipping et le masquage. Les animations peuvent être définies via SMIL ou manipulées via CSS/JavaScript.",
  },
  tiff: {
    id: "tiff",
    name: "TIFF",
    fullName: "Tagged Image File Format",
    extension: ".tiff / .tif",
    year: 1986,
    creator: "Aldus Corporation (repris par Adobe)",
    type: "raster",
    lossy: false,
    transparency: true,
    animation: false,
    maxColors: "Jusqu'à 32 bits par canal",
    typicalSize: "10 à 50 Mo pour une photo 12 MP (non compressé ou LZW)",
    browserSupport: "Aucun navigateur web ne supporte TIFF nativement.",
    bestFor: [
      "Impression professionnelle et pré-presse",
      "Archivage de documents numérisés (scans)",
      "Photographie professionnelle (retouche et post-production)",
      "Imagerie médicale et scientifique",
    ],
    advantages: [
      "Compression sans perte (qualité maximale préservée)",
      "Profondeur de couleur très élevée (jusqu'à 32 bits/canal)",
      "Support des espaces colorimétriques professionnels (CMYK, Lab)",
      "Métadonnées étendues et multiples calques",
      "Standard de l'industrie pour l'impression et l'archivage",
    ],
    disadvantages: [
      "Fichiers extrêmement volumineux",
      "Aucun support navigateur web",
      "Peu adapté au partage en ligne",
      "Format complexe avec de nombreuses variantes",
      "Temps de traitement plus long",
    ],
    description:
      "Le format TIFF est un format professionnel utilisé principalement dans l'impression, la numérisation et la photographie haut de gamme. Créé en 1986, il offre une qualité maximale sans compression destructive, ce qui en fait le choix privilégié des photographes professionnels et des imprimeurs. Ses fichiers sont cependant très volumineux et incompatibles avec le web.",
    techDescription:
      "TIFF utilise une structure de tags (IFD - Image File Directory) qui permet de stocker une grande variété de métadonnées et de configurations. Il supporte plusieurs méthodes de compression : aucune, LZW, ZIP/Deflate, JPEG (avec perte), PackBits. Le format peut contenir plusieurs images (pages) dans un seul fichier et supporte les espaces colorimétriques RGB, CMYK, YCbCr, CIE Lab et les profils ICC.",
  },
  gif: {
    id: "gif",
    name: "GIF",
    fullName: "Graphics Interchange Format",
    extension: ".gif",
    year: 1987,
    creator: "CompuServe",
    type: "raster",
    lossy: false,
    transparency: true,
    animation: true,
    maxColors: "8 bits (palette de 256 couleurs maximum)",
    typicalSize: "50 Ko à 5 Mo selon la complexité et la durée de l'animation",
    browserSupport: "Tous les navigateurs, tous les appareils. Compatibilité universelle.",
    bestFor: [
      "Animations courtes et mèmes",
      "Icônes et boutons animés",
      "Graphiques simples avec peu de couleurs",
      "Bannières publicitaires animées",
    ],
    advantages: [
      "Animation native supportée partout",
      "Compatibilité universelle",
      "Transparence basique (1 bit, pas de semi-transparence)",
      "Léger pour les graphiques simples avec peu de couleurs",
      "Facilement partageable sur toutes les plateformes",
    ],
    disadvantages: [
      "Limité à 256 couleurs par image",
      "Fichiers d'animation souvent très lourds",
      "Qualité photographique médiocre",
      "Pas de semi-transparence (canal alpha)",
      "Largement surpassé par WebP et AVIF pour les animations",
    ],
    description:
      "Le format GIF, créé en 1987, est surtout connu pour sa capacité d'animation. Bien que techniquement dépassé (limité à 256 couleurs, fichiers lourds), il reste extrêmement populaire pour les mèmes, les réactions animées et les démonstrations rapides. C'est le seul format animé universellement supporté depuis plus de 35 ans.",
    techDescription:
      "GIF utilise la compression LZW (Lempel-Ziv-Welch) sur des images en palette indexée (jusqu'à 256 couleurs par frame). L'animation est gérée par une extension de contrôle graphique qui définit le délai entre les frames, la méthode de disposition et la transparence. Chaque frame peut avoir sa propre palette de couleurs locale, permettant théoriquement plus de 256 couleurs dans une animation complète.",
  },
  bmp: {
    id: "bmp",
    name: "BMP",
    fullName: "Bitmap Image File",
    extension: ".bmp",
    year: 1986,
    creator: "Microsoft / IBM",
    type: "raster",
    lossy: false,
    transparency: false,
    animation: false,
    maxColors: "24 ou 32 bits par pixel",
    typicalSize: "15 à 50 Mo pour une photo 12 MP (non compressé)",
    browserSupport: "Tous les navigateurs mais fortement déconseillé pour le web.",
    bestFor: [
      "Compatibilité avec d'anciens logiciels Windows",
      "Utilisation interne dans certains systèmes embarqués",
      "Traitement d'image brut sans compression",
    ],
    advantages: [
      "Format très simple et facile à lire/écrire programmatiquement",
      "Aucune perte de qualité (pas de compression par défaut)",
      "Support natif sur tous les systèmes Windows",
    ],
    disadvantages: [
      "Fichiers extrêmement volumineux (aucune compression efficace)",
      "Format obsolète pour la plupart des usages modernes",
      "Pas de transparence, pas d'animation",
      "Aucun avantage sur PNG pour l'usage sans perte",
    ],
    description:
      "Le format BMP est un format d'image basique développé par Microsoft pour Windows. Il stocke les pixels de manière brute, sans compression significative, ce qui produit des fichiers très volumineux. Bien qu'il soit encore reconnu par la plupart des logiciels, il a été largement remplacé par PNG pour les usages sans perte et par JPG pour les photos.",
    techDescription:
      "BMP stocke les données pixel par pixel, généralement en ordre bottom-up (la dernière ligne de l'image est stockée en premier). Le format comprend un en-tête de fichier (14 octets), un en-tête d'information (DIB header de taille variable), une palette de couleurs optionnelle et les données de pixels. La compression RLE (Run-Length Encoding) est optionnelle mais rarement utilisée.",
  },
  ico: {
    id: "ico",
    name: "ICO",
    fullName: "Icon File Format",
    extension: ".ico",
    year: 1985,
    creator: "Microsoft",
    type: "raster",
    lossy: false,
    transparency: true,
    animation: false,
    maxColors: "32 bits par pixel (avec canal alpha)",
    typicalSize: "1 à 100 Ko selon la résolution et le nombre de tailles incluses",
    browserSupport: "Supporté comme favicon par tous les navigateurs.",
    bestFor: [
      "Favicons de sites web",
      "Icônes d'applications Windows",
      "Icônes de raccourcis bureau",
    ],
    advantages: [
      "Peut contenir plusieurs tailles dans un seul fichier (16x16, 32x32, 48x48, 256x256)",
      "Support de la transparence",
      "Standard pour les favicons compatibles avec tous les navigateurs",
    ],
    disadvantages: [
      "Format spécialisé, pas adapté aux photos ou illustrations",
      "Taille d'image limitée (généralement 256x256 max)",
      "Format ancien, progressivement remplacé par SVG et PNG pour les favicons modernes",
    ],
    description:
      "Le format ICO est un format spécialisé conçu par Microsoft pour stocker des icônes. Il est principalement utilisé pour les favicons de sites web (la petite icône affichée dans l'onglet du navigateur) et les icônes d'applications Windows. Un fichier ICO peut contenir plusieurs versions de la même icône à différentes tailles et résolutions.",
    techDescription:
      "Un fichier ICO est un conteneur qui peut stocker plusieurs images (directory entries). Chaque image est soit au format BMP (sans l'en-tête de fichier BMP), soit au format PNG compressé. L'en-tête du fichier ICO indique le nombre d'images, et chaque entrée du répertoire spécifie la taille, la profondeur de couleur et le décalage des données dans le fichier.",
  },
  pdf: {
    id: "pdf",
    name: "PDF",
    fullName: "Portable Document Format",
    extension: ".pdf",
    year: 1993,
    creator: "Adobe Systems",
    type: "container",
    lossy: false,
    transparency: true,
    animation: false,
    maxColors: "Dépend du contenu embarqué",
    typicalSize: "Variable (quelques Ko à centaines de Mo)",
    browserSupport: "Tous les navigateurs modernes affichent les PDF nativement.",
    bestFor: [
      "Documents à imprimer ou à partager",
      "Formulaires et contrats",
      "Présentations et rapports",
      "Archivage de documents",
    ],
    advantages: [
      "Mise en page fixe identique sur tous les appareils",
      "Peut contenir texte, images, formulaires, liens",
      "Standard universel pour les documents",
      "Protection par mot de passe et signatures numériques",
      "Format d'archivage reconnu (PDF/A)",
    ],
    disadvantages: [
      "Pas un format d'image à proprement parler",
      "Édition complexe sans logiciel spécialisé",
      "Fichiers potentiellement très lourds",
      "Peut contenir du code malveillant (JavaScript embarqué)",
    ],
    description:
      "Le PDF est le standard universel pour les documents numériques. Créé par Adobe en 1993, il garantit que la mise en page reste identique quel que soit l'appareil ou le logiciel utilisé. Bien qu'il ne soit pas un format d'image à proprement parler, il est couramment utilisé pour convertir des images en documents partageables et imprimables.",
    techDescription:
      "PDF est basé sur le langage PostScript et utilise une structure d'objets référencés par une table de références croisées (xref). Il peut embarquer des polices, des images (en JPEG, JPEG2000, JBIG2, CCITT ou Flate), des formulaires interactifs (AcroForms), du JavaScript et des annotations. La compression des flux utilise généralement Flate (zlib/deflate) ou LZW.",
  },
};

export const formatIds = Object.keys(formats);

export function getFormat(id: string): FormatData | undefined {
  return formats[id];
}
