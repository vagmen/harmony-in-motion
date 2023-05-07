import { PrismicNextImage } from "@prismicio/next";
import useWindowSize from "../../hooks/useWindowSize";
import styles from "./index.module.css";
import { ImageFieldImage } from "@prismicio/types";

interface IAvatar {
  image?: ImageFieldImage;
}

export const Avatar = ({ image }: IAvatar) => {
  const { width } = useWindowSize();

  if (!image) {
    return <span>Нет картинки</span>;
  }

  return <PrismicNextImage field={image} className={styles.image} alt={""} />;
};
