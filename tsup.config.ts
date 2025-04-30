import { defineConfig } from "tsup";

const isStorybook = process.env.STORYBOOK === "true";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "es2020",
  external: isStorybook ? [] : ["react", "react-dom"],
});
