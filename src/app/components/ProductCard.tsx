import { ProductData } from "@/lib";
import Image from "next/image";
import { ElementType, ReactNode } from "react";
import ProductQuantityIndicator from "./ProductQuantityIndicator";

interface Props {
  product: ProductData;
  AdditionalComponents?: ElementType[]; // Type for a component
}

export default function ProductCard({ product, AdditionalComponents }: Props) {
  const { imageUrls, name, price, provider } = product;
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
      {AdditionalComponents?.map((AdditionalComponent) => (
        <AdditionalComponent key={AdditionalComponent} product={product} />
      ))}
    </div>
  );
}
