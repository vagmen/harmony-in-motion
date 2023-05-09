import classNames from "classnames";
import styles from "./index.module.css";
import { ReactElement } from "react";
import { SelectField } from "@prismicio/types";

export type GridItemSize = "s" | "m" | "l" | "xl";

interface IGrid<IItem> {
  size?: GridItemSize;
  onClick?: (item: IItem) => void;
  items: IItem[];
  buildItem: (item: IItem) => ReactElement;
}

export const Grid = <IItem,>({ items, buildItem, size }: IGrid<IItem>) => {
  return (
    <div
      className={classNames(
        styles.container,
        { [styles.sizeS]: size === "s" },
        { [styles.sizeL]: size === "l" },
        { [styles.sizeXL]: size === "xl" }
      )}
    >
      {items.map((item, index) => (
        <div key={index}>{buildItem(item)}</div>
      ))}
    </div>
  );
};

type RawGridItemSize = "Маленькая" | "Средняя" | "Большая" | "Огромная";

export const prepareGridSize = (
  gridSize: SelectField<RawGridItemSize>
): GridItemSize | null => {
  switch (gridSize) {
    case "Маленькая":
      return "s";
      break;
    case "Средняя":
      return "m";
      break;
    case "Большая":
      return "l";
      break;
    case "Огромная":
      return "xl";
      break;
    default:
      return null;
      break;
  }
};
