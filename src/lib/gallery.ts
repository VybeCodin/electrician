export type GalleryCategory =
  | "residential"
  | "commercial"
  | "panels"
  | "ev-chargers"
  | "lighting"
  | "emergency";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  location: string;
  description: string;
  image?: string;
  accent: "violet" | "amber" | "sky" | "emerald" | "rose" | "slate";
  icon: "bolt" | "home" | "building" | "shield" | "wrench" | "panel";
};

export const galleryCategories: { value: "all" | GalleryCategory; label: string }[] = [
  { value: "all", label: "All work" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "panels", label: "Panel upgrades" },
  { value: "ev-chargers", label: "EV chargers" },
  { value: "lighting", label: "Lighting" },
  { value: "emergency", label: "Emergency" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "smart-home-app",
    title: "Smart-home control install",
    category: "residential",
    location: "Riverside, CA",
    description:
      "Whole-home automation wiring with iPhone-controlled lighting, scenes, and check-in dashboard.",
    image: "/project-smart-home.jpg",
    accent: "sky",
    icon: "home",
  },
  {
    id: "studio-av-wiring",
    title: "Home studio AV wiring",
    category: "residential",
    location: "Corona, CA",
    description:
      "Dedicated isolated-ground circuits and balanced audio runs for a near-field monitor setup.",
    image: "/project-studio-av.jpg",
    accent: "slate",
    icon: "wrench",
  },
  {
    id: "transformer-rewire",
    title: "Pole transformer rewire",
    category: "commercial",
    location: "Riverside, CA",
    description:
      "Replaced aging service drop and reterminated three-phase transformers for a downtown retail block.",
    image: "/hero.jpg",
    accent: "violet",
    icon: "building",
  },
  {
    id: "panel-upgrade-200a",
    title: "200A panel upgrade",
    category: "panels",
    location: "Corona, CA",
    description:
      "Upgraded from a 100A fuse box to a modern 200A breaker panel with whole-home surge protection.",
    accent: "amber",
    icon: "panel",
  },
  {
    id: "level-2-ev",
    title: "Level 2 EV charger install",
    category: "ev-chargers",
    location: "Eastvale, CA",
    description:
      "Outdoor weatherproof 240V circuit and Tesla Wall Connector with dedicated 60A breaker.",
    accent: "emerald",
    icon: "bolt",
  },
  {
    id: "kitchen-recessed",
    title: "Whole-kitchen recessed lighting",
    category: "lighting",
    location: "Norco, CA",
    description:
      "Twelve dimmable LED recessed cans with under-cabinet accent lighting on a separate scene.",
    accent: "sky",
    icon: "home",
  },
  {
    id: "warehouse-led",
    title: "Warehouse LED retrofit",
    category: "commercial",
    location: "Ontario, CA",
    description:
      "Replaced 64 metal-halide high bays with high-efficiency LEDs — 62% reduction in lighting load.",
    accent: "amber",
    icon: "building",
  },
  {
    id: "storm-emergency",
    title: "Storm damage restoration",
    category: "emergency",
    location: "Moreno Valley, CA",
    description:
      "Restored service after a downed line took out the main feeder. On-site within 35 minutes of the call.",
    image: "/hero.jpg",
    accent: "rose",
    icon: "shield",
  },
  {
    id: "adu-rewire",
    title: "ADU full rewire",
    category: "residential",
    location: "Jurupa Valley, CA",
    description:
      "New sub-panel, fresh romex throughout, and code-compliant outlet spacing for a backyard ADU build.",
    accent: "violet",
    icon: "home",
  },
  {
    id: "office-fitout",
    title: "Office tenant improvement",
    category: "commercial",
    location: "Riverside, CA",
    description:
      "New circuits, data drops, and conference-room lighting for a 4,200 sq ft tech office fit-out.",
    accent: "slate",
    icon: "building",
  },
  {
    id: "ev-fleet",
    title: "Fleet EV charging hub",
    category: "ev-chargers",
    location: "Rancho Cucamonga, CA",
    description:
      "Six networked Level 2 chargers on a load-managed circuit for a delivery fleet.",
    accent: "emerald",
    icon: "bolt",
  },
  {
    id: "burning-outlet",
    title: "Late-night outlet failure",
    category: "emergency",
    location: "Redlands, CA",
    description:
      "Burning smell at 11pm — diagnosed a failed back-stab connection, replaced device and tested circuit.",
    accent: "rose",
    icon: "wrench",
  },
  {
    id: "exterior-lighting",
    title: "Architectural exterior lighting",
    category: "lighting",
    location: "Corona, CA",
    description:
      "Low-voltage path lighting and uplit oak trees on an astronomic timer with smart-home control.",
    accent: "sky",
    icon: "home",
  },
  {
    id: "subpanel",
    title: "Detached garage sub-panel",
    category: "panels",
    location: "Riverside, CA",
    description:
      "100A sub-panel feeding a workshop with 240V welder receptacle and dedicated dust-collector circuit.",
    accent: "amber",
    icon: "panel",
  },
];
