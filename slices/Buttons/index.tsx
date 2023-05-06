import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Buttons, prepareButtons } from "../../components/Buttons/Buttons";
import { prepareAlign, usePrismicContext } from "../../utils";
import { FULL_WIDTH, TEXT_WIDTH } from "../../constants";
import { ButtonsV2Slice } from "../../prismicio-types";

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
      isMaxWidthLimited={width === TEXT_WIDTH}
      noPadding={width === FULL_WIDTH}
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
