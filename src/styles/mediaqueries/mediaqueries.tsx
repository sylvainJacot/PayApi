export enum Breakpoints {
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop",
}

type MediaBreakpoints = {
  [key in Breakpoints]: number;
};

export const mediaBreakpoints: MediaBreakpoints = {
  [Breakpoints.mobile]: 375,
  [Breakpoints.tablet]: 768,
  [Breakpoints.desktop]: 1440,
};

export const media = {
  mobile: `@media (min-width: ${mediaBreakpoints.mobile}px)`,
  tablet: `@media (min-width: ${mediaBreakpoints.tablet}px)`,
  desktop: `@media (min-width: ${mediaBreakpoints.desktop}px)`,
};

export default media;
