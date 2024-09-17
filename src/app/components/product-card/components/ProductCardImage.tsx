"use client";
import { ProductData } from "@/lib/type";
import Image from "next/image";
import ProductCardContainer from "./ProductCardContainer";
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
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function ProductCardImage({
  product,
}: {
  product: ProductData;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
          <Carousel setApi={setApi}>
            <CarouselContent>
              {imageUrls.map((url) => (
                <CarouselItem key={url}>
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Photos {current} of {count}
          </div>

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
