import { ProductData } from "@/lib";
import { ProductCardType } from "./product-card/ProductCard.type";

interface Props {
  ProductCard: ProductCardType;
  products: ProductData[];
  className?: string;
}

export default function ProductList({
  products,
  className,
  ProductCard,
}: Props) {
  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 ${className}`}
    >
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}
