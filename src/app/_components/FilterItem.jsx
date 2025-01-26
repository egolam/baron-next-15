import { Check, ArrowDown } from "lucide-react";

const FilterItem = ({
  label,
  value,
  variations,
  setFilter,
  getFilterValues,
}) => {
  return (
    <div className="collapse bg-zinc-50 border rounded-none border-black">
      <input type="checkbox" className="peer" />
      <h4 className="collapse-title font-medium content-center flex items-center justify-between px-4 peer-checked:*:rotate-180">
        {label}
        <ArrowDown size={16} className="transition-transform" />
      </h4>
      <div className="collapse-content !px-4 !pt-0 flex flex-col gap-2">
        {variations.map((item) => {
          const isChecked = getFilterValues(value).includes(item);

          return (
            <label
              key={item}
              htmlFor={item}
              className="flex gap-2 items-center group cursor-pointer"
              onChange={(e) => setFilter(value, item, e.target.checked)}
            >
              <input
                type="checkbox"
                name={value}
                id={item}
                value={item}
                defaultChecked={isChecked}
                className="hidden peer"
              />
              <div className="size-4 border border-black flex items-center justify-center peer-checked:bg-black peer-checked:*:text-zinc-50 transition-colors">
                <Check size={16} className="text-zinc-50 duration-100" />
              </div>
              <span className="uppercase">{item}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterItem;
