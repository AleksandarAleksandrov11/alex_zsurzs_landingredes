import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE_URL, primaryCta, products } from "@/content/site";
import { withUtm } from "@/lib/utils";

export function Shop() {
  return (
    <section id="tienda" className="section-pad relative scroll-mt-20">
      <div className="container-brand flex flex-col gap-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            index="05."
            eyebrow="Tienda Z Solutions"
            titleLines={["Herramienta que", "resuelve en obra"]}
            description="Producto desarrollado a partir de problemas reales de instalación. Nada decorativo: si no aguanta un día de obra, no entra en la tienda."
          />
          <Reveal className="shrink-0">
            <MagneticButton href={primaryCta.shop.href} variant="ghost">
              Ver todo el catálogo
            </MagneticButton>
          </Reveal>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {products.map((product) => (
            <RevealItem key={product.id} className="h-full">
              <a
                href={withUtm(`${SITE_URL}${product.path}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="sheen group hairline flex h-full flex-col overflow-hidden rounded-2xl bg-white/2 transition-colors duration-400 ease-brand hover:border-brand-blue/60 hover:bg-brand-blue/8"
              >
                <span className="relative block aspect-square w-full overflow-hidden bg-ink-900">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-brand group-hover:scale-105"
                  />
                </span>

                <span className="flex flex-1 flex-col gap-3 p-5">
                  <span className="flex-1 text-sm leading-snug font-bold text-fg">
                    {product.name}
                  </span>
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-display text-xl text-brand-orange">
                      {product.price}
                    </span>
                    <span
                      className="grid size-9 place-items-center rounded-full border border-white/12 text-fg-muted transition-colors duration-300 group-hover:border-brand-orange/60 group-hover:text-brand-orange"
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="size-4" strokeWidth={1.75} />
                    </span>
                  </span>
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
