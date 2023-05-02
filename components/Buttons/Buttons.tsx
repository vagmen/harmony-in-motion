import styles from "./index.module.css";
import classNames from "classnames";
import { ContentRelationshipField, KeyTextField } from "@prismicio/types";
import { Link, LinkVariant } from "../Link/Link";
import { asLink } from "@prismicio/helpers";
import { linkResolver } from "../../linkResolver";
import { PageAlignment } from "../../interfaces";

export interface IAction<T> {
  title: KeyTextField;
  variant: LinkVariant;
  link: ContentRelationshipField<T>;
  visible?: "all" | "desktop" | "mobile";
}

export interface IButtons {
  actions?: IAction<"page">[];
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
      <Link
        variant={action.variant}
        key={action.title}
        href={asLink(action.link, linkResolver) || ""}
      >
        {action.title}
      </Link>
    ))}
  </div>
);
