import { productFetcher } from "@/lib";
import ProductList from "../components/ProductList";
import ArrowPagination from "../components/ArrowPagination";

interface Param {
  searchParams: {
    providers: string[];
    skip: string;
    take: string;
  };
}

export default async function List({ searchParams }: Param) {
  const { providers } = searchParams;
  const skip = parseInt(searchParams.skip) || 0;
  const take = parseInt(searchParams.take) || Infinity;

  const products = await productFetcher.get({
    filter: { providers },
    pagination: {
      skip,
      take,
    },
  });
  return (
    <>
      <ProductList className="grid-cols-3 grid-rows-3" products={products} />
      <ArrowPagination />
    </>
  );
}
