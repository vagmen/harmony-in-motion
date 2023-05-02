import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Hero as HeroComponent } from "./../../components/Hero/Hero";
import {
  prepareAlign,
  prepareImagePosition,
  prepareImagePositionMobile,
  prepareLinkVariant,
} from "../../utils";
import { FULL_WIDTH, TEXT_WIDTH } from "../../constants";
import { ISliceContext } from "../../interfaces";

/**
 * Props for `Hero`.
 */

export type HeroProps = SliceComponentProps<Content.HeroSlice, ISliceContext>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice, context }: HeroProps): JSX.Element => {
  return (
    <SliceContainer
      isMaxWidthLimited={slice.primary.width === TEXT_WIDTH}
      noPadding={slice.primary.width === FULL_WIDTH}
      align={context.align}
      width="fullWidth"
    >
      <HeroComponent
        title={slice.primary.title}
        description={slice.primary.description}
        align={prepareAlign(slice.primary.align || "Слева")}
        image={slice.primary.image}
        actions={slice.items.map((item) => ({
          title: item.title,
          link: item.link,
          variant: prepareLinkVariant(item.variant),
        }))}
        imageSize={slice.primary.imageweight || "m"}
        imagePosition={
          prepareImagePosition(slice.primary.imageposition as string) || "right"
        }
        imagePositionMobile={
          prepareImagePositionMobile(
            slice.primary.mobileimageposition as string
          ) || "top"
        }
        hasContentPadding={slice.primary.width === FULL_WIDTH}
      />
    </SliceContainer>
  );
};

export default Hero;
