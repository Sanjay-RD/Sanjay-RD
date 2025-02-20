import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gridTemplateColumns: {
          auto: "repeat(auto-fit, minmax(200px, 1fr))",
        },
        fontFamily: {
          Outfit: ["Outfit", "sans-serif"],
          Ovo: ["Ovo", "serif"],
        },
        colors: {
          lightHover: "#fcf4ff",
          darkHover: "#2a004a",
          darkTheme: "#11001F",
        },
        boxShadow: {
          black: "4px 4px 0 #000",
          white: "4px 4px 0 #fff",
        },
      },
    },
  },
  darkMode: "selector",
  plugins: [],
} satisfies Config;
