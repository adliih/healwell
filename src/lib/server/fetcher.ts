import { randomUUID } from "crypto";
import { filterer } from ".";
import { GetProductInput, ProductData } from "../type";
import { getSheetData } from "./google/sheet";

function parseImages(images: string): string[] {
  if (!images) {
    return [];
  }

  const urls = images.split(",").map((url) => url.trim());
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
    rows?.map(([name, provider, price, quantity, images], index) => ({
      id: `product-${index}`,
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
    const { skip = 0, take = Infinity } = input?.pagination || {};
    let results = await getAndParseSheetToProductData();

    if (!!providers) {
      results = filterer.byProviders(results, providers);
    }
    results = results.slice(skip, skip + take);

    return results;
  }
}

export const productFetcher = new ProductFetcher();
