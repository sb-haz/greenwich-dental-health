"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question} className="overflow-hidden rounded-xl border border-border bg-surface">
            <button
              type="button"
              className="type-link flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-foreground transition hover:text-primary"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {faq.question}
              <span className="shrink-0 text-muted">{open ? "−" : "+"}</span>
            </button>
            {open && (
              <p className="type-body-sm border-t border-border px-5 py-4 text-muted">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
