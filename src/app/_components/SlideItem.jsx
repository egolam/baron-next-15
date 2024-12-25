import Image from "next/image";
import Link from "next/link";

const SlideItem = ({ src, desc, title, href, func }) => {
  return (
    <div
      className={`relative w-screen h-full flex flex-col gap-16 xl:flex-row`}
    >
      <Image
        src={src}
        alt={desc}
        fill
        sizes="100%"
        className="absolute z-[1] object-cover"
      />
      <div className="w-full h-full absolute flex z-10 items-end justify-between py-6 px-4 text-black">
        <h2 className="font-semibold border-l-2 border-black pl-4 tracking-widest">
          {title}
        </h2>
        <Link
          href={href}
          className="text-zinc-50 bg-black px-4 py-2 hover:bg-black/90 transition-colors"
        >
          Göz at
        </Link>
      </div>
    </div>
  );
};

export default SlideItem;
