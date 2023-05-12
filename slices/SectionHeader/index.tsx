import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { HeaderWithLinkSlice } from "../../prismicio-types";
import { HeaderHorisontal } from "../../components/HeaderHorisontal/HeaderHorisontal";
import { prepareButtons } from "../../components/Buttons/Buttons";

const HeaderWithLink = ({
  slice,
}: SliceComponentProps<HeaderWithLinkSlice>) => (
  <SliceContainer bottomPadding="noPadding" width="fullWidthWithMargin">
    <HeaderHorisontal
      title={slice.primary.title}
      description={slice.primary.description}
      actions={prepareButtons(slice.items)}
    />
  </SliceContainer>
);

export default HeaderWithLink;
