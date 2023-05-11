import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { usePrismicContext } from "../../utils";
import { TextSlice } from "../../prismicio-types";

const Text = ({ slice, context }: SliceComponentProps<TextSlice>) => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer align={align} width="textWidth">
      <PrismicRichText field={slice.primary.content} />
    </SliceContainer>
  );
};

export default Text;
