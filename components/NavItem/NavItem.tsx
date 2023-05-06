import { Button } from "../Button/Button";
import styles from "./index.module.css";

interface INavItem {
  title: string;
  href: string;
  active?: boolean;
}

export const NavItem = ({ title, active = false, href }: INavItem) => {
  return (
    <li className={styles.navItem}>
      <Button link={href || "/"} variant="text" size="l">
        {title}
      </Button>
    </li>
  );
};
