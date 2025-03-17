/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        grow: "grow 2s ease-in-out forwards",
        typing:
          "typing 2s steps(24), blinking 0.5s infinite step-end alternate",
      },
      keyframes: {
        grow: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        typing: {
          from: { width: "0" },
        },
        blinking: {
          "50%": { borderColor: "transparent" },
        },
      },
      transitionProperty: {
        height: "height",
        opacity: "opacity",
        transform: "transform",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#0F1624",
        aboutMeText: "#BCBCBC",
        stacksBar: "#162950",
      },
      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(90deg, rgba(19,173,199,1) 0%, rgba(105,120,209,1) 67%, rgba(148,93,214,1) 100%);",
      },
      boxShadow: {
        "projects-preview": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(550px, auto))",
      },
    },
  },
  plugins: [],
};
