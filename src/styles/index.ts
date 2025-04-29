// 환경변수로 컴파일 타임에 분기

import { ThemeType } from "./theme.type";

// __PRODUCT__는 tsup.define으로 주입

// @ts-expect-error props mismatch due to dynamic rendering

const PRODUCT = __PRODUCT__;

let theme: ThemeType;

if (PRODUCT === "SIGMINE") {
  theme = await import("./sigmineTheme").then((m) => m.default);
} else {
  theme = await import("./pocketPromptTheme").then((m) => m.default);
}

export default theme;
