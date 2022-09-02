import { css } from "styled-components";
import { colorRoles } from "../../../styles/colors/colors";
import { pxToRem } from "../../../styles/mixins/pxToRem";
import { ButtonLabel } from "../Button.styled";
import {
  buttonThemeSecondaryVariant,
  ButtonWrapperType,
} from "../Buttons.type";
import { ButtonDisabled } from "./Disabled.styled";
import { lineHeightOffSetButtonY } from "./Params.styled";

export const ButtonSecondaryLight = css`
  background-color: ${colorRoles.Secondary.SanJuanBlue};
  border: ${pxToRem(1)} solid ${colorRoles.Primary.LinkWaterWhite};

  ${ButtonLabel} {
    color: ${colorRoles.Primary.LinkWaterWhite};
  }
  &:hover {
    background-color: ${colorRoles.Primary.LinkWaterWhite};

    ${ButtonLabel} {
      color: ${colorRoles.Secondary.SanJuanBlue};
    }
  }
`;

export const ButtonSecondaryDark = css`
  background-color: ${colorRoles.Primary.LinkWaterWhite};
  border: ${pxToRem(1)} solid ${colorRoles.Secondary.SanJuanBlue};

  ${ButtonLabel} {
    color: ${colorRoles.Secondary.SanJuanBlue};
  }

  &:hover {
    background-color: ${colorRoles.Secondary.SanJuanBlue};

    ${ButtonLabel} {
      color: ${colorRoles.Primary.LinkWaterWhite};
    }
  }
`;

export const ButtonSecondary = css<ButtonWrapperType>`
  padding: ${pxToRem(16)} ${pxToRem(32)}
    ${pxToRem(16 - lineHeightOffSetButtonY)};
  ${({ $buttonThemeSecondaryVariant }) =>
    buttonThemeSecondaryVariant[$buttonThemeSecondaryVariant]}
  ${({ $disabled }) => ($disabled ? ButtonDisabled : "")}
`;
