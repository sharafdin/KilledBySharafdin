export enum ProductType {
  APP = "app",
  SERVICE = "service",
  HARDWARE = "hardware",
  EXTENSION = "extension",
  PACKAGE = "package"
}

export interface Product {
  name: string;
  description: string;
  dateClose: string;
  dateOpen: string;
  link: string;
  type: ProductType;
}

export type ProductWithSlug = Product & { slug: string };
