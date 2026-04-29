import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff8eb",
          100: "#ffeac6",
          200: "#ffd388",
          300: "#ffb44a",
          400: "#ff981f",
          500: "#f97316",
          600: "#dc5b07",
          700: "#b6420a",
          800: "#92340f",
          900: "#782b10",
          950: "#451405",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5d9e2",
          300: "#b1b8c8",
          400: "#8691a8",
          500: "#67738d",
          600: "#525c74",
          700: "#434a5e",
          800: "#3a4050",
          900: "#0f172a",
          950: "#070b15",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
