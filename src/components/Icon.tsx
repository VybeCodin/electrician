import type { SVGProps } from "react";

type IconName =
  | "bolt"
  | "home"
  | "building"
  | "shield"
  | "wrench"
  | "panel"
  | "phone"
  | "mail"
  | "map"
  | "clock"
  | "check"
  | "menu"
  | "close"
  | "star";

const paths: Record<IconName, string> = {
  bolt: "M13 2L4.5 13.5h6L9 22l9.5-12h-6L13 2z",
  home: "M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8.5z",
  building:
    "M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v12H4zm3-3h2v-2H7v2zm0-4h2v-2H7v2zm0-4h2V8H7v2zm4 8h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2V8h-2v2zm6 8h2v-2h-2v2zm0-4h2v-2h-2v2z",
  shield:
    "M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3zm-1 13l5-5-1.4-1.4L11 12.2 9.4 10.6 8 12l3 3z",
  wrench:
    "M21 7a5 5 0 0 1-6.5 4.8l-7 7a2 2 0 1 1-2.8-2.8l7-7A5 5 0 0 1 17 3l-2.5 2.5L16 7l1.5 1.5L19 7h2z",
  panel:
    "M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 3v3h4V6H7zm6 0v3h4V6h-4zM7 11v3h4v-3H7zm6 0v3h4v-3h-4zm-6 5v3h4v-3H7zm6 0v3h4v-3h-4z",
  phone:
    "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1L6.6 10.8z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4l8 5 8-5v10H4V8z",
  map: "M12 2a8 8 0 0 0-8 8c0 5.6 8 12 8 12s8-6.4 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
  clock:
    "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 11h-4v-2h2V7h2v6z",
  check: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
  menu: "M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z",
  close:
    "M19 6.4L17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4z",
  star: "M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z",
};

type Props = SVGProps<SVGSVGElement> & { name: IconName };

export default function Icon({ name, className, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d={paths[name]} />
    </svg>
  );
}
