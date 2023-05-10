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
import PageTransition from "../components/PageTransition/PageTransition";

type IndexPageProps = {};
type IndexPageRef = React.ForwardedRef<HTMLDivElement>;

const Page = (
  { page }: InferGetStaticPropsType<typeof getStaticProps>,
  ref: IndexPageRef
) => {
  // const Page = (({ page }, ref): InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!page || !page.data || !page.data.slices) {
    return <></>;
  }

  return (
    <PageTransition ref={ref}>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ align: prepareAlign(page.data.align) }}
      />
    </PageTransition>
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
      // revalidate: 60,
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
    fallback: false,
  };
};
