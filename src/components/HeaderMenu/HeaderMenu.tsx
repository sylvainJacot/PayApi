import styled from "styled-components";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import LogoClient from "../Logo/LogoClient";

export default function HeaderMenu() {
  return (
    <>
      <HeaderWrapper>
        <LogoClient WidthClientLogo={135} />
        <BurgerMenu />
      </HeaderWrapper>
    </>
  );
}

export const HeaderWrapper = styled.header``;
