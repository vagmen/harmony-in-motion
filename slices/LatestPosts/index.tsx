import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { HeaderHorisontal } from "../../components/HeaderHorisontal/HeaderHorisontal";
import { RichTextField } from "@prismicio/types";
import { LatestPostsGrid } from "../../components/LatestPostsGrid/LatestPostsGrid";

const title: RichTextField = [
  {
    type: "heading2",
    text: "Последние посты",
    spans: [],
  },
];

/**
 * Props for `Posts`.
 */
export type PostsProps = SliceComponentProps<Content.PostsSlice>;

/**
 * Component for "Posts" Slices.
 */
const LatestPosts = ({ slice }: PostsProps): JSX.Element => (
  <>
    <SliceContainer>
      <HeaderHorisontal
        title={title}
        actions={[{ title: "Все статьи", link: "/blog", variant: "outlined" }]}
      />
    </SliceContainer>
    <SliceContainer topPadding="small">
      <LatestPostsGrid />
    </SliceContainer>
  </>
);

export default LatestPosts;
