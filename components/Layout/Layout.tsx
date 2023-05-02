import { IMenu } from "../../interfaces";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import useWindowSize from "../../hooks/useWindowSize";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { EmptyImageFieldImage, FilledImageFieldImage } from "@prismicio/types";
import styles from "./index.module.css";
import { ConfigDocumentData, Simplify } from "../../prismicio-types";
import { prepareLinkVariant, prepareLinkVisible } from "../../utils";
import { Buttons } from "../Buttons/Buttons";

interface ILayout {
  children: JSX.Element | JSX.Element[];
  menu: IMenu;
  config: Simplify<ConfigDocumentData>;
}

export const Layout = ({ children, menu, config }: ILayout) => {
  // if (error) return <div>Failed to load</div>;
  // if (!links) return <div>Loading...</div>;

  const { width } = useWindowSize();

  return (
    <div className={styles.container}>
      <Header
        logo={config?.logo}
        menu={menu}
        actions={
          config?.buttons?.map((item) => ({
            link: item.link,
            title: item.title,
            variant: prepareLinkVariant(item.variant),
            visible: prepareLinkVisible(item.visible || "Везде"),
          })) || []
        }
      />
      {width < 1000 && <MobileNavbar menu={menu} />}
      <main className={styles.main}>{children}</main>
      <Footer />
      <div>
        <Buttons
          actions={
            config?.buttonsbottom?.map((item) => ({
              link: item.link,
              title: item.title,
              variant: prepareLinkVariant(item.variant),
              visible: prepareLinkVisible(item.visible || "Везде"),
            })) || []
          }
        />
      </div>
    </div>
  );
};
