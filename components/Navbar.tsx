import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sparkles, Sun, X } from "lucide-react";
import Link from "next/link";
import type { Dispatch, SetStateAction } from "react";
import type { NavItem } from "../data/content";

type NavbarProps = {
  navItems: NavItem[];
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  onThemeToggle: () => void;
  theme: "light" | "dark";
  onDemoOpen: () => void;
};

export default function Navbar({
  navItems,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  onThemeToggle,
  theme,
  onDemoOpen,
}: NavbarProps) {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);

    setMobileMenuOpen(false);

    if (target) {
      event.preventDefault();

      const performScroll = () => {
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          block: "start",
        });
        window.history.pushState(null, "", href);
      };

      requestAnimationFrame(() => {
        window.setTimeout(performScroll, 10);
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70 dark:border-[var(--border)]/80 dark:bg-[color:rgba(8,11,19,0.7)] dark:supports-[backdrop-filter]:bg-[color:rgba(8,11,19,0.6)]">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 transition hover:opacity-90">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 shadow-lg shadow-violet-500/30">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="text-lg font-semibold tracking-[-0.06em] text-slate-900 dark:text-white">NOVA</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "") || (item.href === "#pricing" && activeSection === "pricing");

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={[
                  "text-sm font-medium transition",
                  isActive
                  ? "text-slate-900 dark:text-white"
                  : "text-slate-800 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label="Toggle light or dark theme"
         className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:border-violet-400/50 hover:text-violet-700 dark:border-[var(--border)] dark:bg-[var(--surface)] dark:text-slate-200 dark:hover:text-violet-200"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
       <Link
         href="/login"
         className="rounded-full px-4 py-2 text-sm font-medium text-slate-800 transition hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
       >
         Login
       </Link>
       <button
         type="button"
         onClick={onDemoOpen}
         className="rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:bg-[var(--primary-strong)]"
       >
         Get Started
       </button>
     </div>

     <div className="flex items-center gap-2 md:hidden">
       <button
         type="button"
         onClick={onThemeToggle}
         aria-label="Toggle light or dark theme"
         className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:border-violet-400/50 hover:text-violet-700 dark:border-[var(--border)] dark:bg-[var(--surface)] dark:text-slate-200 dark:hover:text-violet-200"
       >
         {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
       </button>
       <button
         type="button"
         aria-label="Open menu"
         aria-expanded={mobileMenuOpen}
         onClick={() => setMobileMenuOpen((open) => !open)}
         className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition hover:border-violet-400/50 hover:text-violet-700 dark:border-[var(--border)] dark:bg-[var(--surface)] dark:text-slate-200 dark:hover:text-violet-200"
       >
         {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
       </button>
     </div>
   </nav>

   <AnimatePresence>
     {mobileMenuOpen ? (
       <motion.div
         initial={{ opacity: 0, height: 0 }}
         animate={{ opacity: 1, height: "auto" }}
         exit={{ opacity: 0, height: 0 }}
         transition={{ duration: 0.2 }}
         className="border-t border-slate-200 bg-white/90 md:hidden dark:border-[var(--border)] dark:bg-[var(--background)]"
       >
         <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-5">
           {navItems.map((item) => (
             <a
               key={item.href}
               href={item.href}
               onClick={(event) => handleNavClick(event, item.href)}
               className={[
                 "rounded-xl px-3 py-2 text-base font-medium transition",
                 activeSection === item.href.replace("#", "")
                   ? "bg-slate-100 text-slate-900 shadow-sm ring-1 ring-slate-200 dark:bg-[var(--surface)] dark:text-white dark:ring-0"
                   : "text-slate-800 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-[var(--surface)] dark:hover:text-white",
               ].join(" ")}
             >
               {item.label}
             </a>
           ))}
           <div className="mt-2 flex flex-col gap-3 border-t border-slate-200 pt-4 dark:border-[var(--border)]">
             <Link
               href="/login"
               className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-center text-sm font-medium text-slate-800 transition hover:text-slate-950 dark:border-[var(--border)] dark:bg-[var(--surface)] dark:text-slate-200 dark:hover:text-white"
             >
               Login
             </Link>
             <button
               type="button"
               onClick={onDemoOpen}
               className="rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white"
             >
               Get Started
             </button>
           </div>
         </div>
       </motion.div>
     ) : null}
   </AnimatePresence>
    </header>
  );
}
