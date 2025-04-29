import { css } from "styled-components";
import { colors, fonts } from "./pocketPromptTheme";

type CssReturnType = ReturnType<typeof css>;

export type ThemeColors = typeof colors;

export type ThemeFonts = {
  [K in keyof typeof fonts]: CssReturnType;
};

export interface ThemeMixins {
  flexBox: (
    direction?: string,
    justify?: string,
    align?: string
  ) => CssReturnType;
  skeleton: () => CssReturnType;
  slideUp: () => CssReturnType;
  fadeIn: () => CssReturnType;
  slideUpWFadeIn: () => CssReturnType;
  gradientPrimary: () => CssReturnType;
}

export interface ThemeType {
  colors: ThemeColors;
  fonts: ThemeFonts;
  mixins: ThemeMixins;
}
