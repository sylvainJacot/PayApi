import Layout from "../src/components/Layout";
import Button from "../src/components/Buttons/Button";
import {
  ButtonThemeSecondaryVariant,
  ButtonVariant,
} from "../src/components/Buttons/Buttons.type";

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
  </Layout>
);

export default IndexPage;
