import { ProductData } from "../type";

export class Filterer {
  byProviders(products: ProductData[], providers: string[]): ProductData[] {
    return products.filter((p) => providers.includes(p.provider));
  }
}

export const filterer = new Filterer();
