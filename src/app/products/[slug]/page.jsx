import SingleProduct from "@/app/_components/SingleProduct";
import { items } from "@/app/constants/items";

const ProductPage = async ({ params }) => {
  const slug = (await params).slug;
  const category = slug;
  const title =
    category === "tumu"
      ? "Tüm Esanslar"
      : category === "erkek"
      ? "Erkek"
      : category === "kadin"
      ? "Kadın"
      : category === "unisex"
      ? "Unisex"
      : null;

  return (
    <section className="text-black px-4 flex flex-col gap-4 pb-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ul className="grid grid-cols-2 grid-rows-3 gap-4">
        {category === "tumu"
          ? items.map((item) => <SingleProduct {...item} key={item.id} />)
          : items
              .filter((item) => item.sex === category)
              .map((item) => <SingleProduct key={item.id} {...item} />)}
      </ul>
    </section>
  );
};

export default ProductPage;
