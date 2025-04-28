import ProcketPromptButton from "./PocketPromptButton";
import SigmineButton from "./SigmineButton";

const PRODUCT = process.env.NEXT_PUBLIC_PRODUCT;

export const Button =
  PRODUCT === "POCKET_PROMPT"
    ? ProcketPromptButton
    : PRODUCT === "SigmineButton"
    ? SigmineButton
    : ProcketPromptButton; // default fallback
