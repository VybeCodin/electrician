import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-bold ${className}`}
      aria-label={`${site.name} home`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white shadow-sm">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M13 2L4.5 13.5h6L9 22l9.5-12h-6L13 2z" />
        </svg>
      </span>
      <span className="text-lg tracking-tight text-ink-900">
        {site.name}
      </span>
    </Link>
  );
}
