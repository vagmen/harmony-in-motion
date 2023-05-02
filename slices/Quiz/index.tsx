import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import styles from "./styles.module.css";

const Template = ({ slice }: SliceComponentProps<Content.FormSlice>) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          Шаблон
          {/* <h2 className={styles.title}>{slice.primary.title}</h2> */}
          {/* <p>{slice.primary.description}</p> */}
        </div>
      </div>
    </section>
  );
};
export default Template;
