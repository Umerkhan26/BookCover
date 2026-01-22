import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: ["es2020", "edge88", "firefox78", "chrome87", "safari14"],
    minify: "esbuild",
    cssMinify: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks: (id) => {
          // Only split React core - let Vite handle the rest automatically to avoid circular deps
          if (id.includes("node_modules")) {
            // Critical: Keep React and React-DOM together
            if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
              return "vendor-react";
            }
            // Let Vite automatically chunk the rest to avoid initialization order issues
            // This prevents circular dependencies in the vendor chunk
          }
        },
      },
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    // Ensure proper module resolution and chunk loading
    modulePreload: {
      polyfill: true,
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "react-redux",
      "styled-components",
    ],
    exclude: ["@fortawesome/fontawesome-svg-core"],
  },
  // Ensure base path is correct for production
  base: "/",
});
