import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core palette — see README for the reasoning behind each token.
        reel: {
          black: "#0B0B0A", // base background, warm near-black (not pure #000)
          charcoal: "#151412", // raised surfaces / cards
          rule: "#2A2723", // hairlines, dividers, sprocket holes
        },
        paper: {
          DEFAULT: "#F4EFE4", // primary text — warm ivory, like a lit page
          dim: "#A79E8E", // secondary / meta text
          faint: "#5C574C", // tertiary, disabled, watermark-level text
        },
        sage: {
          DEFAULT: "#7FA06B", // primary accent, used sparingly for hover states
          soft: "#5F7951",
        },
        rust: {
          DEFAULT: "#7C3B2E", // used sparingly — genre / award tags only
        },
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
} satisfies Config;
