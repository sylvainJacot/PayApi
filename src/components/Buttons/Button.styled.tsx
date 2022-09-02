import styled, { css } from "styled-components";
import { buttonVariants, ButtonWrapperType } from "./Buttons.type";
import { fontsFamilies } from "../../styles/globalStyle/globalStyle";
import { pxToRem } from "../../styles/mixins/pxToRem";

export const ButtonWrapper = styled.a<ButtonWrapperType>`
  border-radius: ${pxToRem(24)};
  // $variant est une transient props avec le '$'. C'est une props qu'on ne veut pas être affiché dans le DOM
  ${({ $variant }) => buttonVariants[$variant]}
`;

export const ButtonLabel = styled.span<ButtonWrapperType>`
  font-family: ${fontsFamilies.PublicSans};
  font-size: ${pxToRem(15)};
  font-weight: bold;
  letter-spacing: ${pxToRem(-0.12)};
  text-align: center;
  ${({ $variant }) => buttonVariants[$variant]}
`;
