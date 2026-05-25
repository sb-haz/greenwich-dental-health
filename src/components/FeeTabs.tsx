"use client";

import { useState } from "react";
import { feeCategories } from "@/lib/content";

export function FeeTabs() {
  const [active, setActive] = useState(feeCategories[0].id);
  const category = feeCategories.find((c) => c.id === active) ?? feeCategories[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
        {feeCategories.map((cat) => (
          <button key={cat.id} type="button" onClick={() => setActive(cat.id)} className={`type-nav rounded-full px-4 py-2 transition ${active === cat.id ? "bg-brand-dark text-brand-lime" : "border border-border bg-surface text-muted hover:border-brand-lime/50 hover:text-foreground"}`}>
            {cat.title}
          </button>
        ))}
      </div>
      <div className="mt-6 overflow-hidden rounded-xl border border-border bg-surface">
        <table className="type-body-sm w-full text-left">
          <thead>
            <tr className="border-b border-border bg-surface-alt">
              <th className="type-link px-5 py-3">Treatment</th>
              <th className="type-link px-5 py-3 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {category.items.map((item) => (
              <tr key={item.service} className="border-b border-border last:border-0">
                <td className="px-5 py-4 text-muted">{item.service}{item.note && <span className="type-caption mt-1 block opacity-80">{item.note}</span>}</td>
                <td className="type-link whitespace-nowrap px-5 py-4 text-right">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
