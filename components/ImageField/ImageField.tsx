import styles from "./index.module.css";
import { ImageFieldImage, RTImageNode } from "@prismicio/types";
import { PrismicNextImage } from "@prismicio/next";

interface IImageField {
  field?: ImageFieldImage | null | undefined;
  node: RTImageNode;
}

export const ImageField = ({ field, node }: IImageField) => (
  <PrismicNextImage field={{ ...node }} className={styles.imageField} />
);
