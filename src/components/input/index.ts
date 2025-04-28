import ProcketPromptInput from "./PocketPromptInput";
import SigmineInput from "./SigmineInput";

const PRODUCT = process.env.NEXT_PUBLIC_PRODUCT;

export const Input =
  PRODUCT === "POCKET_PROMPT"
    ? ProcketPromptInput
    : PRODUCT === "SigmineInput"
    ? SigmineInput
    : ProcketPromptInput; // default fallback
