export interface Product {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  shortDescription: string;
  description?: string;
  featured: boolean;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: Record<string, unknown>;
}
