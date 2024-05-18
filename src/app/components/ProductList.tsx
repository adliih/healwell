import { ProductData } from "@/lib";
import ProductCard from "./ProductCard";
import { ElementType } from "react";

interface Props {
  products: ProductData[];
  CardAdditionalComponents?: ElementType[];
}

export default function ProductList({
  products,
  CardAdditionalComponents,
}: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      {products.map((product) => (
        <ProductCard
          key={product.name}
          product={product}
          AdditionalComponents={CardAdditionalComponents}
        />
      ))}
    </div>
  );
}
