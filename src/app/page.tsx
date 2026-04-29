import Link from "next/link";
import Icon from "@/components/Icon";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <ServicesPreview />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink-900/90 via-ink-900/75 to-ink-900/60"
        aria-hidden="true"
      />
      <div className="absolute inset-0 opacity-20 mix-blend-screen" aria-hidden="true">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-brand-400 blur-3xl" />
      </div>
      <div className="container relative grid gap-10 py-20 sm:py-24 lg:grid-cols-2 lg:py-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-200">
            <Icon name="bolt" className="h-3.5 w-3.5" />
            {site.license}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-brand-400">daves electrics</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-200">
            {site.name} is a team of licensed, insured electricians serving homes and businesses across {site.address.city} and the surrounding area. Same-day service, upfront pricing, and clean work — guaranteed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get a free estimate
            </Link>
            <a href={site.phoneHref} className="btn-secondary">
              <Icon name="phone" className="mr-2 h-4 w-4" />
              {site.phone}
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-300">
            {[
              "Licensed & insured",
              "24/7 emergency dispatch",
              "Upfront flat-rate pricing",
              "100% workmanship guarantee",
            ].map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur">
            <div className="rounded-xl bg-gradient-to-br from-ink-800 to-ink-900 p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-300">Most requested</p>
                  <h2 className="mt-1 text-xl font-semibold">Today&apos;s top services</h2>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                  Available now
                </span>
              </div>
              <ul className="space-y-3">
                {services.slice(0, 4).map((s) => (
                  <li
                    key={s.slug}
                    className="flex items-center gap-3 rounded-lg border border-white/5 bg-ink-800/60 p-3"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-500/15 text-brand-300">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-white">{s.title}</p>
                      <p className="text-xs text-ink-400">{s.short}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                View all services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const stats = [
    { value: "20+", label: "Years experience" },
    { value: "5,400+", label: "Jobs completed" },
    { value: "4.9★", label: "Average rating" },
    { value: "24/7", label: "Emergency service" },
  ];
  return (
    <section className="border-b border-ink-100 bg-white">
      <div className="container grid grid-cols-2 gap-6 py-10 sm:py-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-ink-900 sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-ink-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section bg-ink-50">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            Full-service electrical contractors
          </h2>
          <p className="mt-4 text-ink-600">
            From a flickering light to a full commercial fit-out, our team brings the same level of care to every job.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-secondary">
            See all services
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const reasons = [
    {
      icon: "shield" as const,
      title: "Licensed & insured",
      body: "Every electrician on our team is C-10 licensed and fully insured. You're protected on every job.",
    },
    {
      icon: "clock" as const,
      title: "On-time, always",
      body: "We text when we're on the way and arrive within the booked window — or your service call is free.",
    },
    {
      icon: "check" as const,
      title: "Upfront pricing",
      body: "Flat-rate quotes given before work starts. No surprise charges, no hourly meters running.",
    },
    {
      icon: "star" as const,
      title: "Workmanship guarantee",
      body: "Every installation is backed by our 12-month workmanship guarantee. We stand behind our work.",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Why {site.name}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Service you&apos;d recommend to a friend
            </h2>
            <p className="mt-4 text-ink-600">
              We treat every home and every business like our own. That means clean job sites, clear communication, and electrical work that lasts.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Schedule a visit
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name={r.icon} className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-ink-900">{r.title}</h3>
                <p className="mt-1 text-sm text-ink-600">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "Tell us what you need",
      body: "Call or fill out our short contact form. We'll ask a few questions to understand the job.",
    },
    {
      n: "02",
      title: "Get a free estimate",
      body: "Most quotes are turned around the same day. Pricing is flat-rate, all-in, and in writing.",
    },
    {
      n: "03",
      title: "Sit back — we handle it",
      body: "Our licensed electricians complete the work, pull permits if needed, and clean up before we leave.",
    },
  ];
  return (
    <section className="section bg-ink-900 text-white">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Simple process
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            From call to completion in three steps
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-3xl font-bold text-brand-400">{step.n}</p>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-300">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      body:
        "Showed up when they said they would, fixed the panel in an afternoon, and walked me through what was wrong. Couldn't ask for more.",
      name: "Megan S.",
      role: "Homeowner",
    },
    {
      body:
        "We use Voltline for all the electrical work across our three retail locations. Always fast, always clean, always fair.",
      name: "David L.",
      role: "Retail operations manager",
    },
    {
      body:
        "Our power went out at 11pm with a freezer full of food. They had a tech at the house in 40 minutes. Lifesavers.",
      name: "Priya R.",
      role: "Homeowner",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Reviews
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            What our customers say
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm"
            >
              <div className="mb-3 flex gap-0.5 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="flex-1 text-sm text-ink-700">
                &ldquo;{r.body}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-ink-100 pt-3 text-sm">
                <p className="font-semibold text-ink-900">{r.name}</p>
                <p className="text-ink-500">{r.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section bg-gradient-to-br from-brand-500 to-brand-600 text-white">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-50">
          Book your free estimate today. We&apos;ll get back to you within one business day.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-md transition hover:bg-brand-50"
          >
            Request an estimate
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 bg-transparent px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            <Icon name="phone" className="mr-2 h-4 w-4" />
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
