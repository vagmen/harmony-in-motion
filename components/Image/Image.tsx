import styles from "./index.module.css";
import { ImageFieldImage, RTImageNode } from "@prismicio/types";
import { PrismicNextImage } from "@prismicio/next";
import classNames from "classnames";

interface IField {
  field?: RTImageNode | ImageFieldImage | null | undefined;
  autoWidth?: boolean;
  height?: "s" | "m" | "l" | "auto";
  noBorderRadiusTop?: boolean;
  noBorderRadiusBottom?: boolean;
  alt: string;
  withPadding?: boolean;
}

export const Image = ({
  field,
  autoWidth,
  height,
  noBorderRadiusTop,
  noBorderRadiusBottom,
  withPadding,
}: IField) => (
  <div
    className={classNames(styles.imageWrapper, {
      [styles.withPadding]: withPadding,
    })}
  >
    <PrismicNextImage
      field={field}
      className={classNames(styles.image, {
        [styles.autoWidth]: autoWidth,
        [styles.sHeight]: height === "s",
        [styles.lHeight]: height === "l",
        [styles.autoHeight]: height === "auto",
        [styles.noBorderRadiusTop]: noBorderRadiusTop,
        [styles.noBorderRadiusBottom]: noBorderRadiusBottom,
      })}
    />
    <figcaption className={styles.figcaption}>{field?.alt}</figcaption>
  </div>
);
