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

  const formatCartMessage = () => {
    return Object.entries(productCart)
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
            <Badge>{count}</Badge>
          </div>
        </div>
      </div>
    </a>
  );
}
