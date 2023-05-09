import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { Button } from "../../components/Button/Button";
import { prepareButtonVariant } from "../../components/Buttons/Buttons";
import { linkResolver } from "../../linkResolver";
import { asLink } from "@prismicio/helpers";
import styles from "./index.module.css";
import Link from "next/link";

/**
 * Props for `FooterColumn`.
 */
export type FooterColumnProps = SliceComponentProps<Content.FooterColumnSlice>;

/**
 * Component for "FooterColumn" Slices.
 */
const FooterColumn = ({ slice }: FooterColumnProps): JSX.Element => {
  return (
    <div className={styles.column}>
      <Link href={asLink(slice.primary.link, linkResolver) || ""}>
        <h5>{slice.primary.title}</h5>
      </Link>
      {slice.items.map((item) => (
        <Button
          key={item.title}
          variant={prepareButtonVariant(item.variant) || "outlined"}
          link={asLink(item.link, linkResolver) || ""}
          // size={prepareButtonSize(item.size)}
          newTab={item.link.link_type === "Web"}
          startIcon={item.starticon}
          // endIcon: item.endicon,
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};

export default FooterColumn;
