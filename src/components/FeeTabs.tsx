"use client";

import { useId, useState } from "react";
import { feeCategories } from "@/lib/content";

export function FeeTabs() {
  const [active, setActive] = useState(feeCategories[0].id);
  const baseId = useId();
  const selectId = `${baseId}-select`;
  const category = feeCategories.find((c) => c.id === active) ?? feeCategories[0];

  return (
    <div className="lg:grid lg:grid-cols-[minmax(15rem,17rem)_1fr] lg:items-start lg:gap-12 grid-gap-mobile">
      {/* Mobile — large friendly dropdown */}
      <div className="lg:hidden">
        <label htmlFor={selectId} className="type-field-label mb-2 block text-foreground">
          What are you looking for?
        </label>
        <select
          id={selectId}
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="fee-category-select w-full rounded-xl border-2 border-border bg-surface px-3.5 py-3.5 shadow-sm transition-colors focus:border-brand-lime focus:outline-none focus:ring-2 focus:ring-brand-lime/30 sm:px-4 sm:py-4"
        >
          {feeCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop — large card-style buttons */}
      <div
        role="tablist"
        aria-label="Treatment fee categories"
        className="hidden flex-col gap-2 lg:flex"
      >
        <p className="type-field-label mb-1 text-foreground">Browse by category</p>
        {feeCategories.map((cat) => {
          const isActive = active === cat.id;
          const tabId = `${baseId}-tab-${cat.id}`;
          const panelId = `${baseId}-panel-${cat.id}`;
          return (
            <button
              key={cat.id}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId}
              onClick={() => setActive(cat.id)}
              className={`fee-category-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime ${
                isActive ? "fee-category-btn--active" : ""
              }`}
            >
              <span className="fee-category-btn__title">{cat.title}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${category.id}`}
        aria-label={`${category.title} treatment fees`}
        className="mt-5 lg:mt-0"
      >
        <div className="mb-3 border-b border-border pb-3 lg:hidden">
          <h3 className="heading-sm text-foreground">{category.title}</h3>
        </div>

        <p className="type-field-label mb-3 hidden text-muted lg:block lg:sr-only">
          {category.title}
        </p>

        <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
          <div className="overflow-x-auto">
            <table className="fee-table w-full min-w-[18rem] text-left">
              <thead>
                <tr className="border-b border-border bg-surface-alt">
                  <th className="font-semibold text-foreground">Treatment</th>
                  <th className="text-right font-semibold text-foreground">Price</th>
                </tr>
              </thead>
              <tbody>
                {category.items.map((item) => (
                  <tr
                    key={item.service}
                    className="border-b border-border transition-colors last:border-0 hover:bg-soft-green/50"
                  >
                    <td className="leading-relaxed text-foreground/90">
                      {item.service}
                      {item.note && (
                        <span className="mt-1 block text-sm leading-snug text-muted">
                          {item.note}
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap text-right font-bold text-foreground">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
