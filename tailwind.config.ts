import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#9F8170", // Taupe (less brown)
          light: "#BCA799",
          dark: "#7D6459",
        },
        secondary: {
          DEFAULT: "#F5F5DC", // Cream
          light: "#FFFFF0",
          dark: "#E8E8C8",
        },
        accent: {
          DEFAULT: "#5F9EA0", // Soft teal
          light: "#7FBCBE",
          dark: "#4A7F81",
        },
        highlight: {
          DEFAULT: "#E67E22", // Warm orange
          light: "#F39C12",
          dark: "#D35400",
        },
        charcoal: "#333333",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
