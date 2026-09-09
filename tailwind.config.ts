import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dossier: {
          paper: "#EDE6D6",
          panel: "#F7F2E7",
          ink: "#2B2620",
          muted: "#6B6250",
          line: "#C9BFA0",
          stamp: "#A93226",
          phosphor: "#3F6D5D",
        },
      },
      fontFamily: {
        headline: ["var(--font-headline)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
