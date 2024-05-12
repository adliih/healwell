import { filterer } from ".";
import { getSheetData } from "./google/sheet";

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

async function getAndParseSheetToProductData(): Promise<ProductData[]> {
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

export class ProductFetcher {
  async get(input?: GetProductInput): Promise<ProductData[]> {
    const { providers } = input?.filter || {};
    let results = await getAndParseSheetToProductData();

    if (!!providers) {
      results = filterer.byProviders(results, providers);
    }

    return results;
  }
}

export const productFetcher = new ProductFetcher();
