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
        primary: {
          DEFAULT: "#ffbb11",
          dark: "#764701",
        },
        neutral: {
          light: "#6C6E7A",
          DEFAULT: "#464853",
          dark: "#343641",
        },
      },
      fontFamily: {
        heading: "var(--font-bitter)",
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
