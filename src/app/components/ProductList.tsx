import { ProductData } from "@/lib";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: ProductData[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
