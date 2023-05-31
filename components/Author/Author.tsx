import useWindowSize from "../../hooks/useWindowSize";
import styles from "./index.module.css";
import classNames from "classnames";
import { Avatar } from "../Avatar/Avatar";
import { AuthorDocument } from "../../prismicio-types";
import {
  isFilled,
  ContentRelationshipField,
  ImageFieldImage,
} from "@prismicio/client";

interface IAuthor {
  name?: string;
  position?: string;
  image?: ImageFieldImage;
}

export const Author = ({ name, position, image }: IAuthor) => {
  const { width } = useWindowSize();

  return (
    <div className={classNames(styles.container)}>
      <div>
        <Avatar image={image} />
      </div>
      <div>
        {name ? <p className={styles.name}>{name}</p> : <></>}
        {position ? <p className={styles.position}>{position}</p> : <></>}
      </div>
    </div>
  );
};

export const getAuthorComponent = (
  author: ContentRelationshipField<"author">
) =>
  isFilled.contentRelationship<"author", string, AuthorDocument["data"]>(
    author
  ) ? (
    <Author
      name={author.data?.name?.toString()}
      position={author.data?.position?.toString()}
      image={author.data?.photo}
    />
  ) : (
    <></>
  );
