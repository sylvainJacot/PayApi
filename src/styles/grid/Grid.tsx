import { ReactNode } from "react";
import styled from "styled-components";
import media, { Breakpoints } from "../mediaqueries/mediaqueries";
import { pxToRem } from "../mixins/pxToRem";

const gridColCount = {
  [Breakpoints.mobile]: 1,
  [Breakpoints.tablet]: 12,
  [Breakpoints.desktop]: 12,
};

type GridProps = {
  children?: ReactNode;
};

const Grid = ({ children }: GridProps) => {
  return (
    <>
      <GridWrapper>{children}</GridWrapper>
    </>
  );
};

export default Grid;

export const GridWrapper = styled.div`
  display: grid;
  margin: auto;
  width: calc(100vw - ${pxToRem(24 * 2)});
  grid-template-columns: repeat(${gridColCount.mobile}, 1fr);

  ${media.tablet} {
    width: calc(100vw - ${pxToRem(40 * 2)});
    grid-template-columns: repeat(${gridColCount.tablet}, ${pxToRem(48)});
    justify-content: space-between;
  }
  ${media.desktop} {
    width: calc(100vw - ${pxToRem(164 * 2)});
    grid-template-columns: repeat(${gridColCount.desktop}, ${pxToRem(48)});
  }
`;
