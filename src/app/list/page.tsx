import { productFetcher } from "@/lib/server";
import ProductList from "../components/ProductList";
import ArrowPagination from "../components/ArrowPagination";
import ProductCardPriceList from "../components/product-card/ProductCardPriceList";

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
      <ProductList
        className="grid-rows-3"
        products={products}
        ProductCard={ProductCardPriceList}
      />
      <ArrowPagination />
    </>
  );
}
