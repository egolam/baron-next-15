import { items } from "../constants/items";
import SingleProduct from "./SingleProduct";

const Discounted = () => {
  return (
    <section className="text-black px-4 flex flex-col gap-4 pb-4">
      <h2 className="text-2xl font-semibold">İndirimde</h2>
      <ul className="grid grid-cols-2 grid-rows-3 gap-4">
        {items
          .filter((item) => item.discount > 0)
          .map((dItem) => (
            <SingleProduct key={dItem.id} {...dItem} />
          ))}
      </ul>
    </section>
  );
};

export default Discounted;
