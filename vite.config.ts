import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import pluginRewriteAll from "vite-plugin-rewrite-all";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
