import {
  BodyCopystyle,
  Heading1LargeStyle,
  Heading1SmallStyle,
  Heading2Style,
  Heading3BigStyle,
  Heading3SmallStyle,
  Heading4Style,
} from "./Texts.styled";

export enum Headings {
  H1Large = "H1Large",
  H1Small = "H1Small",
  H2 = "H2",
  H3Big = "H3Big",
  H3Small = "H3Small",
  H4 = "H4",
}

export enum Paragraphs {
  BodyCopy = "BodyCopy",
}

export const headingsVariant = {
  [Headings.H1Large]: Heading1LargeStyle,
  [Headings.H1Small]: Heading1SmallStyle,
  [Headings.H2]: Heading2Style,
  [Headings.H3Big]: Heading3BigStyle,
  [Headings.H3Small]: Heading3SmallStyle,
  [Headings.H4]: Heading4Style,
};

export const paragraphs = {
  [Paragraphs.BodyCopy]: BodyCopystyle,
};

export type TextsStyledType = {
  headingStyle?: Headings;
  paragraphStyle?: Paragraphs;
};
