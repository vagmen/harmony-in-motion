import {
  EmptyLinkField,
  FilledContentRelationshipField,
  ImageFieldImage,
  KeyTextField,
  SelectField,
  asText,
  isFilled,
} from "@prismicio/client";
import styles from "./index.module.css";
import { CardContainer } from "../CardContainer/CardContainer";
import { PrismicNextImage } from "@prismicio/next";
import {
  PageDocument,
  PageDocumentData,
  Simplify,
} from "../../prismicio-types";
import { SIZES } from "../../constants";

export type CardVariant = "elevated" | "filled" | "outlined";

interface ICard {
  title: KeyTextField | string;
  description?: KeyTextField | string | null;
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
        <PrismicNextImage
          field={image}
          className={styles.image}
          alt=""
          sizes={SIZES}
        />
      </div>
      <div className={styles.content}>
        <code>{extra}</code>
        <h3>{title}</h3>
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

export const getPreviewData = (item: {
  link:
    | EmptyLinkField<"Document">
    | FilledContentRelationshipField<"page", string, Simplify<PageDocumentData>>
    | null
    | undefined;
}) => {
  let date: string | null = null;
  let title: string | null = null;
  let description: string | null = null;
  let image: ImageFieldImage | null | undefined = null;

  if (
    isFilled.contentRelationship<"page", string, PageDocument["data"]>(
      item.link
    )
  ) {
    const wer = item.link as any;
    date = new Date(wer.first_publication_date).toLocaleDateString();

    const slice = item.link.data?.slices[0];
    if (slice) {
      const primary = slice.primary as any;
      if (primary) {
        title = asText(primary.title);
        description = asText(primary.description);
        image = primary.image;
      }
    }
  }
  return { date, title, description, image };
};

export const getPreviewData1 = (item: PageDocument<string>) => {
  let title: string | null = null;
  let description: string | null = null;
  let image: ImageFieldImage | null | undefined = null;
  let date: string | null = null;
  let link = item.data.path;

  date = new Date(item.first_publication_date).toLocaleDateString();

  const slice = item.data.slices[0];
  if (slice) {
    const primary = slice.primary as any;
    if (primary) {
      title = asText(primary.title);
      description = asText(primary.description);
      image = primary.image;
    }
  }
  return { date, title, description, image, link };
};
