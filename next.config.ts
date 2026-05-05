import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["canvas", "pdfjs-dist"],
  async redirects() {
    return [
      {
        source: '/blog/1',
        destination: '/blog/convertir-heic-en-jpg-sans-perte-qualite',
        permanent: true,
      },
      {
        source: '/blog/2',
        destination: '/blog/pourquoi-apple-utilise-format-heic',
        permanent: true,
      },
      {
        source: '/blog/3',
        destination: '/blog/optimiser-photos-web-heic-jpg-webp',
        permanent: true,
      },
      {
        source: '/blog/4',
        destination: '/blog/gerer-espace-stockage-iphone-conversion-heic',
        permanent: true,
      },
      // Redirect blog format pages to glossary pages
      {
        source: '/blog/format-:id',
        destination: '/format/:id',
        permanent: true,
      },
      // SEO slug alias for jpg vs png
      {
        source: '/blog/jpg-vs-png-lequel-choisir',
        destination: '/blog/png-vs-jpg',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
