import Image from "next/image";
import formatCurrency from "../helper/formatCurrency";
import AddToCart from "./AddToCart";
import AddtoWishlist from "./AddtoWishlist";
import Link from "next/link";
import Ribbon from "./Ribbon";

const SingleProduct = ({
  title,
  img,
  sex,
  price,
  gr,
  id,
  discount,
  ribbon,
}) => {
  return (
    <li className="border border-black flex flex-col hover:cursor-pointer hover:scale-[1.02] transition-transform">
      <Link href={`/products/${sex}/${id}`}>
        <div className="relative aspect-square">
          <Image
            src={img}
            alt="title"
            fill
            className="object-cover"
            sizes="100%"
          />
          <Ribbon ribbon={ribbon} discount={discount} />
          {discount > 0 && (
            <p className="absolute text-[0.625rem] text-zinc-50 px-2 py-1< bg-green-600 bottom-0 right-0">{`%${discount} İndirim`}</p>
          )}
        </div>
        <div className="flex flex-col gap-1 p-3">
          <div>
            <p className="uppercase text-[0.5rem] tracking-wider">{sex}</p>
            <h3 className="text-sm">{title}</h3>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {discount > 0 && (
                <p>{formatCurrency(price * ((discount - 100) / -100))}</p>
              )}
              <p
                className={`${
                  discount > 0 ? "line-through text-black/50 text-xs pt-1" : ""
                }`}
              >
                {formatCurrency(price)}
              </p>
            </div>

            <p className="text-xs">{gr} gr</p>
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
