import React from "react";
import { SliceComponentProps } from "@prismicio/react";
import styles from "./styles.module.css";
import { Button } from "../../components/Button/Button";
import { SliceContainer } from "../../components/SliceContainer/SliceContainer";
import { Content } from "@prismicio/client";
import { usePrismicContext } from "../../utils";

const Form = ({ slice, context }: SliceComponentProps<Content.FormSlice>) => {
  const { align } = usePrismicContext(context);
  return (
    <SliceContainer isMaxWidthLimited align={align}>
      <form className={styles.form}>
        {slice?.items?.map(
          (
            item: {
              title:
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
          ) => (
            <div key={i} className={styles.control}>
              <span>{item.title}</span>
              <input
                value="sdfsdfsdf"
                className={styles.input}
                onChange={() => {
                  //
                }}
              />
              {/* <div dangerouslySetInnerHTML={{ __html: item.sliceexample.html }} /> */}
            </div>
          )
        )}
        <Button variant={slice.primary.buttonvariant}>
          {slice.primary.buttontitle}
        </Button>
      </form>
    </SliceContainer>
  );
};

export default Form;
