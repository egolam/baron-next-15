import { Suspense } from "react";
import FilterAndSorting from "../_components/FilterAndSorting";

const ProductLayout = async ({ children }) => {
  return (
    <section className="text-black flex flex-col gap-4 pb-4 items-center px-4">
      <FilterAndSorting />
      <Suspense key="sokkum" fallback={<p>Loading...</p>}>
        {children}
      </Suspense>
    </section>
  );
};

export default ProductLayout;
