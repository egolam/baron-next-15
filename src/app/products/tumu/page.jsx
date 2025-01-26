import { wixClientServer } from "@/app/helper/wixClientServer";
import SingleProduct from "@/app/_components/SingleProduct";

const AllProducts = async ({ searchParams }) => {
  const sp = await searchParams;
  const wixClient = await wixClientServer();
  const query = wixClient.products.queryProducts();

  const { _items } = await query.ascending("price").find();

  return (
    <>
      <h2 className="text-2xl font-semibold">Tüm Ürünler</h2>
      <ul className="grid grid-cols-1 gap-4 w-full">
        {_items.map((item) => (
          <SingleProduct key={item._id} {...item} />
        ))}
      </ul>
    </>
  );
};

export default AllProducts;
