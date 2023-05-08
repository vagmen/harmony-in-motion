import styles from "./index.module.css";
import classNames from "classnames";
import { KeyTextField } from "@prismicio/types";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

export type IconButtonVariant =
  | "filled"
  | "filledTonal"
  | "outlined"
  | "standard";

// export type ButtonSize = "s" | "m" | "l" | "xl";

interface ICommonClickableComponent {
  children?: ReactNode | KeyTextField;
  variant?: IconButtonVariant | null;
  // size?: ButtonSize | null;
  defaultVariant?: IconButtonVariant;
}

interface IButton extends ICommonClickableComponent {
  onClick: () => void;
  toggledOn?: boolean;
}

interface ILink extends ICommonClickableComponent {
  link: string;
  newTab?: boolean;
}

const instanceOfButton = (object: any): object is IButton => !!object.onClick;

export const IconButton = (props: IButton | ILink) => {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (instanceOfButton(props)) {
      setOn(!!props.toggledOn);
    }
  }, []);

  if (instanceOfButton(props)) {
    const variant = props.variant || "filled";
    return (
      <button
        className={classNames(styles.button, {
          [styles.buttonVariantFilled]: variant === "filled",
          [styles.buttonVariantFilledTonal]: variant === "filledTonal",
          [styles.buttonVariantOutlined]: variant === "outlined",
          [styles.buttonVariantText]: variant === "standard",
        })}
        onClick={() => {
          if (props.toggledOn !== undefined) {
            setOn(!on);
          }
          props.onClick();
        }}
      >
        <span
          className={classNames("material-symbols-rounded", styles.icon, {
            [styles.iconFilled]: on,
          })}
        >
          {props.children}
        </span>
      </button>
    );
  } else {
    const variant = props.variant || "filled";

    return (
      <Link
        href={props.link}
        className={classNames(styles.button, {
          [styles.buttonVariantFilled]: variant === "filled",
          [styles.buttonVariantFilledTonal]: variant === "filledTonal",
          [styles.buttonVariantOutlined]: variant === "outlined",
          [styles.buttonVariantText]: variant === "standard",
        })}
        target={props.newTab ? "_blank" : "_self"}
      >
        <span
          className={classNames("material-symbols-rounded", styles.icon, {
            [styles.iconFilled]: on,
          })}
        >
          {props.children}
        </span>
      </Link>
    );
  }
};
