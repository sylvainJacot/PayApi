import styled from "styled-components";
import LogoClient from "../Logo/LogoClient";

export default function HeaderMenu() {
  return (
    <>
      <HeaderWrapper>
        <LogoClient WidthClientLogo={135} />
      </HeaderWrapper>
    </>
  );
}

export const HeaderWrapper = styled.nav``;
