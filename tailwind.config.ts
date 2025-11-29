
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
        primary: "#c49378",
        "primary-dark": "#a8765d",
        "primary-light": "#e6d2c6",
        "text-heading": "#111111",
        "text-body": "#444444",
        "text-muted": "#757575",
        "background-white": "#ffffff",
        "background-offwhite": "#f9f9f9",
        "border-default": "#e0e0e0",
        "semantic-success": "#2e7d32",
        "semantic-error": "#c62828",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair-display)"],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "64px",
      },
      boxShadow: {
        sm: "0 2px 4px rgba(0,0,0,0.05)",
        md: "0 5px 15px rgba(0,0,0,0.08)",
        lg: "0 10px 25px rgba(0,0,0,0.1)",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;

