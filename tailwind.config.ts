import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0C1320",            // headings
        body: "#1C2434",           // body text on light
        mute: "#6B768A",           // muted text
        brand: "#08C6AE",          // small brand accent (badge, links)
        cta: "#FF9F3E",            // orange CTA
        glassBorder: "rgba(12,19,32,0.06)",
        cardBg: "rgba(255,255,255,0.72)",
        cardBgDeep: "rgba(255,255,255,0.62)",
        pageBlue: "#EAF2FF",
        pagePeach: "#FFE6D2",
        tick: "#1DB954"
      },
      borderRadius: {
        xl2: "18px",
        xl3: "22px",
      },
      boxShadow: {
        glass: "0 10px 30px rgba(18,26,40,0.08)",
        glassHover: "0 16px 40px rgba(18,26,40,0.12)",
        insetTop: "inset 0 1px 0 rgba(255,255,255,0.6)",
        insetRing: "inset 0 0 0 1px rgba(12,19,32,0.06)",
      },
      backdropBlur: {
        xl: "18px",
        '2xl': "26px"
      },
      fontSize: {
        display: ["64px", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["40px", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["28px", { lineHeight: "1.2" }],
      }
    }
  },
  plugins: []
}
export default config