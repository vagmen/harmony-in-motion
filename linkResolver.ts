import {
  LinkResolverFunction,
  FilledContentRelationshipField,
} from "@prismicio/client";

interface IDocumentPath {
  path: string;
}

const isDocumentPath = (obj: unknown): obj is IDocumentPath => {
  return typeof obj === "object" && obj !== null && "path" in obj;
};

export const linkResolver: LinkResolverFunction<string | null> = (
  document: FilledContentRelationshipField<string, string, unknown>
) => {
  if (
    document &&
    document.data &&
    document.type === "page" &&
    isDocumentPath(document.data)
  ) {
    return document.data.path;
  }
  return null;
};
