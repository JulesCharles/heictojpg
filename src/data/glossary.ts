import { formats, type FormatData } from "./blog/formats";
import { comparisons } from "./blog/comparisons";

// ============================================================
// TYPES
// ============================================================

export interface GlossaryFAQ {
  question: string;
  answer: string;
}

export interface GlossaryEntry {
  formatId: string;
  /** Long-form intro (200+ words) */
  intro: string;
  /** Extended advantages with explanations */
  advantagesDetail: string[];
  /** Extended disadvantages with explanations */
  disadvantagesDetail: string[];
  /** Concrete use-case scenarios */
  useCases: string[];
  /** Simplified technical explanation */
  techExplain: string;
  /** 3-5 FAQ items */
  faq: GlossaryFAQ[];
  /** SEO keywords for this format page */
  keywords: string[];
  /** Meta description (max 160 chars) */
  metaDescription: string;
}

// ============================================================
// HELPERS — dynamic internal links
// ============================================================

const toolSlugs = [
  "convertir-heic-en-jpg", "convertir-heic-en-png", "convertir-heic-en-webp",
  "convertir-heic-en-pdf", "convertir-heic-en-avif", "convertir-heic-en-tiff",
  "convertir-heic-en-gif", "convertir-heic-en-ico", "compresser-heic", "lire-metadonnees-heic",
  "convertir-png-en-jpg", "convertir-webp-en-jpg", "convertir-jpg-en-png",
  "convertir-svg-en-png", "convertir-svg-en-jpg", "convertir-jpg-en-webp",
  "convertir-png-en-webp", "convertir-webp-en-png", "convertir-tiff-en-jpg",
  "convertir-tiff-en-png", "convertir-tiff-en-webp", "convertir-bmp-en-jpg",
  "convertir-bmp-en-png", "convertir-gif-en-jpg", "convertir-gif-en-png",
  "convertir-gif-en-webp", "convertir-webp-en-gif", "convertir-jpg-en-avif",
  "convertir-png-en-avif", "convertir-avif-en-jpg", "convertir-avif-en-png",
  "convertir-jpg-en-tiff", "convertir-jpg-en-gif", "convertir-png-en-ico",
  "convertir-jpg-en-ico", "convertir-ico-en-png", "convertir-jpg-en-svg",
  "convertir-png-en-svg", "convertir-pdf-en-jpg", "convertir-pdf-en-png",
  "convertir-jpg-en-pdf", "convertir-png-en-pdf",
  "compresser-image", "redimensionner-image",
];

export interface ConversionLink {
  href: string;
  label: string;
}

/** Get all conversion tools that involve a given format id */
export function getConversionLinksForFormat(formatId: string): ConversionLink[] {
  const links: ConversionLink[] = [];
  const f = formats[formatId];
  if (!f) return links;
  const name = f.name;

  for (const slug of toolSlugs) {
    if (!slug.includes(formatId)) continue;
    if (slug.startsWith("compresser-")) {
      links.push({ href: `/${slug}`, label: `Compresser ${name}` });
    } else if (slug.startsWith("lire-metadonnees-")) {
      links.push({ href: `/${slug}`, label: `Lire les metadonnees ${name}` });
    } else if (slug.startsWith("convertir-")) {
      const parts = slug.replace("convertir-", "").split("-en-");
      if (parts.length === 2) {
        const fromF = formats[parts[0]];
        const toF = formats[parts[1]];
        if (fromF && toF) {
          links.push({ href: `/${slug}`, label: `${fromF.name} → ${toF.name}` });
        }
      }
    }
  }
  return links;
}

/** Get comparison slugs that involve a given format id */
export function getComparisonLinksForFormat(formatId: string): { href: string; label: string }[] {
  return comparisons
    .filter((c) => c.formatA === formatId || c.formatB === formatId)
    .map((c) => {
      const a = formats[c.formatA];
      const b = formats[c.formatB];
      return {
        href: `/blog/${c.slug}`,
        label: `${a?.name} vs ${b?.name}`,
      };
    });
}

/** Get related format ids (same type or frequently compared) */
export function getRelatedFormats(formatId: string): string[] {
  const f = formats[formatId];
  if (!f) return [];
  const related = Object.values(formats)
    .filter((o) => o.id !== formatId && (o.type === f.type || comparisons.some(
      (c) => (c.formatA === formatId && c.formatB === o.id) || (c.formatB === formatId && c.formatA === o.id)
    )))
    .map((o) => o.id)
    .slice(0, 4);
  return related;
}

// ============================================================
// GLOSSARY CONTENT — one entry per format
// ============================================================

