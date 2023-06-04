import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Telegram`.
 */
export type TelegramProps = SliceComponentProps<Content.TelegramSlice>;

/**
 * Component for "Telegram" Slices.
 */
const Telegram = ({ slice }: TelegramProps): JSX.Element => {
  console.log("Telegram");

  return <div>sdfsdfsdfsd</div>;
};

export default Telegram;
