import styled from "styled-components";
import { colorRoles } from "../../styles/colors/colors";
import { pxToRem } from "../../styles/mixins/pxToRem";

const BurgerMenu = () => {
  return (
    <>
      <BurgerMenuWrapper>
        <Line />
        <Line />
        <Line />
      </BurgerMenuWrapper>
    </>
  );
};

export default BurgerMenu;

export const BurgerMenuWrapper = styled.button`
  display: block;
  position: relative;
  width: ${pxToRem(28)};
  height: ${pxToRem(17)};
`;

export const Line = styled.span`
  display: inline-block;
  position: absolute;
  width: 100%;
  height: ${pxToRem(3)};
  background-color: ${colorRoles.Secondary.MirageBlue};

  &:nth-child(1) {
    top: 0;
    transform: translate(-50%, 0);
  }
  &:nth-child(2) {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &:nth-child(3) {
    bottom: 0;
    transform: translate(-50%, 0);
  }
`;
