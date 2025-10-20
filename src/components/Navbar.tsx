import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              HEIC → JPG
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Convertisseur
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
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