import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form className="px-6 bg-black h-16 w-full flex items-center justify-center shadow-[0_8px_1rem_rgba(0,0,0,0.5)]">
      <label
        htmlFor="search"
        className="flex items-center justify-between w-full gap-4"
      >
        <input
          type="text"
          id="search"
          name="search"
          className="peer font-medium flex-1 indent-4 py-1.5 outline-none placeholder-black/50 placeholder:tracking-widest rounded-sm"
          placeholder="Ara"
        />
        <Search className="text-zinc-50 peer-focus:animate-pulse " />
      </label>
    </form>
  );
};

export default SearchBar;
