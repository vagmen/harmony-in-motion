import { SliceComponentProps } from "@prismicio/react";
import { Author } from "../../components/Author/Author";
import { isFilled } from "@prismicio/helpers";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { AuthorDocument, AuthorSlice } from "../../prismicio-types";

const AuthorSlice = ({ slice }: SliceComponentProps<AuthorSlice>) => {
  const { author } = slice.primary;

  if (!author) {
    return <span>asd</span>;
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
