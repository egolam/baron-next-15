/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "soft-ivory": "#F8F4F0",
        "dusty-rose": "#DABEC8",
        "champagne-gold": "#D4AF37",
        "muted-lavender": "#D8CFE8",
        "slate-gray": "#6A6A6A",
        "deep-burgundy": "#4A1E23",
        "emerald-green": "#2A5248",
        "charcoal": "#333333",
        "warm-beige": "#E5DCC5",
        "piano-black" : "#010001"
      },
    },
  },
  plugins: [],
};
