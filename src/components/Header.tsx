"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Icon from "./Icon";
import { navigation, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? "text-brand-600" : "text-ink-700 hover:text-ink-900"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink-900"
          >
            <Icon name="phone" className="h-4 w-4 text-brand-500" />
            {site.phone}
          </a>
          <Link href="/contact" className="btn-primary px-4 py-2 text-sm">
            Free Estimate
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-900 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-100 bg-white md:hidden">
          <div className="container space-y-1 py-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-ink-800 hover:bg-ink-50"
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 px-3 pt-2">
              <a href={site.phoneHref} className="btn-secondary flex-1 px-4 py-2 text-sm">
                Call now
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary flex-1 px-4 py-2 text-sm"
              >
                Get Estimate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
