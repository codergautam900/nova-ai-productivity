import { ArrowRight, AtSign, Globe, MessageSquareText } from "lucide-react";
import { footerLinks, socialLinks } from "../data/content";

type FooterProps = {
  onNewsletterSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  newsletterState: { type: "idle" | "success" | "error"; message: string };
};

export default function Footer({ onNewsletterSubmit, newsletterState }: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/80">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr_0.9fr_0.9fr_1.2fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 text-white">
                N
              </span>
              <span className="text-lg font-semibold tracking-[-0.06em] text-[var(--foreground)]">NOVA</span>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[var(--muted-foreground)]">
              AI systems for modern teams that want clarity, speed, and confident execution.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--muted-foreground)] transition hover:border-violet-400/40 hover:text-violet-500"
                >
                  {name === "X" ? <AtSign className="h-4 w-4" /> : name === "LinkedIn" ? <Globe className="h-4 w-4" /> : name === "GitHub" ? <MessageSquareText className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">Product</h3>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              {footerLinks.product.map((item) => (
                <li key={item}><a href="#" className="transition hover:text-[var(--foreground)]">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">Solutions</h3>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              {footerLinks.resources.map((item) => (
                <li key={item}><a href="#" className="transition hover:text-[var(--foreground)]">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">Company</h3>
            <ul className="space-y-3 text-sm text-[var(--muted-foreground)]">
              {footerLinks.company.map((item) => (
                <li key={item}><a href="#" className="transition hover:text-[var(--foreground)]">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted-foreground)]">Stay in the loop</h3>
            <form onSubmit={onNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] p-1.5">
                <input
                  type="email"
                  name="email"
                  aria-label="Email address"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-2.5 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted-foreground)]"
                />
                <button type="submit" className="rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--primary-strong)]">
                  Join
                </button>
              </div>
              {newsletterState.type !== "idle" ? (
                <p className={newsletterState.type === "error" ? "text-sm text-rose-500" : "text-sm text-emerald-500"}>
                  {newsletterState.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted-foreground)] md:flex-row">
          <p>© 2026 NOVA. All rights reserved.</p>
          <p>Built for teams that move faster, together.</p>
        </div>
      </div>
    </footer>
  );
}
