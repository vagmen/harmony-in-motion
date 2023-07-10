import { setPreviewData, redirectToPreviewURL } from "@prismicio/next";
import { createClient, createClientNew } from "../../prismicio";

const index = async (req, res) => {
  const client = createClientNew({ req });

  await setPreviewData({ req, res });

  await redirectToPreviewURL({ req, res, client });
};

export default index;
