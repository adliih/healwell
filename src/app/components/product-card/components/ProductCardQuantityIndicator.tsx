import Badge from "../../Badge";
import { ProductCardProps } from "../ProductCard.type";

export default function ProductCardQuantityIndicator({
  product,
}: ProductCardProps) {
  const { quantity } = product;
  if (!quantity) {
    return <></>;
  }

  return <Badge>{quantity}</Badge>;
}
