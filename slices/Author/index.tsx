import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import styles from "./styles.module.css";
import { Author } from "../../components/Author/Author";
import { isFilled } from "@prismicio/helpers";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { AuthorDocument } from "../../prismicio-types";

const AuthorSlice = ({ slice }: SliceComponentProps<Content.AuthorSlice>) => {
  const { author } = slice.primary;

  if (!author) {
    return <></>;
  }

  if (
    isFilled.contentRelationship<"author", string, AuthorDocument["data"]>(
      author
    )
  ) {
    return (
      <SliceContainer isMaxWidthLimited>
        <Author
          name={author.data?.name?.toString()}
          position={author.data?.position?.toString()}
          image={author.data?.photo}
        />
      </SliceContainer>
    );
  }

  return <></>;
};
export default AuthorSlice;
