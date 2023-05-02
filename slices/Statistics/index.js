// import React from "react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import styles from "./styles.module.css";

/**
 * @typedef {import("@prismicio/client").Content.StatisticsSlice} StatisticsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StatisticsSlice>} StatisticsProps
 * @param { StatisticsProps }
 */
const Statistics = ({ slice }) => (
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
