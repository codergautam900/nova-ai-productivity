"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import DemoModal from "./DemoModal";
import BackToTop from "./BackToTop";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TrustedBy from "./TrustedBy";
import Features from "./Features";
import ProductSection from "./ProductSection";
import HowItWorks from "./HowItWorks";
import Statistics from "./Statistics";
import Solutions from "./Solutions";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import { navItems } from "../data/content";

export type ThemeMode = "light" | "dark";
export type BillingMode = "monthly" | "annual";

function getPreferredTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";

  const storedTheme = window.localStorage.getItem("nova-theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function LandingPage() {
  const [theme, setTheme] = useState<ThemeMode>(getPreferredTheme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [billingMode, setBillingMode] = useState<BillingMode>("monthly");
  const [activeSection, setActiveSection] = useState("home");
  const [newsletterState, setNewsletterState] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("nova-theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -40% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && demoOpen) {
        setDemoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [demoOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = demoOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [demoOpen]);

  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterState({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setNewsletterState({
      type: "success",
      message: "Thanks! You’re on the list for product updates.",
    });
    event.currentTarget.reset();
  };

  return (
    <div className="relative overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <div className="pointer-events-none fixed inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(circle_at_center,black,transparent_86%)]" />
      </div>

      <Navbar
        navItems={navItems}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onThemeToggle={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        theme={theme}
        onDemoOpen={() => setDemoOpen(true)}
      />

      <main className="relative z-10">
        <section id="home" data-section>
          <Hero onDemoOpen={() => setDemoOpen(true)} />
        </section>
        <TrustedBy />
        <Features />
        <ProductSection />
        <HowItWorks />
        <Statistics />
        <Solutions />
        <Testimonials />
        <section id="pricing" data-section>
          <Pricing billingMode={billingMode} setBillingMode={setBillingMode} />
        </section>
        <section id="faq" data-section>
          <FAQ />
        </section>
        <FinalCTA />
      </main>

      <Footer onNewsletterSubmit={handleNewsletterSubmit} newsletterState={newsletterState} />
      <BackToTop />

      <AnimatePresence>
        {demoOpen ? <DemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} /> : null}
      </AnimatePresence>
    </div>
  );
}
