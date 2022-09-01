import styled, { css } from "styled-components";
import { pxToRem } from "../../styles/mixins/pxToRem";

export enum ButtonVariant  {
    Primary = "Primary",
    Secondary = "Secondary",
}

const lineHeightOffSetY = 2;

const ButtonPrimary = css`
background-color: red;
padding: ${pxToRem(16)} ${pxToRem(24)} ${pxToRem(16 - lineHeightOffSetY)}
`

const ButtonSecondary = css`
background-color: green;
padding: ${pxToRem(16)} ${pxToRem(32)} ${pxToRem(16 - lineHeightOffSetY)} ;
`

const buttonVariants = { 
    [ButtonVariant.Primary]: ButtonPrimary,
    [ButtonVariant.Secondary]: ButtonSecondary,
}


type ButtonWrapperType = {
    $variant? : ButtonVariant
}


export const ButtonWrapper = styled.a<ButtonWrapperType>`
    border-radius: ${pxToRem(24)};
    // $variant est une transient props avec le '$'. C'est une props qu'on ne veut pas être affiché dans le DOM
    ${({$variant}) => buttonVariants[$variant]} 
`