import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import styles from "./styles.module.css";
import Link from "next/link";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";

/**
 * @typedef {import("@prismicio/client").Content.HeaderWithLinkSlice} HeaderWithLinkSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderWithLinkSlice>} HeaderWithLinkProps
 * @param { HeaderWithLinkProps }
 */
const HeaderWithLink = ({ slice }) => {
  // console.log("sasd", slice.primary);
  return (
    // <section className={styles.section}>
    <SliceContainer>
      <div>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
      </div>
      <div>
        {slice.primary.link && (
          <Link href={slice.primary.link}>{slice.primary.linktitle}</Link>
        )}
        {/* {slice.primary.linktitle} */}
        {/* <PrismicLink field={slice.primary.link}>My Link</PrismicLink> */}
        {/* <PrismicLink field={slice.primary.link}>
          {slice.primary.linktitle}
        </PrismicLink> */}
      </div>
    </SliceContainer>
  );
};

export default HeaderWithLink;
