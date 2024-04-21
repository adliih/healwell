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
  return urls.map(parseGdriveImageLink).filter(isNonEmptyUrl);
}

function isNonEmptyUrl(url: string): boolean {
  return url.trim() != "";
}

function parseGdriveImageLink(image: string): string {
  return image
    .replace(
      "https://drive.google.com/file/d/",
      "https://lh3.googleusercontent.com/d/"
    )
    .replace(/\/view.*/, "?authuser=0")
    .trim();
}

export class ProductFetcher {
  async get(): Promise<ProductData[]> {
    const sheetData = await getSheetData(
      process.env.SPREADSHEET_ID!,
      process.env.RANGE!
    );
    sheetData?.shift();

    const rows = sheetData?.filter((row) => !!row[0]);

    let results =
      rows?.map(([name, provider, price, quantity, _, _2, images]) => ({
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
