"use client";

import styles from "./index.module.css";
import { RichTextField } from "@prismicio/client";
import { CardContainer, CardVariant } from "../CardContainer/CardContainer";
import { PrismicRichText } from "../prismic/PrismicRichText/PrismicRichText";

interface IQuote {
  text: RichTextField;
  // onClick?: () => void;
  variant?: CardVariant;
  children?: React.ReactNode;
}

export const Quote = ({ text, variant, children }: IQuote) => {
  return (
    <CardContainer variant={variant} className={styles.container}>
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => <p className={styles.quo}>{children}</p>,
        }}
      />
      {children}
    </CardContainer>
  );
};
