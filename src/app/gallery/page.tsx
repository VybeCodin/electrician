import Link from "next/link";
import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at recent electrical projects by daves electrics — residential rewires, commercial fit-outs, panel upgrades, EV charger installs, and more.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 py-16 text-white sm:py-20">
        <div className="container max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
            Project gallery
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Recent work from the field
          </h1>
          <p className="mt-4 text-lg text-ink-200">
            A small sample of homes and businesses we&apos;ve helped across the Inland Empire — from a single recessed light to whole-building service upgrades.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      <section className="section bg-ink-900 text-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Want yours featured next?
          </h2>
          <p className="mt-3 text-ink-300">
            Tell us about your project and we&apos;ll put a free estimate together for you.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-primary">
              Get a free estimate
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              <Icon name="phone" className="mr-2 h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
