import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import { Layout } from "../components/Layout/Layout";
import { linkResolver } from "../linkResolver";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          {/* <a {...props}> */}
          {children}
          {/* </a> */}
        </Link>
      )}
      linkResolver={linkResolver}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Layout menu={pageProps.menu} config={pageProps.config}>
          <Component {...pageProps} />
        </Layout>
      </PrismicPreview>
    </PrismicProvider>
  );
}
