import styles from "./index.module.css";
import { default as NextLink } from "next/link";
import { ButtonVariant } from "../Button/Button";
import classNames from "classnames";
import { KeyTextField } from "@prismicio/types";

export type LinkVariant = ButtonVariant | "underscored";

interface ILink {
  href: string;
  children: string | KeyTextField;
  variant?: LinkVariant;
}

export const Link = ({ href, children, variant = "underscored" }: ILink) => (
  <div
    className={classNames(styles.container, {
      [styles.containerFilled]: variant === "filled",
      [styles.containerOutlined]: variant === "outlined",
      [styles.containerText]: variant === "text",
      [styles.containerUnderscored]: variant === "underscored",
    })}
  >
    <NextLink href={href || "/"} className={styles.aWrapper}>
      <span
        className={classNames(styles.a, {
          [styles.filled]: variant === "filled",
          [styles.outlined]: variant === "outlined",
          [styles.text]: variant === "text",
          [styles.underscored]: variant === "underscored",
        })}
      >
        {children}
      </span>
    </NextLink>
    <div
      className={classNames(styles.stateLayer, {
        [styles.stateLayerFilled]: variant === "filled",
        [styles.stateLayerOutlined]: variant === "outlined",
        [styles.stateLayerText]: variant === "text",
        [styles.stateLayerUnderscored]: variant === "underscored",
      })}
    ></div>
  </div>
);
