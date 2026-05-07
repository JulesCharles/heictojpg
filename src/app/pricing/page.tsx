import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import ProButton from "./pro-button";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Tarifs - Gratuit vs Pro | heictojpg.fr",
  description:
    "Comparez les offres gratuites et Pro de heictojpg.fr. Conversions illimitées, batch, fichiers jusqu'à 50 Mo et plus.",
  alternates: {
    canonical: "https://heictojpg.fr/pricing",
  },
};

const features = [
  { name: "Conversions par jour", free: "5", pro: "Illimitées" },
  { name: "Taille max par fichier", free: "10 Mo", pro: "50 Mo" },
  { name: "Conversion batch (multi-fichiers)", free: false, pro: true },
  { name: "Téléchargement ZIP", free: false, pro: true },
  { name: "Tous les outils (HEIC, PNG, WebP, SVG, compression, redimensionnement)", free: true, pro: true },
  { name: "Qualit\u00e9 personnalisable", free: false, pro: true },
  { name: "Sans publicit\u00e9", free: false, pro: true },
  { name: "Support prioritaire", free: false, pro: true },
];

export default async function PricingPage() {
  const { userId } = await auth();

  return (
    <>
      <PageHero>
        <Breadcrumbs items={[{ label: "Tarifs", href: "/pricing" }]} />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Choisissez votre offre
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Utilisez nos outils gratuitement ou passez à Pro pour des conversions
          illimitées et des fonctionnalités avancées.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-5xl">

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Free plan */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Gratuit</h2>
            <div className="text-4xl font-bold text-gray-800">
              0&euro;
              <span className="text-base font-normal text-gray-500">/mois</span>
            </div>
            <p className="text-gray-500 mt-2">Pour un usage occasionnel</p>
          </div>

          <ul className="space-y-4 mb-8 flex-1">
            {features.map((f) => (
              <li key={f.name} className="flex items-center gap-3">
                {typeof f.free === "boolean" ? (
                  f.free ? (
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                  ) : (
                    <X className="h-5 w-5 text-gray-300 shrink-0" />
                  )
                ) : (
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                )}
                <span className="text-gray-600 text-sm">
                  {f.name}{typeof f.free === "string" ? ` : ${f.free}` : ""}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/"
            className="block w-full text-center py-3 px-6 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors mt-auto"
          >
            Commencer gratuitement
          </Link>
        </div>

        {/* Pro plan */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-500 p-8 relative flex flex-col">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
            Recommandé
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Pro</h2>
            <div className="text-4xl font-bold text-blue-600">
              5&euro;
              <span className="text-base font-normal text-gray-500">/mois</span>
            </div>
            <p className="text-gray-500 mt-2">Pour les professionnels</p>
            <div className="mt-3 inline-block bg-green-50 border border-green-200 rounded-lg px-3 py-1.5">
              <p className="text-sm text-green-700 font-medium">
                ou 39&euro;/an <span className="text-green-600 font-normal">(soit 3,25&euro;/mois — 35% d&apos;économie)</span>
              </p>
            </div>
            <div className="mt-2 inline-block bg-amber-50 border border-amber-200 rounded-lg px-3 py-1.5">
              <p className="text-sm text-amber-700 font-medium">
                7 jours d&apos;essai gratuit
              </p>
            </div>
          </div>

          <ul className="space-y-4 mb-6">
            {features.map((f) => (
              <li key={f.name} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-gray-600 text-sm">
                  {f.name}{typeof f.pro === "string" ? ` : ${f.pro}` : ""}
                </span>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <ProButton isSignedIn={!!userId} />
            <ProButton isSignedIn={!!userId} annual />
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          Paiement sécurisé
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
          Sans engagement
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Annulation en 1 clic
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
          Visa, Mastercard, PayPal
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Ce que nos utilisateurs en pensent</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-1 mb-3 text-amber-400">
              {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <p className="text-gray-600 text-sm mb-3">&quot;Je convertis mes photos iPhone tous les jours pour mon blog. Le Pro me fait gagner un temps fou avec le batch.&quot;</p>
            <p className="text-gray-800 font-medium text-sm">Marie L.</p>
            <p className="text-gray-400 text-xs">Blogueuse voyage</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-1 mb-3 text-amber-400">
              {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <p className="text-gray-600 text-sm mb-3">&quot;Pas de pub, qualité max et des fichiers jusqu&apos;à 50 Mo. Indispensable pour mon studio photo.&quot;</p>
            <p className="text-gray-800 font-medium text-sm">Thomas R.</p>
            <p className="text-gray-400 text-xs">Photographe professionnel</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-1 mb-3 text-amber-400">
              {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <p className="text-gray-600 text-sm mb-3">&quot;Le meilleur rapport qualité-prix. 5 euros par mois pour des conversions illimitées, c&apos;est donné.&quot;</p>
            <p className="text-gray-800 font-medium text-sm">Sophie D.</p>
            <p className="text-gray-400 text-xs">Designer freelance</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Questions fréquentes
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Puis-je annuler à tout moment ?</h3>
            <p className="text-gray-600 text-sm">
              Oui, vous pouvez annuler votre abonnement Pro à tout moment depuis votre espace client.
              Vous conservez l&apos;accès Pro jusqu&apos;à la fin de la période payée.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quels moyens de paiement acceptez-vous ?</h3>
            <p className="text-gray-600 text-sm">
              Nous acceptons les cartes bancaires (Visa, Mastercard, Amex) et PayPal
              via notre partenaire de paiement sécurisé LemonSqueezy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">La version gratuite est-elle limitée dans le temps ?</h3>
            <p className="text-gray-600 text-sm">
              Non, la version gratuite est disponible indéfiniment. Vous pouvez utiliser nos outils
              gratuitement avec les limites indiquées (5 conversions/jour, 10 Mo max).
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Comment fonctionne l&apos;essai gratuit de 7 jours ?</h3>
            <p className="text-gray-600 text-sm">
              Vous bénéficiez de 7 jours d&apos;accès complet à toutes les fonctionnalités Pro sans être débité.
              Vous pouvez annuler à tout moment pendant l&apos;essai. Si vous ne faites rien, l&apos;abonnement
              démarre automatiquement à la fin de la période d&apos;essai.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Y a-t-il une garantie satisfait ou remboursé ?</h3>
            <p className="text-gray-600 text-sm">
              Oui, nous offrons une garantie de remboursement de 30 jours. Si vous n&apos;êtes pas satisfait
              du Pro, contactez-nous et nous vous rembourserons intégralement.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
