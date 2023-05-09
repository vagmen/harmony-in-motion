import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import styles from "./styles.module.css";
import { FULL_WIDTH, TEXT_WIDTH } from "../../constants";
import { usePrismicContext } from "../../utils";

/**
 * Props for `Divider`.
 */
export type DividerProps = SliceComponentProps<Content.DividerSlice>;

/**
 * Component for "Divider" Slices.
 */
const Divider = ({ slice, context }: DividerProps): JSX.Element => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer
      isMaxWidthLimited={slice.primary.width === TEXT_WIDTH}
      noPadding={slice.primary.width === FULL_WIDTH}
      align={align}
    >
      <div className={styles.divider}></div>
    </SliceContainer>
  );
};

export default Divider;
