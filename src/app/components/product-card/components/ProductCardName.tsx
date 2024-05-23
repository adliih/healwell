import { ProductCardProps } from "../ProductCard.type";

export default function ProductCardName({ product }: ProductCardProps) {
  const { name, provider } = product;
  return (
    <div className="flex flex-col min-h-16">
      <h3 className="flex-none text-sm font-bold tracking-tight ">{name}</h3>
      <p className="flex-none mt-1 font-extralight text-xs text-gray-500 ">
        {provider}
      </p>
    </div>
  );
}
