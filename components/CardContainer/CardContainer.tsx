import { LinkField, SelectField } from "@prismicio/types";
import styles from "./index.module.css";
import classNames from "classnames";
import Link from "next/link";

export type CardVariant = "elevated" | "filled" | "outlined";

interface ICard {
  variant?: CardVariant;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  padding?: "noPadding" | "s" | "m" | "l";
  link?: string;
}

export const CardContainer = ({
  variant = "elevated",
  className,
  children,
  padding = "m",
  link,
}: ICard) => {
  return (
    <Link href={link || ""}>
      <div
        className={classNames(
          styles.container,
          {
            [styles.containerElevated]: variant === "elevated",
            [styles.containerFilled]: variant === "filled",
            [styles.containerOutlined]: variant === "outlined",
            [styles.containerNoPadding]: padding === "noPadding",
            [styles.containerClickable]: link?.length,
          },
          className
        )}
      >
        {children}
      </div>
    </Link>
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
