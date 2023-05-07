import styles from "./index.module.css";
import classNames from "classnames";
import { KeyTextField } from "@prismicio/types";
import Link from "next/link";
import { ReactNode } from "react";

export type ButtonVariant =
  | "elevated"
  | "filled"
  | "filledTonal"
  | "outlined"
  | "text"
  | "underlined";

export type ButtonSize = "s" | "m" | "l" | "xl";

interface ICommonClickableComponent {
  children?: ReactNode | KeyTextField;
  variant?: ButtonVariant | null;
  size?: ButtonSize | null;
  defaultVariant?: ButtonVariant;
}

interface IButton extends ICommonClickableComponent {
  onClick: () => void;
}

interface ILink extends ICommonClickableComponent {
  link: string;
  newTab?: boolean;
}

const instanceOfButton = (object: any): object is IButton => !!object.onClick;

export const Button = (props: IButton | ILink) => {
  if (instanceOfButton(props)) {
    const { variant = "elevated", size = "m" } = props;
    return (
      <button
        className={classNames(styles.button, {
          [styles.buttonVariantElevated]: variant === "elevated",
          [styles.buttonVariantFilled]: variant === "filled",
          [styles.buttonVariantFilledTonal]: variant === "filledTonal",
          [styles.buttonVariantOutlined]: variant === "outlined",
          [styles.buttonVariantText]: variant === "text",
          [styles.buttonVariantUnderlined]: variant === "underlined",
          [styles.buttonSizeS]: size === "s",
          [styles.buttonSizeL]: size === "l",
        })}
      >
        <span></span>
        {props.children}
        <span></span>
      </button>
    );
  } else {
    const variant = props.variant || "elevated";
    const size = props.size || "m";

    return (
      <Link
        href={props.link}
        className={classNames(styles.button, {
          [styles.buttonVariantElevated]: variant === "elevated",
          [styles.buttonVariantFilled]: variant === "filled",
          [styles.buttonVariantFilledTonal]: variant === "filledTonal",
          [styles.buttonVariantOutlined]: variant === "outlined",
          [styles.buttonVariantText]: variant === "text",
          [styles.buttonVariantUnderlined]: variant === "underlined",
          [styles.buttonSizeS]: size === "s",
          [styles.buttonSizeL]: size === "l",
          [styles.buttonSizeXL]: size === "xl",
        })}
        target={props.newTab ? "_blank" : "_self"}
      >
        <span></span>
        {props.children}
        <span></span>
      </Link>
    );
  }
};
