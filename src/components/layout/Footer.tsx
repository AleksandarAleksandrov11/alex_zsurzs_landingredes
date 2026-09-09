import Link from "next/link";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { SpeedLines } from "@/components/ui/SpeedLines";
import { company, copyright, identity, legal, socials } from "@/content/site";
import { withUtm } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="hairline-t relative overflow-hidden bg-bg">
      <div className="container-brand flex flex-col gap-10 py-14 sm:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            {/* Área de seguridad del logotipo: nada lo invade */}
            <div className="p-1">
              <BrandLogo
                variant="horizontal"
                className="h-8 w-auto text-fg sm:h-9"
                title="Z Solutions"
              />
            </div>
            <p className="font-display text-lg text-fg-muted uppercase">
              {identity.lema}
            </p>
          </div>

          <ul className="flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.id}>
                <a
                  href={withUtm(social.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${identity.fullName} en ${social.label}`}
                  className="hairline grid size-12 place-items-center rounded-full text-fg-muted transition-colors duration-300 hover:border-brand-orange/60 hover:text-brand-orange"
                >
                  <BrandIcon name={social.icon} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="hairline-t pt-8 text-xs leading-relaxed text-fg-dim">
          {company.legalName} · CIF {company.taxId} · {company.addressLine}
        </p>

        <div className="flex flex-col gap-4 text-sm text-fg-dim sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3">
            <SpeedLines className="h-3 text-brand-blue" />
            <span>{copyright()}</span>
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legal.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-300 hover:text-brand-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <span>{identity.location}</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
