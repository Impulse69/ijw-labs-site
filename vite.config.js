import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// DEPLOY_BASE="/" for root-hosted deploys (Netlify); default targets GitHub Pages.
export default defineConfig({
  base: process.env.DEPLOY_BASE || "/ijw-labs-site/",
  plugins: [react()],
  server: { port: 8078 },
});
