import { SliceComponentProps } from "@prismicio/react";
import { getAuthorComponent } from "../../components/Author/Author";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { AuthorSlice } from "../../prismicio-types";
import { usePrismicContext } from "../../utils";

const AuthorSlice = ({ slice, context }: SliceComponentProps<AuthorSlice>) => {
  const { align } = usePrismicContext(context);

  return (
    <SliceContainer width="textWidth" align={align}>
      {getAuthorComponent(slice.primary.author)}
    </SliceContainer>
  );
};
export default AuthorSlice;
