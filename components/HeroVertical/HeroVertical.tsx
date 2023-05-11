import { PrismicNextImage } from "@prismicio/next";
import { RichTextField, ImageFieldImage } from "@prismicio/types";
import styles from "./index.module.css";
import { Standard } from "../Standard/Standard";
import { PageAlignment, SliceContainerWidth } from "../../interfaces";
import { IAction } from "../Buttons/Buttons";
import { SliceContainer } from "../SliceContainer/SliceContainer";

interface IHeroVertical {
  title: RichTextField | null;
  description?: RichTextField | null;
  align?: PageAlignment;
  actions?: IAction[];
  image?: ImageFieldImage | null | undefined;
  isImageBottom?: boolean;
  width?: SliceContainerWidth;
}

export const HeroVertical = ({
  title,
  description,
  image,
  isImageBottom,
  align,
  actions,
  width,
}: IHeroVertical) => (
  <>
    <SliceContainer width={width} align="center">
      <PrismicNextImage field={image} />
    </SliceContainer>
    <SliceContainer width={"textWidth"} align={align}>
      <Standard title={title} description={description} actions={actions} />
    </SliceContainer>
  </>
);
