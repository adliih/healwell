"use client";

import { useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ArrowPagination() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (!searchParams.has("take")) {
    return <></>;
  }

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const skip = parseInt(searchParams.get("skip") || "0");
  const take = parseInt(searchParams.get("take") || "0");

  useEffect(() => {
    const handleKeyDown = (event: WindowEventMap["keydown"]) => {
      if (event.key === "ArrowRight") {
        // Navigate to next page
        const nextSkip = skip + take;
        router.push(
          pathname + "?" + createQueryString("skip", nextSkip.toString())
        );
      } else if (event.key === "ArrowLeft") {
        // Navigate to previous page
        const prevSkip = Math.max(0, skip - take);
        router.push(
          pathname + "?" + createQueryString("skip", prevSkip.toString())
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router, searchParams, skip, take]);
  return <></>;
}
