import { productFetcher } from "@/lib";
import ProductList from "./components/ProductList";

export default async function Home() {
  const products = await productFetcher.get();

  return (
    <main className="grid grid-cols-4 gap-4 min-h-screen items-center justify-between p-24">
      <ProductList products={products} />
    </main>
  );
}
