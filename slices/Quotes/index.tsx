import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Grid, prepareGridSize } from "../../components/Grid/Grid";
import { Quote } from "../../components/Quote/Quote";
import { QuotesSlice } from "../../prismicio-types";
import { getAuthorComponent } from "../../components/Author/Author";
import { prepareCardVariant } from "../../components/CardContainer/CardContainer";

/**
 * Props for `Quotes`.
 */
export type QuotesProps = SliceComponentProps<QuotesSlice>;

/**
 * Component for "Quotes" Slices.
 */
const Quotes = ({ slice }: QuotesProps): JSX.Element => {
  const cardVariand = prepareCardVariant(slice.primary.variant);
  return (
    <SliceContainer width="fullWidthWithMargin">
      <Grid
        items={slice.items}
        buildItem={(item) => (
          <Quote text={item.text} variant={cardVariand || "elevated"}>
            {getAuthorComponent(item.author)}
          </Quote>
        )}
        size={"m"}
        // size={prepareGridSize(slice.primary.size) || "m"}
      />
    </SliceContainer>
  );
};

export default Quotes;
