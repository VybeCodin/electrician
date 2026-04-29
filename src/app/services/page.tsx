import Link from "next/link";
import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Electrical Services",
  description:
    "Full-service residential, commercial, and emergency electrical contractors. Licensed, insured, and available 24/7.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero />
      <ServicesGrid />
      <ServiceArea />
      <BottomCTA />
    </>
  );
}

function PageHero() {
  return (
    <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 py-20 text-white sm:py-24">
      <div className="container max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
          Our services
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Electrical work for every job, big or small
        </h1>
        <p className="mt-5 text-lg text-ink-200">
          {site.name} handles the full range of electrical work for homes and businesses across the region. Every project is completed by a licensed electrician and backed by our 12-month workmanship guarantee.
        </p>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition hover:border-brand-200 hover:shadow-md"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold text-ink-900">{service.title}</h2>
              <p className="mt-2 text-ink-600">{service.description}</p>
              <ul className="mt-5 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-700">
                    <Icon name="check" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-ink-100 pt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Request this service →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceArea() {
  const cities = [
    "Riverside",
    "Corona",
    "Moreno Valley",
    "Jurupa Valley",
    "Ontario",
    "Norco",
    "Eastvale",
    "Redlands",
    "Rancho Cucamonga",
  ];
  return (
    <section className="section bg-ink-50">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Service area
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Proudly serving the Inland Empire
            </h2>
            <p className="mt-4 text-ink-600">
              Based in {site.address.city}, our team services the surrounding cities Monday through Saturday. Outside our standard area? Give us a call — we may still be able to help.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {cities.map((city) => (
              <li
                key={city}
                className="flex items-center gap-2 rounded-lg border border-ink-100 bg-white px-4 py-3 text-sm font-medium text-ink-800 shadow-sm"
              >
                <Icon name="map" className="h-4 w-4 text-brand-500" />
                {city}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BottomCTA() {
  return (
    <section className="section bg-ink-900 text-white">
      <div className="container max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Don&apos;t see what you need?
        </h2>
        <p className="mt-3 text-ink-300">
          Tell us about the job. If we can&apos;t help, we&apos;ll point you to someone who can.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn-primary">
            Get in touch
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
  );
}
