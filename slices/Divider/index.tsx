import { SliceComponentProps } from "@prismicio/react";
import {
  SliceContainer,
  prepareSliceContainerWidth,
} from "../../components/SliceContainer/SliceContainer";
import { Divider as DividerComponent } from "../../components/Divider/Divider";
import { usePrismicContext } from "../../utils";
import { FULL_WIDTH_WITH_MARGIN } from "../../constants";
import { DividerSlice } from "../../prismicio-types";

/**
 * Props for `Divider`.
 */
export type DividerProps = SliceComponentProps<DividerSlice>;

/**
 * Component for "Divider" Slices.
 */
const Divider = ({ slice, context }: DividerProps): JSX.Element => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer
      width={prepareSliceContainerWidth(
        slice.primary.width || FULL_WIDTH_WITH_MARGIN
      )}
      align={align}
    >
      <DividerComponent />
    </SliceContainer>
  );
};

export default Divider;
