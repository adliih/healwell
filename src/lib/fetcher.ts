import { getSheetData } from "./google/sheet";

export interface ProductData {
  name: string;
  provider: string;
  quantity: number;
  price: string;
  imageUrls: string[];
}

function parseImages(images: string): string[] {
  if (!images) {
    return [];
  }

  const urls = images.split(",");
  return urls.filter(isNonEmptyUrl);
}

function isNonEmptyUrl(url: string): boolean {
  return url.trim() != "";
}

export class ProductFetcher {
  async get(): Promise<ProductData[]> {
    const sheetData = await getSheetData(
      process.env.SPREADSHEET_ID!,
      process.env.RANGE!
    );

    const rows = sheetData?.filter((row) => !!row[0]) || [];

    let results =
      rows?.map(([name, provider, price, quantity, images]) => ({
        name,
        provider,
        price,
        quantity,
        imageUrls: parseImages(images),
      })) || [];

    results = results.filter((r) => r.imageUrls.length > 0);

    return results;
  }
}

export const productFetcher = new ProductFetcher();
