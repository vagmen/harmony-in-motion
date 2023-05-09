import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { ImageWithCaptionSlice } from "../../prismicio-types";
import { FULL_WIDTH, TEXT_WIDTH } from "../../constants";
import { usePrismicContext } from "../../utils";

const Image = ({
  slice,
  context,
}: SliceComponentProps<ImageWithCaptionSlice>) => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer
      isMaxWidthLimited={slice.primary.width === TEXT_WIDTH}
      noPadding={slice.primary.width === FULL_WIDTH}
      align={align}
    >
      <div className={styles.imageWrapper}>
        <PrismicNextImage
          field={slice.primary.image}
          className={styles.image}
          alt=""
        />
        <span className={styles.caption}>{slice.primary.caption}</span>
      </div>
    </SliceContainer>
  );
};

export default Image;
