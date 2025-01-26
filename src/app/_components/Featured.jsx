import SingleProduct from "./SingleProduct";
import { wixClientServer } from "../helper/wixClientServer";

const Featured = async () => {
  const wixClient = await wixClientServer();

  const { _items } = await wixClient.products
    .queryProducts()
    .eq("collectionIds", process.env.FEATURED_COLL_ID)
    .find();

  return (
    <section className="text-black flex flex-col gap-4 pb-4 items-center px-4">
      <h2 className="text-2xl font-semibold">Öne çıkanlar</h2>
      <ul className="grid grid-cols-1 gap-4 w-full">
        {_items.map((item) => (
          <SingleProduct key={item._id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default Featured;
