import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Buttons as ButtonsComponent } from "../../components/Buttons/Buttons";
import { prepareLinkVariant, usePrismicContext } from "../../utils";
import { TEXT_WIDTH } from "../../constants";

/**
 * Props for `Buttons`.
 */
export type ButtonsProps = SliceComponentProps<Content.ButtonsSlice>;

/**
 * Component for "Buttons" Slices.
 */
const Buttons = ({ slice, context }: ButtonsProps): JSX.Element => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer
      isMaxWidthLimited={slice.primary.width === TEXT_WIDTH}
      align={align}
    >
      <ButtonsComponent
        actions={slice.items.map(
          (item: { title: any; link: any; variant: any }) => ({
            title: item.title,
            link: item.link,
            variant: prepareLinkVariant(item.variant),
          })
        )}
      />
    </SliceContainer>
  );
};

export default Buttons;
