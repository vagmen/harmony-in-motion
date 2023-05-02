import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Buttons as ButtonsComponent } from "../../components/Buttons/Buttons";
import { prepareLinkVariant } from "../../utils";
import { TEXT_WIDTH } from "../../constants";
import { ISliceContext } from "../../interfaces";

/**
 * Props for `Buttons`.
 */
export type ButtonsProps = SliceComponentProps<
  Content.ButtonsSlice,
  ISliceContext
>;

/**
 * Component for "Buttons" Slices.
 */
const Buttons = ({ slice, context }: ButtonsProps): JSX.Element => {
  return (
    <SliceContainer
      isMaxWidthLimited={slice.primary.width === TEXT_WIDTH}
      align={context.align}
    >
      <ButtonsComponent
        actions={slice.items.map((item) => ({
          title: item.title,
          link: item.link,
          variant: prepareLinkVariant(item.variant),
        }))}
      />
    </SliceContainer>
  );
};

export default Buttons;
