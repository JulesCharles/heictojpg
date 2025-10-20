import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Convertisseur HEIC en JPG",
  description: "Notre politique de confidentialité détaille comment nous protégeons vos données lors de la conversion HEIC vers JPG.",
};

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Politique de confidentialité
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Votre vie privée est importante pour nous. Cette politique explique comment
          nous traitons vos données lors de l'utilisation de notre service.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            1. Collecte des données
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Notre service de conversion HEIC vers JPG est conçu pour respecter votre vie privée.
              Nous ne collectons aucune donnée personnelle lors de l'utilisation de notre convertisseur.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Données que nous ne collectons PAS :
            </h3>
            <ul className="text-gray-600 space-y-1 mb-4">
              <li>• Vos fichiers images</li>
              <li>• Votre adresse IP</li>
              <li>• Vos informations personnelles</li>
              <li>• Vos habitudes de navigation</li>
              <li>• Aucune donnée de géolocalisation</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            2. Traitement des fichiers
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Lorsque vous uploadez un fichier HEIC pour conversion :
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Le fichier est traité uniquement en mémoire de notre serveur</li>
              <li>• La conversion s'effectue immédiatement</li>
              <li>• Le fichier converti vous est retourné directement</li>
              <li>• Aucun fichier n'est sauvegardé sur nos serveurs</li>
              <li>• Toutes les données temporaires sont automatiquement supprimées</li>
            </ul>
            <p className="text-gray-600">
              Le processus entier se déroule de manière éphémère, garantissant qu'aucune trace
              de vos fichiers ne subsiste après la conversion.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            3. Cookies et stockage local
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Notre site utilise uniquement des cookies techniques essentiels au fonctionnement
              du service. Nous n'utilisons pas :
            </p>
            <ul className="text-gray-600 space-y-1 mb-4">
              <li>• Cookies de suivi publicitaire</li>
              <li>• Cookies d'analyse comportementale</li>
              <li>• Cookies de réseaux sociaux</li>
              <li>• Stockage local de vos fichiers</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            4. Sécurité
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Nous mettons en œuvre plusieurs mesures de sécurité :
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>• Connexion HTTPS sécurisée pour tous les échanges</li>
              <li>• Traitement isolé de chaque conversion</li>
              <li>• Suppression automatique des données temporaires</li>
              <li>• Infrastructure hébergée sur des serveurs sécurisés</li>
              <li>• Code source régulièrement audité</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            5. Services tiers
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Notre service peut être hébergé sur des plateformes comme Vercel, qui ont leurs
              propres politiques de confidentialité. Cependant, aucune donnée personnelle
              n'est transmise à ces services.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            6. Vos droits
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Étant donné que nous ne collectons aucune donnée personnelle, il n'y a pas
              de données à supprimer, modifier ou transférer. Votre anonymat est préservé
              à tout moment.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            7. Modifications de cette politique
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Cette politique de confidentialité peut être mise à jour occasionnellement.
              Toute modification sera affichée sur cette page avec la date de mise à jour.
            </p>
            <p className="text-gray-600">
              <strong>Dernière mise à jour :</strong> 20 octobre 2025
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            8. Contact
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
              Si vous avez des questions concernant cette politique de confidentialité
              ou nos pratiques de protection des données, n'hésitez pas à nous contacter.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}