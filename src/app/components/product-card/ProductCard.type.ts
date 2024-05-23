import { ProductData } from "@/lib";

export interface ProductCardProps {
  product: ProductData;
}
export type ProductCardType = (prop: ProductCardProps) => React.JSX.Element;
