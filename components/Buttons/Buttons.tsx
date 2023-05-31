import styles from "./index.module.css";
import classNames from "classnames";
import {
  ContentRelationshipField,
  KeyTextField,
  LinkField,
  SelectField,
  asLink,
} from "@prismicio/client";
import { PageAlignment } from "../../interfaces";
import { Button, ButtonSize, ButtonVariant } from "../Button/Button";
import { linkResolver } from "../../linkResolver";
import { ActionButton } from "../ActionButton/ActionButton";

export interface IAction {
  title: KeyTextField;
  variant?: ButtonVariant | null;
  link: string;
  size?: ButtonSize | null;
  visible?: "all" | "desktop" | "mobile";
  newTab?: boolean;
  startIcon?: string | null;
  endIcon?: string | null;
  actionType?: ContentRelationshipField<"action">;
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
    {actions?.map((action) =>
      action.actionType ? (
        <ActionButton
          key={action.title}
          link={action.link}
          variant={action.variant}
          size={action.size}
          newTab={action.newTab}
          startIcon={action.startIcon}
          endIcon={action.endIcon}
          actionType={action.actionType}
          // onClick={(()=>clickHandler(action)}
        >
          {action.title}
        </ActionButton>
      ) : (
        <Button
          key={action.title}
          link={action.link}
          variant={action.variant}
          size={action.size}
          newTab={action.newTab}
          startIcon={action.startIcon}
          endIcon={action.endIcon}
          // actionType={action.actionType}
        >
          {action.title}
        </Button>
      )
    )}
  </div>
);

type RawButtonVariant = SelectField<
  | "Выпуклая"
  | "Заполненная"
  | "Тональная"
  | "Контурная"
  | "Текстовая"
  | "Подчеркнутая"
>;

interface IRawButton {
  title: KeyTextField;
  variant: RawButtonVariant;
  size: SelectField<"Маленькая" | "Средняя" | "Большая" | "Огромная">;
  link: LinkField;
  starticon?: KeyTextField;
  endicon?: KeyTextField;
  action?: ContentRelationshipField<"action">;
}

export const prepareButtons = (rawButtons: IRawButton[]): IAction[] =>
  rawButtons.map((item) => ({
    title: item.title,
    variant: prepareButtonVariant(item.variant) || "outlined",
    link: asLink(item.link, { linkResolver }) || "",
    size: prepareButtonSize(item.size),
    newTab: item.link?.link_type === "Web",
    startIcon: item.starticon,
    endIcon: item.endicon,
    actionType: item.action,
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
