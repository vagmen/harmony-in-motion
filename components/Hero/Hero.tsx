import { PrismicNextImage } from "@prismicio/next";
import { RichTextField, ImageFieldImage } from "@prismicio/types";
import styles from "./index.module.css";
import { Standard } from "../Standard/Standard";
import classNames from "classnames";
import { PageAlignment } from "../../interfaces";
import { IAction } from "../Buttons/Buttons";

interface IHero {
  title: RichTextField | null;
  description?: RichTextField | null;
  align?: PageAlignment;
  actions?: IAction<"page">[];
  image?: ImageFieldImage | null | undefined;
  imageSize?: "s" | "m" | "l";
  imagePosition?: "left" | "right" | null;
  imagePositionMobile?: "top" | "bottom" | "hidden" | null;
  hasContentPadding?: boolean;
}

export const Hero = ({
  title,
  description,
  image,
  align,
  actions,
  imageSize,
  imagePosition = "right",
  imagePositionMobile = "top",
  hasContentPadding,
}: IHero) => {
  return (
    <div
      className={classNames(styles.container, {
        [styles.imageLeft]: imagePosition === "left",
        [styles.mobileImageBottom]: imagePositionMobile === "bottom",
      })}
    >
      <div
        className={classNames(styles.content, {
          [styles.contentWithLeftPadding]:
            hasContentPadding && imagePosition === "right",
          [styles.contentWithRightPadding]:
            hasContentPadding && imagePosition === "left",
        })}
      >
        <Standard
          title={title}
          description={description}
          align={align}
          actions={actions}
          noHeaderPadding={true}
        />
      </div>
      <div
        className={classNames(styles.imageWrapper, {
          [styles.imageSizeS]: imageSize === "s",
          [styles.imageSizeL]: imageSize === "l",
          [styles.imageWrapperHeightS]: imageSize === "s",
          [styles.imageWrapperHeightM]: imageSize === "m",
          [styles.imageWrapperHeightL]: imageSize === "l",
          [styles.mobileImageHidden]: imagePositionMobile === "hidden",
        })}
      >
        <PrismicNextImage
          field={image}
          className={classNames(styles.image, {
            [styles.imageAlignLeft]: align === "end",
            [styles.imageAlignCenter]: align === "center",
            [styles.imageAlignRight]: align === "start",
            [styles.imageWithoutBorderRadius]: hasContentPadding,
          })}
          imgixParams={
            {
              // exp: -20,
            }
          }
        />
      </div>
    </div>
  );
};
