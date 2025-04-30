// src/styles/index.ts
import pocketPromptTheme from "./pocketPromptTheme";
import sigmineTheme from "./sigmineTheme";

const PRODUCT = __PRODUCT__; // tsup.define 으로 주입됨

const theme = PRODUCT === "SIGMINE" ? sigmineTheme : pocketPromptTheme;

export default theme;
