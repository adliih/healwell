import { ProductData } from "@/lib";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: ProductData[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}
