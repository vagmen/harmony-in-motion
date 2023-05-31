import { RichTextField, ImageFieldImage } from "@prismicio/client";
import styles from "./index.module.css";
import { Standard } from "../Standard/Standard";
import { PageAlignment, SliceContainerWidth } from "../../interfaces";
import { IAction } from "../Buttons/Buttons";
import { SliceContainer } from "../SliceContainer/SliceContainer";
import { Image } from "../Image/Image";
import classNames from "classnames";

interface IHeroVertical {
  title: RichTextField | null;
  description?: RichTextField | null;
  alignContainer?: PageAlignment;
  alignContent?: PageAlignment;
  actions?: IAction[];
  image?: ImageFieldImage | null | undefined;
  isImageBottom?: boolean;
  imageWidth?: SliceContainerWidth | "auto";
  imageHeight?: "s" | "m" | "l" | "auto";
}

export const HeroVertical = ({
  title,
  description,
  image,
  isImageBottom,
  alignContainer,
  alignContent,
  actions,
  imageWidth,
  imageHeight,
}: IHeroVertical) => (
  <div
    className={classNames(styles.container, {
      [styles.isImageBottom]: isImageBottom,
    })}
  >
    <SliceContainer
      width={imageWidth === "auto" ? "fullWidthWithMargin" : imageWidth}
      align="center"
      topPadding={
        imageWidth === "fullWidth" && !isImageBottom ? "noPadding" : undefined
      }
    >
      <Image
        field={image}
        autoWidth={imageWidth === "auto"}
        height={imageHeight}
        noBorderRadiusTop={imageWidth === "fullWidth"}
        noBorderRadiusBottom={imageWidth === "fullWidth" && isImageBottom}
        alt=""
      />
    </SliceContainer>
    <SliceContainer
      width={"textWidth"}
      align={alignContainer}
      topPadding={isImageBottom ? "medium" : "noPadding"}
    >
      <Standard
        title={title}
        description={description}
        actions={actions}
        align={alignContent}
      />
    </SliceContainer>
  </div>
);

type RawImageWidth =
  | "На всю ширину экрана"
  | "На всю ширину с отступами"
  | "Под размер текста"
  | "Авто";

export const prepareImageWidth = (
  width: RawImageWidth
): SliceContainerWidth | "auto" => {
  switch (width) {
    case "На всю ширину экрана":
      return "fullWidth";
      break;
    case "Под размер текста":
      return "textWidth";
      break;
    case "Авто":
      return "auto";
      break;
    default:
      return "fullWidthWithMargin";
      break;
  }
};

type RawImageHeight = "Маленькая" | "Средняя" | "Большая" | "Полная";

export const prepareImageHeight = (
  height: RawImageHeight
): "s" | "m" | "l" | "auto" => {
  switch (height) {
    case "Маленькая":
      return "s";
      break;
    case "Большая":
      return "l";
      break;
    case "Полная":
      return "auto";
      break;
    default:
      return "m";
      break;
  }
};
