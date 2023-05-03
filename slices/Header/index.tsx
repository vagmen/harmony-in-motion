import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Standard } from "../../components/Standard/Standard";
import { prepareAlign, prepareLinkVariant } from "../../utils";

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

export default Header;
