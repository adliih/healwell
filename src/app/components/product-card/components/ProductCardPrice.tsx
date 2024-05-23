import { ProductCardProps } from "../ProductCard.type";

export default function ProductCardPrice({ product }: ProductCardProps) {
  const { price } = product;
  return <p className="mt-2 text-xs text-gray-500 ">{price}</p>;
}
