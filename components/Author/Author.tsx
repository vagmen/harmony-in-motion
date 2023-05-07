import useWindowSize from "../../hooks/useWindowSize";
import styles from "./index.module.css";
import classNames from "classnames";
import { ImageFieldImage } from "@prismicio/types";
import { Avatar } from "../Avatar/Avatar";

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
