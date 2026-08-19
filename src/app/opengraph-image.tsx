import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "heictojpg.fr — Outils image et PDF en ligne gratuits";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            marginBottom: 16,
            display: "flex",
          }}
        >
          heictojpg.fr
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 800,
            textAlign: "center",
            display: "flex",
          }}
        >
          50+ outils image et PDF en ligne — Gratuit, sans inscription
        </div>
      </div>
    ),
    { ...size }
  );
}
