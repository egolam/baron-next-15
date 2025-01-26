"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import { ChevronDown } from "lucide-react";
import { sortOptions } from "../constants/sortOptions";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Sorting = () => {
  const [sort, setSort] = useState(sortOptions[0]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function updateSorting(sortOrder) {
    setSort(sortOrder);
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder.value);
    router.push(`${pathname}?${params}`);
  }

  return (
    <div className="w-1/2">
      <Listbox value={sort} onChange={(e) => updateSorting(e)}>
        <ListboxButton className="border w-full border-black p-2 text-sm flex items-center justify-between">
          {sort.label}
          <ChevronDown size={16} />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          className="bg-zinc-50 border border-black border-t-0 "
        >
          {sortOptions.map((option) => (
            <ListboxOption
              key={option.value}
              value={option}
              className="data-[focus]:bg-black data-[focus]:text-zinc-50 cursor-pointer p-2 text-sm"
            >
              {option.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
};

export default Sorting;
