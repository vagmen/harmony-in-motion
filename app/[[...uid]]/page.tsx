import { Metadata } from "next";
import { createClientNew } from "../../prismicio";
import {
  getPathFromParams,
  getPathsFromPages,
  getStaticParamsFromPages,
  prepareAlign,
} from "../../utils";
import { filter } from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import { components } from "../../slices";

type Params = { uid: string };

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const client = createClientNew();
  const pages = await client.getAllByType("page");
  const paths = getStaticParamsFromPages(pages);
  return paths;

  // https://nextjs.org/docs/app/api-reference/functions/generate-static-params#catch-all-dynamic-segment

  // return posts.map((post) => ({
  //   slug: post.slug,
  // }));
}

const fetchPageData = async (params: Params) => {
  const client = createClientNew();
  const path = getPathFromParams(params);
  const pages = await client
    .getAllByType("page", {
      predicates: [filter.at("my.page.path", path)],
      fetchLinks: [
        "author.name",
        "author.position",
        "author.photo",
        "page.path",
        "page.slices",
      ],
    })
    .catch(notFound);

  const page = pages[0];
  return page;
};

{
  /* <Head>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="robots" content="index,follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:image" content={page.data?.image?.url || ""} />
          <meta property="og:description" content={metaDescription} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={canonicalUrl} />
          <link rel="canonical" href={canonicalUrl} />
        </Head> */
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  // const client = createClientNew();
  // const settings = await client.getSingle("settings");
  const page = await fetchPageData(params);
  const metaTitle = page.data.title || "Гармония в движении";
  const metaDescription =
    page.data.description ||
    "Сайт, который поможет вам обрести гармонию в движении и заботиться о своем теле. Здесь вы найдете множество упражнений и советов, чтобы улучшить свою физическую форму и настроение. Наша миссия - помочь вам достигнуть гармонии тела и духа";
  //   const canonicalUrl = ROOT_URL + router.asPath;

  return {
    title: metaTitle,
    // title: `${page.data.title} — ${asText(settings.data.site_title)}`,
    description: metaDescription,
  };
}

interface IPage {
  params: Params;
}

export default async function Page({ params }: IPage) {
  const page = await fetchPageData(params);

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
      context={{ align: prepareAlign(page.data.align) }}
    />
  );
}
