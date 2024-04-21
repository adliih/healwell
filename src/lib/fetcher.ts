import { getSheetData } from "./google/sheet";

export interface ProductData {
  name: string;
  provider: string;
  quantity: number;
  price: string;
  imageUrls: string[];
}

export class ProductFetcher {
  async get(): Promise<ProductData[]> {
    const sheetData = await getSheetData(
      process.env.SPREADSHEET_ID!,
      process.env.RANGE!
    );
    sheetData?.shift();

    const rows = sheetData?.filter((row) => !!row[0]);

    return (
      rows?.map(([name, provider, price, quantity]) => ({
        name,
        provider,
        price,
        quantity,
        imageUrls: ["https://picsum.photos/200/300"],
      })) || []
    );
  }
}

export const productFetcher = new ProductFetcher();
