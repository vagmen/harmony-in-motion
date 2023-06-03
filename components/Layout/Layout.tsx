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
import classNames from "classnames";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Transition from "../Transition/Transition";

const materialSymbols = localFont({
  variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
  style: "normal",
  src: "../../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
  display: "block",
  weight: "100 700",
});

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

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
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollTo({ top: 0 });
      }
    }, 750);
  };

  return (
    <div
      style={montserrat.style}
      className={classNames(materialSymbols.variable, styles.container)}
      ref={ref}
    >
      <Header
        logo={config?.logo}
        menu={menu}
        actions={config?.buttons ? prepareButtons(config.buttons) : []}
        isThemeSwitcherVisible={isThemeSwitcherVisible}
      />
      {width < 1000 && <MobileNavbar menu={menu} />}
      <main className={styles.main}>
        <Transition>{children}</Transition>
      </main>
      <Footer footer={footer} />
    </div>
  );
};
