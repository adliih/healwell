import { ProductData } from "@/lib/type";

export interface ProductCardProps {
  product: ProductData;
}
export type ProductCardType = (prop: ProductCardProps) => React.JSX.Element;
