import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.css";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";

/**
 * @typedef {import("@prismicio/client").Content.ImageWithCaptionSlice} ImageWithCaptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageWithCaptionSlice>} ImageWithCaptionProps
 * @param { ImageWithCaptionProps }
 */
const ImageWithCaption = ({ slice }) => (
  <SliceContainer>
    <PrismicNextImage
      field={slice.primary.image}
      className={styles.image}
      alt=""
      // loading="lazy"
    />
    <span>{slice.primary.caption}</span>
  </SliceContainer>
);

export default ImageWithCaption;
