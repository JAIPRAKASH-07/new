import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/",   // 👈 THIS IS THE KEY
  plugins: [react()],
    build: {
  sourcemap: true,
},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  

  },
});
