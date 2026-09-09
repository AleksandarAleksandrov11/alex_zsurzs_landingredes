import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BoltMark } from "@/components/ui/BoltMark";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { identity, images, stats } from "@/content/site";

export function About() {
  return (
    <section id="sobre-mi" className="section-pad relative scroll-mt-20">
      <div className="container-brand grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
            <Image
              src={images.portrait.src}
              alt={images.portrait.alt}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={images.portrait.blurDataURL}
              sizes="(min-width: 1024px) 40vw, 92vw"
              className="object-cover object-[52%_18%] grayscale transition-[filter] duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-brand-blue-deep/30 mix-blend-multiply" />
            <div className="hairline pointer-events-none absolute inset-0 rounded-2xl" />
          </div>

          {/* Segunda imagen: el galardón, superpuesta a la principal */}
          <div className="absolute -right-2 -bottom-6 w-32 overflow-hidden rounded-xl border-2 border-bg sm:-right-5 sm:w-40 lg:w-44">
            <div className="relative aspect-square w-full">
              <Image
                src={images.award.src}
                alt={images.award.alt}
                fill
                loading="lazy"
                placeholder="blur"
                blurDataURL={images.award.blurDataURL}
                sizes="(min-width: 1024px) 11rem, 8rem"
                className="object-cover object-[50%_22%] grayscale"
              />
              <div className="absolute inset-0 bg-brand-blue-deep/25 mix-blend-multiply" />
            </div>
          </div>

          {/* Detalle de marca: rayo + línea de cota */}
          <div className="absolute -top-4 -left-3 flex items-center gap-2 sm:-left-5">
            <BoltMark className="h-9 w-auto text-brand-orange" />
            <span className="hidden h-px w-14 bg-brand-orange/50 sm:block" />
          </div>
        </Reveal>

        <div className="flex flex-col gap-9">
          <SectionHeading
            index="01."
            eyebrow="Sobre mí"
            titleLines={["Conozco el oficio", "desde abajo"]}
          />

          <RevealGroup className="flex flex-col gap-5">
            {identity.bio.map((paragraph) => (
              <RevealItem key={paragraph.slice(0, 24)}>
                <p className="max-w-2xl text-lead text-fg-muted">{paragraph}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealGroup className="hairline-t grid grid-cols-2 gap-x-8 gap-y-8 pt-9 sm:grid-cols-4">
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="flex flex-col gap-1">
                <span className="font-display text-stat leading-none text-fg tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs font-bold tracking-[0.16em] text-fg-dim uppercase">
                  {stat.label}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
