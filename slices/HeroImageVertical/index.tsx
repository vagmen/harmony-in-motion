import { SliceComponentProps } from "@prismicio/react";
import { HeroVerticalSlice } from "../../prismicio-types";
import { prepareAlign, usePrismicContext } from "../../utils";
import {
  HeroVertical,
  prepareImageHeight,
  prepareImageWidth,
} from "../../components/HeroVertical/HeroVertical";
import { prepareButtons } from "../../components/Buttons/Buttons";
import { TEXT_WIDTH } from "../../constants";

/**
 * Props for `HeroVertical`.
 */
export type HeroVerticalProps = SliceComponentProps<HeroVerticalSlice>;

/**
 * Component for "HeroVertical" Slices.
 */
const HeroImageVertical = ({
  slice,
  context,
}: HeroVerticalProps): JSX.Element => {
  const { align } = usePrismicContext(context);
  return (
    <HeroVertical
      title={slice.primary.title}
      description={slice.primary.description}
      alignContainer={align}
      alignContent={prepareAlign(slice.primary.align)}
      actions={prepareButtons(slice.items)}
      image={slice.primary.image}
      imageWidth={prepareImageWidth(slice.primary.width || TEXT_WIDTH)}
      imageHeight={prepareImageHeight(slice.primary.imageheight || "Средняя")}
      isImageBottom={slice.primary.isimagebottom}
    />
  );
};

export default HeroImageVertical;
