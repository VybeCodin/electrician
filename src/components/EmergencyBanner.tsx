import Icon from "./Icon";
import { site } from "@/lib/site";

export default function EmergencyBanner() {
  return (
    <div className="bg-ink-900 text-white">
      <div className="container flex flex-col items-center justify-between gap-2 py-2 text-center text-sm sm:flex-row sm:text-left">
        <p className="flex items-center gap-2">
          <Icon name="bolt" className="h-4 w-4 text-brand-400" />
          24/7 emergency electrical service available
        </p>
        <a
          href={site.phoneHref}
          className="font-semibold text-brand-300 hover:text-brand-200"
        >
          Call {site.phone}
        </a>
      </div>
    </div>
  );
}
