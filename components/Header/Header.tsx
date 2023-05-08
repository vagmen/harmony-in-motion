import { PrismicNextImage } from "@prismicio/next";
import { EmptyImageFieldImage, FilledImageFieldImage } from "@prismicio/types";
import useWindowSize from "../../hooks/useWindowSize";
import { IMenu } from "../../interfaces";
import { Navbar } from "../Navbar/Navbar";
import styles from "./index.module.css";
import { SliceContainer } from "../SliceContainer/SliceContainer";
import { Buttons, IAction } from "../Buttons/Buttons";
import { Button } from "../Button/Button";
import { ThemeChanger } from "../ThemeChanger/ThemeChanger";
import { IconButton } from "../IconButton/IconButton";
import { useState } from "react";

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

  const [fav, setFav] = useState(false);

  return (
    <div className={styles.sticky}>
      <SliceContainer topPadding="noPadding" width="fullWidth">
        <div className={styles.container}>
          {logo ? (
            <PrismicNextImage field={logo} className={styles.logo} alt="" />
          ) : (
            <div></div>
          )}
          {width > 1000 && menu?.menuItems && (
            <Navbar menuItems={menu.menuItems} />
          )}
          <div className={styles.actions}>
            <IconButton onClick={() => setFav(!fav)} toggledOn={fav}>
              favorite
            </IconButton>
            <IconButton
              onClick={() => setFav(!fav)}
              toggledOn={fav}
              variant={"filledTonal"}
            >
              favorite
            </IconButton>
            <IconButton
              onClick={() => setFav(!fav)}
              toggledOn={fav}
              variant={"outlined"}
            >
              favorite
            </IconButton>
            <IconButton
              onClick={() => setFav(!fav)}
              toggledOn={fav}
              variant={"standard"}
            >
              favorite
            </IconButton>
            {isThemeSwitcherVisible && <ThemeChanger />}
            <Buttons actions={actions} />
          </div>
        </div>
      </SliceContainer>
    </div>
  );
};
