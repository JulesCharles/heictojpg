import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <p className="text-7xl font-extrabold text-blue-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Page introuvable
        </h1>
        <p className="text-gray-500 mb-8">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
          Essayez l&apos;un de nos outils gratuits ci-dessous.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-8 text-left">
          <Link
            href="/convertir-heic-en-jpg"
            className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <p className="font-semibold text-gray-900 text-sm">HEIC en JPG</p>
            <p className="text-xs text-gray-500">Convertissez vos photos iPhone.</p>
          </Link>
          <Link
            href="/compresser-image"
            className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <p className="font-semibold text-gray-900 text-sm">Compresser image</p>
            <p className="text-xs text-gray-500">Réduisez le poids de vos photos.</p>
          </Link>
          <Link
            href="/supprimer-fond-image"
            className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <p className="font-semibold text-gray-900 text-sm">Supprimer le fond</p>
            <p className="text-xs text-gray-500">Détourage IA en 1 clic.</p>
          </Link>
          <Link
            href="/fusionner-pdf"
            className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <p className="font-semibold text-gray-900 text-sm">Fusionner PDF</p>
            <p className="text-xs text-gray-500">Combinez vos documents.</p>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Voir tous les outils
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
          >
            Lire le blog
          </Link>
        </div>
      </div>
    </div>
  );
}
