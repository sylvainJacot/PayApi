import { ButtonThemeSecondaryVariant, ButtonVariant } from "./Buttons.type";
import { ButtonLabel, ButtonWrapper } from "./Button.styled";

export type ButtonType = {
  label: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  light?: boolean;
  theme?: ButtonThemeSecondaryVariant;
};

export default function Button({
  label = "Label default",
  variant = ButtonVariant.Primary,
  disabled = false,
  light = false,
  theme = ButtonThemeSecondaryVariant.Dark,
}: ButtonType) {
  return (
    <>
      <ButtonWrapper
        $variant={variant}
        $disabled={disabled}
        $light={light}
        $buttonThemeSecondaryVariant={theme}
        href="#"
      >
        <ButtonLabel>{label}</ButtonLabel>
      </ButtonWrapper>
    </>
  );
}
