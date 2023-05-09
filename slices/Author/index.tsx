import { SliceComponentProps } from "@prismicio/react";
import { Author } from "../../components/Author/Author";
import { isFilled } from "@prismicio/helpers";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { AuthorDocument, AuthorSlice } from "../../prismicio-types";
import { usePrismicContext } from "../../utils";

const AuthorSlice = ({ slice, context }: SliceComponentProps<AuthorSlice>) => {
  const { author } = slice.primary;
  const { align } = usePrismicContext(context);

  if (!author) {
    return <span>asd</span>;
  }

  if (
    isFilled.contentRelationship<"author", string, AuthorDocument["data"]>(
      author
    )
  ) {
    return (
      <SliceContainer isMaxWidthLimited align={align}>
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
