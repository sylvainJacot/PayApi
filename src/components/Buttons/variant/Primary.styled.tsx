import { css } from "styled-components";
import { ButtonLabel } from "../Button.styled";
import { colorRoles } from "../../../styles/colors/colors";
import { pxToRem } from "../../../styles/mixins/pxToRem";
import { ButtonWrapperType } from "../Buttons.type";
import { lineHeightOffSetButtonY } from "./Params.styled";
import { ButtonDisabled } from "./Disabled.styled";

export const ButtonPrimary = css<ButtonWrapperType>`
  background-color: ${colorRoles.Primary.DarkPink};
  padding: ${pxToRem(16)} ${pxToRem(24)}
    ${pxToRem(16 - lineHeightOffSetButtonY)};

  :hover {
    background-color: ${colorRoles.Secondary.CharmPink};
  }

  ${ButtonLabel} {
    color: ${colorRoles.Primary.LinkWaterWhite};
  }

  ${({ $disabled }) => ($disabled ? ButtonDisabled : "")}
`;
