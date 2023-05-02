import { ParsedUrlQuery } from "querystring";
import { IMenu, PageAlignment } from "../interfaces";
import { MenuDocument, PageDocument } from "../prismicio-types";
import { SelectField } from "@prismicio/types";
import { LinkVariant } from "../components/Link/Link";

const getUrlsFromPages = (pages: PageDocument<string>[]) => {
  const urls = pages.map((page) => {
    let pathParts: string[] = [];
    if (page.data.path) {
      pathParts = page.data.path.split("/");
      pathParts.shift();
    }
    return pathParts;
  });
  return urls;
};

const getPathsFromUrls = (urls: string[][]) =>
  urls.map((slug) => {
    return {
      params: { uid: slug },
    };
  });

export const getPathsFromPages = (pages: PageDocument<string>[]) => {
  const urls = getUrlsFromPages(pages);
  return getPathsFromUrls(urls);
};

export const getPathFromParams = (params: ParsedUrlQuery | undefined) => {
  if (!params || !params.uid) {
    return "/";
  }
  if (typeof params.uid === "string") {
    return params.uid;
  }
  return "/" + params.uid.join("/");
};

export const prepareMenuData: (menu: MenuDocument<string>) => IMenu = (
  menu
) => ({
  menuItems: menu.data.menuitem.map((item: any) => ({
    title: item.title,
    link: (item.pageRelationshipField.data.path || "") as string,
  })),
});

type RawAlignment = "Слева" | "По центру" | "Справа";

export const prepareAlign: (align: RawAlignment | null) => PageAlignment = (
  align: string | null
) => {
  switch (align) {
    case "Слева":
      return "start";
      break;
    case "По центру":
      return "center";
      break;
    case "Справа":
      return "end";
      break;
    default:
      return "center";
      break;
  }
};

type IActionVariant = SelectField<
  "Главная" | "Главная облегченная" | "Контурная" | "Текстовая" | "Подчеркнутая"
>;

export const prepareLinkVariant: (variant: IActionVariant) => LinkVariant = (
  variant: IActionVariant
) => {
  switch (variant) {
    case "Главная":
      return "filled";
      break;
    case "Главная облегченная":
      return "filledTonal";
      break;
    case "Контурная":
      return "outlined";
      break;
    case "Текстовая":
      return "text";
      break;
    default:
      return "underscored";
      break;
  }
};

export const prepareImagePosition = (imagePosition: string) => {
  if (imagePosition === "Слева") {
    return "left";
  }
  if (imagePosition === "Справа") {
    return "right";
  }
  return null;
};

export const prepareImagePositionMobile = (imagePosition: string) => {
  if (imagePosition === "Сверху") {
    return "top";
  }
  if (imagePosition === "Снизу") {
    return "bottom";
  }
  if (imagePosition === "Не показывать") {
    return "hidden";
  }
  return null;
};

export const prepareLinkVisible = (linkVisible: string) => {
  if (linkVisible === "Везде") {
    return "all";
  }
  if (linkVisible === "Только десктоп") {
    return "desktop";
  }
  if (linkVisible === "Только мобильный") {
    return "mobile";
  }
  return undefined;
};
