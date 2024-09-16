import { ProductData } from "@/lib/type";
import Image from "next/image";
import ModalButton from "../../ui/ModalButton";
import Modal from "../../ui/Modal";
import ProductCardContainer from "./ProductCardContainer";

export default function ProductCardImage({
  product,
}: {
  product: ProductData;
}) {
  const { imageUrls, name, id } = product;
  const imgUrl = imageUrls?.[0];
  return (
    <>
      <Modal id={id} title={name}>
        <ProductCardContainer>
          <div className="relative grow">
            <Image
              className="w-full aspect-square rounded-t-xl object-contain"
              fill={true}
              src={imgUrl}
              alt={name}
            />
          </div>
        </ProductCardContainer>
      </Modal>
      <ModalButton className="relative grow" modalId={id}>
        <Image
          className="w-full aspect-square rounded-t-xl object-cover"
          fill={true}
          src={imgUrl}
          alt={name}
        />
      </ModalButton>
    </>
  );
}
