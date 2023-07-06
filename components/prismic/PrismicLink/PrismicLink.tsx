import {
  PrismicLink as BasePrismicLink,
  PrismicLinkProps,
} from "@prismicio/react";
import { Button } from "../../Button/Button";
import {
  JSX,
  DetailedHTMLProps,
  AnchorHTMLAttributes,
  ForwardedRef,
} from "react";

type CustomInternalLink = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const InternalLink = (props: CustomInternalLink) => {
  const { href, children } = props;
  return (
    <Button variant="underlined" link={href || ""}>
      {children}
    </Button>
  );
};

const ExternalLink = (props: CustomInternalLink) => {
  const { href, children, target } = props;
  return (
    <Button variant="underlined" link={href || ""} newTab={target === "_blank"}>
      {children}
    </Button>
  );
};

type CustomPrismicLink = JSX.IntrinsicAttributes &
  (PrismicLinkProps<
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    DetailedHTMLProps<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >
  > & { ref?: ForwardedRef<Element> | undefined });

export const PrismicLink = (props1: CustomPrismicLink) => {
  return (
    <BasePrismicLink
      internalComponent={InternalLink}
      externalComponent={ExternalLink}
      // internalComponent={(props) => <a className="internal" {...props} />}
      // externalComponent={(props) => <a className="external" {...props} />}
      {...props1}
    />
  );
};
