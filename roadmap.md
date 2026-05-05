Je vais analyser ton projet en profondeur.                                                                                                                   
                                                                                                                                                               
  Searched for 3 patterns, read 10 files (ctrl+o to expand)                                                                                                    
                                                                            
⏺ J'ai bien analysé tout le projet. Voici mon diagnostic complet et mon plan d'action.                                                                         
                                            
  ---                                                                                                                                                          
  Etat des lieux                                                                                                                                               
                                                                                                                                                               
  - 74 pages (pas 84) : ~45 outils de conversion, ~12 outils d'édition, 7 outils PDF, 9 articles de blog, 4 guides device, pages statiques                     
  - Position moyenne 17, 16 pages indexées sur 74 — tu as beaucoup de pages que Google ignore encore                                                           
  - Freemium en place (5 conversions/jour via localStorage), Clerk auth, AdSense prêt                                                                          
  - Blog = contenu hardcodé dans le code, pas de CMS                                                                                                           
                                                                                                                                                               
  ---                                                                                                                                                          
  1. PROBLEMES URGENTS A CORRIGER (technique SEO)                                                                                                              
                                                                                                                                                               
  Le blog est un frein SEO
                                                                                                                                                               
  Tes articles sont hardcodés dans [slug]/page.tsx (650+ lignes de contenu inline). Problèmes :                                                                
  - Google voit du contenu JS-rendu, pas du vrai HTML statique optimisé                                                                                        
  - Le rendu markdown est artisanal (split par \n, pas de parsing markdown propre)                                                                             
  - Pas d'images réelles dans les articles (toutes pointent vers /images/placeholder.webp)
  - Les articles datent de "janvier 2025" — Google préfère le contenu frais                                                                                    
                                                                                                                                                               
  Action : Passe tes articles en MDX ou en fichiers markdown avec gray-matter + generateStaticParams. Chaque article doit avoir de vraies images, des dates    
  récentes, et du HTML propre.                                                                                                                                 
                                                                                                                                                               
  Sitemap probablement incomplet                                                                                                                               
                  
  Tu as un sitemap.ts mais vérifie qu'il liste bien les 74 pages + les 9 articles blog. Un sitemap incomplet = Google ne découvre pas tes pages.               
                  
  Pas de maillage interne suffisant                                                                                                                            
                  
  Chaque page outil devrait linker vers 3-5 outils connexes ("Vous pourriez aussi aimer"). Actuellement, la homepage link vers tout mais les pages outils sont 
  des cul-de-sacs.
                                                                                                                                                               
  ---             
  2. CONTENU A CREER (par priorité de ROI SEO)
                                                                                                                                                               
  A. Articles de blog à fort volume (longue traîne FR)
                                                                                                                                                               
  Ces sujets ont du volume en FR et peu de concurrence :                                                                                                       
                                                                                                                                                               
  ┌──────────────────────────────────────────────────────────────┬────────────────────────────────┬───────────────┐                                            
  │                           Article                            │         Mot-clé cible          │ Volume estimé │
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤                                            
  │ Comment réduire la taille d'une image sans perdre en qualité │ reduire taille image           │ 5-10K/mois    │
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤
  │ Comment mettre une photo en PDF sur iPhone                   │ photo en pdf iphone            │ 3-5K          │                                            
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤                                            
  │ Comment changer le format d'une photo sur Samsung            │ changer format photo samsung   │ 2-3K          │                                            
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤                                            
  │ PNG ou JPG : quel format choisir ?                           │ png ou jpg                     │ 3-5K          │
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤                                            
  │ Comment redimensionner une image pour Instagram/LinkedIn     │ redimensionner image instagram │ 2-3K          │
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤                                            
  │ Comment convertir une photo en PDF (5 méthodes)              │ convertir photo en pdf         │ 5-10K         │
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤                                            
  │ Comment rendre une photo plus légère pour l'envoyer par mail │ photo trop lourde mail         │ 2-3K          │
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤                                            
  │ Comment supprimer les données EXIF d'une photo (vie privée)  │ supprimer exif photo           │ 1-2K          │
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤                                            
  │ Compresser PDF : 5 méthodes gratuites                        │ compresser pdf gratuit         │ 10K+          │
  ├──────────────────────────────────────────────────────────────┼────────────────────────────────┼───────────────┤                                            
  │ WebP c'est quoi ? Tout savoir sur le format WebP             │ format webp                    │ 2-3K          │
  └──────────────────────────────────────────────────────────────┴────────────────────────────────┴───────────────┘                                            
                  
  B. Pages "glossaire" / informationnel par format

  PLAN DETAILLE D'IMPLEMENTATION
  ================================

  ETAT DES LIEUX :
  - Les donnees de chaque format existent deja dans src/data/blog/formats.ts (11 formats)
  - Des articles blog existent deja a /blog/format-{id} via FormatTemplate dans blog/[slug]/page.tsx
  - Il n'y a PAS de pages dediees /format/{id} (le dossier src/app/format/ n'existe pas)

  OBJECTIF :
  Creer des pages glossaire standalone a /format/{id} qui servent de HUB SEO.
  Differentes des articles blog : plus longues (1500+ mots), plus structurees, avec un fort maillage interne.

  PAGES A CREER (par priorite) :
  1. /format/heic  — Tout savoir sur le format HEIC (priorite max : coeur du site)
  2. /format/webp  — Tout savoir sur le format WebP (fort volume de recherche)
  3. /format/avif  — Tout savoir sur le format AVIF (format montant, peu de concurrence FR)
  4. /format/jpg   — Tout savoir sur le format JPG (volume enorme, autorite du site)
  5. /format/png   — Tout savoir sur le format PNG (complement naturel de JPG)
  6. /format/svg   — Tout savoir sur le format SVG (niche mais qualifie)
  7. /format/tiff  — Tout savoir sur le format TIFF (audience pro)
  8. /format/gif   — Tout savoir sur le format GIF (volume correct)
  9. /format/pdf   — Tout savoir sur le format PDF (enorme volume, renforce les outils PDF)
  10. /format/bmp  — Tout savoir sur le format BMP (faible priorite)
  11. /format/ico  — Tout savoir sur le format ICO (faible priorite)

  ARCHITECTURE TECHNIQUE :

  src/app/format/
    [id]/
      page.tsx          — Page dynamique avec generateStaticParams()
    page.tsx            — Page index /format (liste tous les formats = hub principal)

  src/data/glossary.ts  — Contenu enrichi par format (sections detaillees, FAQ, liens internes)
                          Reutilise les donnees de formats.ts + ajoute le contenu long

  STRUCTURE DE CHAQUE PAGE /format/{id} :

  1. METADATA SEO
     - Title : "Format {NAME} : guide complet ({fullName}) | heictojpg.fr"
     - Description : 160 chars, mot-cle principal + secondaires
     - Keywords : ["format {name}", "{name} c'est quoi", "fichier {extension}", ...]
     - OpenGraph + Twitter Card
     - Canonical : https://heictojpg.fr/format/{id}
     - JSON-LD : Article + FAQPage + BreadcrumbList

  2. CONTENU (1500+ mots, 6-8 sections H2)
     Section 1 — Introduction (200 mots)
       "Qu'est-ce que le format {NAME} ?"
       Definition accessible, contexte historique, qui l'utilise.

     Section 2 — Fiche technique (tableau)
       Reutilise les donnees de FormatData (extension, annee, createur, type, compression, etc.)

     Section 3 — Avantages et inconvenients (300 mots)
       Liste detaillee avec explications (pas juste les bullet points de formats.ts)

     Section 4 — Cas d'utilisation (300 mots)
       "Quand utiliser {NAME} ?" — scenarios concrets avec exemples

     Section 5 — Comment fonctionne {NAME} ? (200 mots)
       Explication technique accessible (reutilise techDescription + vulgarisation)

     Section 6 — {NAME} vs autres formats (300 mots)
       Tableau comparatif rapide avec JPG, PNG, WebP
       + Liens vers les pages comparatifs /blog/{name}-vs-{other}

     Section 7 — Convertir depuis/vers {NAME} (maillage interne)
       Grille de liens vers TOUS les outils de conversion lies
       Ex: pour HEIC → liens vers /convertir-heic-en-jpg, /convertir-heic-en-png, etc.
       + Lien vers /compresser-heic si applicable

     Section 8 — FAQ (3-5 questions)
       Questions frequentes specifiques au format
       JSON-LD FAQPage pour les rich snippets Google

  3. MAILLAGE INTERNE (crucial pour le SEO)
     - Liens vers les outils de conversion depuis/vers ce format
     - Liens vers les articles comparatifs impliquant ce format
     - Liens vers les articles blog editoriaux pertinents
     - Lien vers la page index /format
     - Bloc "Formats similaires" (3-4 liens vers d'autres pages /format)
     - CTA vers l'outil principal (ex: "Convertir HEIC en JPG maintenant")

  4. PAGE INDEX /format
     - Liste de tous les formats avec description courte
     - Categories : Formats photo (HEIC, JPG, PNG), Formats web (WebP, AVIF, SVG),
       Formats pro (TIFF, BMP), Formats speciaux (GIF, ICO, PDF)
     - Chaque carte linke vers /format/{id}

  MOTS-CLES CIBLES PAR PAGE :
  - /format/heic : "format heic", "heic c'est quoi", "fichier heic", "ouvrir heic"
  - /format/webp : "format webp", "webp c'est quoi", "fichier webp", "webp vs jpg"
  - /format/avif : "format avif", "avif c'est quoi", "avif vs webp"
  - /format/jpg  : "format jpg", "format jpeg", "jpg vs png"
  - /format/png  : "format png", "png c'est quoi", "png vs jpg"
  - /format/svg  : "format svg", "svg c'est quoi", "svg vs png"
  - /format/tiff : "format tiff", "tiff c'est quoi", "tiff vs jpg"
  - /format/gif  : "format gif", "gif c'est quoi", "gif anime"
  - /format/pdf  : "format pdf", "pdf c'est quoi", "creer pdf"

  ETAPES D'IMPLEMENTATION :

  Etape 1 — Creer src/data/glossary.ts
    Definir l'interface GlossaryEntry avec le contenu enrichi par format.
    Pour chaque format : intro longue, FAQ detaillees, liens internes calcules dynamiquement.
    Reutiliser les donnees de formats.ts (ne pas dupliquer).

  Etape 2 — Creer src/app/format/[id]/page.tsx
    Page dynamique avec generateStaticParams() qui genere les 11 pages.
    Metadata SEO complete (title, description, OG, Twitter, canonical, JSON-LD).
    Composant principal avec les 8 sections detaillees ci-dessus.
    Maillage interne dynamique base sur les outils existants (scanner le sitemap/toolSlugs).

  Etape 3 — Creer src/app/format/page.tsx
    Page index listant tous les formats par categorie.
    Metadata SEO : "Glossaire des formats d'image | heictojpg.fr"

  Etape 4 — Mettre a jour le sitemap
    Ajouter les 11 pages /format/{id} + la page /format dans sitemap.ts.
    Priority 0.8, changeFrequency monthly.

  Etape 5 — Ajouter au Navbar
    Lien "Formats" dans la navigation (menu dropdown ou lien direct vers /format).

  Etape 6 — Maillage interne bidirectionnel
    Depuis les pages outils existantes : ajouter un lien "En savoir plus sur le format {NAME}"
    pointant vers /format/{id} (dans le bloc "Autres conversions" en bas de page).
    Depuis les articles blog format : lien vers la page glossaire correspondante.

  Etape 7 — Redirection blog → glossaire (optionnel)
    Les pages /blog/format-{id} et /format/{id} risquent la cannibalisation SEO.
    Option A : Supprimer les posts blog format et rediriger vers /format/{id}
    Option B : Garder les deux mais differencier le contenu (blog = court/actualite, glossaire = exhaustif)
    → Recommandation : Option A (redirect 301 de /blog/format-{id} vers /format/{id})

  ESTIMATION :
  - Etapes 1-3 : implementation technique des pages
  - Etapes 4-6 : integration dans le site existant
  - Etape 7 : nettoyage SEO pour eviter la cannibalisation

  RISQUES :
  - Cannibalisation SEO entre /blog/format-{id} et /format/{id} → resolu par redirect 301
  - Contenu trop similaire entre formats → chaque page doit avoir du contenu unique et specifique
  - Pages trop fines en contenu → minimum 1500 mots par page, enrichir avec exemples concrets                                                                            
                                                                                                                                                               
  C. Pages comparatifs (très fort en SEO)                                                                                                                      
                                                                                                                                                               
  - /blog/heic-vs-webp                                                                                                                                         
  - /blog/png-vs-webp
  - /blog/avif-vs-webp                                                                                                                                         
  - /blog/jpg-vs-png-lequel-choisir
  - /blog/ilovepdf-alternatives-gratuites                                                                                                                      
                                                                                                                                                               
  ---                                                                                                                                                          
  3. OUTILS MANQUANTS A AJOUTER                                                                                                                                
                               
  Haute priorité (gros volume de recherche)
                                                                                                                                                               
  ┌───────────────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────┐                           
  │                 Outil                 │                                        Pourquoi                                        │                           
  ├───────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤                           
  │ Redimensionner image pour les réseaux │ Preset Instagram, LinkedIn, Facebook, Twitter — "taille image instagram" = gros volume │
  ├───────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤
  │ Convertir image en PDF (batch)        │ "convertir image en pdf" = énorme en FR                                                │                           
  ├───────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤                           
  │ OCR — Extraire texte d'une image      │ "extraire texte image" = volume moyen, rétention forte                                 │                           
  ├───────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤                           
  │ Créer un GIF à partir d'images        │ Fun + viral, bonne rétention                                                           │
  ├───────────────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────┤                           
  │ Générer un QR code                    │ "generateur qr code gratuit" = très gros volume, facile à coder                        │
  └───────────────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────┘                           
                  
  Moyenne priorité                                                                                                                                             
                  
  ┌─────────────────────────────────────┬──────────────────────────────────────┐                                                                               
  │                Outil                │               Pourquoi               │
  ├─────────────────────────────────────┼──────────────────────────────────────┤
  │ Convertir Word en PDF / PDF en Word │ Volume énorme mais concurrence forte │
  ├─────────────────────────────────────┼──────────────────────────────────────┤
  │ Signer un PDF                       │ Feature premium potentielle          │                                                                               
  ├─────────────────────────────────────┼──────────────────────────────────────┤                                                                               
  │ Annoter/marquer un PDF              │ Engagement + premium                 │                                                                               
  ├─────────────────────────────────────┼──────────────────────────────────────┤                                                                               
  │ Comparer deux images (diff visuel)  │ Niche mais sticky                    │
  └─────────────────────────────────────┴──────────────────────────────────────┘                                                                               
   
  ---                                                                                                                                                          
  4. PAGES MANQUANTES POUR LE RANKING
                                                                                                                                                               
  Page "Tous les outils" (/outils)
                                                                                                                                                               
  Un index complet et bien structuré de tous tes outils, catégorisé. Google adore les pages index bien faites.                                                 
                                                                                                                                                               
  Pages landing par cas d'usage                                                                                                                                
                  
  - /photographes — "Tous les outils pour les photographes"                                                                                                    
  - /etudiants — "Outils PDF et image gratuits pour étudiants"
  - /ecommerce — "Optimiser vos photos produits pour le web"                                                                                                   
                                                                                                                                                               
  Ces pages attirent du trafic via des requêtes comme "outil gratuit photo ecommerce".                                                                         
                                                                                                                                                               
  ---                                                                                                                                                          
  5. MONETISATION — PLAN D'ACTION
                                 
  Court terme (maintenant)
                                                                                                                                                               
  1. Active AdSense — tu as déjà le code prêt dans le layout. Mets des bannières sur chaque page outil (entre le formulaire et le contenu SEO)                 
  2. Affiliation dans les articles de blog — liens vers Canva Pro, Adobe Lightroom, iCloud+ dans les articles pertinents                                       
                                                                                                                                                               
  Moyen terme (quand tu passes 500 clics/jour)                                                                                                                 
                                                                                                                                                               
  3. Renforce le freemium — la limite localStorage est triviale à contourner. Passe sur un système serveur (Clerk + compteur DB)                               
  4. Feature batch premium — "Convertir 50 images d'un coup" = la killer feature payante
  5. Pas de pub pour les Pro — incentive supplémentaire                                                                                                        
                  
  Long terme                                                                                                                                                   
                  
  6. API payante — expose /api/convert avec des clés API, tarif au volume                                                                                      
  7. Multilingue — EN, ES, DE = x5 à x10 du trafic. Next.js supporte le i18n nativement
                                                                                                                                                               
  ---             
  6. ACTIONS IMMÉDIATES (cette semaine)                                                                                                                        
                                       
  1. Maillage interne : ajoute un bloc "Outils similaires" en bas de chaque page outil (3-5 liens)
  2. Vérifie ton sitemap : assure-toi que les 74 pages + blog sont listés                                                                                      
  3. Mets de vraies images dans tes articles de blog (même des screenshots simples)                                                                            
  4. Écris 2-3 articles ciblant "réduire taille image", "png ou jpg", "convertir photo en pdf" — ce sont des mots-clés à fort volume avec peu de concurrence en
   FR                                                                                                                                                          
  5. Ajoute une page /outils — index de tous les outils                                                                                                        
  6. Soumets le sitemap dans Google Search Console si pas déjà fait                                                                                            
  7. Ajoute le generateur QR code — très facile à coder, gros volume de recherche