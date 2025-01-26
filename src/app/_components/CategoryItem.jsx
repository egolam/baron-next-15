import Link from "next/link";

const CategoryItem = ({ children, href, pathname }) => {
  const style = pathname.includes(`/products${href}`)
    ? "bg-black text-zinc-50"
    : "";

  return (
    <li
      className={`flex-1 flex items-center justify-center text-center hover:bg-black hover:text-zinc-50 ${style} transition-colors`}
    >
      <Link href={`/products${href}`} className="w-full h-full p-2">
        {children}
      </Link>
    </li>
  );
};

export default CategoryItem;
