import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-10">

          {/* HEIC */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-4">Outils HEIC</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/convertir-heic-en-jpg" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC en JPG</Link></li>
              <li><Link href="/convertir-heic-en-png" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC en PNG</Link></li>
              <li><Link href="/convertir-heic-en-webp" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC en WebP</Link></li>
              <li><Link href="/convertir-heic-en-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC en PDF</Link></li>
              <li><Link href="/convertir-heic-en-avif" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC en AVIF</Link></li>
              <li><Link href="/convertir-heic-en-tiff" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC en TIFF</Link></li>
              <li><Link href="/convertir-heic-en-gif" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC en GIF</Link></li>
              <li><Link href="/convertir-heic-en-ico" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC en ICO</Link></li>
              <li><Link href="/compresser-heic" className="text-gray-500 hover:text-blue-600 transition-colors">Compresser HEIC</Link></li>
              <li><Link href="/lire-metadonnees-heic" className="text-gray-500 hover:text-blue-600 transition-colors">Metadonnees HEIC</Link></li>
            </ul>
          </div>

          {/* Convertir */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-4">Convertir</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/convertir-jpg-en-webp" className="text-gray-500 hover:text-blue-600 transition-colors">JPG en WebP</Link></li>
              <li><Link href="/convertir-png-en-webp" className="text-gray-500 hover:text-blue-600 transition-colors">PNG en WebP</Link></li>
              <li><Link href="/convertir-png-en-jpg" className="text-gray-500 hover:text-blue-600 transition-colors">PNG en JPG</Link></li>
              <li><Link href="/convertir-webp-en-jpg" className="text-gray-500 hover:text-blue-600 transition-colors">WebP en JPG</Link></li>
              <li><Link href="/convertir-webp-en-png" className="text-gray-500 hover:text-blue-600 transition-colors">WebP en PNG</Link></li>
              <li><Link href="/convertir-jpg-en-png" className="text-gray-500 hover:text-blue-600 transition-colors">JPG en PNG</Link></li>
              <li><Link href="/convertir-jpg-en-avif" className="text-gray-500 hover:text-blue-600 transition-colors">JPG en AVIF</Link></li>
              <li><Link href="/convertir-svg-en-png" className="text-gray-500 hover:text-blue-600 transition-colors">SVG en PNG</Link></li>
              <li><Link href="/convertir-tiff-en-jpg" className="text-gray-500 hover:text-blue-600 transition-colors">TIFF en JPG</Link></li>
              <li><Link href="/convertir-bmp-en-jpg" className="text-gray-500 hover:text-blue-600 transition-colors">BMP en JPG</Link></li>
              <li><Link href="/convertir-jpg-en-svg" className="text-gray-500 hover:text-blue-600 transition-colors">JPG en SVG</Link></li>
              <li><Link href="/convertir-png-en-ico" className="text-gray-500 hover:text-blue-600 transition-colors">PNG en ICO</Link></li>
            </ul>
          </div>

          {/* Editer */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-4">Editer</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/compresser-image" className="text-gray-500 hover:text-blue-600 transition-colors">Compresser image</Link></li>
              <li><Link href="/redimensionner-image" className="text-gray-500 hover:text-blue-600 transition-colors">Redimensionner</Link></li>
              <li><Link href="/recadrer-image" className="text-gray-500 hover:text-blue-600 transition-colors">Recadrer</Link></li>
              <li><Link href="/pivoter-image" className="text-gray-500 hover:text-blue-600 transition-colors">Pivoter / Retourner</Link></li>
              <li><Link href="/supprimer-fond-image" className="text-gray-500 hover:text-blue-600 transition-colors">Supprimer le fond</Link></li>
              <li><Link href="/flouter-image" className="text-gray-500 hover:text-blue-600 transition-colors">Flouter</Link></li>
              <li><Link href="/convertir-image-noir-et-blanc" className="text-gray-500 hover:text-blue-600 transition-colors">Noir et blanc</Link></li>
              <li><Link href="/ajouter-filigrane" className="text-gray-500 hover:text-blue-600 transition-colors">Filigrane</Link></li>
              <li><Link href="/changer-dpi-image" className="text-gray-500 hover:text-blue-600 transition-colors">Changer DPI</Link></li>
              <li><Link href="/supprimer-metadonnees-image" className="text-gray-500 hover:text-blue-600 transition-colors">Supprimer EXIF</Link></li>
              <li><Link href="/lire-metadonnees-image" className="text-gray-500 hover:text-blue-600 transition-colors">Lire EXIF</Link></li>
            </ul>
          </div>

          {/* PDF */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-4">Outils PDF</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fusionner-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">Fusionner PDF</Link></li>
              <li><Link href="/diviser-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">Diviser PDF</Link></li>
              <li><Link href="/compresser-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">Compresser PDF</Link></li>
              <li><Link href="/convertir-jpg-en-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">JPG en PDF</Link></li>
              <li><Link href="/convertir-png-en-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">PNG en PDF</Link></li>
              <li><Link href="/convertir-pdf-en-jpg" className="text-gray-500 hover:text-blue-600 transition-colors">PDF en JPG</Link></li>
              <li><Link href="/convertir-pdf-en-png" className="text-gray-500 hover:text-blue-600 transition-colors">PDF en PNG</Link></li>
              <li><Link href="/numeroter-pages-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">Numeroter pages</Link></li>
              <li><Link href="/supprimer-pages-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">Supprimer pages</Link></li>
              <li><Link href="/pivoter-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">Pivoter PDF</Link></li>
              <li><Link href="/reorganiser-pages-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">Reorganiser pages</Link></li>
              <li><Link href="/proteger-pdf" className="text-gray-500 hover:text-blue-600 transition-colors">Proteger PDF</Link></li>
            </ul>
          </div>

          {/* Infos */}
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-4">Informations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pricing" className="text-gray-500 hover:text-blue-600 transition-colors">Tarifs Pro</Link></li>
              <li><Link href="/blog" className="text-gray-500 hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-500 hover:text-blue-600 transition-colors">FAQ</Link></li>
              <li><Link href="/a-propos" className="text-gray-500 hover:text-blue-600 transition-colors">A propos</Link></li>
              <li><Link href="/confidentialite" className="text-gray-500 hover:text-blue-600 transition-colors">Confidentialite</Link></li>
              <li><Link href="/conditions-utilisation" className="text-gray-500 hover:text-blue-600 transition-colors">CGU</Link></li>
            </ul>

            <h3 className="font-semibold text-gray-900 text-sm mb-4 mt-8">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/convertir-heic-en-jpg-sur-iphone" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC sur iPhone</Link></li>
              <li><Link href="/convertir-heic-en-jpg-sur-mac" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC sur Mac</Link></li>
              <li><Link href="/convertir-heic-en-jpg-sur-windows" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC sur Windows</Link></li>
              <li><Link href="/convertir-heic-en-jpg-sur-android" className="text-gray-500 hover:text-blue-600 transition-colors">HEIC sur Android</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            &copy; 2026 heictojpg.fr — Outils image et PDF en ligne gratuits. Aucun fichier n&apos;est conserve sur nos serveurs.
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/conditions-utilisation" className="text-gray-400 hover:text-gray-600 transition-colors">CGU</Link>
            <Link href="/confidentialite" className="text-gray-400 hover:text-gray-600 transition-colors">Confidentialite</Link>
            <Link href="/a-propos" className="text-gray-400 hover:text-gray-600 transition-colors">A propos</Link>
            <Link href="/faq" className="text-gray-400 hover:text-gray-600 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
