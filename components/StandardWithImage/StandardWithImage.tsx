import styles from "./index.module.css";
import classNames from "classnames";
import { ImageField } from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import { Link } from "../Link/Link";
import { asLink } from "@prismicio/helpers";
import { linkResolver } from "../../linkResolver";
import { IStandard } from "../Standard/Standard";
import { PrismicNextImage } from "@prismicio/next";

interface IStandardWithImage extends IStandard {
  image: ImageField;
}

export const StandardWithImage = ({
  title,
  description,
  align,
  actions,
  image,
}: IStandardWithImage) => {
  return (
    <div
      className={classNames(
        styles.container
        // { [styles.alignLeft]: align === "Слева" },
        // { [styles.alignRight]: align === "Справа" }
      )}
    >
      <div className={styles.content}>
        <PrismicRichText field={title} />
        <PrismicRichText field={description} />
        <div className={styles.actions}>
          {actions?.map((action) => (
            <Link
              variant={action.variant}
              key={action.title}
              href={asLink(action.link, linkResolver) || ""}
            >
              {action.title}
            </Link>
          ))}
        </div>
      </div>
      <PrismicNextImage field={image} />
    </div>
  );
};
