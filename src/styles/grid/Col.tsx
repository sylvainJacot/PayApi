import { ReactNode } from "react";
import styled from "styled-components";
import media, { Breakpoints } from "../mediaqueries/mediaqueries";

type ColType = {
  children?: ReactNode;
  tablet?: string;
  desktop?: string;
};

const Col = ({ children, tablet, desktop }: ColType) => {
  return (
    <>
      <ColCell tablet={tablet} desktop={desktop}>
        {children}
      </ColCell>
    </>
  );
};

export default Col;

export const ColCell = styled.div<ColType>`
  ${media.tablet} {
    grid-column: ${(props) => props.tablet};
  }
  ${media.desktop} {
    grid-column: ${(props) => props.desktop};
  }
`;
