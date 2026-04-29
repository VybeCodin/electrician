import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free estimate or schedule a service call. Available 24/7 for electrical emergencies.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 py-16 text-white sm:py-20">
        <div className="container max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
            Get in touch
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s get your project moving
          </h1>
          <p className="mt-4 text-lg text-ink-200">
            Free estimates · Fast response · No obligation
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-ink-900">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-600">
                Fill out the form and we&apos;ll be in touch within one business day.
              </p>
              <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
                <ContactForm />
              </div>
            </div>

            <aside className="space-y-6 lg:col-span-2">
              <ContactCard
                icon="phone"
                title="Call us"
                primary={
                  <a href={site.phoneHref} className="hover:text-brand-600">
                    {site.phone}
                  </a>
                }
                subtitle="Real people answer. 24/7 for emergencies."
              />
              <ContactCard
                icon="mail"
                title="Email"
                primary={
                  <a href={site.emailHref} className="break-all hover:text-brand-600">
                    {site.email}
                  </a>
                }
                subtitle="We respond within one business day."
              />
              <ContactCard
                icon="map"
                title="Visit"
                primary={
                  <span>
                    {site.address.line1}
                    {site.address.line2 ? `, ${site.address.line2}` : ""}
                  </span>
                }
                subtitle={`${site.address.city}, ${site.address.region} ${site.address.postal}`}
              />

              <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <Icon name="clock" className="h-5 w-5 text-brand-500" />
                  <h3 className="text-base font-semibold text-ink-900">Office hours</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-ink-700">
                      <span>{h.day}</span>
                      <span className="font-medium text-ink-900">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5">
                <h3 className="text-base font-semibold text-rose-900">
                  Electrical emergency?
                </h3>
                <p className="mt-1 text-sm text-rose-800">
                  Don&apos;t use the form. Call us directly — a licensed electrician is on standby 24/7.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-700"
                >
                  <Icon name="phone" className="mr-2 h-4 w-4" />
                  {site.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  primary,
  subtitle,
}: {
  icon: "phone" | "mail" | "map";
  title: string;
  primary: React.ReactNode;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            {title}
          </h3>
          <p className="mt-1 text-base font-semibold text-ink-900">{primary}</p>
          <p className="mt-0.5 text-sm text-ink-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
