import Link from "next/link";
import Logo from "./Logo";
import Icon from "./Icon";
import { navigation, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-ink-200">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
                <Icon name="bolt" className="h-5 w-5" />
              </span>
              <span className="text-lg font-bold">{site.name}</span>
            </div>
            <p className="max-w-md text-sm text-ink-300">
              {site.description}
            </p>
            <p className="mt-4 text-xs uppercase tracking-wider text-ink-400">
              {site.license}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Navigation</h3>
            <ul className="space-y-2 text-sm">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-300 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="phone" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <a href={site.phoneHref} className="text-ink-300 hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="mail" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <a href={site.emailHref} className="text-ink-300 hover:text-white break-all">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="map" className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <span className="text-ink-300">
                  {site.address.line1}, {site.address.city}, {site.address.region} {site.address.postal}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-700 pt-6 text-xs text-ink-400 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Licensed · Bonded · Insured</p>
        </div>
      </div>
    </footer>
  );
}
