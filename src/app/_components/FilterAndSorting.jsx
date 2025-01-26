import Filters from "./Filters";
import Sorting from "./Sorting";

const FilterAndSorting = () => {
  return (
    <div className="flex items-center justify-center gap-4 w-full">
      <Filters />
      <Sorting />
    </div>
  );
};

export default FilterAndSorting;
