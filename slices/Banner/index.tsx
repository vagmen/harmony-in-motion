import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Standard } from "../../components/Standard/Standard";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./styles.module.css";
import classNames from "classnames";
import { FULL_WIDTH, TEXT_WIDTH } from "../../constants";
import {
  prepareAlign,
  prepareLinkVariant,
  usePrismicContext,
} from "../../utils";

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
      isMaxWidthLimited={slice.primary.width === TEXT_WIDTH}
      noPadding={slice.primary.width === FULL_WIDTH}
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
          />
        </div>
        <div className={styles.content}>
          <Standard
            title={slice.primary.title}
            description={slice.primary.description}
            align={prepareAlign(slice.primary.align)}
            actions={slice.items.map(
              (item: { title: any; link: any; variant: any }) => ({
                title: item.title,
                link: item.link,
                variant: prepareLinkVariant(item.variant),
              })
            )}
          />
        </div>
      </div>
    </SliceContainer>
  );
};

export default Banner;
