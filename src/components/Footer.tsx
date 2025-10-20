import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 HEIC → JPG. Aucun fichier n'est conservé.
          </div>

          <div className="flex space-x-6 text-sm">
            <Link
              href="/confidentialite"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}