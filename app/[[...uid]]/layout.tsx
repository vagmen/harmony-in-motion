import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import Transition from "../../components/Transition/Transition";
import useWindowSize from "../../hooks/useWindowSize";
import classNames from "classnames";
import { prepareButtons } from "../../components/Buttons/Buttons";
import { MobileNavbar } from "../../components/MobileNavbar/MobileNavbar";
// import { useRouter } from "next/navigation";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import styles from "./index.module.css";
import { createClientNew } from "../../prismicio";
import { prepareMenuData } from "../../utils";

// const materialSymbols = localFont({
//   variable: "--font-family-symbols", // Variable name (to reference after in CSS/styles)
//   style: "normal",
//   src: "../../node_modules/material-symbols/material-symbols-rounded.woff2", // This is a reference to woff2 file from NPM package "material-symbols"
//   display: "block",
//   weight: "100 700",
// });

// const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isThemeSwitcherVisible = !!config?.isthemeswitchervisible;

  // const { width } = useWindowSize();
  // const router = useRouter();
  // const pageKey = router.asPath;
  // const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   onExitComplete();
  // }, [pageKey]);

  // const onExitComplete = () => {
  //   setTimeout(() => {
  //     if (ref.current) {
  //       ref.current.scrollTo({ top: 0 });
  //     }
  //   }, 750);
  // };

  const client = createClientNew();
  const [menuRaw, configRaw, footerRaw, ctasRaw] = await Promise.all([
    client.getSingle("menu", {
      fetchLinks: ["page.path"],
    }),
    client.getSingle("config"),
    client.getSingle("footer"),
    client.getByUID("action", "cta"),
  ]);

  const config = configRaw.data;
  const menu = prepareMenuData(menuRaw);
  const footer = footerRaw.data;
  const isThemeSwitcherVisible = !!config?.isthemeswitchervisible;

  return (
    <div
      className={styles.container}
      // ref={ref}
    >
      <Header
        logo={config?.logo}
        menu={menu}
        actions={config?.buttons ? prepareButtons(config.buttons) : []}
        isThemeSwitcherVisible={isThemeSwitcherVisible}
        ctaSlices={ctasRaw.data.slices}
      />
      <MobileNavbar menu={menu} />
      <main className={styles.main}>
        <Transition>{children}</Transition>
      </main>
      <Footer footer={footer} />
    </div>
  );
}
