import styles from "./index.module.css";
import classNames from "classnames";
import { KeyTextField } from "@prismicio/types";
import Link from "next/link";
import { ReactNode } from "react";

export type IconButtonVariant =
  | "filled"
  | "filledTonal"
  | "outlined"
  | "standard";

interface ICommonClickableComponent {
  children?: ReactNode | KeyTextField;
  variant?: IconButtonVariant | null;
  defaultVariant?: IconButtonVariant;
  filledIcon?: boolean;
}

interface IButton extends ICommonClickableComponent {
  onClick: () => void;
}

interface ILink extends ICommonClickableComponent {
  link: string;
  newTab?: boolean;
}

const instanceOfButton = (object: any): object is IButton => !!object.onClick;

export const IconButton = (props: IButton | ILink) => {
  const variant = props.variant || "filled";
  const classes = classNames(styles.button, {
    [styles.buttonVariantFilled]: variant === "filled",
    [styles.buttonVariantFilledTonal]: variant === "filledTonal",
    [styles.buttonVariantOutlined]: variant === "outlined",
    [styles.buttonVariantText]: variant === "standard",
  });

  return instanceOfButton(props) ? (
    <button className={classes} onClick={props.onClick}>
      <ClickableComponentContent {...props} />
    </button>
  ) : (
    <Link
      href={props.link}
      className={classes}
      target={props.newTab ? "_blank" : "_self"}
    >
      <ClickableComponentContent {...props} />
    </Link>
  );
};

const ClickableComponentContent = (props: ICommonClickableComponent) => (
  // const [filled, setFilled] = useState(false);

  // useEffect(() => {
  //   setFilled(!!props.filledIcon);
  // }, [props.filledIcon]);
  <span
    className={classNames("material-symbols-rounded", styles.icon, {
      [styles.iconFilled]: props.filledIcon,
    })}
  >
    {props.children}
  </span>
);
