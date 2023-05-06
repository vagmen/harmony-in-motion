import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Standard } from "../../components/Standard/Standard";
import { prepareAlign } from "../../utils";
import { prepareButtons } from "../../components/Buttons/Buttons";

/**
 * Props for `Header`.
 */
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>;

/**
 * Component for "Header" Slices.
 */
const Header = ({ slice }: HeaderProps): JSX.Element => {
  return (
    <SliceContainer>
      <Standard
        title={slice.primary.title}
        description={slice.primary.description}
        align={prepareAlign(slice.primary.align || "Слева")}
        actions={prepareButtons(slice.items)}
      />
    </SliceContainer>
  );
};

export default Header;
