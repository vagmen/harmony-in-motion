import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { CardsSlice, PageDocument } from "../../prismicio-types";
import { Grid, prepareGridSize } from "../../components/Grid/Grid";
import { StandardCard } from "../../components/Card/StandardCard";
import { asLink, isFilled } from "@prismicio/helpers";
import { linkResolver } from "../../linkResolver";

// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };

const Cards = ({ slice }: SliceComponentProps<CardsSlice>) => (
  <SliceContainer>
    <Grid
      items={slice.items}
      buildItem={(item) => {
        let date: string | null = null;
        if (
          isFilled.contentRelationship<"page", string, PageDocument["data"]>(
            item.link
          )
        ) {
          const wer = item.link as any;
          date = new Date(wer.first_publication_date).toLocaleDateString();
        }
        return (
          <StandardCard
            title={item.title}
            description={item.description}
            image={item.image}
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
