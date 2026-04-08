/** @type {import('tailwindcss').Config} */
export default {
  // Tell Tailwind which files to scan for class names
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Apple's system font stack
      fontFamily: {
        apple: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      // Apple colour tokens
      colors: {
        apple: {
          blue:    "#0071e3",
          blueDark:"#0077ed",
          dark:    "#1d1d1f",
          gray:    "#6e6e73",
          light:   "#f5f5f7",
          border:  "#d2d2d7",
        },
      },
      // Fluid type helpers
      fontSize: {
        "hero": "clamp(3rem, 8vw, 6.5rem)",
        "section": "clamp(2rem, 4vw, 3.2rem)",
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  // DaisyUI theme config
  daisyui: {
    themes: ["light"],
    base: false,
    styled: true,
    utils: true,
    logs: false,
  },
};
