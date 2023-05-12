import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { CardsSlice, PageDocument } from "../../prismicio-types";
import { Grid, prepareGridSize } from "../../components/Grid/Grid";
import { StandardCard } from "../../components/Card/StandardCard";
import { asLink, isFilled } from "@prismicio/helpers";
import { linkResolver } from "../../linkResolver";
import { ImageFieldImage } from "@prismicio/types";

// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

const Cards = ({ slice }: SliceComponentProps<CardsSlice>) => (
  <SliceContainer width="fullWidthWithMargin">
    <Grid
      items={slice.items}
      buildItem={(item) => {
        let date: string | null = null;
        let title: string | null = null;
        let description: string | null = null;
        let image: ImageFieldImage | null | undefined = null;

        if (
          isFilled.contentRelationship<"page", string, PageDocument["data"]>(
            item.link
          )
        ) {
          const wer = item.link as any;
          date = new Date(wer.first_publication_date).toLocaleDateString();
          title = item.link.data?.metatitle || null;
          description = item.link.data?.metadescription || null;
          image = item.link.data?.metaimage;
        }

        return (
          <StandardCard
            title={title || ""}
            description={description}
            image={image}
            link={asLink(item.link, linkResolver) || ""}
            extra={date || ""}
          />
        );
      }}
      size={prepareGridSize(slice.primary.size) || "m"}
    />
  </SliceContainer>
);

export default Cards;
