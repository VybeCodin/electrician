import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          404
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-ink-600">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary mt-7">
          Back to home
        </Link>
      </div>
    </section>
  );
}
