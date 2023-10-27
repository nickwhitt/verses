import type { Config } from "tailwindcss";

export default {
  content: [],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
