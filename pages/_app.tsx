import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Layout } from "../components/Layout/Layout";
import { linkResolver } from "../linkResolver";
import { ThemeProvider } from "next-themes";
import { ConfigDocumentData, Simplify } from "../prismicio-types";
import { IMenu } from "../interfaces";
import { Button } from "../components/Button/Button";

interface CustomPageProps {
  config: Simplify<ConfigDocumentData>;
  menu: IMenu;
}

export default function App({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  return (
    <ThemeProvider>
      <PrismicProvider
        internalLinkComponent={({ href, children }) => (
          <Button variant="underlined" link={href}>
            {children}
          </Button>
        )}
        linkResolver={linkResolver}
        externalLinkComponent={({ href, children, target }) => (
          <Button variant="underlined" link={href} newTab={target === "_blank"}>
            {children}
          </Button>
        )}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Layout menu={pageProps.menu} config={pageProps.config}>
            <Component {...pageProps} />
          </Layout>
        </PrismicPreview>
      </PrismicProvider>
    </ThemeProvider>
  );
}
