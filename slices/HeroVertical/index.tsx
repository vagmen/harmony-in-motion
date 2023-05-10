import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroVertical`.
 */
export type HeroVerticalProps = SliceComponentProps<Content.HeroVerticalSlice>;

/**
 * Component for "HeroVertical" Slices.
 */
const HeroVertical = ({ slice }: HeroVerticalProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_vertical (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroVertical;
