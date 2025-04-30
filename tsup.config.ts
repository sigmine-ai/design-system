import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2020",
  define: {
    __PRODUCT__: JSON.stringify(process.env.PRODUCT ?? "POCKET_PROMPT"),
  },
});
