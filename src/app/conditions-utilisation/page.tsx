import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | heictojpg.fr",
  description: "Conditions generales d'utilisation du site heictojpg.fr et de ses outils de conversion d'images en ligne.",
  alternates: { canonical: "https://heictojpg.fr/conditions-utilisation" },
};

export default function ConditionsUtilisation() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Conditions d&apos;utilisation</h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <p className="text-sm text-gray-400">Derniere mise a jour : 5 mai 2026</p>

        <h2 className="text-xl font-semibold text-gray-800">1. Presentation du service</h2>
        <p>
          heictojpg.fr est un service en ligne gratuit qui permet de convertir, compresser, redimensionner
          et editer des images et des fichiers PDF. Le service est accessible sans inscription pour les
          fonctionnalites gratuites. Un abonnement Pro est disponible pour un usage illimite.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">2. Acceptation des conditions</h2>
        <p>
          En utilisant heictojpg.fr, vous acceptez les presentes conditions d&apos;utilisation. Si vous
          n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le service.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">3. Utilisation du service</h2>
        <p>Le service est destine a un usage personnel et professionnel legal. Il est interdit de :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Utiliser le service pour traiter des contenus illegaux ou portant atteinte aux droits d&apos;autrui</li>
          <li>Tenter de surcharger ou perturber le fonctionnement du service</li>
          <li>Automatiser les requetes sans autorisation prealable (scraping, bots)</li>
          <li>Contourner les limitations du plan gratuit</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800">4. Confidentialite des fichiers</h2>
        <p>
          Aucun fichier uploade n&apos;est conserve sur nos serveurs. Le traitement s&apos;effectue en memoire
          et toutes les donnees temporaires sont supprimees immediatement apres le telechargement du resultat.
          Nous ne consultons, n&apos;analysons et ne partageons jamais le contenu de vos fichiers.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">5. Abonnement Pro</h2>
        <p>
          L&apos;abonnement Pro est gere par notre partenaire de paiement LemonSqueezy. En souscrivant,
          vous acceptez egalement les conditions de LemonSqueezy. L&apos;abonnement est renouvelable
          automatiquement et peut etre annule a tout moment depuis votre espace client. Aucun
          remboursement n&apos;est effectue pour la periode en cours apres annulation.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">6. Limitation de responsabilite</h2>
        <p>
          Le service est fourni &quot;tel quel&quot;, sans garantie d&apos;aucune sorte. heictojpg.fr ne peut etre
          tenu responsable de toute perte de donnees, degradation de qualite ou interruption de service.
          Conservez toujours une copie originale de vos fichiers avant toute conversion.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">7. Propriete intellectuelle</h2>
        <p>
          Vous conservez tous les droits sur les fichiers que vous uploadez et convertissez. heictojpg.fr
          ne revendique aucun droit sur vos contenus. Le site, son design et son code sont la propriete
          de heictojpg.fr.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">8. Modifications</h2>
        <p>
          Nous nous reservons le droit de modifier ces conditions a tout moment. Les modifications
          prennent effet des leur publication sur cette page. Il vous appartient de consulter
          regulierement cette page.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">9. Contact</h2>
        <p>
          Pour toute question concernant ces conditions, contactez-nous a l&apos;adresse :
          contact@heictojpg.fr
        </p>
      </div>
    </div>
  );
}
