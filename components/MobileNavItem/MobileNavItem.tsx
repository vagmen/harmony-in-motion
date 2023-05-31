import { PrismicNextImage } from "@prismicio/next";
import { EmptyImageFieldImage, FilledImageFieldImage } from "@prismicio/client";
import Link from "next/link";
import styles from "./index.module.css";

interface INavItem {
  title: string;
  link: string;
  active?: boolean;
  icon: EmptyImageFieldImage | FilledImageFieldImage | null | undefined;
}

export const MobileNavItem = ({
  title,
  link,
  active = false,
  icon,
}: INavItem) => {
  return (
    <li className={styles.navItem}>
      <Link href={link || ""} className={styles.link}>
        {/* <a className={`nav__item ${active ? "active" : ""}`}> */}
        {/* <img src={icon?.url} alt="" /> */}
        <div className={styles.imageWrapper}>
          <PrismicNextImage field={icon} className={styles.image} alt="" />
        </div>
        <span className={styles.title}>{title}</span>
        {/* </a> */}
      </Link>
    </li>
  );
};
