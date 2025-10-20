import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "À propos - Convertisseur HEIC en JPG gratuit",
  description: "Découvrez notre mission : fournir un outil de conversion HEIC vers JPG gratuit, sécurisé et respectueux de votre vie privée.",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          À propos de notre service
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Notre mission est de vous fournir un outil de conversion HEIC vers JPG simple,
          rapide et sécurisé, sans compromettre votre vie privée.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-xl">100% Sécurisé</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Vos fichiers sont traités localement. Aucun fichier n'est conservé
              sur nos serveurs après la conversion.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-xl">Rapide</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Conversion instantanée de vos fichiers HEIC en JPG avec une
              qualité d'image optimisée.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
            <CardTitle className="text-xl">Gratuit</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Notre service est entièrement gratuit, sans publicité intrusive
              ni limitation d'usage.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Pourquoi avons-nous créé ce service ?
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Avec l'adoption croissante du format HEIC par Apple, de nombreux utilisateurs se retrouvent
              avec des photos qu'ils ne peuvent pas facilement partager ou visualiser sur d'autres appareils.
              Nous avons créé cet outil pour résoudre ce problème de manière simple et efficace.
            </p>
            <p className="text-gray-600 mb-4">
              Notre convertisseur utilise la technologie Sharp, une bibliothèque de traitement d'image
              haute performance, pour garantir des conversions rapides sans perte de qualité significative.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Respect de la vie privée
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Votre vie privée est notre priorité. Voici notre engagement :
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Aucun fichier n'est stocké sur nos serveurs</li>
              <li>• La conversion s'effectue en mémoire uniquement</li>
              <li>• Aucune donnée personnelle n'est collectée</li>
              <li>• Pas de cookies de suivi</li>
              <li>• Code source transparent et vérifiable</li>
            </ul>
            <p className="text-gray-600">
              Dès que votre fichier est converti et téléchargé, toutes les données temporaires
              sont automatiquement supprimées de nos serveurs.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Technologie utilisée
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Notre convertisseur est développé avec les technologies suivantes :
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• <strong>Next.js</strong> - Framework React pour une expérience utilisateur optimale</li>
              <li>• <strong>Sharp</strong> - Bibliothèque de traitement d'image haute performance</li>
              <li>• <strong>TypeScript</strong> - Pour un code robuste et maintenable</li>
              <li>• <strong>Tailwind CSS</strong> - Pour un design moderne et responsive</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}