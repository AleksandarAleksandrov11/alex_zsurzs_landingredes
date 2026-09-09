import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { EMAIL, WHATSAPP_URL, company, identity } from "@/content/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Aviso legal y condiciones de uso de la página de enlaces de ${identity.fullName} (${identity.brand}).`,
  alternates: { canonical: "/aviso-legal" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage index="01." title="Aviso legal" updatedAt="9 de septiembre de 2026">
      <h2>Titular del sitio web</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y de Comercio Electrónico, se
        informa de que el titular de esta página es:
      </p>
      <ul>
        <li>
          <span>
            <strong>Denominación social:</strong> {company.legalName}
          </span>
        </li>
        <li>
          <span>
            <strong>CIF/NIF:</strong> {company.taxId}
          </span>
        </li>
        <li>
          <span>
            <strong>Domicilio:</strong> {company.addressLine}
          </span>
        </li>
        <li>
          <span>
            <strong>Correo electrónico:</strong>{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
        </li>
      </ul>

      <h2>Objeto</h2>
      <p>
        Esta página reúne los enlaces oficiales de {identity.fullName} y una
        presentación de su actividad profesional: instalaciones eléctricas,
        fontanería, climatización, trabajos verticales y formación técnica. No es
        una tienda: las compras y las inscripciones se realizan en los sitios de
        destino, cada uno con sus propias condiciones.
      </p>

      <h2>Condiciones de uso</h2>
      <p>
        El acceso a esta página es gratuito y no exige registro. Al navegar por
        ella aceptas este aviso legal. Te comprometes a usar el sitio conforme a
        la ley, a la buena fe y al orden público, y a no realizar acciones que
        puedan dañarlo, sobrecargarlo o impedir su normal funcionamiento.
      </p>

      <h2>Propiedad intelectual e industrial</h2>
      <p>
        Los textos, fotografías, logotipos, iconos y demás elementos de esta
        página pertenecen a {company.legalName} o se utilizan con autorización de
        sus titulares. La marca <strong>{identity.brand}</strong> y su logotipo
        están protegidos. Queda prohibida su reproducción, distribución,
        comunicación pública o transformación sin autorización expresa por
        escrito.
      </p>
      <p>
        Las marcas de terceros que aparecen en el sitio (Instagram, TikTok,
        YouTube, WhatsApp y otras) pertenecen a sus respectivos titulares y se
        muestran únicamente con fines identificativos.
      </p>

      <h2>Enlaces a sitios de terceros</h2>
      <p>
        Esta página dirige a perfiles de redes sociales, a la tienda y a las
        formaciones alojadas en dominios ajenos a esta landing. No controlamos
        esos sitios ni respondemos de sus contenidos, políticas o
        disponibilidad. Al seguir un enlace pasas a regirte por las condiciones
        del sitio de destino.
      </p>

      <h2>Responsabilidad</h2>
      <p>
        La información publicada tiene carácter divulgativo y no sustituye al
        asesoramiento técnico de un profesional para un caso concreto. Se procura
        que los contenidos estén actualizados y sean correctos, pero no se
        garantiza que estén libres de errores ni que el servicio esté disponible
        de forma ininterrumpida. No se responde de los daños derivados del uso de
        la página o de la imposibilidad de acceder a ella, salvo en los casos en
        que la ley lo imponga.
      </p>

      <h2>Protección de datos</h2>
      <p>
        El tratamiento de los datos personales se explica en la{" "}
        <a href="/privacidad">política de privacidad</a>, y el uso del
        almacenamiento del navegador en la{" "}
        <a href="/cookies">política de cookies</a>.
      </p>

      <h2>Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier
        controversia serán competentes los juzgados y tribunales del domicilio
        del titular, salvo que la normativa de consumo establezca otro fuero.
      </p>

      <h2>Contacto</h2>
      <p>
        Para cualquier cuestión relacionada con este aviso legal puedes escribir
        a <a href={`mailto:${company.email}`}>{company.email}</a>. Para consultas
        sobre trabajos o formaciones, a{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> o por{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>
    </LegalPage>
  );
}
