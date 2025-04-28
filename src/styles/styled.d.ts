import "styled-components";
import type { ThemeType } from "./theme.type";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {
    _dummy?: never;
  }
}
