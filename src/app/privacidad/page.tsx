import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { EMAIL, PHONE, company, identity } from "@/content/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo trata ${company.legalName} los datos personales de quien contacta desde la página de enlaces de ${identity.fullName}.`,
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <LegalPage
      index="02."
      title="Política de privacidad"
      updatedAt="9 de septiembre de 2026"
    >
      <h2>Responsable del tratamiento</h2>
      <ul>
        <li>
          <span>
            <strong>Responsable:</strong> {company.legalName}
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
            <strong>Correo de contacto:</strong>{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </span>
        </li>
      </ul>

      <h2>Qué datos se recogen</h2>
      <p>
        Esta página <strong>no tiene formularios</strong> y no pide ningún dato
        para navegar por ella. Solo se tratan datos personales cuando eres tú
        quien inicia el contacto:
      </p>
      <ul>
        <li>
          <span>
            <strong>Por WhatsApp</strong> ({PHONE}): tu número de teléfono, tu
            nombre de perfil y el contenido de los mensajes que envíes.
          </span>
        </li>
        <li>
          <span>
            <strong>Por correo electrónico</strong> (
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>): tu dirección de correo y el
            contenido del mensaje.
          </span>
        </li>
      </ul>
      <p>
        El servidor que aloja la web registra de forma automática datos técnicos
        de la conexión, como la dirección IP y el tipo de navegador, con la única
        finalidad de servir la página y mantener su seguridad.
      </p>

      <h2>Para qué se usan</h2>
      <ul>
        <li>
          <span>Responder a tu consulta y darte la información que pides.</span>
        </li>
        <li>
          <span>
            Gestionar presupuestos, trabajos, formaciones y colaboraciones.
          </span>
        </li>
        <li>
          <span>Cumplir las obligaciones legales, fiscales y contables.</span>
        </li>
      </ul>
      <p>
        No se elaboran perfiles ni se toman decisiones automatizadas, y no se
        envían comunicaciones comerciales sin tu consentimiento previo.
      </p>

      <h2>Base jurídica</h2>
      <p>
        El tratamiento se basa en tu <strong>consentimiento</strong> al
        escribirnos (artículo 6.1.a del RGPD), en la{" "}
        <strong>ejecución de un contrato</strong> o de medidas precontractuales
        cuando se trata de un presupuesto o una inscripción (artículo 6.1.b), y
        en el <strong>cumplimiento de obligaciones legales</strong> para la
        facturación y la contabilidad (artículo 6.1.c).
      </p>

      <h2>Cuánto tiempo se conservan</h2>
      <p>
        Las consultas que no derivan en un encargo se conservan el tiempo
        necesario para atenderlas y, después, un plazo prudencial por si retomas
        el contacto. Los datos vinculados a un trabajo o a una formación se
        guardan durante la relación y, una vez terminada, durante los plazos de
        prescripción legal, principalmente los seis años que exige el Código de
        Comercio y los plazos de la normativa fiscal.
      </p>

      <h2>A quién se comunican</h2>
      <p>
        No se venden ni se ceden datos a terceros. Únicamente acceden a ellos los
        proveedores necesarios para prestar el servicio, que actúan como
        encargados del tratamiento: el proveedor de alojamiento de la web, el de
        correo electrónico y los servicios de mensajería que tú mismo elijas para
        contactar.
      </p>
      <p>
        Si escribes por <strong>WhatsApp</strong>, la conversación se produce en
        una plataforma de un tercero (WhatsApp Ireland Limited, del grupo Meta) y
        queda sujeta también a sus propias condiciones y política de privacidad.
      </p>
      <p>
        Algunos proveedores pueden realizar transferencias internacionales de
        datos amparadas en decisiones de adecuación de la Comisión Europea o en
        cláusulas contractuales tipo.
      </p>

      <h2>Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento los derechos de acceso,
        rectificación, supresión, oposición, limitación del tratamiento y
        portabilidad, así como retirar el consentimiento que hubieras prestado.
        Para ello escribe a{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a> indicando el
        derecho que quieres ejercer y adjuntando un documento que acredite tu
        identidad.
      </p>
      <p>
        Si consideras que tus datos no se han tratado correctamente, puedes
        presentar una reclamación ante la Agencia Española de Protección de
        Datos,{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>
        .
      </p>

      <h2>Seguridad</h2>
      <p>
        Se aplican las medidas técnicas y organizativas razonables para proteger
        los datos frente a pérdida, uso indebido o acceso no autorizado. La web
        se sirve íntegramente por conexión cifrada (HTTPS).
      </p>

      <h2>Menores</h2>
      <p>
        Los servicios se dirigen a profesionales mayores de edad. No se recogen
        de forma consciente datos de menores de 14 años.
      </p>

      <h2>Cambios en esta política</h2>
      <p>
        Esta política puede actualizarse para adaptarla a cambios legales o del
        servicio. La versión vigente es siempre la publicada en esta página, con
        su fecha de actualización.
      </p>
    </LegalPage>
  );
}
