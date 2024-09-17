import { ProductData } from "@/lib/type";
import Image from "next/image";
import ProductCardContainer from "./ProductCardContainer";
import Carousel from "../../ui/Carousel";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ProductCardImage({
  product,
}: {
  product: ProductData;
}) {
  const { imageUrls, name, id } = product;
  const imgUrl = imageUrls?.[0];
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative grow cursor-pointer">
            <Image
              className="w-full aspect-square rounded-t-xl object-cover"
              fill={true}
              src={imgUrl}
              alt={name}
            />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <Carousel
            items={imageUrls.map((url) => (
              <ProductCardContainer>
                <div className="relative grow">
                  <Image
                    className="w-full aspect-square rounded-t-xl object-contain"
                    fill={true}
                    src={url}
                    alt={name}
                  />
                </div>
              </ProductCardContainer>
            ))}
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
