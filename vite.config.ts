import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["react", "react-dom"], // 프리번들에서 제외
  },
  ssr: {
    external: ["react", "react-dom"], // SSR 번들에서 제외
  },
});
