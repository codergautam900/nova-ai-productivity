"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--muted-foreground)]">FAQ</p>
        <h2 className="text-3xl font-semibold tracking-[-0.07em] text-[var(--foreground)] sm:text-4xl">
          Answers for teams who want a smarter way to work.
        </h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={faq.question} className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-[var(--foreground)]">{faq.question}</span>
                <span className={[
                  "flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] transition",
                  isOpen ? "rotate-180 text-violet-500" : "text-[var(--muted-foreground)]",
                ].join(" ")}>
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-7 text-[var(--muted-foreground)] sm:px-6">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
