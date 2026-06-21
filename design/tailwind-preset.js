/** Spark — Tailwind v3 compatibility preset. v4 users prefer design/theme.css. */
module.exports = {
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"] },
      colors: {
        brand: { 100: "#ffedd5", 500: "#f97316", 600: "#ea580c" },
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: "var(--color-muted)",
        "muted-foreground": "var(--color-muted-foreground)",
        border: "var(--color-border)",
        card: "var(--color-card)",
        primary: "var(--color-primary)",
        "primary-foreground": "var(--color-primary-foreground)",
      },
      borderRadius: { DEFAULT: "1rem" },
    },
  },
};
