import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Layout } from "../components/Layout/Layout";
import { linkResolver } from "../linkResolver";
import { ThemeProvider } from "next-themes";
import {
  ConfigDocumentData,
  FooterDocumentData,
  Simplify,
} from "../prismicio-types";
import { IMenu } from "../interfaces";
import { Button } from "../components/Button/Button";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Image } from "../components/Image/Image";

interface CustomPageProps {
  config: Simplify<ConfigDocumentData>;
  menu: IMenu;
  footer: Simplify<FooterDocumentData>;
}

export default function App({
  Component,
  pageProps,
}: AppProps<CustomPageProps>) {
  const router = useRouter();
  const pageKey = router.asPath;

  const onExitComplete = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <ThemeProvider>
      <AnimatePresence
        // onExitComplete={onExitComplete}
        initial={false}
        // mode="wait"
        mode="popLayout"
      >
        {/* mode="wait" initial={false} */}
        {/* > */}
        <PrismicProvider
          internalLinkComponent={({ href, children }) => (
            <Button variant="underlined" link={href}>
              {children}
            </Button>
          )}
          linkResolver={linkResolver}
          externalLinkComponent={({ href, children, target }) => (
            <Button
              variant="underlined"
              link={href}
              newTab={target === "_blank"}
            >
              {children}
            </Button>
          )}
          richTextComponents={{
            image: ({ children, node, type }) => (
              <Image field={node} alt={node.alt || ""} withPadding />
            ),
          }}
        >
          <PrismicPreview repositoryName={repositoryName}>
            <Layout
              menu={pageProps.menu}
              config={pageProps.config}
              footer={pageProps.footer}
            >
              <Component key={pageKey} {...pageProps} />
            </Layout>
          </PrismicPreview>
        </PrismicProvider>
      </AnimatePresence>
    </ThemeProvider>
  );
}
