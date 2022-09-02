import { ButtonPrimary } from "./variant/Primary.styled";
import { ButtonSecondary, ButtonSecondaryDark, ButtonSecondaryLight } from "./variant/Secondary.styled";

export enum ButtonVariant  {
    Primary = "Primary",
    Secondary = "Secondary",
}


export const buttonVariants = { 
    [ButtonVariant.Primary]: ButtonPrimary,
    [ButtonVariant.Secondary]: ButtonSecondary,
}

export enum ButtonThemeSecondaryVariant {
    Light = "Light",
    Dark = "Dark",
}

export const buttonThemeSecondaryVariant = { 
    [ButtonThemeSecondaryVariant.Light]: ButtonSecondaryLight,
    [ButtonThemeSecondaryVariant.Dark]: ButtonSecondaryDark,
}


export type ButtonWrapperType = {
    $variant? : ButtonVariant
    $buttonThemeSecondaryVariant : ButtonThemeSecondaryVariant
    $disabled? : boolean
    $light? : boolean
}