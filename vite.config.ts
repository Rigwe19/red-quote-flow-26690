import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(), // helps split large vendor bundles
    viteCompression({
      algorithm: "gzip", // or gzip\bzip2\deflate\brotli
      ext: ".gz",
      threshold: 1024, // only compress files > 1KB
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  
  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@google/genai")) return "genai";
            if (id.includes("date-fns") || id.includes("zod") || id.includes("clsx")) return "utils";
            return "vendor";
          }
        },
      },
    },
  },
});
