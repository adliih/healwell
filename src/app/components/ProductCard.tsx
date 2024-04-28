import { ProductData } from "@/lib";
import Image from "next/image";

export default function ProductCard({ product }: { product: ProductData }) {
  const { imageUrls, name, price, provider, quantity } = product;
  const imgUrl = imageUrls?.[0];

  return (
    <div
      id={name}
      className="relative inline-flex flex-col bg-white border shadow-sm rounded-xl "
    >
      <Image
        className="h-48 lg:h-64 w-full rounded-t-xl object-cover"
        width={800}
        height={800}
        src={imgUrl}
        alt={name}
      />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold ">{name}</h3>
        <p className="mt-1 text-gray-500 ">{provider}</p>
        <p className="mt-5 text-xs text-gray-500 ">{price}</p>
      </div>
      {!!quantity && (
        <span className="absolute top-4 right-4 flex items-center justify-center min-w-6 min-h-6 text-center align-middle py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
          {quantity}
        </span>
      )}
    </div>
  );
}
