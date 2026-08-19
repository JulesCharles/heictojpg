# Monitoring heictojpg.fr — Où voir quoi

## 1. Inscriptions et utilisateurs → Clerk

**URL :** https://dashboard.clerk.com

Tu vois :
- Tous les utilisateurs inscrits (email, date, dernière connexion)
- Le nombre d'inscriptions par jour/semaine
- Les metadata utilisateur (dont `isPremium: true/false`)
- Les sessions actives

**Pour vérifier si un utilisateur est premium :**
Clerk → Users → clique sur l'utilisateur → Public Metadata → `isPremium: true`

---

## 2. Paiements et abonnements → Stripe

**URL :** https://dashboard.stripe.com

Tu vois :
- **Accueil** : volume brut, nombre de paiements, MRR (revenu mensuel récurrent)
- **Transactions** : chaque paiement avec email, montant, date, statut
- **Clients** : liste des clients avec historique de paiement
- **Abonnements** : qui est abonné mensuel, actif/annulé
- **Catalogue de produits** : tes 2 prix (4,99€ mensuel, 19€ lifetime)

**Pour voir qui a payé :**
Stripe → Transactions → tu vois chaque paiement avec l'email du client

**Pour voir les abonnements actifs :**
Stripe → Abonnements → filtre "Actif"

**Pour voir les paiements lifetime :**
Stripe → Transactions → filtre par produit "heictojpg.fr Pro" → les paiements ponctuels de 19€

---

## 3. Conversions et rate limiting → Upstash Redis

**URL :** https://console.upstash.com

Tu vois :
- Nombre de requêtes par jour (= nombre de conversions trackées)
- Les clés stockées : `conv:{userId}:{date}` ou `conv:ip:{ip}:{date}`
- Tu peux chercher une clé spécifique pour voir combien un utilisateur a converti aujourd'hui

**Pour voir les conversions d'un utilisateur :**
Upstash → Data Browser → cherche `conv:user_*` → tu vois le compteur du jour

---

## 4. Trafic et SEO → Google Search Console

**URL :** https://search.google.com/search-console (domaine sc-domain:heictojpg.fr)

Tu vois :
- Impressions, clics, CTR, position moyenne
- Les requêtes qui amènent du trafic
- Les pages les plus performantes
- Les erreurs d'indexation

---

## 5. Analytics → Google Tag Manager / Analytics

**Déjà configuré** dans le layout via GTM.

---

## Flow de paiement complet

```
1. Utilisateur arrive sur le site via Google
   ↓
2. Il utilise un outil (ex: convertir HEIC en JPG)
   ↓
3. Conversion 1, 2, 3 → OK (compteur Redis s'incrémente)
   ↓
4. Conversion 4 → BLOQUÉ
   → Pas de compte ? Modal "Créez un compte gratuit" (Clerk openSignUp)
   → Déjà un compte gratuit ? Modal "Passez en Pro" (lien /pricing)
   ↓
5a. Il crée un compte gratuit
   → Clerk enregistre l'utilisateur (visible dans Clerk dashboard)
   → Le compteur Redis passe à la limite 20/jour
   → Il peut continuer ses conversions
   ↓
5b. Il va sur /pricing
   → Il choisit Mensuel (4,99€) ou Lifetime (19€)
   → Clic sur le bouton → appel API /api/stripe/checkout
   → Redirection vers Stripe Checkout (page Stripe hébergée)
   ↓
6. Il paie sur Stripe
   → Stripe envoie l'événement checkout.session.completed
   → Notre webhook /api/stripe/webhook le reçoit
   → Le webhook met isPremium: true dans Clerk publicMetadata
   → L'utilisateur est redirigé vers /pricing?success=true
   ↓
7. Prochaine conversion
   → /api/check-limit vérifie Clerk → isPremium: true
   → Pas de limite → conversions illimitées

ANNULATION (mensuel uniquement) :
   → L'utilisateur annule sur Stripe
   → Stripe envoie customer.subscription.deleted
   → Notre webhook met isPremium: false dans Clerk
   → L'utilisateur repasse à 20 conversions/jour
```

---

## Checklist quotidienne

- [ ] Clerk : combien de nouvelles inscriptions ?
- [ ] Stripe : combien de paiements ? MRR ?
- [ ] Upstash : combien de requêtes (= conversions) ?
- [ ] GSC : impressions et clics en hausse ?

---

## En cas de problème

| Problème | Où regarder |
|---|---|
| Un utilisateur ne peut pas convertir | Upstash → cherche sa clé `conv:` |
| Un paiement n'active pas le Pro | Stripe → Webhooks → voir si l'événement est passé |
| Le webhook échoue | Stripe → Développeurs → Webhooks → voir les tentatives |
| Inscription ne marche pas | Clerk → Logs |
| Le site est down | Vercel → Deployments → Logs |
