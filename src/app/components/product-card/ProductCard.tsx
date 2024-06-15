import { ProductCardType } from "./ProductCard.type";
import ProductCardCart from "./components/ProductCardCart";
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
        <div className="flex justify-between">
          <ProductCardPrice product={product} />
          <ProductCardCart product={product} />
        </div>
        <ProductCardQuantityIndicator product={product} />
      </ProductCardInformationContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
