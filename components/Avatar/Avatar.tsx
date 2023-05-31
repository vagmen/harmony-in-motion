import { PrismicNextImage } from "@prismicio/next";
import styles from "./index.module.css";
import { ImageFieldImage } from "@prismicio/client";

interface IAvatar {
  image?: ImageFieldImage;
}

export const Avatar = ({ image }: IAvatar) => {
  // const { width } = useWindowSize();

  if (!image) {
    return <span>Нет картинки</span>;
  }

  return <PrismicNextImage field={image} className={styles.image} alt={""} />;
};
