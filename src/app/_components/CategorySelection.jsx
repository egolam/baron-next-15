"use client";

import { usePathname } from "next/navigation";
import { categories } from "../constants/categories";
import CategoryItem from "./CategoryItem";

const CategorySelection = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center justify-between w-full">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          href={category.href}
          pathname={pathname}
        >
          {category.display}
        </CategoryItem>
      ))}
    </ul>
  );
};

export default CategorySelection;
