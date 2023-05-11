import { SliceComponentProps } from "@prismicio/react";
import { prepareSliceContainerWidth } from "../../components/SliceContainer/SliceContainer";
import { HeroVerticalSlice } from "../../prismicio-types";
import { usePrismicContext } from "../../utils";
import { HeroVertical } from "../../components/HeroVertical/HeroVertical";
import { prepareButtons } from "../../components/Buttons/Buttons";
import { FULL_WIDTH_WITH_MARGIN } from "../../constants";

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
      width={prepareSliceContainerWidth(
        slice.primary.width || FULL_WIDTH_WITH_MARGIN
      )}
      align={align}
      actions={prepareButtons(slice.items)}
      image={slice.primary.image}
      isImageBottom={slice.primary.isimagebottom}
    />
  );
};

export default HeroImageVertical;
