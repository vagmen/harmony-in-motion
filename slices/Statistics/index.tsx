import { SliceComponentProps } from "@prismicio/react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { StatisticsSlice } from "../../prismicio-types";
import styles from "./styles.module.css";

const Statistics = ({ slice }: SliceComponentProps<StatisticsSlice>) => (
  <SliceContainer>
    <div className={styles.grid}>
      {slice?.items?.map((item) => (
        <div key={item.description} className={styles.item}>
          <span className={styles.value}>{item.value}</span>
          <span className={styles.description}>{item.description}</span>
        </div>
      ))}
    </div>
  </SliceContainer>
);

export default Statistics;
