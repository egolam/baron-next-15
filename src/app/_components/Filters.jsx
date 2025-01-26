"use client";
import { SlidersHorizontal, X } from "lucide-react";
import { filtersOptions } from "../constants/filterOptions";
import FilterItem from "./FilterItem";
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filters = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setFilter = useCallback(
    (category, value, isChecked) => {
      const params = new URLSearchParams(searchParams);
      const currentValues = params.get(category)?.split(",") || [];

      let newValues = [];
      if (isChecked) {
        newValues = [...currentValues, value];
      } else {
        newValues = currentValues.filter((v) => v !== value);
      }

      if (newValues.length > 0) {
        params.set(category, newValues.join(","));
      } else {
        params.delete(category);
      }

      window.history.pushState(
        null,
        "",
        `?${decodeURIComponent(params).split(",")}`
      );
    },
    [searchParams, pathname, replace]
  );

  const getFilterValues = useCallback(
    (category) => {
      return searchParams.get(category)?.split(",") || [];
    },
    [searchParams]
  );

  return (
    <div className="w-1/2">
      <button
        className="min-h-min h-full p-2 flex items-center justify-between btn w-full rounded-none text-sm font-normal no-animation"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Filtre
        <SlidersHorizontal size={16} />
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-zinc-50 !rounded-none h-2/3 flex flex-col border-t sm:border-2 border-black gap-4">
          <h3 className="font-bold text-2xl flex items-center justify-between">
            Filtrele
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost">
                <X size={24} />
              </button>
            </form>
          </h3>
          <div className="flex flex-col text-black gap-4">
            {filtersOptions.map((option) => (
              <FilterItem
                key={option.label}
                label={option.label}
                value={option.value}
                variations={option.variations}
                setFilter={setFilter}
                getFilterValues={getFilterValues}
              />
            ))}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>✕</button>
        </form>
      </dialog>
    </div>
  );
};

export default Filters;

{
  /* <div className="modal-action">
  <form method="dialog">
    <button className="min-h-min h-full p-2 flex items-center justify-between btn w-full rounded-none text-sm font-normal">
      Close
    </button>
  </form>
</div>; */
}
