import { SelectField } from "@prismicio/types";
import styles from "./index.module.css";
import classNames from "classnames";

export type CardVariant = "elevated" | "filled" | "outlined";

interface ICard {
  variant?: CardVariant;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export const Card = ({ variant, className, children }: ICard) => {
  return (
    <div
      className={classNames(
        styles.container,
        {
          [styles.containerFilled]: variant === "filled",
          [styles.containerOutlined]: variant === "outlined",
        },
        className
      )}
    >
      {children}
    </div>
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
