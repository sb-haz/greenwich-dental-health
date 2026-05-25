"use client";

import { useState } from "react";
import { site } from "@/lib/content";

export function ContactForm({ defaultSubject }: { defaultSubject?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const message = data.get("message") as string;
    const subject = encodeURIComponent(defaultSubject ?? `Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="type-body-sm rounded-xl border border-primary/30 bg-soft-green p-6 text-foreground">
        Thank you. Your email client should open shortly. If it does not, please call us on{" "}
        <a href={site.phoneHref} className="type-link text-primary">
          {site.phone}
        </a>
        .
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="type-field-label block text-foreground">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          className="type-body-sm mt-1 w-full rounded-lg border border-border bg-surface px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="type-field-label block text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="type-body-sm mt-1 w-full rounded-lg border border-border bg-surface px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="type-field-label block text-foreground">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="type-body-sm mt-1 w-full rounded-lg border border-border bg-surface px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="type-field-label block text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="type-body-sm mt-1 w-full rounded-lg border border-border bg-surface px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        className="btn-dark w-full sm:w-auto"
      >
        Send enquiry
      </button>
    </form>
  );
}
