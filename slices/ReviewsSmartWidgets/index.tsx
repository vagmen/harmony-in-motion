import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { usePrismicContext } from "../../utils";

/**
 * Props for `ReviewsSmartWidgets`.
 */
export type ReviewsSmartWidgetsProps =
  SliceComponentProps<Content.ReviewsSmartWidgetsSlice>;

/**
 * Component for "ReviewsSmartWidgets" Slices.
 */
const ReviewsSmartWidgets = ({
  slice,
  context,
}: ReviewsSmartWidgetsProps): JSX.Element => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer align={align}>
      <div className="sw-app" data-app={slice.primary.dataapp}></div>
    </SliceContainer>
  );
};

export default ReviewsSmartWidgets;
