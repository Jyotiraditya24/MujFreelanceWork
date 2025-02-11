import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        blink: "cursor-blink 0.8s infinite",
        words: "words-keyframes 6s steps(1) infinite",
        typing:
          "typing-keyframes 4s steps(14) infinite, cursor-blink 0.8s infinite",
        "typing-words":
          "typing-keyframes 4s steps(14) infinite, cursor-blink 0.8s infinite, words-keyframes 6s steps(1) infinite", // ✅ Combined animation
      },
      keyframes: {
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "words-keyframes": {
          "0%, 20%": { content: '"Gym"' },
          "21%, 40%": { content: '"Shark"' },
          "41%, 60%": { content: '"Fitness"' },
          "61%, 80%": { content: '"Power"' },
          "81%, 100%": { content: '"Hello"' },
        },
        "typing-keyframes": {
          "0%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%": { width: "0" },
          "5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%": {
            width: "calc(100% + 8px)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
