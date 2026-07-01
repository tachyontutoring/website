import Link from "next/link";
import { Mail } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { site, contacts } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-ink bg-paper">
      <div className="wrap-narrow py-14">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 md:col-span-5">
            <Wordmark href="/" />
            <p className="mt-4 max-w-xs text-base leading-relaxed text-ink-soft">{site.blurb}</p>
            <p className="mt-5 text-sm text-ink-faint">Based in Cambridge, MA.</p>
          </div>

          <nav className="col-span-12 sm:col-span-6 md:col-span-3" aria-label="Footer">
            <span className="mono-label">Pages</span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#booking" className="text-base font-medium text-ink hover:text-accent-700">
                  Book a diagnostic
                </Link>
              </li>
            </ul>
          </nav>

          <div className="col-span-12 sm:col-span-6 md:col-span-4">
            <span className="mono-label">CONTACT</span>
            <div className="mt-4 flex flex-col gap-3">
              {contacts.map((c) => (
                <a
                  key={c.email}
                  href={`mailto:${c.email}`}
                  className="inline-flex items-center gap-2 break-words text-2xl font-medium text-ink hover:text-accent-700"
                >
                  <Mail size={22} className="shrink-0" aria-hidden="true" />
                  {c.email}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <p className="max-w-3xl font-mono text-[12px] leading-relaxed text-ink-faint">
            © {site.copyrightYear} {site.name}. {site.name} is an independent tutoring service. Not
            affiliated with or endorsed by the College Board. SAT is a registered trademark of the
            College Board.
          </p>
        </div>
      </div>
    </footer>
  );
}
