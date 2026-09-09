import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description:
    "Qué guarda esta página en tu navegador, para qué sirve y cómo borrarlo.",
  alternates: { canonical: "/cookies" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      index="03."
      title="Política de cookies"
      updatedAt="9 de septiembre de 2026"
    >
      <h2>Qué son</h2>
      <p>
        Las cookies y otras tecnologías de almacenamiento son pequeños archivos
        que una web guarda en tu dispositivo para recordar información entre
        visitas. Pueden servir para que el sitio funcione, para recordar
        preferencias o para medir el comportamiento de quien navega.
      </p>

      <h2>Qué usa esta página</h2>
      <p>
        Esta landing <strong>no muestra publicidad, no crea perfiles y no te
        sigue por otras webs</strong>. Solo hay dos cosas, y ninguna se activa
        hasta que aceptas el aviso.
      </p>

      <h3>Medición de audiencia</h3>
      <p>
        Si aceptas, se carga <strong>Vercel Web Analytics</strong>, el servicio
        de analítica del proveedor que aloja la web. Sirve para saber cuántas
        visitas recibe la página y desde qué tipo de dispositivo llegan.
      </p>
      <ul>
        <li>
          <span>
            <strong>No usa cookies</strong> ni ninguna otra forma de
            almacenamiento en tu dispositivo.
          </span>
        </li>
        <li>
          <span>
            No guarda tu dirección IP. Genera un identificador temporal a partir
            de datos de la petición que se descarta cada día, así que no permite
            reconocerte entre visitas.
          </span>
        </li>
        <li>
          <span>
            El script se sirve desde este mismo dominio, no desde un servidor
            externo, y los datos se agregan: no hay perfiles individuales.
          </span>
        </li>
      </ul>
      <p>
        Puedes consultar el detalle en la{" "}
        <a
          href="https://vercel.com/docs/analytics/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          política de privacidad de Vercel Analytics
        </a>
        . Si rechazas, el script no llega a cargarse.
      </p>

      <h3>Almacenamiento técnico</h3>
      <ul>
        <li>
          <span>
            <strong>zs-cookies</strong> (almacenamiento local, permanente hasta
            que lo borras): recuerda si has aceptado o rechazado este aviso, para
            no volver a mostrártelo.
          </span>
        </li>
        <li>
          <span>
            <strong>zs-preloader</strong> (almacenamiento de sesión, se borra al
            cerrar la pestaña): recuerda que ya has visto la animación de entrada
            para no repetirla en cada carga. Solo se guarda si aceptas.
          </span>
        </li>
      </ul>
      <p>
        Ninguno de los dos permite identificarte ni se envía a ningún servidor.
      </p>

      <h2>Servicios de terceros</h2>
      <p>
        Las tipografías y las imágenes se sirven desde este mismo dominio, así
        que al cargar la página no se hacen peticiones a servidores de terceros.
        Cuando pulsas un enlace a Instagram, TikTok, YouTube, WhatsApp o la
        tienda, sales de esta web y pasan a aplicarse las políticas de cookies de
        esos sitios.
      </p>

      <h2>Cómo cambiar tu elección</h2>
      <p>
        Puedes aceptar o rechazar desde el propio aviso, y cambiar de opinión
        cuando quieras: al final de la página, en el pie, tienes el enlace{" "}
        <strong>Preferencias de cookies</strong>, que borra tu elección y vuelve
        a mostrar el aviso. Retirar el consentimiento es tan fácil como darlo.
      </p>
      <p>
        Rechazar no limita ninguna función de la página: solo hará que no se
        mida la visita y que la animación de entrada se muestre cada vez.
      </p>

      <h2>Contacto</h2>
      <p>
        Si tienes dudas sobre esta política escribe a{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalPage>
  );
}
