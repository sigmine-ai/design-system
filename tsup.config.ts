import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // entry point (예시)
  format: ["esm", "cjs"],
  dts: true, // 타입 선언파일 같이 배포
  sourcemap: true,
  clean: true,
  define: {
    __PRODUCT__: JSON.stringify(process.env.PRODUCT ?? "POCKET_PROMPT"),
  },
});
