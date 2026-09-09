import Image from "next/image";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SpeedLines } from "@/components/ui/SpeedLines";
import { images, training } from "@/content/site";
import { cn } from "@/lib/utils";

export function Training() {
  const [work] = images.work;

  return (
    <section id="formaciones" className="section-pad relative scroll-mt-20">
      <div className="container-brand">
        <Reveal>
          <div className="hairline relative overflow-hidden rounded-3xl bg-ink-900">
            {/* Fotografía de obra + capa corporativa 60–80% (manual, 05) */}
            <div className="absolute inset-0" aria-hidden="true">
              <Image
                src={work.src}
                alt=""
                fill
                loading="lazy"
                sizes="100vw"
                className="object-cover object-center grayscale"
              />
              <div className="absolute inset-0 bg-brand-blue-deep/78" />
              <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/35" />
            </div>

            <div className="relative grid gap-10 p-7 sm:p-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:p-16">
              <div className="flex flex-col gap-6">
                <p className="flex items-center gap-3 text-eyebrow font-bold text-brand-orange uppercase">
                  <span aria-hidden="true">06.</span>
                  <SpeedLines className="h-2.5 text-brand-orange" count={2} />
                  {training.eyebrow}
                </p>

                <h2 className="max-w-xl text-h2 font-display uppercase">
                  {training.title}
                </h2>

                <p className="max-w-xl text-lead text-fg-muted">
                  {training.description}
                </p>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <MagneticButton href={training.cta.href}>
                    {training.cta.label}
                  </MagneticButton>
                </div>
              </div>

              <RevealGroup className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12">
                {training.facts.map((fact, index) => (
                  <RevealItem
                    key={fact.label}
                    className={cn(
                      "flex flex-col gap-1 bg-bg/85 p-5",
                      index === training.facts.length - 1 &&
                        training.facts.length % 2 === 1 &&
                        "col-span-2",
                    )}
                  >
                    <span className="text-[0.625rem] font-bold tracking-[0.18em] text-fg-dim uppercase">
                      {fact.label}
                    </span>
                    <span className="font-display text-xl uppercase">
                      {fact.value}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
