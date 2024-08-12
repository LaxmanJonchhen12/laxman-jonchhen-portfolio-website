import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "primary-white": "#FFFFFF",
        "primary-black": "#111827",
        "secondary-black": "#030712",
        "primary-gray": "#F9FAFB",
        "secondary-gray": "#E5E7EB",
        "tertiary-gray": "#374151",
        "ascent-gray": "#1F2937",
        "gray-active": "#1F2937",
      },
      colors: {
        "primary-white": "#F9FAFB",
        "primary-gray": "#D1D5DB",
        "primary-black": "#111827",
        "secondary-black": "#374151",
        "secondary-gray": "#E5E7EB",
        "tertiary-gray": "#4B5563",
      }
    },
  },
  plugins: [],
};
export default config;
