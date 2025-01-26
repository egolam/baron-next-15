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
        charcoal: "#333333",
        "warm-beige": "#E5DCC5",
        "piano-black": "#010001",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
