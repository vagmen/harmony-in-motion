import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FaqItem } from "../../components/FaqItem/FaqItem";
import styles from "./styles.module.css";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Content } from "@prismicio/client";
import { Key } from "react";
import { usePrismicContext } from "../../utils";

const Faq = ({ slice, context }: SliceComponentProps<Content.FaqSlice>) => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer isMaxWidthLimited align={align}>
      <div className={styles.grid}>
        {slice?.items?.map(
          (item: { question: Key | null | undefined; answer: any }) => (
            <FaqItem
              key={item.question}
              question={item.question?.toString() || ""}
              answer={<PrismicRichText field={item.answer} />}
            />
          )
        )}
      </div>
    </SliceContainer>
  );
};

export default Faq;
