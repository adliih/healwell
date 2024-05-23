export const dynamic = "force-dynamic"; // defaults to auto

import { grouper, productFetcher } from "@/lib";
import GroupedProductList from "./components/GroupedProductList";

interface Param {
  searchParams: {
    providers: string[];
  };
}

export default async function Home({ searchParams }: Param) {
  const { providers } = searchParams;
  const products = await productFetcher.get({ filter: { providers } });
  const groups = grouper.byProvider(products);

  return <GroupedProductList groups={groups} />;
}
