import { ShoppingCart } from "lucide-react";

const AddToCart = () => {
  return (
    <button
      aria-label="Sepete ekle"
      className="py-2 group flex flex-1 items-center justify-center self-end transition-colors border-y border-x border-black hover:bg-black hover:text-zinc-50"
    >
      <ShoppingCart size={20} className="" aria-hidden="true" />
    </button>
  );
};

export default AddToCart;
