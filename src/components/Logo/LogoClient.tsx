import { FC } from "react";
import { ClientLogo } from "../Icons/Icons";

const LogoClient: FC<{ WidthClientLogo?: number }> = ({ WidthClientLogo }) => {
  return (
    <>
      <a href="#">
        <ClientLogo Width={WidthClientLogo} />
      </a>
    </>
  );
};

export default LogoClient;
