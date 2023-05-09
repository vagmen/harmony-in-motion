import { ImageFieldImage, KeyTextField, SelectField } from "@prismicio/types";
import styles from "./index.module.css";
import { CardContainer } from "../CardContainer/CardContainer";
import { PrismicNextImage } from "@prismicio/next";

export type CardVariant = "elevated" | "filled" | "outlined";

interface ICard {
  title: KeyTextField;
  description?: KeyTextField | null;
  image?: ImageFieldImage | null;
  link?: string;
  extra?: string;
}

export const StandardCard = ({
  title,
  description,
  image,
  link,
  extra,
}: ICard) => {
  return (
    <CardContainer padding="noPadding" variant="outlined" link={link}>
      <div className={styles.imageWrapper}>
        <PrismicNextImage field={image} className={styles.image} />
      </div>
      <div className={styles.content}>
        <code>{extra}</code>
        <h4>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>
    </CardContainer>
  );
};

export const prepareCardVariant = (
  rawVariant: SelectField<"Обычная" | "Заполненная" | "Контурная">
): CardVariant | null => {
  switch (rawVariant) {
    case "Обычная":
      return "elevated";
      break;
    case "Заполненная":
      return "filled";
      break;
    case "Контурная":
      return "outlined";
      break;
    default:
      return null;
      break;
  }
};
