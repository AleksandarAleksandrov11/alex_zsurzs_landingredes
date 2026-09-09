import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SpeedLines } from "@/components/ui/SpeedLines";
import { company } from "@/content/site";

interface LegalPageProps {
  readonly index: string;
  readonly title: string;
  readonly updatedAt: string;
  readonly children: ReactNode;
}

/** Marco compartido por el aviso legal, la privacidad y las cookies. */
export function LegalPage({ index, title, updatedAt, children }: LegalPageProps) {
  return (
    <main id="contenido" className="min-h-dvh pt-[max(1.5rem,env(safe-area-inset-top))]">
      <div className="container-brand flex flex-col gap-10 pb-24">
        <div className="hairline-b flex flex-wrap items-center justify-between gap-4 py-6">
          <Link href="/" className="p-1" aria-label="Volver a la página principal">
            <BrandLogo
              variant="horizontal"
              className="h-6 w-auto text-fg sm:h-7"
              title="Z Solutions"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 text-eyebrow font-bold text-fg-dim uppercase transition-colors duration-300 hover:text-brand-orange"
          >
            <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden="true" />
            Volver
          </Link>
        </div>

        <header className="flex flex-col gap-4">
          <p className="flex items-center gap-3 text-eyebrow font-bold text-brand-orange uppercase">
            <span aria-hidden="true">{index}</span>
            <SpeedLines className="h-2.5 text-brand-orange" count={2} />
            Información legal
          </p>
          <h1 className="max-w-3xl text-h2 font-display uppercase">{title}</h1>
          <p className="text-sm text-fg-dim">Última actualización: {updatedAt}</p>
        </header>

        <article className="legal-prose max-w-3xl">{children}</article>

        <aside className="hairline mt-4 max-w-3xl rounded-2xl bg-white/2 p-6 text-sm text-fg-muted">
          <p className="mb-2 font-display text-base uppercase text-fg">Titular</p>
          <p>
            {company.legalName} · CIF {company.taxId}
            <br />
            {company.addressLine}
            <br />
            <a
              href={`mailto:${company.email}`}
              className="text-brand-orange transition-colors duration-300 hover:text-brand-orange-hover"
            >
              {company.email}
            </a>
          </p>
        </aside>
      </div>
    </main>
  );
}
