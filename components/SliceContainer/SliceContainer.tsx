import styles from "./index.module.css";
import { ReactElement } from "react";
import classNames from "classnames";
import {
  PageAlignment,
  SliceContainerTopPadding,
  SliceContainerWidth,
} from "../../interfaces";

import { motion } from "framer-motion";

interface ISliceContainer {
  children: ReactElement | ReactElement[] | boolean;
  width?: SliceContainerWidth;
  isMaxWidthLimited?: boolean;
  noPadding?: boolean;
  align?: PageAlignment;
  topPadding?: SliceContainerTopPadding;
  bottomPadding?: SliceContainerTopPadding;
}

const variants = {
  // hidden: { opacity: 0, x: -200, y: 0 },
  // enter: { opacity: 1, x: 0, y: 0 },
  // exit: { opacity: 0, x: 0, y: -100 },
  hidden: { opacity: 0, x: 0, y: -200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 200 },
};

export const SliceContainer = ({
  children,
  width = "fullWidth",
  isMaxWidthLimited = false,
  noPadding = false,
  align = "start",
  topPadding = "medium",
  bottomPadding = "medium",
}: ISliceContainer) => {
  return (
    <div
      // variants={variants} // Pass the variant object into Framer Motion
      // initial="hidden" // Set the initial state to variants.hidden
      // // animate="enter" // Animated state to variants.enter
      // exit="exit" // Exit state (used later) to variants.exit
      // // transition={{ type: "linear" }} // Set the transition to linear
      // whileInView="enter"
      // viewport={{ once: false, amount: 0.8 }}
      className={classNames(
        styles.section,
        { [styles.sectionWithPadding]: !noPadding },
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
          [styles.innerAutoWidth]: width === "autoWidth",
          [styles.innerMaxWidth]: isMaxWidthLimited,
        })}
      >
        {children}
      </div>
    </div>
  );
};
