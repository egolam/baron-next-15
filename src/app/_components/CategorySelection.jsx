import { categories } from "../constants/categories";
import CategoryItem from "./CategoryItem";

const CategorySelection = () => {
  return (
    <ul className="flex items-center justify-between w-full">
      {categories.map((category) => (
        <CategoryItem key={category.id} href={category.href}>
          {category.display}
        </CategoryItem>
      ))}
    </ul>
  );
};

export default CategorySelection;
