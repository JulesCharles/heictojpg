import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="HEIC to JPG Converter"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                Outils
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full mt-1 w-56 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-lg">HEIC → JPG</Link>
                <Link href="/convertir-png-en-jpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">PNG → JPG</Link>
                <Link href="/convertir-webp-en-jpg" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">WebP → JPG</Link>
                <Link href="/convertir-jpg-en-png" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">JPG → PNG</Link>
                <Link href="/compresser-image" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-lg">Compresser image</Link>
              </div>
            </div>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/a-propos"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              À propos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}