import styles from "./index.module.css";
import classNames from "classnames";
import { RichTextField } from "@prismicio/client";
import { PageAlignment } from "../../interfaces";
import { Buttons, IAction } from "../Buttons/Buttons";
import { PrismicRichText } from "../prismic/PrismicRichText/PrismicRichText";

export interface IStandard {
  title: RichTextField | null;
  description?: RichTextField | null;
  align?: PageAlignment;
  actions?: IAction[];
  noHeaderPadding?: boolean;
}

export const Standard = ({
  title,
  description,
  align,
  actions,
  noHeaderPadding,
}: IStandard) => (
  <div
    className={classNames(
      styles.container,
      { [styles.alignLeft]: align === "start" },
      { [styles.alignRight]: align === "end" },
      { [styles.noHeaderPadding]: noHeaderPadding }
    )}
  >
    <PrismicRichText field={title} />
    <PrismicRichText field={description} />
    <Buttons actions={actions} align={align} />
  </div>
);
