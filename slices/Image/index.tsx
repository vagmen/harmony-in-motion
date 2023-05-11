import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import {
  SliceContainer,
  prepareSliceContainerWidth,
} from "../../components/SliceContainer/SliceContainer";
import { ImageWithCaptionSlice } from "../../prismicio-types";
import { usePrismicContext } from "../../utils";

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
