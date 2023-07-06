import { LinkResolverFunction } from "@prismicio/client";
import {
  PrismicRichText as BasePrismicRichText,
  JSXMapSerializer,
  PrismicRichTextProps,
} from "@prismicio/react";
import { Image } from "../../Image/Image";
import { PrismicLink } from "../PrismicLink/PrismicLink";
import { linkResolver } from "../../../linkResolver";

const defaultComponents: JSXMapSerializer = {
  image: ({ children, node, type }) => (
    <Image field={node} alt={node.alt || ""} withPadding />
  ),
  hyperlink: ({ node, children, key }) => (
    <PrismicLink
      key={key}
      field={node.data}
      linkResolver={linkResolver}
      //   internalComponent={args.internalLinkComponent}
      //   externalComponent={args.externalLinkComponent}
    >
      {children}
    </PrismicLink>
  ),
};

export const PrismicRichText = ({
  components,
  field,
  ...props
}: PrismicRichTextProps<LinkResolverFunction>) => {
  return (
    <BasePrismicRichText
      field={field}
      components={{ ...defaultComponents, ...components }}
      {...props}
    />
  );
};
