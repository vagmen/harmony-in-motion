import React from "react";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { GapSlice } from "../../prismicio-types";
import { SliceComponentProps } from "@prismicio/react";

const Gap = ({ slice }: SliceComponentProps<GapSlice>) => (
  <SliceContainer>
    <span> </span>
  </SliceContainer>
);

export default Gap;
