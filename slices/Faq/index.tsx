import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FaqItem } from "../../components/FaqItem/FaqItem";
import styles from "./styles.module.css";
import {
  PageAlignment,
  SliceContainer,
} from "../../components/SliceContainer/SliceContainer";
import { Content } from "@prismicio/client";

const Faq = ({
  slice,
  context,
}: SliceComponentProps<Content.FaqSlice, { align: PageAlignment }>) => (
  <SliceContainer isMaxWidthLimited align={context.align}>
    <div className={styles.grid}>
      {slice?.items?.map((item) => (
        <FaqItem
          key={item.question}
          question={item.question || ""}
          answer={<PrismicRichText field={item.answer} />}
        />
      ))}
    </div>
  </SliceContainer>
);

export default Faq;
