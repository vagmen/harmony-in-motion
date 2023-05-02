import React from "react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Video as VideoComponent } from "../../components/Video/Video";
import { VideoSlice } from "../../prismicio-types";
import { SliceComponentProps } from "@prismicio/react";
import { ISliceContext } from "../../interfaces";
import { FULL_WIDTH, TEXT_WIDTH } from "../../constants";

const Video = ({
  slice,
  context,
}: SliceComponentProps<VideoSlice, ISliceContext>) => {
  return (
    <SliceContainer
      align={context.align}
      isMaxWidthLimited={slice.primary.width === TEXT_WIDTH}
      noPadding={slice.primary.width === FULL_WIDTH}
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
