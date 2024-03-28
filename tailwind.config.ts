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
          medium: "#E09900",
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
      keyframes: {
        "fade-right": {
          "0%": { transform: "translateX(80px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        "fade-left": {
          "0%": { transform: "translateX(-80px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        "fade-bottom": {
          "0%": { transform: "translateY(-50px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "fade-top": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-right": "fade-right .5s ease-in-out",
        "fade-left": "fade-left .5s ease-in-out",
        "fade-bottom": "fade-bottom .5s ease-in-out",
        "fade-top": "fade-top .2s ease-in-out",
        "fade-in": "fade-in .5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
