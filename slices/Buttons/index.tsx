import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Buttons } from "../../components/Buttons/Buttons";
import { SelectField } from "@prismicio/types";
import { asLink } from "@prismicio/helpers";
import { linkResolver } from "../../linkResolver";
import { prepareAlign, usePrismicContext } from "../../utils";
import { FULL_WIDTH, TEXT_WIDTH } from "../../constants";

/**
 * Props for `ButtonsV2`.
 */
export type ButtonsV2Props = SliceComponentProps<Content.ButtonsV2Slice>;

/**
 * Component for "ButtonsV2" Slices.
 */
const ButtonsV2 = ({ slice, context }: ButtonsV2Props): JSX.Element => {
  const { width } = slice.primary;
  const { align } = usePrismicContext(context);

  return (
    <SliceContainer
      isMaxWidthLimited={width === TEXT_WIDTH}
      noPadding={width === FULL_WIDTH}
      align={align}
    >
      <Buttons
        actions={slice.items.map((item) => ({
          title: item.name,
          variant: prepareButtonVariant(item.variant),
          link: asLink(item.link, linkResolver) || "",
          size: prepareButtonSize(item.size),
          newTab: item.link.link_type === "Web",
        }))}
        align={prepareAlign(slice.primary.align)}
      />
    </SliceContainer>
  );
};

export default ButtonsV2;

const prepareButtonVariant = (
  variant: SelectField<
    | "Выпуклая"
    | "Заполненная"
    | "Тональная"
    | "Контурная"
    | "Текстовая"
    | "Подчеркнутая"
  >
) => {
  switch (variant) {
    case "Выпуклая":
      return "elevated";
      break;
    case "Заполненная":
      return "filled";
      break;
    case "Тональная":
      return "filledTonal";
      break;
    case "Контурная":
      return "outlined";
      break;
    case "Текстовая":
      return "text";
      break;
    case "Подчеркнутая":
      return "underlined";
      break;

    default:
      return null;
      break;
  }
};

const prepareButtonSize = (
  size: SelectField<"Маленькая" | "Средняя" | "Большая" | "Огромная">
) => {
  switch (size) {
    case "Маленькая":
      return "s";
      break;
    case "Средняя":
      return "m";
      break;
    case "Большая":
      return "l";
      break;
    case "Огромная":
      return "xl";
      break;
    default:
      return null;
      break;
  }
};
