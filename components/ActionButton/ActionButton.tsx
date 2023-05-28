import styles from "./index.module.css";
import classNames from "classnames";
import { ContentRelationshipField, KeyTextField } from "@prismicio/types";
import Link from "next/link";
import { ReactNode } from "react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";

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
  startIcon?: string | null;
  endIcon?: string | null;
  actionType?: ContentRelationshipField<"action">;
}

interface IButton extends ICommonClickableComponent {
  onClick: () => void;
}

interface ILink extends ICommonClickableComponent {
  link: string;
  newTab?: boolean;
}

const instanceOfButton = (object: any): object is IButton => !!object.onClick;

export const ActionButton = (props: IButton | ILink) => {
  const variant = props.variant || "elevated";
  const size = props.size || "m";
  const classes = classNames(styles.button, {
    [styles.buttonVariantElevated]: variant === "elevated",
    [styles.buttonVariantFilled]: variant === "filled",
    [styles.buttonVariantFilledTonal]: variant === "filledTonal",
    [styles.buttonVariantOutlined]: variant === "outlined",
    [styles.buttonVariantText]: variant === "text",
    [styles.buttonVariantUnderlined]: variant === "underlined",
    [styles.buttonSizeS]: size === "s",
    [styles.buttonSizeL]: size === "l",
    [styles.buttonSizeXL]: size === "xl",
  });

  return instanceOfButton(props) ? (
    <button className={classes}>
      <ClickableComponentContent {...props} />
    </button>
  ) : (
    <Link
      href={props.link}
      className={classes}
      target={props.newTab ? "_blank" : "_self"}
      scroll={false}
    >
      <ClickableComponentContent {...props} />
    </Link>
  );
};

const ClickableComponentContent = (props: ICommonClickableComponent) => (
  <>
    <span className={styles.touchEffect}></span>
    <span className={styles.content}>
      {props.startIcon && props.variant !== "underlined" ? (
        // <span
        //   className={classNames("material-symbols-rounded", styles.startIcon)}
        // >
        //   {props.startIcon}
        // </span>
        <Image
          src="https://img.icons8.com/?size=512&id=98970&format=png"
          className={styles.startIcon}
          alt=""
          width={24}
          height={24}
        />
      ) : (
        //   src="
        // https://img.icons8.com/?size=512&id=98970&format=png
        // "
        //   className={styles.startIconImg}
        // />
        // /next.svg
        <></>
      )}
      {props.children}
      {props.endIcon && props.variant !== "underlined" ? (
        <span
          className={classNames("material-symbols-rounded", styles.endIcon)}
        >
          {props.endIcon}
        </span>
      ) : (
        <></>
      )}
    </span>
    <span className={styles.touchEffect}></span>
  </>
);
