import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { ReviewsSmartWidgetsSlice } from "../../prismicio-types";
import Script from "next/script";

/**
 * Props for `ReviewsSmartWidgets`.
 */
export type ReviewsSmartWidgetsProps =
  SliceComponentProps<ReviewsSmartWidgetsSlice>;

/**
 * Component for "ReviewsSmartWidgets" Slices.
 */
const ReviewsSmartWidgets = ({
  slice,
}: ReviewsSmartWidgetsProps): JSX.Element => (
  <SliceContainer width="fullWidthWithMargin">
    <div className="sw-app" data-app={slice.primary.dataapp}></div>
    <Script
      src="https://res.smartwidgets.ru/app.js"
      strategy="lazyOnload"
    ></Script>
  </SliceContainer>
);
export default ReviewsSmartWidgets;
