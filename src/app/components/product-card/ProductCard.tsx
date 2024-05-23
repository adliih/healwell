import { ProductCardType } from "./ProductCard.type";
import ProductCardContainer from "./components/ProductCardContainer";
import ProductCardImage from "./components/ProductCardImage";
import ProductCardInformationContainer from "./components/ProductCardInformationContainer";
import ProductCardName from "./components/ProductCardName";
import ProductCardPrice from "./components/ProductCardPrice";
import ProductCardQuantityIndicator from "./components/ProductCardQuantityIndicator";

const ProductCard: ProductCardType = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductCardImage product={product} />
      <ProductCardInformationContainer>
        <ProductCardName product={product} />
        <ProductCardPrice product={product} />
        <ProductCardQuantityIndicator product={product} />
      </ProductCardInformationContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
