import { Grouped } from "@/lib";
import ProductList from "./ProductList";

export default function GroupedProductList({ groups }: { groups: Grouped[] }) {
  return (
    <div className="hs-accordion-group">
      {groups.map((group) => {
        const { name, products } = group;

        return (
          <div className="hs-accordion active" key={name}>
            <button
              className="hs-accordion-toggle hs-accordion-active py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
              aria-controls="hs-basic-no-arrow-collapse-one"
            >
              <svg
                className="hs-accordion-active:hidden block size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              <svg
                className="hs-accordion-active:block hidden size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m18 15-6-6-6 6"></path>
              </svg>
              {name}
            </button>
            <div
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="hs-basic-no-arrow-heading-one"
            >
              <ProductList products={products} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
