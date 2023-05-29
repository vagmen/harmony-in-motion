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
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";

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

  // const onExitComplete = () => {
  //   window.scrollTo({ top: 0 });
  // };

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      // Исключаем заходы через http://localhost
      if (url.includes("localhost")) return;
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
            {/* <!-- Google tag (gtag.js) --> */}
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
              strategy="afterInteractive"
            ></Script>
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_TRACKING_ID}',{page_path: window.location.pathname});
             `}
            </Script>
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
