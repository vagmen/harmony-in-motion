import { EmptyImageFieldImage, FilledImageFieldImage } from "@prismicio/types";

export interface IMenuItem {
  title: string;
  link: string;
  icon?: EmptyImageFieldImage | FilledImageFieldImage | null;
}

export interface IMenu {
  menuItems: IMenuItem[];
}

export type PageAlignment = "start" | "center" | "end";

export type SliceContainerWidth =
  | "fullWidth"
  | "fullWidthWithMargin"
  | "textWidth";
  
export type SliceContainerTopPadding =
  | "noPadding"
  | "small"
  | "medium"
  | "large";

export interface ISliceContext {
  align: PageAlignment;
}
