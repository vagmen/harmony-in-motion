import { PrismicNextImage } from "@prismicio/next";
import { RichTextField, ImageFieldImage } from "@prismicio/types";
import styles from "./index.module.css";
import { Standard } from "../Standard/Standard";
import classNames from "classnames";
import { PageAlignment } from "../../interfaces";
import { IAction } from "../Buttons/Buttons";

interface IHeroVertical {
  title: RichTextField | null;
  description?: RichTextField | null;
  align?: PageAlignment;
  actions?: IAction[];
  image?: ImageFieldImage | null | undefined;
  imageSize?: "s" | "m" | "l";
  imagePosition?: "left" | "right" | null;
  imagePositionMobile?: "top" | "bottom" | "hidden" | null;
  hasContentPadding?: boolean;
}

export const HeroVertical = ({
  title,
  description,
  image,
  align,
  actions,
  imageSize,
  imagePosition = "right",
  imagePositionMobile = "top",
  hasContentPadding,
}: IHeroVertical) => {
  return (
    <div
      className={classNames(styles.container, {
        // [styles.imageLeft]: imagePosition === "left",
        [styles.mobileImageBottom]: imagePositionMobile === "bottom",
      })}
    >
      <div className={styles.imageWrapper}>
        <PrismicNextImage field={image} className={styles.image} />
      </div>
      <div className={styles.contentWrapper}>
        <Standard
          title={title}
          description={description}
          align={align}
          actions={actions}
          noHeaderPadding={true}
        />
      </div>
    </div>
  );
};
