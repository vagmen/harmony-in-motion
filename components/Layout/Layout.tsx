import { IMenu } from "../../interfaces";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import useWindowSize from "../../hooks/useWindowSize";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import styles from "./index.module.css";
import {
  ConfigDocumentData,
  FooterDocumentData,
  Simplify,
} from "../../prismicio-types";
import { prepareButtons } from "../Buttons/Buttons";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

interface ILayout {
  children: JSX.Element | JSX.Element[];
  menu: IMenu;
  config?: Simplify<ConfigDocumentData>;
  footer?: Simplify<FooterDocumentData>;
}

export const Layout = ({ children, menu, config, footer }: ILayout) => {
  // if (error) return <div>Failed to load</div>;
  // if (!links) return <div>Loading...</div>;
  const isThemeSwitcherVisible = !!config?.isthemeswitchervisible;

  const { width } = useWindowSize();
  const router = useRouter();
  const pageKey = router.asPath;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    onExitComplete();
  }, [pageKey]);

  const onExitComplete = () => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0 });
    }
  };

  return (
    // <motion.div
    //   initial={{ x: 300, opacity: 0 }}
    //   animate={{ x: 0, opacity: 1 }}
    //   exit={{ x: 300, opacity: 0 }}
    //   transition={{
    //     type: "spring",
    //     stiffness: 260,
    //     damping: 20,
    //   }}
    //   className={styles.container}
    // >
    <div className={styles.container} ref={ref}>
      <Header
        logo={config?.logo}
        menu={menu}
        actions={config?.buttons ? prepareButtons(config.buttons) : []}
        isThemeSwitcherVisible={isThemeSwitcherVisible}
      />
      {width < 1000 && <MobileNavbar menu={menu} />}
      <main className={styles.main}>{children}</main>
      <Footer footer={footer} />
    </div>
  );
};
