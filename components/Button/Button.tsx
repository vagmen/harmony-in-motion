import styles from "./index.module.css";
import classNames from "classnames";
import { KeyTextField } from "@prismicio/types";

export type ButtonVariant = "filled" | "filledTonal" | "outlined" | "text";

interface IButton {
  children: string | KeyTextField;
  variant?: ButtonVariant;
  onClick?: () => void;
}

export const Button = ({
  variant = "filledTonal",
  children,
  onClick,
}: IButton) => {
  // const { width } = useWindowSize();

  return (
    <div
      className={classNames(styles.container, {
        [styles.containerFilled]: variant === "filled",
        [styles.containerOutlined]: variant === "outlined",
        [styles.containerText]: variant === "text",
      })}
      onClick={onClick}
    >
      <div
        className={classNames(styles.stateLayer, {
          [styles.stateLayerFilled]: variant === "filled",
          [styles.stateLayerOutlined]: variant === "outlined",
          [styles.stateLayerText]: variant === "text",
        })}
      ></div>
      <button
        className={classNames(styles.button, {
          [styles.filled]: variant === "filled",
          [styles.outlined]: variant === "outlined",
          [styles.text]: variant === "text",
        })}
      >
        {children}
      </button>
    </div>
  );
};
