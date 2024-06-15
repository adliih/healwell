"use client";

import { useAppSelector } from "@/lib/client";
import WhatsAppIcon from "./icons/WhatsAppIcon";
import Badge from "./Badge";

export default function FloatingCart() {
  const productCart = useAppSelector((state) => state.productCart);
  const count = Object.values(productCart).reduce(
    (acc, quantity) => acc + quantity,
    0
  );

  if (count < 1) {
    return <></>;
  }

  return (
    <button>
      <div className="fixed bottom-4 right-4">
        <div className="bg-neutral-100 p-2 rounded-lg shadow-2xl">
          <div className="h-10  w-10 flex justify-center items-center m-2">
            <WhatsAppIcon />
            <Badge>{count}</Badge>
          </div>
        </div>
      </div>
    </button>
  );
}
