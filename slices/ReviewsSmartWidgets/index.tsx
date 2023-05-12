import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { ReviewsSmartWidgetsSlice } from "../../prismicio-types";

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
  </SliceContainer>
);
export default ReviewsSmartWidgets;
