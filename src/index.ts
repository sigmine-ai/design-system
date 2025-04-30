import {
  Button as PocketPromptButton,
  Input as PocketPromptInput,
} from "@/components/pocketPrompt";
import {
  Button as SigmineButton,
  Input as SigmineInput,
} from "@/components/sigmine";
import { Icon, Text } from "./components/common";

import theme from "./styles/pocketPromptTheme";

const PRODUCT = __PRODUCT__; // tsup.define으로 컴파일 타임에 주입

export const Button =
  PRODUCT === "SIGMINE" ? SigmineButton : PocketPromptButton;
export const Input = PRODUCT === "SIGMINE" ? SigmineInput : PocketPromptInput;
export { Icon, theme, Text };
