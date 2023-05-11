import {
  SliceContainer,
  prepareSliceContainerWidth,
} from "../../components/SliceContainer/SliceContainer";
import { Video as VideoComponent } from "../../components/Video/Video";
import { VideoSlice } from "../../prismicio-types";
import { SliceComponentProps } from "@prismicio/react";
import {
  FULL_WIDTH,
  FULL_WIDTH_WITH_MARGIN,
  TEXT_WIDTH,
} from "../../constants";
import { usePrismicContext } from "../../utils";

const Video = ({ slice, context }: SliceComponentProps<VideoSlice>) => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer
      align={align}
      width={prepareSliceContainerWidth(
        slice.primary.width || FULL_WIDTH_WITH_MARGIN
      )}
    >
      <VideoComponent
        url={slice.primary.url as string}
        borderRadius={
          slice.primary.width === FULL_WIDTH ? "noBorderRadius" : "m"
        }
      />
    </SliceContainer>
  );
};

export default Video;
