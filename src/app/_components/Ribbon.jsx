const Ribbon = ({ ribbon }) => {
  return (
    <div className="absolute text-xs text-zinc-50 flex flex-wrap gap-1 *:px-2 *:py-1 capitalize">
      <p className="bg-black w-fit text-nowrap">
        {ribbon}
      </p>
    </div>
  );
};

export default Ribbon;
