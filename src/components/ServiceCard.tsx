import Icon from "./Icon";
import type { Service } from "@/lib/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-ink-900">{service.title}</h3>
      <p className="mt-2 text-sm text-ink-600">{service.short}</p>
    </article>
  );
}
