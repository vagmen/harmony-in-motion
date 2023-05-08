import useWindowSize from "../../hooks/useWindowSize";
import styles from "./index.module.css";
import classNames from "classnames";
import { ImageFieldImage, RTImageNode } from "@prismicio/types";
import { Avatar } from "../Avatar/Avatar";
import { PrismicNextImage } from "@prismicio/next";

interface IImageField {
  node: RTImageNode;
}

export const ImageField = ({ node }: IImageField) => {
  const { width } = useWindowSize();

  return <PrismicNextImage field={{ ...node }} className={styles.imageField} />;
};
