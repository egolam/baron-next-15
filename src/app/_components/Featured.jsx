import SingleProduct from "./SingleProduct";
import { items } from "../constants/items";

const Featured = () => {
  return (
    <section className="text-black px-4 flex flex-col gap-4 pb-4">
      <h2 className="text-2xl font-semibold">Öne çıkanlar</h2>
      <ul className="grid grid-cols-2 grid-rows-3 gap-4">
        {items.map((item) => (
          <SingleProduct key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Featured;
