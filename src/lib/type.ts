export interface ProductData {
  name: string;
  provider: string;
  quantity?: string;
  price: string;
  imageUrls: string[];
}

export interface GetProductInput {
  filter?: {
    providers?: string[];
  };
  pagination?: {
    skip?: number;
    take?: number;
  };
}
