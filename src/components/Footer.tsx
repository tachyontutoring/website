import Link from "next/link";
import { Mail } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { nav, site, contacts, tachyonNote } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink bg-paper">
      <div className="wrap-narrow py-14">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <Wordmark href="/" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">{site.blurb}</p>
            <p className="mt-5 text-[13px] text-ink-faint">Based in Cambridge, MA.</p>
          </div>

          <nav className="col-span-6 md:col-span-4" aria-label="Footer">
            <span className="mono-label">Pages</span>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-soft hover:text-accent-700">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/#booking" className="text-sm font-medium text-ink hover:text-accent-700">
                  Book a diagnostic
                </Link>
              </li>
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-3">
            <span className="mono-label">CONTACT</span>
            <div className="mt-4 flex flex-col gap-3">
              {contacts.map((c) => (
                <a key={c.email} href={`mailto:${c.email}`} className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent-700">
                  <Mail size={15} aria-hidden="true" />
                  {c.email}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <div className="grid grid-cols-12 gap-x-6 gap-y-3">
            <div className="col-span-12 md:col-span-3">
              <span className="mono-label">Powered by Tachyon</span>
            </div>
            <p className="col-span-12 max-w-2xl text-sm leading-relaxed text-ink-muted md:col-span-9">
              {tachyonNote}
            </p>
          </div>

          <p className="mt-10 max-w-3xl font-mono text-[11px] leading-relaxed text-ink-faint">
            © {site.copyrightYear} {site.name}. {site.name} is an independent tutoring service. Not
            affiliated with or endorsed by the College Board. SAT is a registered trademark of the
            College Board.
          </p>
        </div>
      </div>
    </footer>
  );
}
