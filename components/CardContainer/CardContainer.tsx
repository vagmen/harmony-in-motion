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
  onClick,
}: ICard) => {
  return link ? (
    <Link href={link || ""}>
      <CardContainerContent
        clickable={true}
        className={className}
        padding={padding}
        variant={variant}
      >
        {children}
      </CardContainerContent>
    </Link>
  ) : (
    <CardContainerContent
      className={className}
      onClick={onClick}
      padding={padding}
      variant={variant}
    >
      {children}
    </CardContainerContent>
  );
};

const CardContainerContent = ({
  clickable,
  className,
  children,
  padding,
  variant,
  onClick,
}: {
  clickable?: boolean;
  className?: string;
  children?: React.ReactNode;
  variant?: CardVariant;
  onClick?: () => void;
  padding?: "noPadding" | "s" | "m" | "l";
}) => (
  <div
    className={classNames(
      styles.container,
      {
        [styles.containerElevated]: variant === "elevated",
        [styles.containerFilled]: variant === "filled",
        [styles.containerOutlined]: variant === "outlined",
        [styles.containerNoPadding]: padding === "noPadding",
        [styles.containerClickable]: clickable || onClick,
      },
      className
    )}
    onClick={() => onClick && onClick()}
  >
    {children}
  </div>
);

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
