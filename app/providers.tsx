"use client";

import { PrismicProvider } from "@prismicio/react";
import { ThemeProvider } from "next-themes";
import { Button } from "../components/Button/Button";
import { linkResolver } from "../linkResolver";
import { Image } from "../components/Image/Image";
import { PrismicPreview } from "@prismicio/next";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { repositoryName } from "../prismicio";

export function Providers({ children }: { children: any }) {
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
              if ('${process.env.NODE_ENV}' !== 'development') {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}',{page_path: window.location.pathname});
              }
           `}
          </Script>

          {children}
        </PrismicPreview>
      </PrismicProvider>
    </ThemeProvider>
  );
}
