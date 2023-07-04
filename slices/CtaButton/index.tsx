import { Content, asLink } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Button } from "../../components/Button/Button";
import { linkResolver } from "../../linkResolver";

export type TelegramProps = SliceComponentProps<Content.TelegramSlice>;

const CtaButton = ({ slice }: TelegramProps): JSX.Element => {
  console.log("slice.primary.contact", slice);

  return (
    <Button link={asLink(slice.primary.contact, { linkResolver }) || ""}>
      {slice.primary.title}
    </Button>
  );
};

export default CtaButton;
