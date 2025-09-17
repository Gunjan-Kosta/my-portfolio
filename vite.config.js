import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace `my-portfolio` with your repo name
export default defineConfig({
  base: "/my-portfolio/",
  plugins: [react()],
});
