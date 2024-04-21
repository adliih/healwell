import { ProductData } from "@/lib";

export default function ProductCard({ product }: { product: ProductData }) {
  const { imageUrls, name, price, provider, quantity } = product;
  const imgUrl = imageUrls?.[0];

  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
      <img className="h-52 w-full rounded-t-xl" src={imgUrl} alt={name} />
      <div className="p-4 md:p-5">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {name}
        </h3>
        <p className="mt-1 text-gray-500 dark:text-neutral-400">{provider}</p>
        <p className="mt-5 text-xs text-gray-500 dark:text-neutral-500">
          {price}
        </p>
      </div>
    </div>
  );
}
