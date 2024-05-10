export const dynamic = "force-dynamic"; // defaults to auto

import { grouper, productFetcher } from "@/lib";
import GroupedProductList from "./components/GroupedProductList";

export default async function Home() {
  const products = await productFetcher.get();
  const groups = grouper.byProvider(products);

  return <GroupedProductList groups={groups} />;
}
