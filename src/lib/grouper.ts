import { ProductData } from ".";

export interface Grouped {
  name: string;
  products: ProductData[];
}

export class Grouper {
  byProvider(products: ProductData[]): Grouped[] {
    const groups: Grouped[] = [];

    for (const product of products) {
      const provider = product.provider;
      let group = groups.find(({ name }) => name === provider);
      if (!group) {
        group = {
          name: provider,
          products: [],
        };
        groups.push(group);
      }

      group.products.push(product);
    }

    return groups;
  }
}

export const grouper = new Grouper();
