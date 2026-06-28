import type { Config } from "tailwindcss";

/**
 * Design tokens. Retheme by editing the `accent` ramp + paper/ink here and the
 * CSS variables in globals.css. Fonts are wired via next/font in layout.tsx and
 * exposed as the `--font-*` variables referenced below.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Warm "paper" + near-black "ink".
        paper: {
          DEFAULT: "#F7F5F0",
          soft: "#F0EDE4",
          deep: "#ECE8DD",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#33322E",
          muted: "#6B6860",
          faint: "#9C9890",
        },
        // Hairline rules + grid lines.
        line: {
          DEFAULT: "#DAD4C6",
          strong: "#C7C0AE",
        },
        // The single accent: ultramarine (used as a solid, never a gradient).
        accent: {
          50: "#ECEEFE",
          100: "#DADEFD",
          200: "#B7BFFB",
          300: "#8E9BF7",
          400: "#6172F0",
          500: "#3A4DE8",
          600: "#1E36E0", // primary
          700: "#1A2BB4",
          800: "#17248C",
          900: "#141E66",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Genuinely large display scale for the hero.
        "display-2xl": ["clamp(3rem, 9vw, 8rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem, 4.2vw, 3.5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.6rem, 3vw, 2.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        page: "78rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw": {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
