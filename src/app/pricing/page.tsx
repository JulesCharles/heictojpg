import type { Metadata } from "next";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import ProButton from "./pro-button";

export const metadata: Metadata = {
  title: "Tarifs - Gratuit vs Pro | heictojpg.fr",
  description:
    "Comparez les offres gratuites et Pro de heictojpg.fr. Conversions illimitees, batch, fichiers jusqu'a 50 Mo et plus.",
  alternates: {
    canonical: "https://heictojpg.fr/pricing",
  },
};

const features = [
  { name: "Conversions par jour", free: "5", pro: "Illimitees" },
  { name: "Taille max par fichier", free: "10 Mo", pro: "50 Mo" },
  { name: "Conversion batch (multi-fichiers)", free: false, pro: true },
  { name: "Telechargement ZIP", free: false, pro: true },
  { name: "Tous les outils (HEIC, PNG, WebP, SVG, compression, redimensionnement)", free: true, pro: true },
  { name: "Qualite personnalisable", free: false, pro: true },
  { name: "Sans publicite", free: false, pro: true },
  { name: "Support prioritaire", free: false, pro: true },
];

export default async function PricingPage() {
  const { userId } = await auth();

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Choisissez votre offre
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Utilisez nos outils gratuitement ou passez a Pro pour des conversions
          illimitees et des fonctionnalites avancees.
        </p>
      </div>

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
            Recommande
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
                ou 39&euro;/an <span className="text-green-600 font-normal">(soit 3,25&euro;/mois — 35% d&apos;economie)</span>
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

      {/* FAQ */}
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Questions frequentes
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Puis-je annuler a tout moment ?</h3>
            <p className="text-gray-600 text-sm">
              Oui, vous pouvez annuler votre abonnement Pro a tout moment depuis votre espace client.
              Vous conservez l&apos;acces Pro jusqu&apos;a la fin de la periode payee.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quels moyens de paiement acceptez-vous ?</h3>
            <p className="text-gray-600 text-sm">
              Nous acceptons les cartes bancaires (Visa, Mastercard, Amex) et PayPal
              via notre partenaire de paiement securise LemonSqueezy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">La version gratuite est-elle limitee dans le temps ?</h3>
            <p className="text-gray-600 text-sm">
              Non, la version gratuite est disponible indefiniment. Vous pouvez utiliser nos outils
              gratuitement avec les limites indiquees (5 conversions/jour, 10 Mo max).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
