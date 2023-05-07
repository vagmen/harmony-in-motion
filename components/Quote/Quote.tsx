import styles from "./index.module.css";
import { RichTextField } from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import { Card, CardVariant } from "../Card/Card";

interface IQuote {
  text: RichTextField;
  onClick?: () => void;
  variant?: CardVariant;
  children?: React.ReactNode;
}

export const Quote = ({ text, variant, children }: IQuote) => {
  return (
    <Card variant={variant} className={styles.container}>
      <PrismicRichText
        field={text}
        components={{
          paragraph: ({ children }) => <p className={styles.quo}>{children}</p>,
        }}
      />
      {children}
    </Card>
  );
};
