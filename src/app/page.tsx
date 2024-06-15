export const dynamic = "force-dynamic"; // defaults to auto

import { productFetcher } from "@/lib/server";
import { grouper } from "@/lib/client";
import GroupedProductList from "./components/GroupedProductList";
import FloatingCart from "./components/FloatingCart";

interface Param {
  searchParams: {
    providers: string[];
  };
}

export default async function Home({ searchParams }: Param) {
  const { providers } = searchParams;
  const products = await productFetcher.get({ filter: { providers } });
  const groups = grouper.byProvider(products);

  return (
    <>
      <GroupedProductList groups={groups} />
      <FloatingCart />
    </>
  );
}
