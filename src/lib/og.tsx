import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { identity } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const FONT_DIR = join(process.cwd(), "src", "assets", "fonts");

/**
 * Imagen Open Graph 1200×630 con la marca: fondo oscuro, banda azul a la
 * inclinación de la Z, isotipo y nombre en Righteous. El cuerpo va en Arimo
 * (métricamente compatible con Arial, la secundaria del manual).
 */
export async function renderOgImage(): Promise<ImageResponse> {
  const [righteous, arimo, arimoBold] = await Promise.all([
    readFile(join(FONT_DIR, "Righteous-Regular.woff")),
    readFile(join(FONT_DIR, "Arimo-Regular.woff")),
    readFile(join(FONT_DIR, "Arimo-Bold.woff")),
  ]);

  return new ImageResponse(<OgImage />, {
    ...OG_SIZE,
    fonts: [
      { name: "Righteous", data: righteous, style: "normal", weight: 400 },
      { name: "Arimo", data: arimo, style: "normal", weight: 400 },
      { name: "Arimo", data: arimoBold, style: "normal", weight: 700 },
    ],
  });
}

function OgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0F0F10",
        padding: "60px 72px",
        position: "relative",
        fontFamily: "Arimo",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -240,
          right: -260,
          width: 560,
          height: 1200,
          backgroundColor: "#23366F",
          transform: "rotate(40deg)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -240,
          right: -30,
          width: 16,
          height: 1200,
          backgroundColor: "#FF7A1A",
          transform: "rotate(40deg)",
          display: "flex",
        }}
      />

      <svg width="228" height="149" viewBox="0 0 245.76 160.25" style={{ position: "relative" }}>
        <path fill="#3D5FC4" d="M66.48 127.97L116.2 66.09L97.16 66.19L92.15 66.19L110.15 23.14L62.09 82.96L81.14 82.86L85.18 82.86L66.48 127.97" />
        <path fill="#FFFFFF" d="M199.78 160.25L0 160.25L54.38 91.88L65.57 91.88L18.18 151.51L181.11 151.51L162.87 129.64L77.41 129.57L83.54 120.83L166.97 120.9L199.78 160.25" />
        <path fill="#FFFFFF" d="M119.66 57.13L107.26 57.15L145.32 9.83L41.17 9.83L58.49 30.61L92.61 30.61L84.67 40.45L53.89 40.45L20.16 0L165.24 0L119.66 57.13" />
        <path fill="#FFFFFF" d="M222.91 160.25L190.09 120.9L179.13 120.9L186 129.64L204.24 151.51L211.36 160.25L222.91 160.25" />
        <path fill="#FFFFFF" d="M245.76 160.25L212.94 120.9L201.98 120.9L208.85 129.64L227.09 151.51L234.21 160.25L245.76 160.25" />
      </svg>

      <div style={{ display: "flex", flexDirection: "column", position: "relative", maxWidth: 780 }}>
        <div
          style={{
            display: "flex",
            fontFamily: "Righteous",
            fontSize: 104,
            color: "#FFFFFF",
            lineHeight: 1,
          }}
        >
          {identity.firstName} {identity.lastName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 26,
            fontWeight: 700,
            color: "#FF7A1A",
            letterSpacing: 3,
          }}
        >
          «{identity.nickname}» · {identity.brand} · {identity.location}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 22,
            maxWidth: 700,
            fontSize: 25,
            lineHeight: 1.4,
            color: "#E6E6E6",
          }}
        >
          {identity.tagline}
        </div>
      </div>
    </div>
  );
}
