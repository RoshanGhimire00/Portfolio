import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/Portfoilo/", // 👈 Important for GitHub Pages deployment
  plugins: [react(), tailwindcss()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
