import { Link } from "../Link/Link";
import styles from "./index.module.css";

interface INavItem {
  title: string;
  href: string;
  active?: boolean;
}

export const NavItem = ({ title, active = false, href }: INavItem) => {
  return (
    <li className={styles.navItem}>
      <Link href={href || "/"} variant="text">
        {title}
      </Link>
    </li>
  );
};
