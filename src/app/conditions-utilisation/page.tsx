import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | heictojpg.fr",
  description: "Conditions générales d'utilisation du site heictojpg.fr et de ses outils de conversion d'images en ligne.",
  alternates: { canonical: "https://heictojpg.fr/conditions-utilisation" },
};

export default function ConditionsUtilisation() {
  return (
    <>
      <PageHero>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Conditions d&apos;utilisation</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Conditions générales d&apos;utilisation du site heictojpg.fr et de ses outils de conversion d&apos;images en ligne.
        </p>
      </PageHero>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
        <p className="text-sm text-gray-400">Dernière mise à jour : 5 mai 2026</p>

        <h2 className="text-xl font-semibold text-gray-800">1. Présentation du service</h2>
        <p>
          heictojpg.fr est un service en ligne gratuit qui permet de convertir, compresser, redimensionner
          et éditer des images et des fichiers PDF. Le service est accessible sans inscription pour les
          fonctionnalités gratuites. Un abonnement Pro est disponible pour un usage illimité.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">2. Acceptation des conditions</h2>
        <p>
          En utilisant heictojpg.fr, vous acceptez les présentes conditions d&apos;utilisation. Si vous
          n&apos;acceptez pas ces conditions, veuillez ne pas utiliser le service.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">3. Utilisation du service</h2>
        <p>Le service est destiné à un usage personnel et professionnel légal. Il est interdit de :</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Utiliser le service pour traiter des contenus illégaux ou portant atteinte aux droits d&apos;autrui</li>
          <li>Tenter de surcharger ou perturber le fonctionnement du service</li>
          <li>Automatiser les requêtes sans autorisation préalable (scraping, bots)</li>
          <li>Contourner les limitations du plan gratuit</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800">4. Confidentialité des fichiers</h2>
        <p>
          Aucun fichier uploadé n&apos;est conservé sur nos serveurs. Le traitement s&apos;effectue en mémoire
          et toutes les données temporaires sont supprimées immédiatement après le téléchargement du résultat.
          Nous ne consultons, n&apos;analysons et ne partageons jamais le contenu de vos fichiers.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">5. Abonnement Pro</h2>
        <p>
          L&apos;abonnement Pro est géré par notre partenaire de paiement LemonSqueezy. En souscrivant,
          vous acceptez également les conditions de LemonSqueezy. L&apos;abonnement est renouvelable
          automatiquement et peut être annulé à tout moment depuis votre espace client. Aucun
          remboursement n&apos;est effectué pour la période en cours après annulation.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">6. Limitation de responsabilité</h2>
        <p>
          Le service est fourni &quot;tel quel&quot;, sans garantie d&apos;aucune sorte. heictojpg.fr ne peut être
          tenu responsable de toute perte de données, dégradation de qualité ou interruption de service.
          Conservez toujours une copie originale de vos fichiers avant toute conversion.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">7. Propriété intellectuelle</h2>
        <p>
          Vous conservez tous les droits sur les fichiers que vous uploadez et convertissez. heictojpg.fr
          ne revendique aucun droit sur vos contenus. Le site, son design et son code sont la propriété
          de heictojpg.fr.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">8. Modifications</h2>
        <p>
          Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications
          prennent effet dès leur publication sur cette page. Il vous appartient de consulter
          régulièrement cette page.
        </p>

        <h2 className="text-xl font-semibold text-gray-800">9. Contact</h2>
        <p>
          Pour toute question concernant ces conditions, contactez-nous à l&apos;adresse :
          contact@heictojpg.fr
        </p>
      </div>
    </div>
    </>
  );
}
