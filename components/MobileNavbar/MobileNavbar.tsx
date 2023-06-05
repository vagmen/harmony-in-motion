"use client";
import useWindowSize from "../../hooks/useWindowSize";
import { IMenu } from "../../interfaces";
import { MobileNavItem } from "../MobileNavItem/MobileNavItem";
import styles from "./index.module.css";

interface INavbar {
  menu: IMenu;
}

export const MobileNavbar = ({ menu }: INavbar) => {
  const { width } = useWindowSize();

  if (width > 1000) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {menu?.menuItems.map((item) => (
            <MobileNavItem
              key={item.link}
              link={item.link}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
