import { ButtonVariant, ButtonWrapper } from "./Button.styled";

export type ButtonType = {
    label : string;
    variant? : ButtonVariant;
}

export default function Button({
    label = "Label default", 
    variant = ButtonVariant.Primary,
}: ButtonType) {

    return (
    
       <>
            <ButtonWrapper $variant={variant} href="#">{label}</ButtonWrapper>
       </>
    )
}
