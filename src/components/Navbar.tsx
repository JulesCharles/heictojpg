import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Navbar() {
  const { userId } = await auth();

  return (
    <nav className="relative z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="HEIC to JPG Converter" width={120} height={32} className="h-8 w-auto" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* HEIC */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm">
                HEIC
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white border rounded-lg shadow-lg">
                <Link href="/convertir-heic-en-jpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">HEIC &rarr; JPG</Link>
                <Link href="/convertir-heic-en-png" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">HEIC &rarr; PNG</Link>
                <Link href="/convertir-heic-en-webp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">HEIC &rarr; WebP</Link>
                <Link href="/convertir-heic-en-pdf" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">HEIC &rarr; PDF</Link>
                <Link href="/convertir-heic-en-avif" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">HEIC &rarr; AVIF</Link>
                <Link href="/convertir-heic-en-tiff" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">HEIC &rarr; TIFF</Link>
                <Link href="/convertir-heic-en-gif" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">HEIC &rarr; GIF</Link>
                <Link href="/convertir-heic-en-ico" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">HEIC &rarr; ICO</Link>
                <Link href="/compresser-heic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Compresser HEIC</Link>
                <Link href="/lire-metadonnees-heic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">Metadonnees HEIC</Link>
                </div>
              </div>
            </div>

            {/* Convertir */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm">
                Convertir
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white border rounded-lg shadow-lg max-h-80 overflow-y-auto">
                <Link href="/convertir-jpg-en-webp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">JPG &rarr; WebP</Link>
                <Link href="/convertir-png-en-webp" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">PNG &rarr; WebP</Link>
                <Link href="/convertir-png-en-jpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">PNG &rarr; JPG</Link>
                <Link href="/convertir-webp-en-jpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">WebP &rarr; JPG</Link>
                <Link href="/convertir-webp-en-png" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">WebP &rarr; PNG</Link>
                <Link href="/convertir-jpg-en-png" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">JPG &rarr; PNG</Link>
                <Link href="/convertir-jpg-en-avif" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">JPG &rarr; AVIF</Link>
                <Link href="/convertir-svg-en-png" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">SVG &rarr; PNG</Link>
                <Link href="/convertir-svg-en-jpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">SVG &rarr; JPG</Link>
                <Link href="/convertir-tiff-en-jpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">TIFF &rarr; JPG</Link>
                <Link href="/convertir-bmp-en-jpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">BMP &rarr; JPG</Link>
                <Link href="/convertir-png-en-ico" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">PNG &rarr; ICO</Link>
                </div>
              </div>
            </div>

            {/* Outils */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 text-sm">
                Outils
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="bg-white border rounded-lg shadow-lg">
                <Link href="/compresser-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">Compresser image</Link>
                <Link href="/redimensionner-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Redimensionner</Link>
                <Link href="/recadrer-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Recadrer</Link>
                <Link href="/pivoter-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Pivoter / Retourner</Link>
                <Link href="/flouter-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Flouter</Link>
                <Link href="/convertir-image-noir-et-blanc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Noir et blanc</Link>
                <Link href="/ajouter-filigrane" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Filigrane</Link>
                <Link href="/changer-dpi-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Changer DPI</Link>
                <Link href="/inverser-couleurs-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Inverser couleurs</Link>
                <Link href="/lire-metadonnees-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Lire metadonnees</Link>
                <Link href="/supprimer-metadonnees-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">Supprimer metadonnees</Link>
                </div>
              </div>
            </div>

            {/* Auth + Pro */}
            {userId ? (
              <>
                <Link href="/pricing" className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">Pro</Link>
                <UserButton />
              </>
            ) : (
              <>
                <Link href="/sign-in" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">Se connecter</Link>
                <Link href="/pricing" className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">Pro</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
