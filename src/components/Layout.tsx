import React, { ReactNode } from "react";
import Head from "next/head";
import GlobalStyle from "../styles/globalStyle/globalStyle";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Public+Sans:wght@700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Public+Sans:wght@700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <GlobalStyle />

    {children}
  </div>
);

export default Layout;
