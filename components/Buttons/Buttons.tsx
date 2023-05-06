import styles from "./index.module.css";
import classNames from "classnames";
import { ContentRelationshipField, KeyTextField } from "@prismicio/types";
import { LinkVariant } from "../Link/Link";
import { PageAlignment } from "../../interfaces";
import { Button, ButtonSize, ButtonVariant } from "../Button/Button";

export interface IAction<T> {
  title: KeyTextField;
  variant: LinkVariant;
  link: ContentRelationshipField<T>;
  visible?: "all" | "desktop" | "mobile";
}

interface IAction1 {
  title: KeyTextField;
  variant?: ButtonVariant | null;
  link: string;
  size?: ButtonSize | null;
  visible?: "all" | "desktop" | "mobile";
  newTab?: boolean;
}

interface IButtons {
  actions?: IAction1[];
  align?: PageAlignment;
}

export const Buttons = ({ actions, align }: IButtons) => (
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
      >
        {action.title}
      </Button>
    ))}
  </div>
);
