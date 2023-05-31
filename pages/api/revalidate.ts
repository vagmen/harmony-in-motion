import * as prismic from "@prismicio/client";
import sm from "./../../slicemachine.config.json";
import { asLink } from "@prismicio/client";
import { linkResolver } from "../../linkResolver";
/**
 * This API endpoint will be called by a Prismic webhook. The webhook
 * will send an object containing a list of added, updated, or deleted
 * documents. Pages for those documents will be rebuilt.
 *
 * The Prismic webhook must send the correct secret.
 */
export default async function handler(
  req: {
    body: {
      type: string;
      documents: string | any[];
      secret: string | undefined;
    };
  },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): any; new (): any };
      send: { (arg0: string): any; new (): any };
    };
    revalidate: (arg0: string | null) => any;
    json: (arg0: { revalidated: boolean }) => any;
  }
) {
  if (req.body.type === "api-update" && req.body.documents.length > 0) {
    // if (req.body.type === "api-update" && req.body.documents.length > 0) {
    // Check for secret to confirm this is a valid request
    if (req.body.secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const client = prismic.createClient(sm.apiEndpoint);
    // const pages = await client.getAllByType("page");

    const documents = await client.getAllByIDs(req.body.documents as string[]);
    const urls = documents.map((doc) => asLink(doc, { linkResolver }));

    try {
      await Promise.all(urls.map(async (url) => await res.revalidate(url)));

      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue to show
      // the last successfully generated page
      return res.status(500).send(
        "Error revalidating"
        //  urls.length" +
        //   urls.length +
        //   " " +
        //   urls[0] +
        //   " " +
        //   err
      );
    }
  }

  if (req.body.type === "test-trigger") {
    return res.status(200).send("Test test");
  }

  // If the request's body is unknown, tell the requester
  return res.status(400).json({ message: "Invalid body" });
}
