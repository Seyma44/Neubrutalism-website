/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: 'url("/hero-bg.png")',
      },
      translate: {
        "1/2": "50%",
      },
      scale: {
        "110": "1.1",
      },
    },
  },
  variants: {
    extend: {
      translate: ["hover"],
      scale: ["hover"],
    },
  },
  plugins: [],
};

