import { ProductData } from "@/lib";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: ProductData[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}
