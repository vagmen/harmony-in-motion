import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {
  SliceContainer,
  prepareSliceContainerWidth,
} from "../../components/SliceContainer/SliceContainer";
import { Standard } from "../../components/Standard/Standard";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./styles.module.css";
import classNames from "classnames";
import { FULL_WIDTH, FULL_WIDTH_WITH_MARGIN } from "../../constants";
import { prepareAlign, usePrismicContext } from "../../utils";
import { prepareButtons } from "../../components/Buttons/Buttons";

/**
 * Props for `Banner`.
 */
export type BannerProps = SliceComponentProps<Content.BannerSlice>;

/**
 * Component for "Banner" Slices.
 */
const Banner = ({ slice, context }: BannerProps): JSX.Element => {
  const { align } = usePrismicContext(context);

  return (
    <SliceContainer
      topPadding={slice.primary.width === FULL_WIDTH ? "noPadding" : "medium"}
      width={prepareSliceContainerWidth(
        slice.primary.width || FULL_WIDTH_WITH_MARGIN
      )}
      align={align}
    >
      <div
        className={classNames(styles.container, {
          [styles.withBorderRadius]: slice.primary.width !== FULL_WIDTH,
        })}
      >
        <div className={styles.bgWrapper}>
          <PrismicNextImage
            field={slice.primary.image}
            className={styles.bg}
            imgixParams={{
              exp: -20,
            }}
            alt=""
          />
        </div>
        <div className={styles.content}>
          <Standard
            title={slice.primary.title}
            description={slice.primary.description}
            align={prepareAlign(slice.primary.align)}
            actions={prepareButtons(slice.items)}
          />
        </div>
      </div>
    </SliceContainer>
  );
};

export default Banner;
