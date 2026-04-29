export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  icon: "bolt" | "home" | "building" | "shield" | "wrench" | "panel";
};

export const services: Service[] = [
  {
    slug: "residential",
    title: "Residential Wiring",
    short:
      "Whole-home wiring, rewires, lighting, outlets, and code-compliant upgrades.",
    description:
      "From a single dimmer to a complete rewire, our residential team handles every electrical project with care for your home and family.",
    features: [
      "New construction & remodels",
      "Outlet & switch installation",
      "Lighting design and recessed cans",
      "Ceiling fan installation",
      "Whole-house surge protection",
    ],
    icon: "home",
  },
  {
    slug: "commercial",
    title: "Commercial Electrical",
    short:
      "Dave keeps offices, retail, restaurants, and warehouses powered up and trading.",
    description:
      "Keep your business running with electrical work scheduled around your hours. We're licensed for projects of every size.",
    features: [
      "Tenant improvements",
      "Three-phase power",
      "Data and low-voltage cabling",
      "Lighting retrofits",
      "Preventative maintenance",
    ],
    icon: "building",
  },
  {
    slug: "emergency",
    title: "24/7 Emergency Service",
    short:
      "Power out? Burning smell? We dispatch licensed electricians day or night.",
    description:
      "Electrical emergencies don't wait for business hours. Call any time and a licensed electrician will arrive fast and fix the problem safely.",
    features: [
      "24/7 dispatch",
      "Same-day arrival in our service area",
      "Power restoration",
      "Storm damage repair",
      "Burning smell & spark response",
    ],
    icon: "shield",
  },
  {
    slug: "panels",
    title: "Panel Upgrades",
    short:
      "Replace outdated panels, add capacity, and bring your service up to code.",
    description:
      "Upgrade old fuse boxes and undersized panels to safely power modern appliances, EV chargers, and renewable systems.",
    features: [
      "100A to 400A service upgrades",
      "Fuse-to-breaker replacements",
      "Sub-panel installation",
      "Meter base replacement",
      "Permit & inspection handling",
    ],
    icon: "panel",
  },
  {
    slug: "ev-chargers",
    title: "EV Charger Installation",
    short:
      "Level 2 home and commercial EV charger installation by certified pros.",
    description:
      "Charge your EV faster and safely. We install Tesla, ChargePoint, and other major brands with full code-compliant wiring.",
    features: [
      "Level 2 (240V) installations",
      "Load calculations",
      "Outdoor weatherproof setups",
      "Multi-unit / fleet installs",
      "Rebate paperwork support",
    ],
    icon: "bolt",
  },
  {
    slug: "troubleshooting",
    title: "Diagnostics & Repair",
    short:
      "Tracking down flickering lights, dead outlets, and tripping breakers.",
    description:
      "Our licensed electricians use modern test equipment to find the root cause of electrical issues, not just the symptom.",
    features: [
      "Circuit tracing",
      "Breaker & outlet repair",
      "Aluminum wiring remediation",
      "Code-correction work",
      "Detailed written reports",
    ],
    icon: "wrench",
  },
];
