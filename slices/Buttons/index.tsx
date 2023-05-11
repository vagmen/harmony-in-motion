import { SliceComponentProps } from "@prismicio/react";
import {
  SliceContainer,
  prepareSliceContainerWidth,
} from "../../components/SliceContainer/SliceContainer";
import { Buttons, prepareButtons } from "../../components/Buttons/Buttons";
import { prepareAlign, usePrismicContext } from "../../utils";
import { ButtonsV2Slice } from "../../prismicio-types";
import { FULL_WIDTH_WITH_MARGIN } from "../../constants";

/**
 * Props for `ButtonsV2`.
 */
export type ButtonsV2Props = SliceComponentProps<ButtonsV2Slice>;

/**
 * Component for "ButtonsV2" Slices.
 */
const ButtonsV2 = ({ slice, context }: ButtonsV2Props): JSX.Element => {
  const { width } = slice.primary;
  const { align } = usePrismicContext(context);

  return (
    <SliceContainer
      width={prepareSliceContainerWidth(width || FULL_WIDTH_WITH_MARGIN)}
      align={align}
    >
      <Buttons
        actions={prepareButtons(slice.items)}
        align={prepareAlign(slice.primary.align)}
      />
    </SliceContainer>
  );
};

export default ButtonsV2;
