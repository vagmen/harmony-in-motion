import { LinkResolverFunction } from "@prismicio/helpers";
import { FilledContentRelationshipField } from "@prismicio/types";

// export function linkResolver(
//   document: FilledContentRelationshipField<string, string, unknown>
// ) {
//   console.log("111", document);

//   if (document.type === "page" && document.data) {
//     return document.data.path as any;
//     // return `${document.url}/${document.uid}`;
//     // return "/blog/" + document.uid + document.url.;
//   }

//   return "/";
// }

// export function linkResolver(
//   document: FilledContentRelationshipField<string, string, { path: string }>
// ) {
//   if (document && document.data && document.type === "page") {
//     return document.data.path;
//   }
//   return null;
// }

export const linkResolver: LinkResolverFunction<string | null> = (
  document: FilledContentRelationshipField<string, string, { path: string }>
) => {
  if (document && document.data && document.type === "page") {
    return document.data.path;
  }
  return null;
};
