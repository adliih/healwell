import { ProductData } from "@/lib";
import Image from "next/image";

export default function ProductCard({ product }: { product: ProductData }) {
  const { imageUrls, name, price, provider, quantity } = product;
  const imgUrl = imageUrls?.[0];

  return (
    <div
      id={name}
      className="relative inline-flex flex-col bg-white border shadow-sm rounded-xl aspect-square w-full h-full group"
    >
      <div className="relative flex-grow">
        <Image
          className="w-full aspect-square rounded-t-xl object-cover"
          fill={true}
          src={imgUrl}
          alt={name}
        />
      </div>
      <div className="p-2 flex flex-col">
        <h3 className="text-sm font-bold tracking-tight line-clamp-1 group-hover:line-clamp-none">
          {name}
        </h3>
        <p className="mt-1 font-extralight text-xs text-gray-500 ">
          {provider}
        </p>
        <p className="mt-2 text-xs text-gray-500 ">{price}</p>
      </div>

      {!!quantity && (
        <span className="absolute top-2 right-2 flex items-center justify-center min-w-6 min-h-6 text-center align-middle py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
          {quantity}
        </span>
      )}
    </div>
  );
}
