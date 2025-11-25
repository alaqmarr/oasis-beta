export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  specs: Record<string, string>;
  applications?: string[];
  image?: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  applications: string[];
  products: string[];
  image?: string;
}
