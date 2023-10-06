export type Product = {
  id: string;
  demoUrl: string;
  description: string;
  name: string;
  sales: number;
  staticPage: string;
  version: string;
  price: number;
  mdx: string;
  lastUpdated: Date;
};

export type User = {
  name: string;
  email: string;
  purchase: string[];
}