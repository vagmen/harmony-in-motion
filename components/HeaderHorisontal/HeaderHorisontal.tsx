import { RichTextField } from "@prismicio/types";
import styles from "./index.module.css";
import { Buttons, IAction } from "../Buttons/Buttons";
import { PrismicRichText } from "@prismicio/react";

interface IHeaderHorisontal {
  title: RichTextField;
  description?: RichTextField;
  actions?: IAction[];
}

export const HeaderHorisontal = ({
  title,
  description,
  actions,
}: IHeaderHorisontal) => (
  <div className={styles.container}>
    <div className={styles.titleLine}>
      <PrismicRichText field={title} />
      <Buttons actions={actions} align="end" />
    </div>
    <PrismicRichText field={description} />
  </div>
);
