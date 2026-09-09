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
        Esta landing <strong>no instala cookies de analítica, de publicidad ni
        de seguimiento</strong>, y no comparte datos con redes publicitarias. Lo
        único que guarda es almacenamiento técnico en tu propio navegador, que
        nunca sale de tu dispositivo:
      </p>
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
            para no repetirla en cada carga. Solo se guarda si aceptas este
            aviso.
          </span>
        </li>
      </ul>
      <p>
        Ninguno de los dos permite identificarte ni se envía a ningún servidor.
      </p>

      <h2>Servicios de terceros</h2>
      <p>
        Las tipografías se sirven desde el mismo dominio, así que no se realizan
        peticiones a servicios externos al cargar la página. Cuando pulsas un
        enlace a Instagram, TikTok, YouTube, WhatsApp o la tienda, sales de esta
        web y pasan a aplicarse las políticas de cookies de esos sitios.
      </p>

      <h2>Cómo cambiar tu elección</h2>
      <p>
        Puedes rechazar el almacenamiento desde el propio aviso. Si ya elegiste
        antes y quieres cambiar de opinión, borra los datos de este sitio desde
        la configuración de tu navegador: al volver a entrar aparecerá de nuevo
        el aviso. Todos los navegadores permiten hacerlo desde su apartado de
        privacidad o de datos de navegación.
      </p>
      <p>
        Rechazar el almacenamiento no limita ninguna función de la página: solo
        hará que la animación de entrada se muestre en cada visita.
      </p>

      <h2>Contacto</h2>
      <p>
        Si tienes dudas sobre esta política escribe a{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalPage>
  );
}
