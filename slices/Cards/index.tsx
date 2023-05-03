import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { CardsSlice } from "../../prismicio-types";
import { linkResolver } from "../../linkResolver";
import { asLink } from "@prismicio/helpers";

const Cards = ({ slice }: SliceComponentProps<CardsSlice>) => (
  <SliceContainer>
    <div className={styles.grid}>
      {slice.items.map((item, i) => (
        <Link href={asLink(item.link, linkResolver) || ""} key={i}>
          <div className={styles.card}>
            <PrismicNextImage
              field={item.image}
              className={styles.image}
              alt=""
            />
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </SliceContainer>
);

export default Cards;
