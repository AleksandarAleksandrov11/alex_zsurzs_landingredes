import { Badge } from "@/components/ui/Badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpeedLines } from "@/components/ui/SpeedLines";
import { badges, certifications, certificationsIntro } from "@/content/site";

export function Certifications() {
  return (
    <section
      id="certificaciones"
      className="section-pad relative scroll-mt-20 overflow-hidden"
    >
      <div className="blueprint pointer-events-none absolute inset-0 -z-10 opacity-35" />

      <div className="container-brand flex flex-col gap-12">
        <SectionHeading
          index="03."
          eyebrow="Certificaciones y formación"
          titleLines={["Acreditaciones", "que respaldan la obra"]}
          description={certificationsIntro}
        />

        <Reveal>
          <ul className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <li key={badge}>
                <Badge tone="blue">{badge}</Badge>
              </li>
            ))}
          </ul>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-brand-blue/22 bg-brand-blue/22 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((group) => (
            <RevealItem key={group.id} className="h-full">
              <article className="flex h-full flex-col gap-5 bg-bg p-6 sm:p-7">
                <header className="flex items-center gap-3">
                  <SpeedLines className="h-3 text-brand-orange" count={2} />
                  <h3 className="font-display text-base uppercase">{group.title}</h3>
                </header>

                <ul className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                    >
                      <span
                        className="mt-2 block size-1.5 shrink-0 rotate-45 bg-brand-orange"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}

          {/* Celda de cierre: evita el hueco de la rejilla */}
          <div className="hidden bg-bg sm:block" aria-hidden="true" />
        </RevealGroup>
      </div>
    </section>
  );
}