export const glossaryEntries: Record<string, GlossaryEntry> = {
  heic: {
    formatId: "heic",
    metaDescription: "Tout savoir sur le format HEIC : definition, avantages, compatibilite, conversion. Le guide complet du format photo iPhone.",
    keywords: ["format heic", "heic c'est quoi", "fichier heic", "ouvrir heic", "heic iphone", "heic vs jpg", "convertir heic"],
    intro: `Le format HEIC (High Efficiency Image Container) est le format d'image par defaut sur tous les appareils Apple depuis iOS 11, lance en septembre 2017. Chaque photo prise avec un iPhone, un iPad ou un Mac est automatiquement enregistree au format HEIC, que la plupart des utilisateurs decouvrent lorsqu'ils essaient de partager leurs photos avec un utilisateur Windows ou Android.

HEIC est en realite un conteneur base sur le standard HEIF (High Efficiency Image Format), defini par le groupe MPEG. Il utilise le codec video HEVC (H.265) pour compresser les images fixes, ce qui lui permet d'atteindre une compression environ 50% superieure au JPEG tout en conservant une qualite d'image identique, voire superieure.

Concretement, une photo iPhone de 12 megapixels pese environ 1,5 a 3 Mo en HEIC, contre 3 a 6 Mo en JPEG. Cette economie d'espace est la raison principale pour laquelle Apple a adopte ce format : il permet de stocker deux fois plus de photos dans le meme espace de stockage, un argument decisif pour les utilisateurs d'iPhone aux capacites limitees.

Au-dela de la compression, le conteneur HEIC offre des fonctionnalites avancees : il peut stocker plusieurs images dans un seul fichier (sequences, Live Photos), des donnees de profondeur (mode Portrait), des metadonnees etendues et meme des images HDR. C'est un format techniquement tres complet, mais sa compatibilite limitee en dehors de l'ecosysteme Apple reste son principal defaut.`,
    advantagesDetail: [
      "Compression 50% superieure au JPEG : a qualite visuelle identique, un fichier HEIC pese moitie moins qu'un JPEG. Cela signifie deux fois plus de photos dans le meme espace de stockage sur votre iPhone.",
      "Profondeur de couleur 16 bits : alors que le JPEG est limite a 8 bits par canal (16,7 millions de couleurs), le HEIC supporte 16 bits par canal, soit plus de 281 billions de nuances. Vos photos conservent plus de details dans les degrades et les ombres.",
      "Support des Live Photos : le conteneur HEIC peut stocker a la fois l'image fixe et la courte sequence video d'une Live Photo dans un seul fichier, sans duplication.",
      "Donnees de profondeur : les photos en mode Portrait stockent la carte de profondeur directement dans le fichier HEIC, ce qui permet d'ajuster le flou d'arriere-plan apres la prise de vue.",
      "Metadonnees etendues : HEIC embarque les donnees EXIF, XMP et les profils colorimétriques complets, offrant plus d'informations que le JPEG standard.",
    ],
    disadvantagesDetail: [
      "Compatibilite limitee a Apple : en dehors de l'ecosysteme Apple (macOS, iOS, iPadOS), le HEIC n'est pas pris en charge nativement. Windows necessite une extension (gratuite ou payante) et de nombreuses applications ne le reconnaissent pas.",
      "Aucun support web hormis Safari : Chrome, Firefox et Edge ne peuvent pas afficher de fichiers HEIC nativement. Impossible d'utiliser ce format directement sur un site web.",
      "Brevets HEVC : le codec HEVC sous-jacent est protege par des brevets, ce qui freine son adoption par les editeurs de logiciels et navigateurs tiers.",
      "Retouche photo limitee : peu de logiciels de retouche (hors apps Apple) ouvrent nativement le HEIC. Il faut souvent convertir en JPEG ou PNG avant de pouvoir editer.",
      "Partage problematique : envoyer un fichier HEIC par email ou messagerie a un utilisateur non-Apple provoque souvent un fichier illisible ou une conversion automatique de qualite variable.",
    ],
    useCases: [
      "Stockage de photos sur iPhone et iPad : le HEIC est le choix optimal pour maximiser l'espace de stockage tout en conservant la meilleure qualite. Laissez le format par defaut active.",
      "Synchronisation iCloud : au sein de l'ecosysteme Apple, le HEIC est parfaitement gere. Vos photos sont synchronisees en pleine qualite entre tous vos appareils Apple.",
      "Archivage photographique personnel : si vous restez exclusivement sur Apple, le HEIC offre le meilleur ratio qualite/taille pour votre bibliotheque photo.",
      "Live Photos et mode Portrait : ces fonctionnalites specifiques a l'iPhone reposent sur le conteneur HEIC pour stocker les donnees supplementaires.",
    ],
    techExplain: `Le HEIC utilise le codec video HEVC (High Efficiency Video Coding, aussi appele H.265) pour compresser des images fixes. Ce codec, initialement concu pour la video 4K et 8K, applique des techniques avancees de prediction spatiale et de transformation mathematique pour identifier et eliminer les redundances visuelles.

Le processus de compression fonctionne ainsi : l'image est decoupee en blocs de taille variable (de 4x4 a 64x64 pixels). Pour chaque bloc, l'encodeur predit le contenu a partir des blocs voisins deja encodes, puis ne stocke que la difference entre la prediction et la realite. Cette difference est ensuite transformee (DCT/DST), quantifiee et comprimee par codage entropique (CABAC).

Le conteneur HEIF enveloppe ces donnees compressees avec des metadonnees structurees au format ISOBMFF (le meme que les fichiers MP4). Cela permet de stocker dans un seul fichier : une ou plusieurs images, des vignettes, des donnees auxiliaires (profondeur, HDR), des sequences d'images et des metadonnees EXIF/XMP.`,
    faq: [
      {
        question: "C'est quoi un fichier HEIC ?",
        answer: "Un fichier HEIC est une photo au format High Efficiency Image Container, utilise par defaut sur les appareils Apple (iPhone, iPad, Mac) depuis 2017. Il offre une meilleure compression que le JPEG : vos photos pesent moitie moins sans perte de qualite visible.",
      },
      {
        question: "Comment ouvrir un fichier HEIC sur Windows ?",
        answer: "Sur Windows 10/11, installez l'extension HEIF gratuite depuis le Microsoft Store. Vous pouvez aussi convertir vos fichiers HEIC en JPG gratuitement sur heictojpg.fr pour une compatibilite immediate.",
      },
      {
        question: "Comment convertir HEIC en JPG ?",
        answer: "Utilisez notre outil gratuit sur heictojpg.fr/convertir-heic-en-jpg : deposez vos fichiers HEIC, cliquez sur Convertir, telechargez vos JPG. Aucune inscription requise, aucun fichier conserve.",
      },
      {
        question: "Le HEIC est-il meilleur que le JPG ?",
        answer: "Techniquement oui : le HEIC offre une meilleure compression, plus de couleurs (16 bits vs 8 bits) et des fonctionnalites avancees (Live Photos, profondeur). Mais le JPG reste indispensable pour le partage grace a sa compatibilite universelle.",
      },
      {
        question: "Comment desactiver le HEIC sur iPhone ?",
        answer: "Allez dans Reglages > Appareil photo > Formats > Le plus compatible. Vos futures photos seront en JPEG. Attention : les fichiers seront environ deux fois plus lourds.",
      },
    ],
  },

  jpg: {
    formatId: "jpg",
    metaDescription: "Tout savoir sur le format JPG/JPEG : definition, avantages, compression, qualite. Le guide complet du format photo le plus utilise au monde.",
    keywords: ["format jpg", "format jpeg", "jpg c'est quoi", "fichier jpg", "jpg vs png", "compression jpeg", "qualite jpg"],
    intro: `Le format JPEG (Joint Photographic Experts Group), communement appele JPG, est le format d'image le plus utilise au monde depuis sa creation en 1992. Il a ete concu par un comite d'experts en imagerie numerique pour repondre a un besoin precis : compresser les photographies numeriques a une taille raisonnable tout en conservant une qualite visuelle acceptable.

Plus de 30 ans apres sa creation, le JPEG reste le standard de reference pour la photographie numerique. On estime que plus de 70% des images sur le web sont au format JPEG. Chaque appareil photo numerique, chaque smartphone, chaque logiciel de retouche et chaque navigateur web supporte le JPEG sans exception.

Le secret du JPEG reside dans sa compression avec perte (lossy) : l'algorithme analyse l'image et supprime les informations visuelles que l'oeil humain percoit difficilement, comme les variations subtiles de couleur dans les zones de haute frequence. Le resultat est un fichier beaucoup plus leger que l'original, avec une degradation visuelle souvent imperceptible a un taux de compression raisonnable (qualite 80-95%).

Cette compression avec perte est a la fois la force et la faiblesse du JPEG : elle permet des fichiers compacts parfaits pour le partage, mais chaque sauvegarde successive degrade legerement l'image. C'est pourquoi les professionnels travaillent en RAW ou en formats sans perte, et n'exportent en JPEG qu'a la fin du processus de retouche.`,
    advantagesDetail: [
      "Compatibilite absolument universelle : le JPEG est reconnu par tous les navigateurs, systemes d'exploitation, logiciels, applications, imprimantes et appareils electroniques existants. C'est le seul format dont vous pouvez garantir qu'il sera lisible partout.",
      "Compression ajustable : vous pouvez choisir le niveau de compression (qualite de 1 a 100). A 85-95%, la degradation est invisible a l'oeil nu. A 60-75%, les fichiers sont tres legers avec une qualite encore acceptable pour le web.",
      "Taille de fichier previsible : une photo 12 MP pese typiquement 2 a 5 Mo en JPEG, contre 10 a 50 Mo en formats sans perte. Ideal pour l'envoi par email, le stockage et l'affichage web.",
      "Excellent support SEO : Google Images indexe parfaitement les JPEG. C'est le format le plus fiable pour le referencement d'images.",
      "Vitesse de traitement : l'encodage et le decodage JPEG sont extremement rapides, meme sur des appareils a faible puissance.",
    ],
    disadvantagesDetail: [
      "Compression avec perte irreversible : chaque sauvegarde en JPEG degrade legerement l'image. Apres plusieurs cycles d'edition et de sauvegarde, les artefacts deviennent visibles (blocs, bandes de couleur).",
      "Pas de transparence : le JPEG ne supporte pas le canal alpha. Impossible de creer des images avec un fond transparent pour le design web.",
      "Profondeur de couleur limitee a 8 bits : soit 16,7 millions de couleurs. Suffisant pour la plupart des usages, mais insuffisant pour la photographie HDR ou les besoins professionnels.",
      "Artefacts de compression : a forte compression (qualite < 50%), des artefacts visuels apparaissent : blocs de 8x8 pixels, effet de banding dans les degrades, perte de nettete sur le texte et les lignes fines.",
      "Pas d'animation : le JPEG ne supporte pas les animations. Pour cela, il faut se tourner vers le GIF, le WebP ou l'AVIF.",
    ],
    useCases: [
      "Photographies sur le web : articles de blog, pages produits e-commerce, galeries photo. Le JPEG offre le meilleur equilibre entre qualite et taille pour les images photographiques.",
      "Partage par email et messagerie : un JPEG est lisible par absolument tous les destinataires, quel que soit leur appareil ou systeme d'exploitation.",
      "Reseaux sociaux : Instagram, Facebook, LinkedIn, Twitter acceptent et optimisent les JPEG. C'est le format natif de la plupart des plateformes.",
      "Impression photo : les laboratoires d'impression en ligne et les imprimantes acceptent tous le JPEG. C'est le format standard pour les tirages photo.",
    ],
    techExplain: `Le JPEG utilise un algorithme de compression en plusieurs etapes. D'abord, l'image est convertie de l'espace colorimetrique RGB (Rouge, Vert, Bleu) vers YCbCr, qui separe la luminance (Y, la luminosite) de la chrominance (Cb et Cr, les informations de couleur). L'oeil humain etant plus sensible a la luminosite qu'a la couleur, la chrominance est sous-echantillonnee (4:2:0 ou 4:2:2) pour reduire les donnees.

Ensuite, l'image est decoupee en blocs de 8x8 pixels. Chaque bloc subit une transformation en cosinus discrete (DCT) qui convertit les donnees spatiales en donnees frequentielles. Les hautes frequences (details fins) sont quantifiees plus agressivement que les basses frequences (formes generales), selon une matrice de quantification qui determine le niveau de compression.

Enfin, les coefficients quantifies sont encodes par codage entropique (Huffman), qui represente les valeurs les plus frequentes avec moins de bits. Le resultat est un fichier compact dont la taille depend directement du facteur de qualite choisi.`,
    faq: [
      {
        question: "Quelle est la difference entre JPG et JPEG ?",
        answer: "Aucune difference ! JPG et JPEG sont exactement le meme format. L'extension .jpg existe parce que les anciennes versions de Windows limitaient les extensions a 3 caracteres. Aujourd'hui, .jpg et .jpeg sont interchangeables.",
      },
      {
        question: "Quelle qualite JPEG choisir ?",
        answer: "Pour le web, une qualite de 80 a 85% offre un excellent compromis taille/qualite. Pour l'impression, visez 90 a 95%. En dessous de 70%, les artefacts de compression deviennent visibles.",
      },
      {
        question: "Le JPEG est-il encore pertinent en 2026 ?",
        answer: "Oui, malgre l'emergence du WebP et de l'AVIF. Le JPEG reste le format le plus compatible et le plus largement supporte. Il est encore utilise pour 70% des images sur le web et reste le standard pour le partage et l'impression.",
      },
      {
        question: "Comment reduire la taille d'un fichier JPG ?",
        answer: "Utilisez notre outil de compression d'image sur heictojpg.fr/compresser-image. Vous pouvez aussi reduire la qualite JPEG (80% suffit pour le web) ou redimensionner l'image.",
      },
    ],
  },

  png: {
    formatId: "png",
    metaDescription: "Tout savoir sur le format PNG : compression sans perte, transparence, cas d'utilisation. Le guide complet du format PNG.",
    keywords: ["format png", "png c'est quoi", "fichier png", "png vs jpg", "png transparent", "compression png"],
    intro: `Le format PNG (Portable Network Graphics) a ete cree en 1996 comme alternative libre et gratuite au format GIF, alors protege par un brevet sur l'algorithme de compression LZW. Developpe par le W3C et un groupe de developpeurs independants, le PNG est rapidement devenu le format de reference pour les images necessitant une qualite parfaite ou de la transparence.

Contrairement au JPEG qui utilise une compression avec perte, le PNG utilise une compression sans perte (lossless) : chaque pixel de l'image originale est preserve exactement. Cela signifie que vous pouvez ouvrir, modifier et sauvegarder un fichier PNG autant de fois que vous le souhaitez sans aucune degradation de qualite. Cette propriete en fait le format ideal pour le design, la retouche photo intermediaire et l'archivage.

L'autre atout majeur du PNG est son support complet de la transparence via le canal alpha. Chaque pixel peut avoir un niveau de transparence de 0 (completement transparent) a 255 (completement opaque), ce qui permet des effets de semi-transparence fluides. C'est pourquoi tous les logos, icones et elements d'interface sur le web utilisent le PNG quand ils necessite un fond transparent.

Le prix a payer pour cette qualite parfaite est la taille des fichiers : une photo de 12 megapixels pese 5 a 15 Mo en PNG contre 2 a 5 Mo en JPEG. Pour les photographies, le PNG n'est donc pas recommande, sauf pour la retouche intermediaire. Son terrain de predilection reste les logos, icones, captures d'ecran et illustrations.`,
    advantagesDetail: [
      "Compression sans perte totale : chaque pixel est preserve exactement. Vous pouvez sauvegarder un PNG 100 fois sans aucune degradation, contrairement au JPEG ou chaque sauvegarde degrade l'image.",
      "Transparence complete (canal alpha) : le PNG supporte 256 niveaux de transparence par pixel. Indispensable pour les logos, icones et elements de design web avec fond transparent.",
      "Ideal pour le texte et les lignes : la compression sans perte preserve la nettete parfaite du texte, des lignes fines et des bords nets. C'est le meilleur format pour les captures d'ecran et les infographies.",
      "Profondeur de couleur elevee : jusqu'a 48 bits (16 bits par canal), offrant plus de nuances que le JPEG (24 bits). Utile pour les besoins de retouche avances.",
      "Format libre et ouvert : aucun brevet, aucune licence. Le PNG est un standard web ouvert maintenu par le W3C.",
    ],
    disadvantagesDetail: [
      "Fichiers volumineux pour les photos : une photo en PNG pese 3 a 5 fois plus qu'en JPEG. Utiliser du PNG pour les photographies ralentit les sites web et gaspille de la bande passante.",
      "Pas d'animation native : le PNG standard ne supporte pas les animations. L'extension APNG existe mais reste peu supportee comparee au GIF ou au WebP anime.",
      "Surcharge pour les photos : la compression sans perte est inefficace sur les images photographiques avec des millions de nuances subtiles. Le PNG n'apporte aucun avantage visuel par rapport au JPEG pour les photos.",
      "Encodage plus lent : la compression PNG (surtout avec des niveaux de compression eleves) est plus lente que le JPEG.",
    ],
    useCases: [
      "Logos et icones avec fond transparent : chaque logo de site web, favicon et icone d'application devrait etre en PNG (ou SVG) pour beneficier de la transparence et de la nettete parfaite.",
      "Captures d'ecran : le texte, les menus et les elements d'interface restent parfaitement nets en PNG. Un JPEG introduirait des artefacts visibles autour du texte.",
      "Infographies et illustrations : les aplats de couleur, les graphiques et les schemas beneficient de la compression sans perte du PNG.",
      "Design et retouche photo : le PNG est le format ideal pour les fichiers de travail intermediaires dans Photoshop, Figma, Canva et autres outils de design.",
    ],
    techExplain: `Le PNG utilise un pipeline de compression en deux etapes. D'abord, chaque ligne de pixels est pre-traitee par un filtre predictif. Cinq filtres sont disponibles (None, Sub, Up, Average, Paeth) et l'encodeur choisit le plus efficace pour chaque ligne. Le filtre transforme les valeurs de pixels brutes en differences par rapport aux pixels voisins, ce qui produit beaucoup de valeurs proches de zero.

Ensuite, les donnees filtrees sont comprimees par l'algorithme DEFLATE, une combinaison de LZ77 (remplacement de sequences repetees par des references) et du codage de Huffman (representation des symboles frequents avec moins de bits).

Le format supporte plusieurs modes de couleur : niveaux de gris (1 a 16 bits), RGB (8 ou 16 bits par canal), palette indexee (jusqu'a 256 couleurs), avec ou sans canal alpha. Les fichiers a palette indexee sont particulierement compacts pour les images simples comme les icones.`,
    faq: [
      {
        question: "Quand utiliser PNG plutot que JPG ?",
        answer: "Utilisez le PNG pour les logos, icones, captures d'ecran, images avec transparence et graphiques avec du texte. Utilisez le JPG pour les photographies et les images realistes ou la taille du fichier compte.",
      },
      {
        question: "Comment rendre un PNG transparent ?",
        answer: "Le PNG supporte nativement la transparence. Utilisez un editeur comme Photoshop, GIMP, Canva ou Figma pour supprimer le fond. Vous pouvez aussi utiliser notre outil heictojpg.fr/supprimer-fond-image.",
      },
      {
        question: "Pourquoi mon PNG est-il si lourd ?",
        answer: "Le PNG utilise une compression sans perte qui produit des fichiers plus gros que le JPEG. Pour les photos, convertissez en JPEG ou WebP. Pour les graphiques, verifiez que vous utilisez une palette de couleurs reduite si possible.",
      },
      {
        question: "PNG ou WebP pour le web ?",
        answer: "Le WebP est generalement meilleur pour le web : il offre la meme qualite avec des fichiers 26% plus legers (sans perte) ou 60-80% plus legers (avec perte). Le PNG reste utile pour la compatibilite logicielle.",
      },
    ],
  },

  webp: {
    formatId: "webp",
    metaDescription: "Tout savoir sur le format WebP : compression, transparence, animation, support navigateurs. Le guide complet du format image recommande par Google.",
    keywords: ["format webp", "webp c'est quoi", "fichier webp", "webp vs jpg", "webp vs png", "convertir webp", "image webp"],
    intro: `Le format WebP a ete developpe par Google en 2010 dans un objectif precis : creer un format d'image plus performant que le JPEG et le PNG pour le web. Apres plus de 10 ans d'adoption progressive, le WebP est devenu en 2026 le format de reference pour les images web, supporte par tous les navigateurs modernes depuis Safari 14 (2020).

Le WebP est un format polyvalent qui combine les avantages du JPEG (compression efficace des photos) et du PNG (transparence, compression sans perte) en un seul format. Il offre deux modes de compression : avec perte (lossy, pour les photos) et sans perte (lossless, pour les graphiques). Dans les deux cas, les fichiers sont significativement plus legers que leurs equivalents JPEG ou PNG.

Les chiffres parlent d'eux-memes : en mode lossy, le WebP produit des fichiers 25 a 35% plus legers que le JPEG a qualite visuelle equivalente. En mode lossless, il est 26% plus leger que le PNG. Et contrairement au JPEG, le WebP supporte la transparence et les animations, ce qui en fait un remplacant universel pour les trois formats historiques (JPEG, PNG, GIF).

Google recommande activement le WebP pour ameliorer les performances web (Core Web Vitals, PageSpeed Insights). Les sites qui migrent vers le WebP constatent en moyenne une amelioration de 20 a 30% du temps de chargement des images, ce qui impacte positivement le SEO et l'experience utilisateur.`,
    advantagesDetail: [
      "25 a 35% plus leger que le JPEG : a qualite visuelle identique, un fichier WebP lossy pese environ un tiers de moins qu'un JPEG. Sur un site avec beaucoup d'images, cela represente des economies de bande passante considerables.",
      "26% plus leger que le PNG en sans perte : meme en mode lossless (qualite parfaite), le WebP bat le PNG en taille de fichier tout en preservant chaque pixel.",
      "Transparence et animation : le WebP supporte le canal alpha (comme PNG) et les animations (comme GIF) dans un seul format. Un GIF anime converti en WebP est typiquement 60 a 80% plus leger.",
      "Recommande par Google : Google PageSpeed Insights recommande explicitement le WebP. L'utiliser ameliore votre score de performance et potentiellement votre classement SEO.",
      "Support navigateur universel : depuis 2020, tous les navigateurs majeurs (Chrome, Firefox, Safari, Edge, Opera) supportent le WebP. La part de navigateurs compatibles depasse 95% en 2026.",
    ],
    disadvantagesDetail: [
      "Compatibilite logicielle encore incomplete : certains logiciels anciens (Photoshop avant CC 2022, GIMP avant 2.10) ne supportent pas nativement le WebP. Les outils modernes l'integrent progressivement.",
      "Moins bien indexe par certains moteurs d'images : bien que Google Images supporte parfaitement le WebP, certains moteurs d'images tiers ou reseaux sociaux peuvent encore preferer le JPEG.",
      "Profondeur de couleur limitee a 8 bits : comme le JPEG, le WebP ne supporte pas le HDR ni les profondeurs de couleur etendues. L'AVIF est superieur sur ce point.",
      "Encodage plus lent que le JPEG : la compression WebP, surtout en mode lossless, est plus lente que le JPEG. Cela peut etre un facteur pour la generation dynamique d'images a la volee.",
    ],
    useCases: [
      "Images de sites web et blogs : le WebP est le format optimal pour toutes les images d'un site web moderne. Il reduit le temps de chargement et ameliore les Core Web Vitals.",
      "E-commerce : les photos produits en WebP chargent plus vite, ce qui ameliore le taux de conversion. Les marketplace comme Google Shopping valorisent les pages rapides.",
      "Remplacement des GIF animes : convertissez vos GIF en WebP anime pour reduire leur taille de 60 a 80% tout en gardant la meme qualite.",
      "Logos et icones web avec transparence : le WebP lossless remplace avantageusement le PNG pour les elements graphiques web.",
    ],
    techExplain: `Le WebP utilise deux codecs distincts selon le mode de compression choisi. En mode avec perte (lossy), il utilise le codec VP8, derive du codec video du meme nom. VP8 decoupe l'image en macroblocs de 16x16 pixels, applique une prediction intra-trame (basee sur les pixels voisins) et inter-trame (basee sur les blocs similaires), puis une transformation en cosinus discrete suivie d'un codage arithmetique booleen.

En mode sans perte (lossless), le WebP utilise le codec VP8L, specifiquement concu pour les images fixes. VP8L applique plusieurs transformations : prediction spatiale (les pixels sont predits a partir de leurs voisins), transformation de palette (les couleurs proches sont regroupees), cache de pixels (les motifs repetes sont references) et codage entropique adaptatif (Huffman modifie).

Le format supporte egalement l'animation via VP8 (animation lossy) ou VP8L (animation lossless). Le conteneur est base sur le format RIFF (Resource Interchange File Format), qui organise les donnees en chunks identifies par un code de quatre lettres.`,
    faq: [
      {
        question: "Le WebP est-il meilleur que le JPEG ?",
        answer: "Pour le web, oui. Le WebP est 25-35% plus leger que le JPEG, supporte la transparence et les animations. Seule exception : si vous devez garantir la compatibilite avec de tres vieux appareils, le JPEG reste le choix le plus sur.",
      },
      {
        question: "Comment convertir une image en WebP ?",
        answer: "Utilisez nos outils gratuits : heictojpg.fr/convertir-jpg-en-webp ou heictojpg.fr/convertir-png-en-webp. Deposez votre image, cliquez sur Convertir, telechargez le WebP.",
      },
      {
        question: "Le WebP est-il supporte par tous les navigateurs ?",
        answer: "Oui, depuis 2020. Chrome, Firefox, Safari (14+), Edge et Opera supportent tous le WebP. Plus de 95% des utilisateurs en 2026 utilisent un navigateur compatible.",
      },
      {
        question: "WebP ou AVIF : lequel choisir ?",
        answer: "L'AVIF offre une meilleure compression (20-30% de plus) mais un encodage plus lent et un support navigateur legerement moins complet. Le WebP est le choix pragmatique aujourd'hui ; l'AVIF est le format de demain.",
      },
    ],
  },

  avif: {
    formatId: "avif",
    metaDescription: "Tout savoir sur le format AVIF : compression superieure, HDR, cas d'utilisation. Le guide complet du format image nouvelle generation.",
    keywords: ["format avif", "avif c'est quoi", "fichier avif", "avif vs webp", "avif vs jpg", "convertir avif", "image avif"],
    intro: `Le format AVIF (AV1 Image File Format) represente la derniere evolution des formats d'image pour le web. Lance en 2019, il est base sur le codec video AV1, developpe par l'Alliance for Open Media (AOMedia) — un consortium qui reunit Google, Apple, Mozilla, Microsoft, Netflix, Amazon et d'autres geants de la tech.

L'AVIF a ete cree pour surpasser le WebP et le JPEG sur tous les plans : meilleure compression, meilleure qualite, support du HDR et profondeur de couleur etendue. Et les resultats sont la : l'AVIF produit des fichiers 50% plus legers que le JPEG et 20 a 30% plus legers que le WebP, a qualite visuelle equivalente.

Mais l'AVIF ne se contente pas d'etre plus compact. Il supporte la profondeur de couleur 10 et 12 bits (contre 8 bits pour JPEG et WebP), le HDR (High Dynamic Range), les espaces colorimétriques etendus (BT.2020) et le canal alpha pour la transparence. C'est le premier format d'image web a offrir toutes ces fonctionnalites simultanement.

L'adoption de l'AVIF s'accelere : Chrome le supporte depuis la version 85 (2020), Firefox depuis la version 93 (2021), et Safari depuis la version 16.4 (2023). En 2026, la majorite des navigateurs modernes affichent les images AVIF sans probleme. Son principal defaut reste la lenteur d'encodage, significativement plus lente que le JPEG ou le WebP.`,
    advantagesDetail: [
      "Compression superieure a tout autre format web : l'AVIF produit des fichiers 50% plus legers que le JPEG et 20-30% plus legers que le WebP. C'est le format le plus efficace disponible aujourd'hui.",
      "Support du HDR et des couleurs etendues : l'AVIF supporte les profondeurs de 10 et 12 bits par canal et les espaces colorimétriques etendus (BT.2020). Ideal pour les ecrans modernes capables d'afficher du contenu HDR.",
      "Format libre de droits : contrairement au HEIC (base sur HEVC et ses brevets), l'AVIF utilise le codec AV1 qui est entierement libre de droits. Aucune redevance pour l'utiliser.",
      "Transparence et animation : comme le WebP, l'AVIF supporte le canal alpha et les sequences animees.",
      "Qualite superieure a bas debit : a tres forte compression, l'AVIF conserve une qualite nettement superieure au JPEG et au WebP, avec moins d'artefacts visibles.",
    ],
    disadvantagesDetail: [
      "Encodage tres lent : compresser une image en AVIF prend 5 a 20 fois plus de temps qu'en JPEG. C'est un frein pour la generation dynamique d'images en temps reel.",
      "Support navigateur en progression : bien que Chrome, Firefox et Safari 16.4+ supportent l'AVIF, les anciennes versions de Safari (avant 16.4, soit les iPhone/iPad non mis a jour) ne le lisent pas.",
      "Support logiciel encore limite : peu de logiciels de retouche supportent nativement l'AVIF en 2026. L'export en AVIF necessite souvent des plugins ou des outils en ligne.",
      "Taille d'image limitee : certaines implementations limitent la taille maximale des images AVIF, ce qui peut poser probleme pour les tres grandes images (panoramas, impressions).",
      "Decodage plus gourmand en CPU : l'affichage d'images AVIF consomme legerement plus de ressources processeur que le JPEG, ce qui peut impacter les performances sur les appareils peu puissants.",
    ],
    useCases: [
      "Sites web performants : l'AVIF est le choix optimal pour maximiser le score PageSpeed et les Core Web Vitals. Les sites e-commerce, portfolios et galeries photo beneficient le plus de la compression superieure.",
      "Photographie en ligne : la qualite superieure de l'AVIF a bas debit en fait le format ideal pour les portfolios de photographes et les galeries d'art en ligne.",
      "Contenu HDR : pour les sites qui affichent du contenu HDR (comparaisons photo, vente de TV/ecrans), l'AVIF est le seul format web qui supporte nativement le HDR.",
      "Progressive Web Apps (PWA) : les applications web qui cherchent les meilleures performances beneficient pleinement de la compression AVIF.",
    ],
    techExplain: `L'AVIF utilise le codec video AV1 pour compresser des images fixes. AV1 est le successeur de VP9 (utilise par YouTube) et a ete concu pour etre 30% plus efficace que HEVC tout en etant libre de droits.

Le processus de compression AV1 utilise des blocs de taille variable (de 4x4 a 128x128 pixels, appeles superblocks). Plus de 50 modes de prediction intra-trame sont disponibles, permettant une prediction tres precise du contenu de chaque bloc. L'encodeur applique ensuite des transformees (DCT, ADST, identity), une quantification adaptative et un codage entropique symbolique.

Une caracteristique unique d'AV1 est ses filtres de restauration en boucle (loop restoration), qui ameliorent la qualite de l'image decodee en reduisant les artefacts de compression. Le conteneur AVIF est base sur le format ISOBMFF (ISO Base Media File Format), le meme standard que HEIF et MP4.`,
    faq: [
      {
        question: "L'AVIF est-il meilleur que le WebP ?",
        answer: "En termes de compression pure, oui : l'AVIF est 20-30% plus leger que le WebP et supporte le HDR. Mais le WebP est plus rapide a encoder et dispose d'un support navigateur plus complet. Le choix depend de vos priorites.",
      },
      {
        question: "Tous les navigateurs supportent-ils l'AVIF ?",
        answer: "Chrome (85+), Firefox (93+) et Safari (16.4+) supportent l'AVIF. Cela couvre la grande majorite des utilisateurs en 2026, mais pas les appareils Apple non mis a jour.",
      },
      {
        question: "Comment convertir une image en AVIF ?",
        answer: "Utilisez nos outils gratuits : heictojpg.fr/convertir-jpg-en-avif ou heictojpg.fr/convertir-png-en-avif. La conversion se fait en quelques secondes directement dans votre navigateur.",
      },
      {
        question: "L'AVIF va-t-il remplacer le JPEG ?",
        answer: "A long terme, probablement. L'AVIF est superieur au JPEG sur tous les aspects techniques. Mais le JPEG a 30 ans de compatibilite universelle, ce qui lui assure une longevite considerable.",
      },
    ],
  },

  svg: {
    formatId: "svg",
    metaDescription: "Tout savoir sur le format SVG : images vectorielles, redimensionnement infini, animation CSS. Le guide complet du format SVG.",
    keywords: ["format svg", "svg c'est quoi", "fichier svg", "svg vs png", "image vectorielle", "svg web", "convertir svg"],
    intro: `Le format SVG (Scalable Vector Graphics) est fondamentalement different de tous les autres formats d'image. Alors que le JPEG, le PNG, le WebP et les autres formats stockent des images sous forme de grilles de pixels (images raster), le SVG decrit des images sous forme de formes geometriques definies par du code XML.

Cree en 2001 par le W3C (World Wide Web Consortium), le SVG permet de definir des lignes, des courbes, des rectangles, des cercles, du texte et des chemins complexes via un langage de balisage lisible par un humain. Cette approche vectorielle offre un avantage decisif : un SVG peut etre agrandi a l'infini sans aucune perte de qualite, contrairement aux images raster qui deviennent floues et pixelisees.

C'est pourquoi le SVG est le format de choix pour les logos, les icones, les illustrations simples et tous les elements graphiques qui doivent s'adapter a differentes tailles d'ecran (responsive design). Un logo en SVG sera parfaitement net sur un ecran de smartphone comme sur un ecran 4K de bureau, sans avoir besoin de fournir plusieurs versions en differentes resolutions.

Le SVG possede egalement des capacites interactives uniques : on peut le styler avec du CSS, l'animer avec CSS ou SMIL, et le manipuler avec JavaScript. C'est a la fois un format d'image et un langage de programmation graphique, ce qui le rend extremement puissant pour le design web moderne.`,
    advantagesDetail: [
      "Redimensionnement infini sans perte : un SVG reste parfaitement net quelle que soit la taille d'affichage. Ideal pour le responsive design ou une meme image doit fonctionner du mobile au 4K.",
      "Fichiers ultra-legers pour les graphiques simples : un logo en SVG pese typiquement 1 a 10 Ko, contre 10 a 100 Ko en PNG. Moins de poids = chargement plus rapide.",
      "Modifiable avec CSS et JavaScript : vous pouvez changer les couleurs, animer les elements, ajouter de l'interactivite directement depuis le code de votre page web.",
      "Responsive natif : un SVG s'adapte automatiquement a son conteneur sans aucune perte de qualite. Parfait pour les mises en page fluides.",
      "Indexable par les moteurs de recherche : le SVG etant du code XML, les moteurs de recherche peuvent en lire et indexer le contenu textuel.",
    ],
    disadvantagesDetail: [
      "Totalement inadapte aux photographies : le SVG ne peut pas representer efficacement les millions de nuances d'une photo. Le fichier resultant serait astronomiquement volumineux.",
      "Complexite technique : creer un SVG optimise necessite des connaissances techniques ou un logiciel specialise (Illustrator, Inkscape, Figma). Ce n'est pas aussi simple que d'enregistrer une photo.",
      "Illustrations complexes = fichiers lourds : un SVG avec des milliers de chemins complexes peut devenir plus lourd qu'une image raster equivalente.",
      "Risques de securite : le SVG pouvant contenir du JavaScript, un fichier SVG malveillant peut potentiellement executer du code. Les SVG uploades par les utilisateurs doivent etre sanitises.",
      "Rendu variable entre navigateurs : les SVG tres complexes (filtres, masques, animations) peuvent s'afficher differemment selon les navigateurs.",
    ],
    useCases: [
      "Logos de sites web et d'applications : un logo en SVG est net a toutes les tailles, modifiable en CSS et ultra-leger. C'est le standard pour les logos web.",
      "Icones et elements d'interface (UI) : les icon sets comme Lucide, Heroicons ou Font Awesome utilisent le SVG pour des icones nettes a toutes les resolutions.",
      "Infographies et graphiques : diagrammes, graphiques, schemas, cartes — tout ce qui est base sur des formes geometriques est mieux rendu en SVG.",
      "Animations web : les animations SVG (via CSS ou SMIL) sont legeres, fluides et ne necessitent pas de fichier video.",
    ],
    techExplain: `Le SVG est un langage de balisage XML qui definit des graphiques 2D. Le format dispose de plusieurs types d'elements :

Les formes primitives (rect, circle, ellipse, line, polyline, polygon) permettent de creer des formes de base avec des attributs simples (position, taille, couleur). Les chemins (path) utilisent un mini-langage de commandes (M pour deplacer, L pour ligne droite, C pour courbe de Bezier cubique, Q pour quadratique, A pour arc, Z pour fermer) qui permet de dessiner n'importe quelle forme.

Le SVG supporte les transformations geometriques (translate, rotate, scale, skew), les degradees (lineaire et radial), le clipping, le masquage, les filtres (flou, ombre, etc.) et le texte avec polices personnalisees. Les animations peuvent etre definies via des elements SMIL integres au SVG ou manipulees via CSS transitions/animations et JavaScript.

Le SVG peut etre integre dans une page web de plusieurs facons : inline dans le HTML, via une balise img, en background CSS ou via un element object/iframe.`,
    faq: [
      {
        question: "Quand utiliser SVG plutot que PNG ?",
        answer: "Utilisez le SVG pour les logos, icones, illustrations simples et tout graphique vectoriel. Utilisez le PNG pour les photos, captures d'ecran et images raster complexes.",
      },
      {
        question: "Comment creer un fichier SVG ?",
        answer: "Utilisez un editeur vectoriel comme Adobe Illustrator, Inkscape (gratuit), Figma ou Canva. Vous pouvez aussi ecrire du SVG directement en code XML dans un editeur de texte.",
      },
      {
        question: "Comment convertir un PNG en SVG ?",
        answer: "Utilisez notre outil de vectorisation sur heictojpg.fr/convertir-png-en-svg. L'outil trace automatiquement les contours de votre image pour creer un SVG. Le resultat depend de la simplicite de l'image source.",
      },
      {
        question: "Le SVG est-il bon pour le SEO ?",
        answer: "Oui, le SVG est excellent pour les performances web (fichiers legers = chargement rapide). De plus, le texte dans un SVG est lisible et indexable par les moteurs de recherche.",
      },
    ],
  },

  tiff: {
    formatId: "tiff",
    metaDescription: "Tout savoir sur le format TIFF : qualite professionnelle, impression, archivage. Le guide complet du format TIFF.",
    keywords: ["format tiff", "tiff c'est quoi", "fichier tiff", "tiff vs jpg", "tiff impression", "ouvrir tiff"],
    intro: `Le format TIFF (Tagged Image File Format) est l'un des plus anciens formats d'image encore utilises aujourd'hui. Cree en 1986 par Aldus Corporation (plus tard rachete par Adobe), le TIFF a ete concu pour l'impression professionnelle et la numerisation de documents a une epoque ou la photographie numerique n'existait pas encore.

40 ans plus tard, le TIFF reste le format de reference dans les industries qui exigent la plus haute qualite : impression professionnelle et pre-presse, photographie haut de gamme, imagerie medicale, archivage de documents numerises et cartographie. Sa force : une compression sans perte qui preserve chaque detail de l'image originale, une profondeur de couleur allant jusqu'a 32 bits par canal, et le support des espaces colorimétriques professionnels (CMYK, Lab).

Le prix de cette qualite est la taille des fichiers : une photo de 12 megapixels en TIFF non compresse pese 30 a 50 Mo, contre 2 a 5 Mo en JPEG. Meme avec la compression LZW (sans perte), un TIFF reste 3 a 10 fois plus lourd qu'un JPEG equivalent. C'est pourquoi le TIFF n'a aucune place sur le web : aucun navigateur ne l'affiche nativement, et sa taille rendrait les temps de chargement insoutenables.

Le TIFF est un format pour les professionnels qui privilegient la qualite absolue sur la portabilite. Si vous etes photographe professionnel, graphiste ou imprimeur, vous travaillez probablement en TIFF. Si vous etes un utilisateur grand public, convertissez vos TIFF en JPEG ou PNG pour le partage.`,
    advantagesDetail: [
      "Qualite maximale sans aucune perte : le TIFF peut utiliser une compression sans perte (LZW, ZIP) ou aucune compression, preservant chaque detail de l'image avec une fidelite absolue.",
      "Profondeur de couleur extreme : jusqu'a 32 bits par canal (128 bits par pixel en RGBA), offrant une plage dynamique et une precision de couleur inegalees. Essentiel pour la retouche professionnelle.",
      "Support CMYK natif : le TIFF est l'un des rares formats a supporter nativement l'espace colorimetrique CMYK, indispensable pour l'impression professionnelle. Les imprimeries exigent souvent du TIFF CMYK.",
      "Calques et pages multiples : un seul fichier TIFF peut contenir plusieurs images (pages), ce qui le rend ideal pour les documents numerises multi-pages.",
      "Metadonnees etendues : support complet des profils ICC, des metadonnees EXIF et XMP, et des annotations.",
    ],
    disadvantagesDetail: [
      "Fichiers extremement volumineux : un fichier TIFF pese typiquement 10 a 50 Mo pour une seule photo, contre 2 a 5 Mo en JPEG. Le stockage et le transfert de grandes collections de TIFF necessite un espace considerable.",
      "Aucun support web : aucun navigateur ne peut afficher nativement un fichier TIFF. Il est inutilisable pour les sites web, les emails ou les reseaux sociaux.",
      "Complexite du format : le TIFF existe en de nombreuses variantes (BigTIFF, GeoTIFF, TIFF/EP) avec differentes compressions et profondeurs de couleur, ce qui peut poser des problemes de compatibilite entre logiciels.",
      "Overkill pour la plupart des usages : pour le grand public, la qualite du TIFF est largement excessive. Un JPEG a 90% de qualite est visuellement identique pour un fichier 10 fois plus leger.",
    ],
    useCases: [
      "Impression professionnelle et pre-presse : les imprimeries et les graphistes exigent souvent du TIFF CMYK pour les travaux d'impression haute qualite (affiches, magazines, packaging).",
      "Photographie professionnelle : les photographes utilisent le TIFF pour les retouches intermediaires et l'archivage final en qualite maximale, avant l'export en JPEG pour la livraison client.",
      "Numerisation de documents : les scanners professionnels produisent du TIFF pour preserver la fidelite du document original. Les archives nationales et les bibliotheques utilisent le TIFF pour la numerisation patrimoniale.",
      "Imagerie scientifique et medicale : la precision du TIFF en fait le format de choix pour les images medicales (radiographies, IRM) et les images satellite.",
    ],
    techExplain: `Le TIFF utilise une structure de donnees basee sur des tags (d'ou son nom : Tagged Image File Format). Chaque fichier contient un ou plusieurs IFD (Image File Directory) qui listent les tags decrivant l'image : dimensions, profondeur de couleur, espace colorimetrique, methode de compression, etc.

Les donnees de pixels peuvent etre organisees en strips (bandes horizontales) ou en tiles (carreaux), ce qui permet un acces aleatoire efficace aux parties de l'image. Plusieurs methodes de compression sont supportees : aucune (non compresse), LZW (sans perte, brevet expire), ZIP/Deflate (sans perte), JPEG (avec perte), PackBits (simple RLE) et CCITT (pour les documents noir et blanc).

Le format supporte une grande variete d'espaces colorimétriques : niveaux de gris, RGB, CMYK, YCbCr, CIE Lab, et des profils ICC arbitraires. La variante BigTIFF permet de depasser la limite de 4 Go du TIFF classique.`,
    faq: [
      {
        question: "Comment ouvrir un fichier TIFF ?",
        answer: "Sur Mac, Apercu ouvre les TIFF nativement. Sur Windows, utilisez la Visionneuse de photos ou un logiciel comme IrfanView (gratuit). Pour le web, convertissez en JPG avec notre outil heictojpg.fr/convertir-tiff-en-jpg.",
      },
      {
        question: "Quelle difference entre TIFF et JPG ?",
        answer: "Le TIFF offre une qualite sans perte et une profondeur de couleur superieure, mais produit des fichiers 5 a 10 fois plus lourds. Le JPG est ideal pour le partage et le web ; le TIFF pour l'impression professionnelle et l'archivage.",
      },
      {
        question: "Le TIFF est-il utilisable sur le web ?",
        answer: "Non, aucun navigateur web n'affiche les TIFF. Convertissez vos TIFF en JPG, PNG ou WebP avant de les publier en ligne.",
      },
      {
        question: "TIFF ou PNG pour l'impression ?",
        answer: "Le TIFF est preferable pour l'impression professionnelle car il supporte le CMYK et des profondeurs de couleur superieures. Le PNG est suffisant pour les impressions basiques en RGB.",
      },
    ],
  },

  gif: {
    formatId: "gif",
    metaDescription: "Tout savoir sur le format GIF : animation, memes, cas d'utilisation. Le guide complet du format GIF anime.",
    keywords: ["format gif", "gif c'est quoi", "gif anime", "creer gif", "gif vs webp", "fichier gif"],
    intro: `Le format GIF (Graphics Interchange Format) est un veterane d'Internet. Cree en 1987 par CompuServe — bien avant le World Wide Web tel qu'on le connait — le GIF est surtout celebre pour une fonctionnalite : l'animation. Les GIF animes sont devenus un phenomene culturel, utilises quotidiennement dans les conversations en ligne pour exprimer des emotions, des reactions et de l'humour.

Techniquement, le GIF est un format simple et limite. Il utilise une palette de couleurs indexee de maximum 256 couleurs par image, ce qui le rend totalement inadapte aux photographies. Sa compression LZW est efficace pour les graphiques simples mais produit des fichiers souvent tres lourds pour les animations (un GIF anime de quelques secondes peut facilement peser 5 a 20 Mo).

Malgre ces limitations techniques, le GIF persiste grace a sa compatibilite universelle et sa simplicite. Il est supporte par absolument tous les navigateurs, tous les systemes de messagerie, tous les reseaux sociaux, depuis plus de 35 ans. Aucun autre format anime n'a atteint une telle ubiquite.

En 2026, le GIF est progressivement remplace par le WebP anime et l'AVIF anime pour les usages techniques (les fichiers sont 60 a 80% plus legers). Mais pour le grand public, "GIF" est devenu synonyme d'"image animee", et les plateformes comme GIPHY, Tenor et Discord continuent d'utiliser ce format massivement.`,
    advantagesDetail: [
      "Animation native universellement supportee : le GIF est le seul format anime pris en charge par tous les navigateurs, applications de messagerie et reseaux sociaux sans exception. Aucun plugin necessaire.",
      "Compatibilite absolue : un GIF fonctionne partout ou une image peut etre affichee. Email, SMS, WhatsApp, Slack, Discord, Twitter, Facebook — le GIF passe partout.",
      "Simplicite de creation : creer un GIF est simple avec des outils gratuits. Pas besoin de connaissances techniques avancees.",
      "Lecture automatique : contrairement aux videos, les GIF animes se lancent automatiquement dans la plupart des contextes, sans interaction de l'utilisateur.",
    ],
    disadvantagesDetail: [
      "Limite a 256 couleurs par image : cette limitation rend le GIF totalement inadapte aux photographies. Les degrades et les nuances subtiles sont representes par du tramage visible (dithering).",
      "Fichiers d'animation tres lourds : un GIF anime de quelques secondes pese souvent 5 a 20 Mo, la ou un WebP anime equivalent peserait 1 a 4 Mo. C'est un gaspillage de bande passante.",
      "Pas de semi-transparence : le GIF supporte la transparence binaire (un pixel est transparent ou opaque), mais pas la semi-transparence (canal alpha). Les bords des elements transparents sont creneles.",
      "Qualite photographique mediocre : la palette de 256 couleurs produit des images granuleuses avec des bandes de couleur visibles sur les photos et les degrades.",
      "Surpasse par les formats modernes : le WebP anime et l'AVIF anime offrent une qualite superieure avec des fichiers beaucoup plus legers.",
    ],
    useCases: [
      "Memes et reactions : le GIF reste le format roi pour les reactions animees dans les conversations en ligne. GIPHY et Tenor alimentent les claviers GIF de la plupart des applications.",
      "Demonstrations rapides : un GIF anime est ideal pour montrer un processus en quelques secondes (tutoriels, demonstrations d'interface, avant/apres).",
      "Emails marketing : le GIF anime est le seul format d'animation garanti de fonctionner dans les clients email (Outlook, Gmail, Apple Mail).",
      "Icones et boutons animes : les GIF simples avec peu de couleurs (animations d'icones, indicateurs de chargement) restent efficaces et legers.",
    ],
    techExplain: `Le GIF utilise la compression LZW (Lempel-Ziv-Welch) sur des images en palette indexee. Chaque frame de l'animation est une image independante avec sa propre palette de 256 couleurs maximum.

Le format organise les donnees en blocs : un en-tete global (dimensions, palette globale), suivi d'une sequence d'extensions de controle graphique (qui definissent le delai entre les frames, la methode de disposition et la transparence) et de blocs de donnees d'image (les pixels compresses en LZW).

La methode de disposition (disposal method) controle comment chaque frame est nettoyee avant d'afficher la suivante : ne rien faire, restaurer le fond ou restaurer la frame precedente. Chaque frame peut utiliser la palette globale ou definir sa propre palette locale de 256 couleurs, ce qui permet theoriquement d'avoir plus de 256 couleurs distinctes dans l'ensemble de l'animation.`,
    faq: [
      {
        question: "Comment creer un GIF anime ?",
        answer: "Utilisez des outils en ligne comme GIPHY, Canva ou EZGIF. Vous pouvez aussi convertir une serie d'images ou une courte video en GIF. Sur heictojpg.fr, convertissez des images en GIF avec nos outils.",
      },
      {
        question: "Pourquoi les GIF sont-ils si lourds ?",
        answer: "Le GIF stocke chaque frame comme une image complete avec compression LZW, qui est inefficace comparee aux codecs modernes. Un WebP anime est typiquement 60-80% plus leger pour la meme animation.",
      },
      {
        question: "GIF ou WebP anime ?",
        answer: "Le WebP anime est techniquement superieur (plus leger, plus de couleurs). Mais le GIF reste plus compatible, surtout pour les emails et les vieux systemes. Pour le web, preferez le WebP.",
      },
      {
        question: "Comment reduire la taille d'un GIF ?",
        answer: "Reduisez le nombre de frames, la resolution, ou le nombre de couleurs. Vous pouvez aussi convertir en WebP anime pour une reduction de 60-80%. Ou compressez avec notre outil de compression.",
      },
    ],
  },

  bmp: {
    formatId: "bmp",
    metaDescription: "Tout savoir sur le format BMP : definition, utilisation, conversion. Le guide du format Bitmap de Microsoft.",
    keywords: ["format bmp", "bmp c'est quoi", "fichier bmp", "bmp vs png", "convertir bmp", "ouvrir bmp"],
    intro: `Le format BMP (Bitmap Image File) est un format d'image basique developpe par Microsoft et IBM en 1986 pour le systeme d'exploitation Windows. Comme son nom l'indique, il stocke une image comme une carte de pixels (bitmap) de la maniere la plus simple possible : chaque pixel est enregistre avec ses valeurs de couleur, pratiquement sans compression.

Le BMP est le format d'image le plus simple qui existe. Il n'y a pas d'algorithme de compression sophistique, pas de transformation mathematique, pas d'optimisation — juste les pixels bruts precedes d'un en-tete. Cette simplicite a un cout : les fichiers BMP sont enormes. Une photo de 12 megapixels pese environ 35 Mo en BMP 24 bits, contre 3 Mo en JPEG et 10 Mo en PNG.

Dans les annees 1990 et 2000, le BMP etait couramment utilise sur Windows comme format de fond d'ecran et pour les icones. Mais depuis l'adoption generalisee du PNG (qui offre une compression sans perte beaucoup plus efficace), le BMP n'a plus de raison d'etre pour la plupart des usages.

En 2026, le BMP survit principalement dans des contextes specifiques : certains systemes embarques, d'anciens logiciels qui ne supportent pas les formats modernes, et les exercices de programmation (le BMP est le format le plus facile a lire et ecrire programmatiquement en raison de sa structure simple).`,
    advantagesDetail: [
      "Format extremement simple : la structure du BMP est si basique qu'un developpeur peut ecrire un lecteur BMP en quelques dizaines de lignes de code. C'est le format ideal pour l'apprentissage du traitement d'image.",
      "Aucune perte de qualite : sans compression, le BMP preserve chaque pixel exactement. La qualite est identique a l'image originale.",
      "Support natif Windows : tous les systemes Windows depuis Windows 3.0 (1990) lisent et ecrivent les BMP nativement.",
    ],
    disadvantagesDetail: [
      "Fichiers extremement volumineux : sans compression efficace, les fichiers BMP pesent 5 a 10 fois plus que les PNG equivalents et 10 a 20 fois plus que les JPEG. C'est un gaspillage d'espace de stockage.",
      "Format obsolete : le PNG offre les memes avantages (sans perte, qualite parfaite) avec une compression beaucoup plus efficace. Il n'y a aucun avantage a utiliser le BMP en 2026.",
      "Pas de transparence : le BMP standard ne supporte pas la transparence, contrairement au PNG.",
      "Pas d'animation : aucun support d'animation dans le format BMP.",
      "Fortement deconseille pour le web : bien que les navigateurs puissent afficher des BMP, la taille des fichiers rend leur utilisation sur le web totalement inadaptee.",
    ],
    useCases: [
      "Systemes embarques et logiciels anciens : certains appareils industriels ou logiciels legacy ne supportent que le BMP comme format d'image.",
      "Traitement d'image programmatique : la structure simple du BMP en fait un excellent format pour apprendre a manipuler des images pixel par pixel en programmation.",
      "Compatibilite avec d'anciens workflows Windows : certains processus automatises dans des entreprises utilisent encore le BMP pour des raisons de compatibilite historique.",
    ],
    techExplain: `Le format BMP a une structure tres simple. Un fichier BMP commence par un en-tete de fichier (14 octets) qui contient la signature "BM", la taille du fichier et le decalage vers les donnees de pixels.

Suit un en-tete d'information (DIB header), dont la taille varie selon la version du format (40 octets pour BITMAPINFOHEADER, 108 pour BITMAPV4HEADER, 124 pour BITMAPV5HEADER). Cet en-tete contient les dimensions de l'image, la profondeur de couleur, la methode de compression et la resolution.

Les donnees de pixels sont stockees ligne par ligne, generalement en ordre bottom-up (la derniere ligne de l'image est stockee en premier). Chaque ligne est alignee sur une frontiere de 4 octets (padding). La compression RLE (Run-Length Encoding) est optionnelle et rarement utilisee.`,
    faq: [
      {
        question: "Pourquoi les fichiers BMP sont-ils si gros ?",
        answer: "Le BMP stocke chaque pixel individuellement sans compression efficace. Une image de 4000x3000 pixels en 24 bits pese environ 36 Mo bruts, alors qu'un PNG equivalent pese 5-10 Mo et un JPEG 2-4 Mo.",
      },
      {
        question: "Faut-il encore utiliser le BMP en 2026 ?",
        answer: "Non, sauf cas tres specifiques (systemes embarques, logiciels legacy). Le PNG offre les memes avantages de qualite sans perte avec des fichiers beaucoup plus compacts.",
      },
      {
        question: "Comment convertir un BMP en JPG ou PNG ?",
        answer: "Utilisez nos outils gratuits sur heictojpg.fr/convertir-bmp-en-jpg ou heictojpg.fr/convertir-bmp-en-png. La conversion est instantanee et reduit considerablement la taille du fichier.",
      },
    ],
  },

  ico: {
    formatId: "ico",
    metaDescription: "Tout savoir sur le format ICO : favicons, icones Windows, multi-resolution. Le guide complet du format d'icones ICO.",
    keywords: ["format ico", "ico c'est quoi", "favicon ico", "fichier ico", "creer ico", "png en ico"],
    intro: `Le format ICO (Icon File Format) est un format specialise cree par Microsoft en 1985 pour stocker des icones dans les systemes d'exploitation Windows. Contrairement aux formats d'image classiques qui stockent une seule image, un fichier ICO peut contenir plusieurs versions de la meme icone a differentes tailles et resolutions.

Un seul fichier ICO peut embarquer des versions 16x16, 32x32, 48x48 et 256x256 pixels de la meme icone. Le systeme d'exploitation ou le navigateur choisit automatiquement la version la plus adaptee au contexte d'affichage. Cette fonctionnalite multi-resolution est la raison d'etre du format ICO.

L'utilisation la plus connue du format ICO aujourd'hui est le favicon : la petite icone qui s'affiche dans l'onglet de votre navigateur, dans la barre de favoris et dans les resultats de recherche. Bien que les navigateurs modernes acceptent aussi les favicons en PNG et en SVG, le format ICO reste le plus compatible avec tous les navigateurs, y compris les anciennes versions d'Internet Explorer.

Le format ICO est en declin progressif. Pour les favicons modernes, beaucoup de developpeurs preferent utiliser un PNG 32x32 ou un SVG. Pour les icones d'interface, le SVG et les icon fonts (comme Font Awesome) ont largement remplace le ICO. Neanmoins, inclure un favicon.ico a la racine de votre site web reste une bonne pratique pour maximiser la compatibilite.`,
    advantagesDetail: [
      "Multi-resolution dans un seul fichier : un ICO peut contenir 16x16, 32x32, 48x48 et 256x256 pixels. Le systeme affiche automatiquement la taille optimale.",
      "Compatibilite favicon universelle : le ICO est le seul format de favicon garanti de fonctionner sur tous les navigateurs, y compris les tres anciennes versions.",
      "Support de la transparence : les fichiers ICO modernes (format PNG interne) supportent le canal alpha complet pour des icones avec transparence.",
      "Standard pour les applications Windows : les executables Windows (.exe) et les raccourcis utilisent le format ICO pour leurs icones.",
    ],
    disadvantagesDetail: [
      "Format ultraspecialise : le ICO n'est pas un format d'image general. Il ne sert qu'aux icones et favicons.",
      "Taille d'image tres limitee : les ICO sont generalement limites a 256x256 pixels. Ce n'est pas un format pour les photos ou les illustrations.",
      "Format ancien en declin : les favicons modernes peuvent etre en PNG ou SVG. Les icones d'interface utilisent des SVG ou des icon fonts.",
      "Peu de logiciels de creation : la plupart des editeurs d'image ne savent pas creer des fichiers ICO nativement. Des outils de conversion sont necessaires.",
    ],
    useCases: [
      "Favicons de sites web : placer un favicon.ico a la racine de votre site garantit une icone dans tous les navigateurs.",
      "Icones d'applications Windows : les executables et installeurs Windows utilisent le format ICO pour l'icone de l'application.",
      "Raccourcis bureau : les raccourcis Windows (.lnk) referencent des fichiers ICO pour leur icone.",
    ],
    techExplain: `Un fichier ICO est un conteneur qui peut stocker plusieurs images. Sa structure commence par un en-tete de 6 octets (signature, type de fichier, nombre d'images), suivi d'un repertoire d'entrees (16 octets par image) qui decrivent chaque version de l'icone : taille, profondeur de couleur, taille des donnees et decalage dans le fichier.

Chaque image dans le conteneur est soit un bitmap au format BMP (sans l'en-tete de fichier BMP standard, en commencant directement par l'en-tete DIB), soit une image PNG comprimee. Les versions modernes de Windows (Vista et ulterieur) supportent les images PNG dans les fichiers ICO, ce qui permet des icones 256x256 avec compression efficace et canal alpha complet.

Pour la compatibilite maximale, un fichier ICO devrait contenir au minimum une version 16x16, 32x32 et 48x48 en BMP, plus une version 256x256 en PNG.`,
    faq: [
      {
        question: "Comment creer un fichier ICO pour un favicon ?",
        answer: "Convertissez un PNG carre en ICO avec notre outil gratuit heictojpg.fr/convertir-png-en-ico. Utilisez une image de 32x32 ou 64x64 pixels minimum pour un resultat net.",
      },
      {
        question: "ICO ou PNG pour le favicon ?",
        answer: "Le ICO est le plus compatible (fonctionne partout, y compris les vieux navigateurs). Le PNG est plus simple et suffisant pour les navigateurs modernes. L'ideal est de fournir les deux.",
      },
      {
        question: "Quelle taille pour un favicon ICO ?",
        answer: "Incluez au minimum les tailles 16x16 et 32x32 pixels. Pour les ecrans Retina et les favoris, ajoutez 48x48 et 256x256.",
      },
    ],
  },

  pdf: {
    formatId: "pdf",
    metaDescription: "Tout savoir sur le format PDF : documents, compression, securite, conversion. Le guide complet du format PDF.",
    keywords: ["format pdf", "pdf c'est quoi", "fichier pdf", "creer pdf", "convertir pdf", "compresser pdf", "pdf gratuit"],
    intro: `Le format PDF (Portable Document Format) est le standard universel pour les documents numeriques. Cree par Adobe en 1993, le PDF a ete concu pour resoudre un probleme fondamental : permettre a un document d'avoir exactement la meme apparence sur tous les appareils, tous les systemes d'exploitation et toutes les imprimantes, sans aucune modification de mise en page.

Bien que le PDF ne soit pas un format d'image a proprement parler, il est etroitement lie au monde de l'image. On convertit regulierement des photos en PDF (pour les envoyer en piece jointe ou les imprimer), des PDF en images (pour les partager sur le web ou les reseaux sociaux), et on manipule des PDF contenant des images (compression, extraction, annotation).

Le PDF est devenu un standard ISO (ISO 32000) et est gere par un comite international depuis 2008. Il supporte une richesse de fonctionnalites : texte avec polices embarquees, images en haute resolution, formulaires interactifs, signatures numeriques, protection par mot de passe, liens hypertextes, annotations et meme du contenu multimedia.

En 2026, le PDF est utilise quotidiennement par des milliards de personnes : contrats, factures, rapports, CV, livres numeriques, documents administratifs. Tous les navigateurs modernes integrent un lecteur PDF natif, et les smartphones peuvent ouvrir les PDF sans application supplementaire.`,
    advantagesDetail: [
      "Mise en page fixe universelle : un PDF s'affiche exactement de la meme maniere sur tous les appareils, quel que soit le systeme d'exploitation, le logiciel ou l'imprimante. C'est la garantie de fidelite que le PDF apporte.",
      "Contenu mixte : un seul fichier PDF peut contenir du texte, des images, des tableaux, des graphiques, des formules mathematiques, des liens hypertextes et des formulaires interactifs.",
      "Securite integree : le PDF supporte le chiffrement, la protection par mot de passe (lecture et/ou modification), les signatures numeriques et les restrictions de copie/impression.",
      "Standard ISO universel : le PDF est un standard international (ISO 32000) reconnu par tous les gouvernements, entreprises et institutions.",
      "Archivage perenne : la variante PDF/A est le standard international pour l'archivage a long terme de documents electroniques.",
    ],
    disadvantagesDetail: [
      "Pas un format d'image : le PDF est un format de document, pas d'image. L'utiliser pour stocker une seule photo est inefficace et ajoute une couche de complexite inutile.",
      "Edition complexe : modifier le contenu d'un PDF est difficile sans logiciel specialise (Adobe Acrobat, Foxit). Le PDF a ete concu pour etre un format de sortie finale, pas d'edition.",
      "Taille variable et potentiellement lourde : un PDF contenant des images haute resolution peut peser des dizaines de Mo. La compression des PDF est un besoin frequent.",
      "Risques de securite : le PDF peut contenir du JavaScript et des formulaires, ce qui le rend potentiellement vecteur de malware. N'ouvrez que des PDF de sources fiables.",
    ],
    useCases: [
      "Documents professionnels : contrats, factures, devis, rapports, presentations — le PDF est le format standard pour tous les documents professionnels.",
      "Conversion de photos en documents : convertissez vos photos en PDF pour les envoyer en piece jointe formatee ou les assembler en album.",
      "Formulaires et signatures : les formulaires PDF interactifs permettent de remplir et signer des documents sans les imprimer.",
      "Archivage de documents : le PDF/A est le standard pour l'archivage electronique a long terme, garanti lisible dans 50 ans.",
    ],
    techExplain: `Le PDF est base sur un modele de page inspire du langage PostScript d'Adobe. Chaque page est definie par un flux d'instructions graphiques qui decrivent exactement ou placer chaque element (texte, image, forme) avec des coordonnees precises.

La structure interne d'un fichier PDF comprend : un en-tete (version PDF), un corps (objets numerotes contenant le contenu), une table de references croisees (xref, qui permet un acces rapide a chaque objet) et un trailer (qui pointe vers le catalogue et la xref).

Les images embarquees dans un PDF peuvent etre compressees en JPEG, JPEG2000, JBIG2 (pour le texte noir et blanc) ou Flate (zlib). Le texte est stocke avec des references aux polices embarquees ou standards. Les flux de contenu peuvent etre compresses en Flate ou LZW pour reduire la taille du fichier.`,
    faq: [
      {
        question: "Comment convertir une image en PDF ?",
        answer: "Utilisez notre outil gratuit sur heictojpg.fr/convertir-jpg-en-pdf ou heictojpg.fr/convertir-png-en-pdf. Deposez vos images, cliquez sur Convertir, telechargez votre PDF.",
      },
      {
        question: "Comment compresser un PDF ?",
        answer: "Utilisez notre outil de compression PDF sur heictojpg.fr/compresser-pdf. L'outil reduit la taille des images embarquees tout en preservant la lisibilite du document.",
      },
      {
        question: "Comment extraire les images d'un PDF ?",
        answer: "Convertissez votre PDF en images avec notre outil heictojpg.fr/convertir-pdf-en-jpg. Chaque page du PDF sera convertie en une image JPG separee.",
      },
      {
        question: "Comment proteger un PDF par mot de passe ?",
        answer: "Utilisez notre outil gratuit heictojpg.fr/proteger-pdf pour ajouter un mot de passe a votre PDF. Vous pouvez choisir de proteger l'ouverture et/ou la modification du document.",
      },
    ],
  },
};

// ============================================================
// PUBLIC API
// ============================================================

export function getGlossaryEntry(formatId: string): GlossaryEntry | undefined {
  return glossaryEntries[formatId];
}

export function getAllGlossaryIds(): string[] {
  return Object.keys(glossaryEntries);
}

export function getFormatData(formatId: string): FormatData | undefined {
  return formats[formatId];
}

export { formats };
