import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/ui/BrandMark";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  EMAIL,
  WHATSAPP_PENDING,
  WHATSAPP_URL,
  identity,
  images,
  primaryCta,
} from "@/content/site";

export function ContactCTA() {
  return (
    <section
      id="contacto"
      className="section-pad relative scroll-mt-20 overflow-hidden"
    >
      {/* Retrato de cierre bajo capa de color corporativo (manual, 05) */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <Image
          src={images.contact.src}
          alt=""
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL={images.contact.blurDataURL}
          sizes="100vw"
          className="object-cover object-[72%_26%] grayscale contrast-105"
        />
        <div className="absolute inset-0 bg-brand-blue-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/55 to-bg" />
      </div>

      {/* Isotipo como marca de agua, en azul corporativo */}
      <BrandMark
        className="pointer-events-none absolute -right-24 -bottom-16 -z-10 w-[78vw] max-w-2xl"
        base="color-mix(in srgb, var(--color-brand-blue) 9%, transparent)"
        accent="color-mix(in srgb, var(--color-brand-blue) 16%, transparent)"
      />

      <div className="container-brand flex flex-col items-center gap-10 text-center">
        <SectionHeading
          align="center"
          index="07."
          eyebrow="Contacto"
          titleLines={["¿Hablamos", "de tu instalación?"]}
          description={`Dudas técnicas, formaciones a medida o colaboraciones. Escríbeme y te contesto. ${identity.location}.`}
        />

        <Reveal className="w-full">
          <div className="mx-auto flex w-full max-w-3xl flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <MagneticButton
              href={WHATSAPP_URL}
              className="flex-1"
              ariaLabel={
                WHATSAPP_PENDING
                  ? "Escribir a Alex Zsurzs desde el formulario de contacto"
                  : "Escribir a Alex Zsurzs por WhatsApp"
              }
            >
              <MessageCircle className="size-5" strokeWidth={1.75} aria-hidden="true" />
              {WHATSAPP_PENDING ? "Escríbeme" : "WhatsApp"}
            </MagneticButton>

            <MagneticButton
              href={`mailto:${EMAIL}`}
              variant="ghost"
              external={false}
              className="flex-1"
              ariaLabel={`Escribir un correo a ${EMAIL}`}
            >
              <Mail className="size-5" strokeWidth={1.75} aria-hidden="true" />
              Email
            </MagneticButton>

            <MagneticButton
              href={primaryCta.site.href}
              variant="ghost"
              className="flex-1"
            >
              Web completa
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
