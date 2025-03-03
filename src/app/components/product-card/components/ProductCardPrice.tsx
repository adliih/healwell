import { ProductCardProps } from "../ProductCard.type";

export default function ProductCardPrice({ product }: ProductCardProps) {
  const { price, discountedPrice } = product;
  return (
    <p className="mt-2 text-xs text-gray-500 ">
      {discountedPrice && (
        <>
          <span className="font-bold">{discountedPrice}</span>
          <p className="line-through font-light">{price}</p>
        </>
      )}
      {!discountedPrice && <span className="font-medium">{price}</span>}
    </p>
  );
}
