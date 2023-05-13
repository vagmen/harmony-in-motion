import { useEffect, useState } from "react";
import { StandardCard, getPreviewData1 } from "../Card/StandardCard";
import { Grid } from "../Grid/Grid";
import * as prismic from "@prismicio/client";
import sm from "../../slicemachine.config.json";
import { PageDocument } from "../../prismicio-types";

export const LatestPostsGrid = () => {
  const [posts, setPosts] = useState<PageDocument<string>[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const client = prismic.createClient(sm.apiEndpoint);
        const pages = await client.getAllByType("page", {
          predicates: [
            prismic.predicate.fulltext("my.page.path", "/blog/"),
            prismic.predicate.not("my.page.path", "/blog"),
          ],
        });
        setPosts(pages);
      } catch (error) {
        console.error("Ошибка при получении статей:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Grid
      items={posts.map((item) => item)}
      buildItem={(item) => {
        const { date, description, image, title, link } = getPreviewData1(item);
        return (
          <StandardCard
            title={title || ""}
            description={description}
            image={image}
            link={link || ""}
            extra={date || ""}
          />
        );
      }}
      size={"m"}
    />
  );
};
