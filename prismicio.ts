import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import sm from "./slicemachine.config.json";

/**
 * The project's Prismic repository name.
 *
 *  pages/slice-simulator
 */
// export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

// export function createClient({
//   previewData,
//   req,
//   ...config
// }: prismicNext.CreateClientConfig = {}) {
//   const client = prismic.createClient(sm.apiEndpoint, config);
//   prismicNext.enableAutoPreviews({ client, previewData, req });
//   return client;
// }

// export const repositoryNameNew = sm.repositoryName;

export const createClientNew = (
  config: prismicNext.CreateClientConfig = {}
) => {
  const client = prismic.createClient(sm.repositoryName, {
    // routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
