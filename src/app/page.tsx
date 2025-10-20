import ConvertForm from "@/components/ConvertForm";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Convertir HEIC en JPG gratuitement
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Transformez vos photos iPhone au format HEIC en images JPG compatibles avec tous les appareils.
          Notre outil de conversion est rapide, sécurisé et entièrement gratuit.
          Aucun fichier n'est conservé sur nos serveurs - votre confidentialité est protégée.
        </p>
      </div>

      <div className="mb-16">
        <ConvertForm />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Qu'est-ce que le format HEIC ?
        </h2>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-4">
            HEIC (High Efficiency Image Container) est le format d'image par défaut sur les appareils Apple depuis iOS 11.
            Ce format offre une meilleure compression que le JPEG traditionnel, permettant de stocker des images de haute qualité
            tout en utilisant moins d'espace de stockage.
          </p>

          <p className="text-gray-600 mb-4">
            Cependant, le format HEIC n'est pas universellement supporté par tous les navigateurs web et applications.
            C'est pourquoi il est souvent nécessaire de convertir ces fichiers au format JPG pour une compatibilité maximale.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
            Pourquoi convertir HEIC en JPG ?
          </h3>

          <ul className="text-gray-600 space-y-2">
            <li>• <strong>Compatibilité universelle :</strong> Le format JPG est supporté par tous les navigateurs et appareils</li>
            <li>• <strong>Partage facilité :</strong> Partagez vos photos sur toutes les plateformes sans problème</li>
            <li>• <strong>Taille optimisée :</strong> Réduisez la taille de vos fichiers pour l'envoi par email</li>
            <li>• <strong>Édition simple :</strong> Éditez vos photos avec n'importe quel logiciel de retouche</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
