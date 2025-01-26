import SingleProduct from "./SingleProduct";
import { wixClientServer } from "../helper/wixClientServer";

const Discounted = async () => {
  const wixClient = await wixClientServer();

  const { _items } = await wixClient.products.queryProducts().find();

  return (
    <section className="text-black flex flex-col gap-4 pb-4 items-center px-4">
      <h2 className="text-2xl font-semibold">İndirimde</h2>
      <ul className="grid grid-cols-1 gap-4 w-full">
        {_items
          .filter((item) => item.discount.value > 0)
          .map((dItem) => (
            <SingleProduct key={dItem._id} {...dItem} />
          ))}
      </ul>
    </section>
  );
};

export default Discounted;
