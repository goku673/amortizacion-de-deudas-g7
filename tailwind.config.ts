import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Paleta personalizada basada en la imagen
        "blue-light": "#1E90FF", // Azul claro
        "blue-medium": "#4169E1", // Azul medio
        "red-bright": "#FF0000", // Rojo brillante
        "red-dark": "#DC143C", // Rojo oscuro
        "blue-navy": "#1E3A8A", // Azul marino
        primary: {
          DEFAULT: "#1E90FF", // Azul claro como primario
          foreground: "hsl(var(--primary-foreground))",
          50: "#EBF8FF",
          100: "#BEE3F8",
          500: "#1E90FF",
          600: "#4169E1", // Azul medio
          700: "#1E3A8A", // Azul marino
        },
        secondary: {
          DEFAULT: "#FF0000", // Rojo brillante como secundario
          foreground: "hsl(var(--secondary-foreground))",
          50: "#FEF2F2",
          100: "#FEE2E2",
          500: "#FF0000",
          600: "#DC143C", // Rojo oscuro
        },
        accent: {
          DEFAULT: "#1E3A8A", // Azul marino como accent
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
