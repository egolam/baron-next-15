import Link from "next/link";
import { Heart, ShoppingBag, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 text-black grid grid-cols-3 items-center px-4 bg-zinc-50">
      <div>
        <Menu />
      </div>
      <div className="flex items-center gap-6 place-content-center">
        <Link href="/" className="flex leading-none">
          <h1 className="text-[2rem] font-bold tracking-widest">BARON</h1>
        </Link>
      </div>

      <div className="flex place-content-end gap-3">
        <Link href="/wishlist" className="relative">
          <span className="absolute bg-black size-5 -top-2.5 -right-2.5 text-xs flex items-center justify-center text-zinc-50 rounded-full">
            14
          </span>
          <Heart />
          <p className="sr-only">Favorilere git</p>
        </Link>
        <Link href="/cart" className="relative">
          <span className="absolute bg-black size-5 -top-2.5 -right-2.5 text-xs flex items-center justify-center text-zinc-50 rounded-full">
            2
          </span>
          <ShoppingBag />
          <p className="sr-only">Sepete git</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
