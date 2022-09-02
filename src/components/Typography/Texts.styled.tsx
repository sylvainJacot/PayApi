import { css } from "styled-components";
import { fontsFamilies } from "../../styles/globalStyle/globalStyle";
import { pxToRem } from "../../styles/mixins/pxToRem";

export const Heading1LargeStyle = css`
  font-family: ${fontsFamilies.DMSerifDisplay};
  font-size: ${pxToRem(72)};
  line-height: ${pxToRem(72)};
`;

export const Heading1SmallStyle = css`
  font-family: ${fontsFamilies.DMSerifDisplay};
  font-size: ${pxToRem(56)};
  line-height: ${pxToRem(56)};
`;

export const Heading2Style = css`
  font-family: ${fontsFamilies.DMSerifDisplay};
  font-size: ${pxToRem(48)};
  line-height: ${pxToRem(56)};
`;

export const Heading3BigStyle = css`
  font-family: ${fontsFamilies.DMSerifDisplay};
  font-size: ${pxToRem(32)};
  line-height: ${pxToRem(40)};
`;

export const Heading3SmallStyle = css`
  font-family: ${fontsFamilies.PublicSans};
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(25)};
`;

export const Heading4Style = css`
  font-family: ${fontsFamilies.DMSerifDisplay};
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(32)};
`;

export const BodyCopystyle = css`
  font-family: ${fontsFamilies.PublicSans};
  font-size: ${pxToRem(15)};
  line-height: ${pxToRem(28)};
`;
