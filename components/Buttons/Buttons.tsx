import styles from "./index.module.css";
import classNames from "classnames";
import { KeyTextField, LinkField, SelectField } from "@prismicio/types";
import { PageAlignment } from "../../interfaces";
import { Button, ButtonSize, ButtonVariant } from "../Button/Button";
import { linkResolver } from "../../linkResolver";
import { asLink } from "@prismicio/helpers";

export interface IAction {
  title: KeyTextField;
  variant?: ButtonVariant | null;
  link: string;
  size?: ButtonSize | null;
  visible?: "all" | "desktop" | "mobile";
  newTab?: boolean;
  startIcon?: string | null;
  endIcon?: string | null;
}

interface IButtons {
  actions?: IAction[];
  align?: PageAlignment;
}

export const Buttons = ({ actions, align = "start" }: IButtons) => (
  <div
    className={classNames(styles.actions, {
      [styles.alignLeft]: align === "start",
      [styles.alignRight]: align === "end",
    })}
  >
    {actions?.map((action) => (
      <Button
        key={action.title}
        link={action.link}
        variant={action.variant}
        size={action.size}
        newTab={action.newTab}
        startIcon={action.startIcon}
        endIcon={action.endIcon}
      >
        {action.title}
      </Button>
    ))}
  </div>
);

interface IRawButton {
  title: KeyTextField;
  variant: SelectField<
    | "Выпуклая"
    | "Заполненная"
    | "Тональная"
    | "Контурная"
    | "Текстовая"
    | "Подчеркнутая"
  >;
  size: SelectField<"Маленькая" | "Средняя" | "Большая" | "Огромная">;
  link: LinkField;
  starticon?: KeyTextField;
  endicon?: KeyTextField;
}

export const prepareButtons = (rawButtons: IRawButton[]): IAction[] =>
  rawButtons.map((item) => ({
    title: item.title,
    variant: prepareButtonVariant(item.variant) || "outlined",
    link: asLink(item.link, linkResolver) || "",
    size: prepareButtonSize(item.size),
    newTab: item.link.link_type === "Web",
    startIcon: item.starticon,
    endIcon: item.endicon,
  }));

export const prepareButtonVariant = (
  variant: SelectField<
    | "Выпуклая"
    | "Заполненная"
    | "Тональная"
    | "Контурная"
    | "Текстовая"
    | "Подчеркнутая"
  >
): ButtonVariant | null => {
  switch (variant) {
    case "Выпуклая":
      return "elevated";
      break;
    case "Заполненная":
      return "filled";
      break;
    case "Тональная":
      return "filledTonal";
      break;
    case "Контурная":
      return "outlined";
      break;
    case "Текстовая":
      return "text";
      break;
    case "Подчеркнутая":
      return "underlined";
      break;

    default:
      return null;
      break;
  }
};

export const prepareButtonSize = (
  size: SelectField<"Маленькая" | "Средняя" | "Большая" | "Огромная">
): ButtonSize | null => {
  switch (size) {
    case "Маленькая":
      return "s";
      break;
    case "Средняя":
      return "m";
      break;
    case "Большая":
      return "l";
      break;
    case "Огромная":
      return "xl";
      break;
    default:
      return null;
      break;
  }
};
