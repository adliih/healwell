export interface ProductData {
  name: string;
  provider: string;
  quantity: number;
  price: string;
  imageUrls: string[];
}

export class ProductFetcher {
  async get(): Promise<ProductData[]> {
    return Array.from({ length: 20 }).map(() => ({
      name: "Sadajiwa - 30ml",
      provider: "Rahsa Nusantara",
      price: "Rp30,000",
      imageUrls: ["https://picsum.photos/200/300"],
      quantity: 10,
    }));
  }
}

export const productFetcher = new ProductFetcher();
