import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: repo name must match here
export default defineConfig({
  base: "/portfolio-site/",
  plugins: [react()],
});
