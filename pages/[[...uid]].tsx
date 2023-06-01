import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { components } from "../slices";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import sm from "../slicemachine.config.json";
import {
  getPathFromParams,
  getPathsFromPages,
  prepareAlign,
  prepareMenuData,
} from "../utils";
import { createClient } from "../prismicio";
import Head from "next/head";
import { useRouter } from "next/router";

const ROOT_URL = "https://harmony-in-motion.ru";

const Page = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (!page || !page.data || !page.data.slices) {
    return <></>;
  }

  const metaTitle = page.data.title || "Гармония в движении";
  const metaDescription =
    page.data.description ||
    "Сайт, который поможет вам обрести гармонию в движении и заботиться о своем теле. Здесь вы найдете множество упражнений и советов, чтобы улучшить свою физическую форму и настроение. Наша миссия - помочь вам достигнуть гармонии тела и духа";
  const canonicalUrl = ROOT_URL + router.asPath;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:image" content={page.data?.image?.url || ""} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ align: prepareAlign(page.data.align) }}
      />
    </>
  );
};

export default Page;

export const getStaticProps: GetStaticProps = async ({
  params,
  previewData,
}) => {
  try {
    const client = createClient({ previewData });
    const path = getPathFromParams(params);

    const [pages, menu, config, footer] = await Promise.all([
      client.getAllByType("page", {
        predicates: [prismic.predicate.at("my.page.path", path)],
        fetchLinks: [
          "author.name",
          "author.position",
          "author.photo",
          "page.path",
          "page.slices",
        ],
      }),
      client.getSingle("menu", {
        fetchLinks: ["page.path"],
      }),
      client.getSingle("config"),
      client.getSingle("footer"),
    ]);

    const currentPage = pages[0];

    return {
      props: {
        page: currentPage,
        menu: prepareMenuData(menu),
        config: config.data,
        footer: footer.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      // props: {
      //   notFound: true,
      // },
      notFound: true,

      // revalidate: 60,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = prismic.createClient(sm.apiEndpoint);

  const pages = await client.getAllByType("page");
  const paths = getPathsFromPages(pages);
  return {
    paths: paths,
    // fallback: false,
    fallback: "blocking",
  };
};
