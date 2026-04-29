export const site = {
  name: "Voltline Electric",
  tagline: "Licensed electricians for homes & businesses",
  description:
    "Voltline Electric provides licensed and insured electrical services for residential and commercial clients. Available 24/7 for emergency callouts.",
  phone: "(555) 010-3300",
  phoneHref: "tel:+15550103300",
  email: "hello@voltlineelectric.com",
  emailHref: "mailto:hello@voltlineelectric.com",
  address: {
    line1: "120 Industry Way",
    line2: "Suite 4",
    city: "Riverside",
    region: "CA",
    postal: "92501",
  },
  hours: [
    { day: "Mon – Fri", time: "7:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Emergency only" },
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  license: "C-10 License #1099876",
} as const;

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
] as const;
