import { ProductData } from "@/lib/type";
import Image from "next/image";

export default function ProductCardImage({
  product,
}: {
  product: ProductData;
}) {
  const { imageUrls, name } = product;
  const imgUrl = imageUrls?.[0];
  return (
    <div className="relative grow">
      <Image
        className="w-full aspect-square rounded-t-xl object-cover"
        fill={true}
        src={imgUrl}
        alt={name}
      />
    </div>
  );
}
