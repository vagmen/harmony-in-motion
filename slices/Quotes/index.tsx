import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Grid, prepareGridSize } from "../../components/Grid/Grid";
import { Quote } from "../../components/Quote/Quote";
import { isFilled } from "@prismicio/helpers";
import { AuthorDocument, QuotesSlice } from "../../prismicio-types";
import { Author } from "../../components/Author/Author";
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
    <SliceContainer>
      <Grid
        items={slice.items}
        buildItem={(item) => {
          if (
            isFilled.contentRelationship<
              "author",
              string,
              AuthorDocument["data"]
            >(item.author)
          ) {
            return (
              <Quote text={item.text} variant={cardVariand || "elevated"}>
                <Author
                  name={item.author.data?.name?.toString()}
                  position={item.author.data?.position?.toString()}
                  image={item.author.data?.photo}
                />
              </Quote>
            );
          } else {
            return <Quote text={item.text} />;
          }
        }}
        size={prepareGridSize(slice.primary.size) || "m"}
      />
    </SliceContainer>
  );
};

export default Quotes;
