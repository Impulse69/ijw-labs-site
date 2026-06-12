import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ijw-labs-site/",
  plugins: [react()],
  server: { port: 8078 },
});
