import { IMenu } from "../../interfaces";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import useWindowSize from "../../hooks/useWindowSize";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import styles from "./index.module.css";
import { ConfigDocumentData, Simplify } from "../../prismicio-types";
import { prepareButtons } from "../Buttons/Buttons";

interface ILayout {
  children: JSX.Element | JSX.Element[];
  menu: IMenu;
  config?: Simplify<ConfigDocumentData>;
}

export const Layout = ({ children, menu, config }: ILayout) => {
  // if (error) return <div>Failed to load</div>;
  // if (!links) return <div>Loading...</div>;
  const isThemeSwitcherVisible = !!config?.isthemeswitchervisible;

  const { width } = useWindowSize();

  return (
    <div className={styles.container}>
      <Header
        logo={config?.logo}
        menu={menu}
        actions={config?.buttons ? prepareButtons(config.buttons) : []}
        isThemeSwitcherVisible={isThemeSwitcherVisible}
      />
      {width < 1000 && <MobileNavbar menu={menu} />}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
