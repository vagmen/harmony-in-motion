import { PrismicNextImage } from "@prismicio/next";
import { EmptyImageFieldImage, FilledImageFieldImage } from "@prismicio/client";
import useWindowSize from "../../hooks/useWindowSize";
import { IMenu } from "../../interfaces";
import { Navbar } from "../Navbar/Navbar";
import styles from "./index.module.css";
import { SliceContainer } from "../SliceContainer/SliceContainer";
import { Buttons, IAction } from "../Buttons/Buttons";
import { ThemeChanger } from "../ThemeChanger/ThemeChanger";
import Link from "next/link";

interface IHeader {
  logo: EmptyImageFieldImage | FilledImageFieldImage | null | undefined;
  menu: IMenu;
  actions?: IAction[];
  isThemeSwitcherVisible: boolean;
}

export const Header = ({
  menu,
  logo,
  actions,
  isThemeSwitcherVisible,
}: IHeader) => {
  const { width } = useWindowSize();

  // const share = async () => {
  //   if (navigator.canShare()) {
  //     try {
  //       await navigator.share({
  //         title: "Заголовок",
  //         text: "Описание",
  //         url: "https://example.com",
  //       });
  //       console.log("Ссылка успешно отправлена");
  //     } catch (error) {
  //       console.log("Ошибка отправки ссылки:", error);
  //     }
  //   } else {
  //     console.log("Web Share API не поддерживается в вашем браузере");
  //   }
  // };

  return (
    <header className={styles.sticky}>
      <SliceContainer topPadding="noPadding" width="fullWidthWithMargin">
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            {logo ? (
              <Link href="/">
                <PrismicNextImage field={logo} className={styles.logo} alt="" />
              </Link>
            ) : (
              <></>
            )}
          </div>
          {width > 1000 && menu?.menuItems && (
            <Navbar menuItems={menu.menuItems} />
          )}
          <div className={styles.actions}>
            {/* <ActionButton
              link="https://t.me/AhmetovaKat"
              startIcon="etert"
              newTab
              variant={"filled"}
            > */}
            {/* Телега */}
            {/* </ActionButton> */}
            <Buttons actions={actions} />
            {isThemeSwitcherVisible && <ThemeChanger />}
          </div>
        </div>
      </SliceContainer>
    </header>
  );
};
