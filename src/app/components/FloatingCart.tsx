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

  const formatCartMessage = () => {
    return Object.entries(productCart)
      .filter(([product, quantity]) => !!quantity)
      .map(([product, quantity]) => {
        return `- *${product}* : (${quantity})`;
      })
      .join("\n");
  };
  const urlPrefix = process.env.NEXT_PUBLIC_WHATSAPP_URL_PREFIX;
  const message = formatCartMessage();
  const encodedMessage = encodeURIComponent(message);
  const url = `${urlPrefix}${encodedMessage}`;

  return (
    <a href={url} target="_blank">
      <div className="fixed bottom-4 right-4">
        <div className="p-2 ">
          <div className="flex justify-center items-center m-2">
            <WhatsAppIcon />
            {!!count && <Badge>{count}</Badge>}
          </div>
        </div>
      </div>
    </a>
  );
}
