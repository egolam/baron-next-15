import Image from "next/image";

import AddToCart from "./AddToCart";
import AddtoWishlist from "./AddtoWishlist";
import Link from "next/link";
import Ribbon from "./Ribbon";

const SingleProduct = ({
  slug,
  collectionIds,
  media,
  ribbon,
  discount,
  name,
  price,
  productOptions,
}) => {
  const sex = collectionIds
    .map((item) => {
      if (item === process.env.MALE_COLL_ID) {
        return "Erkek";
      } else if (item === process.env.FEMALE_COLL_ID) {
        return "Kadın";
      } else if (item === process.env.UNISEX_COLL_ID) {
        return "Unisex";
      }
    })
    .filter((item) => item !== undefined);

  const cat = sex[0].toLowerCase() !== "kadın" ? sex[0].toLowerCase() : "kadin";

  return (
    <li className="border border-black flex flex-col hover:cursor-pointer hover:scale-[1.02] transition-transform">
      <Link href={`/products/${cat}/${slug}`}>
        <div className="relative aspect-square">
          <Image
            src={media.mainMedia.image.url}
            alt="title"
            fill
            className="object-cover"
            sizes="100%"
          />
          <Ribbon ribbon={ribbon} />
          {discount.value > 0 && (
            <p className="absolute text-xs text-zinc-50 px-2 py-1< bg-green-600 bottom-0 right-0">{`%${discount.value} İndirim`}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 p-3">
          <div>
            <p className="capitalize text-xs tracking-wider">{sex}</p>
            <h3 className="text-sm uppercase">{name}</h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              {discount.value > 0 && (
                <p className="">{price.formatted.discountedPrice}</p>
              )}
              <p
                className={`${
                  discount.value > 0
                    ? "line-through text-black/50 text-xs pt-1"
                    : ""
                }`}
              >
                {price.formatted.price}
              </p>
            </div>

            <p className="text-sm">{productOptions[0].choices[0].value} gr</p>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between pb-2 px-2 *:w-1/2 text-center">
        <AddtoWishlist />
        <AddToCart />
      </div>
    </li>
  );
};

export default SingleProduct;
