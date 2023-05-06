import styles from "./index.module.css";
import classNames from "classnames";
import { ImageField } from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import { IStandard } from "../Standard/Standard";
import { PrismicNextImage } from "@prismicio/next";
import { Buttons } from "../Buttons/Buttons";

interface IStandardWithImage extends IStandard {
  image: ImageField;
}

// TODO: Удалить, если не используется

export const StandardWithImage = ({
  title,
  description,
  align,
  actions,
  image,
}: IStandardWithImage) => {
  return (
    <div
      className={classNames(
        styles.container
        // { [styles.alignLeft]: align === "Слева" },
        // { [styles.alignRight]: align === "Справа" }
      )}
    >
      <div className={styles.content}>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
        <Buttons actions={actions} />
      </div>
      <PrismicNextImage field={image} />
    </div>
  );
};
