import { SliceZone } from "@prismicio/react";
import { FooterDocumentData, Simplify } from "../../prismicio-types";
import { SliceContainer } from "../SliceContainer/SliceContainer";
import { components } from "../../slices";
import styles from "./index.module.css";
import { Divider as DividerComponent } from "../../components/Divider/Divider";

interface IFooter {
  footer?: Simplify<FooterDocumentData>;
}

export const Footer = ({ footer }: IFooter) => {
  if (!footer) {
    return <></>;
  }
  return (
    <>
      <SliceContainer width="fullWidthWithMargin">
        <DividerComponent />
      </SliceContainer>
      <SliceContainer>
        <div className={styles.grid}>
          <SliceZone slices={footer.slices} components={components} />
        </div>
      </SliceContainer>
    </>
  );
};
