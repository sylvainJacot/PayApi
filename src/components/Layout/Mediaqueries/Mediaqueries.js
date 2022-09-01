export const mediaBreakpoints = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  max: 1900,
};

export const media = {
  mobile: `@media (min-width: ${mediaBreakpoints.mobile}px)`,
  tablet: `@media (min-width: ${mediaBreakpoints.tablet}px)`,
  laptop: `@media (min-width: ${mediaBreakpoints.laptop}px)`,
  desktop: `@media (min-width: ${mediaBreakpoints.desktop}px)`,
  max: `@media (min-width: ${mediaBreakpoints.max})`,
};

export default media;
