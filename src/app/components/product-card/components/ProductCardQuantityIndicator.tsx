import { ProductCardProps } from "../ProductCard.type";

export default function ProductCardQuantityIndicator({
  product,
}: ProductCardProps) {
  const { quantity } = product;
  if (!quantity) {
    return <></>;
  }

  return (
    <span className="absolute top-2 right-2 flex items-center justify-center min-w-6 min-h-6 text-center align-middle py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
      {quantity}
    </span>
  );
}
