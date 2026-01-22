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
          // Critical: Keep React and React-DOM together to prevent duplicate instances
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "vendor-react-core";
          }
          if (id.includes("node_modules")) {
            if (id.includes("react-router")) {
              return "vendor-react-router";
            }
            if (id.includes("redux") || id.includes("@reduxjs")) {
              return "vendor-redux";
            }
            if (id.includes("styled-components") || id.includes("framer-motion")) {
              return "vendor-ui";
            }
            if (id.includes("slick") || id.includes("carousel")) {
              return "vendor-carousel";
            }
            // Other node_modules
            return "vendor";
          }
        },
      },
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: false,
    // Ensure proper chunk loading
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["@fortawesome/fontawesome-svg-core"],
    // Force pre-bundling to avoid duplicate React instances
    force: false,
  },
  // Ensure base path is correct for production
  base: "/",
});
