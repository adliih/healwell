export const dynamic = "force-dynamic"; // defaults to auto

import { productFetcher } from "@/lib";
import ProductList from "../components/ProductList";

export default async function List({
  searchParams,
}: {
  searchParams: {
    providers: string[];
    skip: number;
    take: number;
  };
}) {
  const { providers, skip, take } = searchParams;

  const products = await productFetcher.get({
    filter: { providers },
    pagination: { skip, take },
  });
  products.forEach((product) => {
    product.quantity = undefined;
  });

  return <ProductList products={products} />;
}
