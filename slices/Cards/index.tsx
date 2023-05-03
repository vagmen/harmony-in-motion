import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { CardsSlice } from "../../prismicio-types";

const Cards = ({ slice }: SliceComponentProps<CardsSlice>) => (
  <SliceContainer>
    <div className={styles.grid}>
      {slice?.items?.map(
        (
          item: {
            link: string;
            title:
              | boolean
              | React.Key
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | null
              | undefined;
            image: any;
            description:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          },
          i: React.Key | null | undefined
        ) => {
          return (
            <Link href={item.link as string} key={i}>
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
          );
        }
      )}
    </div>
  </SliceContainer>
);

export default Cards;
