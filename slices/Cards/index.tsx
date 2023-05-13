import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { CardsSlice } from "../../prismicio-types";
import { Grid, prepareGridSize } from "../../components/Grid/Grid";
import {
  StandardCard,
  getPreviewData,
} from "../../components/Card/StandardCard";
import { asLink } from "@prismicio/helpers";
import { linkResolver } from "../../linkResolver";

const Cards = ({ slice }: SliceComponentProps<CardsSlice>) => (
  <SliceContainer width="fullWidthWithMargin">
    <Grid
      items={slice.items}
      buildItem={(item) => {
        const { date, description, image, title } = getPreviewData(item);
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
