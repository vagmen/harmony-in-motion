import React from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import {
  PageAlignment,
  SliceContainer,
} from "../../components/SliceContainer/SliceContainer";
import { Content } from "@prismicio/client";

const Text = ({
  slice,
  context,
}: SliceComponentProps<Content.TextSlice, { align: PageAlignment }>) => (
  <SliceContainer align={context.align} isMaxWidthLimited>
    <PrismicRichText field={slice.primary.content} />
  </SliceContainer>
);

export default Text;
