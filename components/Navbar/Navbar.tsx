import { IMenuItem } from "../../interfaces";
import { NavItem } from "../NavItem/NavItem";
import styles from "./index.module.css";

interface INavbar {
  menuItems: IMenuItem[];
}

export const Navbar = ({ menuItems }: INavbar) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {menuItems.map((item) => (
            <NavItem key={item.link} href={item.link} title={item.title} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
