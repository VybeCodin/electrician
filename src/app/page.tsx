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
    <section className="relative overflow-hidden bg-[#070b20] text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] opacity-40"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 30%, rgba(124, 58, 237, 0.45) 0%, rgba(7, 11, 32, 0) 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-1/3 h-[520px] opacity-50"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(249, 115, 22, 0.35) 0%, rgba(7, 11, 32, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative pb-0 pt-20 text-center sm:pt-24 lg:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-200">
          <Icon name="bolt" className="h-3.5 w-3.5" />
          {site.license}
        </span>

        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          The power behind
          <br />
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-amber-300 bg-clip-text text-transparent">
            daves electrics
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-200 sm:text-xl">
          Tools and trends evolve, but craftsmanship endures. Licensed, insured electricians for every home and business across {site.address.city}.
        </p>

        <form
          action="/contact"
          className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <div className="flex flex-1 items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-1 backdrop-blur">
            <Icon name="phone" className="h-4 w-4 flex-shrink-0 text-brand-300" />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              className="w-full bg-transparent py-3 text-sm text-white placeholder:text-ink-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
          >
            Get a free estimate
          </button>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See services
          </Link>
        </form>

        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-300">
          {[
            "Licensed & insured",
            "24/7 emergency dispatch",
            "Upfront flat-rate pricing",
            "12-month workmanship guarantee",
          ].map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <Icon name="check" className="h-4 w-4 text-brand-400" />
              {item}
            </li>
          ))}
        </ul>

        <div className="relative mx-auto mt-16 max-w-5xl px-2 sm:mt-20">
          <div
            className="absolute inset-x-10 -bottom-8 h-40 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 50%, rgba(249, 115, 22, 0.55), rgba(124, 58, 237, 0.35) 60%, transparent 80%)",
            }}
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-t-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent p-1.5 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="overflow-hidden rounded-t-2xl bg-ink-900">
              <div className="flex items-center gap-1.5 border-b border-white/5 bg-ink-950/60 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-ink-400">daves electrics — service dashboard</span>
              </div>

              <div className="grid gap-0 sm:grid-cols-5">
                <div
                  className="relative h-48 sm:col-span-2 sm:h-auto"
                  style={{
                    backgroundImage: "url('/hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-ink-950/40 via-transparent to-ink-950/60" />
                </div>

                <div className="p-6 sm:col-span-3 sm:p-8">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-brand-300">
                        Most requested
                      </p>
                      <h2 className="mt-1 text-lg font-semibold text-white">
                        Today&apos;s top services
                      </h2>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Available now
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {services.slice(0, 4).map((s) => (
                      <li
                        key={s.slug}
                        className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] p-3 transition hover:border-brand-400/30 hover:bg-white/[0.06]"
                      >
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-brand-500/15 text-brand-300">
                          <Icon name={s.icon} className="h-5 w-5" />
                        </span>
                        <div className="flex-1 text-left">
                          <p className="text-sm font-semibold text-white">{s.title}</p>
                          <p className="text-xs text-ink-400">{s.short}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
