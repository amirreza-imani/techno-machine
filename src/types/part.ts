export type StrapiMediaFormat = {
  name?: string;
  hash?: string;
  ext?: string;
  mime?: string;
  width: number;
  height: number;
  size: number;
  url: string;
};

export type StrapiMedia = {
  id: number;
  documentId?: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width?: number | null;
  height?: number | null;
  url: string;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
};

export type Part = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  shortDescription: string;
  image?: StrapiMedia | null;
};

export type StrapiResponse<T> = {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
