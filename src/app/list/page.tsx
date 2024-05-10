export const dynamic = "force-dynamic"; // defaults to auto

import { filterer, grouper, productFetcher } from "@/lib";
import ProductList from "../components/ProductList";

export default async function List({
  searchParams,
}: {
  searchParams: {
    providers: string[];
  };
}) {
  const providers = searchParams.providers || [];

  const products = await productFetcher.get();
  const filtered = filterer.byProviders(products, providers);
  filtered.forEach((product) => {
    product.quantity = undefined;
  });

  return <ProductList products={filtered} />;
}
