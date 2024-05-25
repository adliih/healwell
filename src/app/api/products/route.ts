import { productFetcher } from "@/lib/server";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
  const data = await productFetcher.get();
  return Response.json(data);
}
