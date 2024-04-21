import { ProductData } from "@/lib";
import ProductCard from "./ProductCard";

export default function ProductList({ products }: { products: ProductData[] }) {
  return (
    <>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </>
  );
}
