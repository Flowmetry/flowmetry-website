import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        "fm-bg": "#0F1115",
        "fm-card": "#161A22",
        "fm-border": "#2A2F3A",
        "fm-blue": "#3B82F6",
        "fm-cyan": "#22D3EE",
        "fm-muted": "#9CA3AF",
      },
    },
  },
  plugins: [],
};

export default config;
