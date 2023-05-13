import { SliceComponentProps } from "@prismicio/react";
import {
  SliceContainer,
  prepareSliceContainerWidth,
} from "../../components/SliceContainer/SliceContainer";
import { ImageWithCaptionSlice } from "../../prismicio-types";
import { usePrismicContext } from "../../utils";
import { Image as ImageComponent } from "../../components/Image/Image";

const Image = ({
  slice,
  context,
}: SliceComponentProps<ImageWithCaptionSlice>) => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer
      width={prepareSliceContainerWidth(
        slice.primary.width || "Под размер текста"
      )}
      align={align}
    >
      <ImageComponent field={slice.primary.image} height="auto" alt="" />
    </SliceContainer>
  );
};

export default Image;
