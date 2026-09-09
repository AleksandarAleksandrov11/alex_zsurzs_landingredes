import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { specialties } from "@/content/site";
import { sectionNumber } from "@/lib/utils";

export function Specialties() {
  return (
    <section id="especialidades" className="section-pad relative scroll-mt-20">
      <div className="container-brand flex flex-col gap-12">
        <SectionHeading
          index="02."
          eyebrow="Mis especialidades"
          titleLines={["Cuatro oficios", "y una obsesión: el método"]}
          description="Los iconos oficiales de Z Solutions marcan cada área de trabajo. Todo lo que ves aquí lo ejecuto y lo enseño."
        />

        <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {specialties.map((specialty, index) => (
            <RevealItem key={specialty.id} className="h-full">
              <article className="sheen group hairline relative flex h-full flex-col gap-5 rounded-2xl bg-white/2 p-6 transition-colors duration-400 ease-brand hover:border-brand-blue/60 hover:bg-brand-blue/8 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-14 place-items-center rounded-xl bg-brand-blue/15 text-fg transition-colors duration-300 group-hover:bg-brand-blue">
                    <ServiceIcon name={specialty.icon} className="h-7 w-auto" />
                  </span>
                  <span className="font-display text-sm text-fg-dim transition-colors duration-300 group-hover:text-brand-orange">
                    {sectionNumber(index + 1)}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-h3 font-display uppercase">{specialty.title}</h3>
                  <p className="text-sm leading-relaxed text-fg-muted">
                    {specialty.description}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
