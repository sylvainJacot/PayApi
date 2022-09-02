import Layout from "../src/components/Layout";
import Button from "../src/components/Buttons/Button";
import {
  ButtonThemeSecondaryVariant,
  ButtonVariant,
} from "../src/components/Buttons/Buttons.type";
import styled from "styled-components";
import { headingsVariant } from "../src/components/Typography/Texts.type";
import { colorRoles } from "../src/styles/colors/colors";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Button label={"Hello"} disabled />
    <Button
      label={"Hello"}
      variant={ButtonVariant.Secondary}
      theme={ButtonThemeSecondaryVariant.Light}
    />
    <Button
      label={"Hello"}
      variant={ButtonVariant.Secondary}
      theme={ButtonThemeSecondaryVariant.Dark}
    />
    <TitleWrapper>Quick waltz</TitleWrapper>
  </Layout>
);

export default IndexPage;

export const TitleWrapper = styled.h1`
  ${headingsVariant.H3Small}
  color: ${colorRoles.Primary.DarkPink};
`;
