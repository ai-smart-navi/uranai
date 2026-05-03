/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff7f9",
          100: "#ffecef",
          200: "#ffd7df",
          300: "#f8b6c6",
          400: "#ef8fab",
        },
        lavender: {
          50: "#fbf8ff",
          100: "#f1e9ff",
          200: "#e2d1ff",
          300: "#cbb3f5",
          500: "#8f6cc8",
        },
        cream: "#fffaf2",
        gold: "#c9a65a",
        cocoa: "#49333d",
        rosewood: "#7d4d5d",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(125, 77, 93, 0.12)",
        card: "0 12px 34px rgba(143, 108, 200, 0.12)",
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 22% 18%, rgba(255,216,226,0.88), transparent 30%), radial-gradient(circle at 82% 10%, rgba(226,209,255,0.82), transparent 30%), linear-gradient(135deg, #fffafc 0%, #fff7f9 45%, #fbf8ff 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.08)" },
        },
      },
      animation: {
        float: "float 5.5s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease both",
        shimmer: "shimmer 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
