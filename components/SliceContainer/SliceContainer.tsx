import styles from "./index.module.css";
import { ReactElement } from "react";
import classNames from "classnames";
import {
  PageAlignment,
  SliceContainerTopPadding,
  SliceContainerWidth,
} from "../../interfaces";

interface ISliceContainer {
  children: ReactElement | ReactElement[] | boolean;
  align?: PageAlignment;
  topPadding?: SliceContainerTopPadding;
  bottomPadding?: SliceContainerTopPadding;
  autoWidth?: boolean;
  width?: SliceContainerWidth;
}

export const SliceContainer = ({
  children,
  align = "start",
  topPadding = "medium",
  bottomPadding = "medium",
  autoWidth,
  width = "textWidth",
}: ISliceContainer) => {
  return (
    <section
      className={classNames(
        styles.section,
        { [styles.sectionWithPadding]: width !== "fullWidth" },
        { [styles.sectionAlignCenter]: align === "center" },
        { [styles.sectionAlignEnd]: align === "end" },
        { [styles.noPadding]: topPadding === "noPadding" },
        { [styles.topPaddingSmall]: topPadding === "small" },
        { [styles.topPaddingLarge]: topPadding === "large" },
        { [styles.bottomPaddingNone]: bottomPadding === "noPadding" }
      )}
    >
      <div
        className={classNames(styles.inner, {
          [styles.innerAutoWidth]: autoWidth,
          [styles.innerMaxWidth]: width === "textWidth",
        })}
      >
        {children}
      </div>
    </section>
  );
};

type RawWidth =
  | "На всю ширину экрана"
  | "На всю ширину с отступами"
  | "Под размер текста";

export const prepareSliceContainerWidth = (
  width: RawWidth
): SliceContainerWidth => {
  switch (width) {
    case "На всю ширину экрана":
      return "fullWidth";
      break;
    case "Под размер текста":
      return "textWidth";
      break;
    default:
      return "fullWidthWithMargin";
      break;
  }
};
