const Ribbon = ({ ribbon }) => {
  return (
    <div className="absolute text-[0.625rem] text-zinc-50 flex flex-wrap gap-1 *:px-2 *:py-1">
      {ribbon.map((item) => (
        <p key={item} className="bg-black w-fit text-nowrap">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Ribbon;
