# Plan d'action heictojpg.fr

## Contexte (données GSC - août 2026)

- 403 clics / 39 300 impressions sur 28 jours
- CTR moyen : 1%
- Position moyenne : 15.6
- Page star : /photo-identite-en-ligne (146 clics, 7300 impressions)

---

## 1. Gate intelligente — Limite d'usage

Les données 2026 montrent que limiter l'usage convertit 1.5-2x mieux que limiter les fonctionnalités (source: Artisan Growth Strategies).

### Modèle recommandé

| Niveau | Limite | Condition |
|---|---|---|
| Sans compte | 3 conversions/jour | Rien à faire |
| Compte gratuit (Clerk) | 15-20 conversions/jour | Inscription email |
| Premium (LemonSqueezy) | Illimité + batch + sans pub | Paiement |

### Pourquoi 3 conversions gratuites ?

- Assez pour que Google indexe correctement (bots voient un outil fonctionnel)
- L'utilisateur a son "aha moment" avant le gate
- Un gate trop agressif fait fuir 30% des utilisateurs vers un concurrent en < 1 semaine
- iLovePDF donne 20 images/session, TinyPNG ~100/mois — on est plus restrictif car on a moins de valeur perçue

### Flow utilisateur

1. L'utilisateur arrive via Google → convertit 1-3 fichiers gratuitement
2. Au 4ème → modal Clerk "Créez un compte gratuit pour continuer"
3. Il s'inscrit → on a son email + il peut utiliser l'outil (15-20/jour)
4. S'il atteint la limite compte gratuit → proposition premium

### Taux de conversion réaliste

- 9% des visiteurs créent un compte gratuit (benchmark freemium 2026)
- 3-5% des comptes gratuits passent premium
- Avec 400 clics/mois → ~36 comptes gratuits → ~1-2 clients payants/mois
- Objectif : augmenter le trafic pour que ce funnel devienne rentable

---

## 2. SEO — Optimiser l'existant (quick wins)

### Pages prioritaires par potentiel

| Page | Impressions | Clics | Position | CTR | Action |
|---|---|---|---|---|---|
| /photo-identite-en-ligne | 7 300 | 146 | 8.2 | 2.0% | Pousser en top 5, enrichir contenu + FAQ schema |
| /inverser-couleurs-image | 3 735 | 19 | 9.1 | 0.5% | Réécrire title/meta, CTR beaucoup trop faible |
| /blog/comment-convertir-png-en-ico | 2 882 | 10 | 8.6 | 0.3% | Title accrocheur, FAQ schema, +500 mots |
| /blog/comment-mettre-image-en-300-dpi | 1 509 | 12 | 14.3 | 0.8% | Enrichir contenu pour remonter en top 10 |
| /blog/reduire-taille-photo-iphone | 1 550 | 6 | 11.1 | 0.4% | Enrichir contenu + maillage interne |
| /changer-dpi-image | 1 456 | 17 | 10.4 | 1.2% | Metatags optimisés (déjà fait), enrichir contenu |
| /redimensionner-image-pour-impression | 1 204 | 44 | 9.1 | 3.7% | Bon CTR, pousser en top 5 pour plus d'impressions |
| /blog/pdf-vs-jpg | 1 655 | 8 | 8.7 | 0.5% | Réécrire title, enrichir contenu |
| /convertir-png-en-jpg | 1 054 | 5 | 26.6 | 0.5% | Position trop basse, gros travail de contenu nécessaire |
| /blog/heic-vs-jpg-quelle-difference | 674 | 7 | 9.6 | 1.0% | Enrichir, presque en top 10 |

### Actions concrètes par page

#### Title et meta description
- Chaque title doit contenir le mot-clé principal + un bénéfice ("Gratuit", "En ligne", "Sans inscription")
- Meta description = call-to-action clair, 150-160 caractères
- Exemple : "Inverser les couleurs d'une image en ligne gratuitement. Outil rapide, sans inscription. Résultat instantané."

#### Contenu à enrichir
- Ajouter 300-500 mots de contenu utile sous chaque outil (guide, FAQ, cas d'usage)
- FAQ schema (JSON-LD) sur chaque page outil — Google affiche les rich snippets
- Minimum 3 questions/réponses par FAQ

#### Maillage interne
- Chaque page outil doit linker vers 3-5 autres outils heictojpg.fr
- Chaque article de blog doit linker vers 2-3 outils + 2-3 autres articles
- Ajouter une section "Outils similaires" en bas de chaque page outil

---

## Ordre d'exécution

### Phase 1 — Quick wins SEO (impact immédiat)
- [ ] Réécrire les title/meta des 5 pages avec le plus d'impressions et le CTR le plus faible
- [ ] Ajouter FAQ schema (JSON-LD) sur les 5 pages outils principales
- [ ] Améliorer le maillage interne (section "Outils similaires")

### Phase 2 — Gate intelligente (capture emails)
- [ ] Implémenter le compteur de conversions (localStorage + cookie)
- [ ] Modal Clerk après 3 conversions/jour
- [ ] Page pricing pour le premium
- [ ] Tracking des conversions (combien créent un compte, combien passent premium)

### Phase 3 — Contenu SEO (moyen terme)
- [ ] Enrichir le contenu des 10 pages à plus fort potentiel (+300-500 mots chacune)
- [ ] Ajouter des screenshots/illustrations
- [ ] Publier 2-4 nouveaux articles de blog ciblant des requêtes à volume

---

## Pricing recommandé

| Plan | Prix | Inclus |
|---|---|---|
| Gratuit sans compte | 0€ | 3 conversions/jour, 1 fichier à la fois |
| Gratuit avec compte | 0€ | 15-20 conversions/jour, 1 fichier à la fois |
| Premium mensuel | 3.99€/mois | Illimité, batch, sans pub, priorité support |
| Premium annuel | 29.99€/an | Idem (-37%) |

---

## Sources

- Artisan Growth Strategies — SaaS Feature Gating 2026
- First Page Sage — SaaS Freemium Conversion Rates 2026
- Daydream — Freemium Conversion Rate Benchmarks
- ChartMogul — SaaS Conversion Report
- Données GSC heictojpg.fr — 19 juillet au 17 août 2026
