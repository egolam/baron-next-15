import CategorySelection from "./CategorySelection";

const Footer = () => {
  return (
    <footer className="sticky bg-zinc-50 border-t bottom-0 shadow-[0_4px_0.5rem_rgba(0,0,0,1)] border-black w-full z-50 text-black font-medium">
      <CategorySelection />
    </footer>
  );
};

export default Footer;
