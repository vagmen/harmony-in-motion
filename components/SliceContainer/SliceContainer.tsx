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
  width?: SliceContainerWidth;
  isMaxWidthLimited?: boolean;
  noPadding?: boolean;
  align?: PageAlignment;
  topPadding?: SliceContainerTopPadding;
}

export const SliceContainer = ({
  children,
  width = "fullWidth",
  isMaxWidthLimited = false,
  noPadding = false,
  align = "start",
  topPadding = "medium",
}: ISliceContainer) => {
  return (
    <section
      className={classNames(
        styles.section,
        { [styles.sectionWithPadding]: !noPadding },
        { [styles.sectionAlignCenter]: align === "center" },
        { [styles.sectionAlignEnd]: align === "end" },
        { [styles.noPadding]: topPadding === "noPadding" },
        { [styles.topPaddingSmall]: topPadding === "small" },
        { [styles.topPaddingLarge]: topPadding === "large" }
      )}
    >
      <div
        className={classNames(styles.inner, {
          [styles.innerAutoWidth]: width === "autoWidth",
          [styles.innerMaxWidth]: isMaxWidthLimited,
        })}
      >
        {children}
      </div>
    </section>
  );
};
