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
          // Separate vendor chunks for better caching
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-router")) {
              return "vendor-react";
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
    reportCompressedSize: false, // Faster builds
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["@fortawesome/fontawesome-svg-core"], // Tree-shake FontAwesome
  },
});
