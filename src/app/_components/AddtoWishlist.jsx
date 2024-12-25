import { Heart } from "lucide-react";

const AddtoWishlist = () => {
  return (
    <button
      aria-label="Favorilere ekle"
      className="py-2 group flex items-center justify-center self-end transition-colors border-y border-l border-black hover:bg-black hover:text-zinc-50"
    >
      <Heart size={20} className="" aria-hidden="true" />
    </button>
  );
};

export default AddtoWishlist;
