import { Truck } from "lucide-react";

const DeliveryProgress = () => {
  return (
    <section className="w-full flex flex-col px-4 justify-center py-4 gap-2 text-center text-black bg-white">
      <div className="flex items-center justify-center gap-4">
        <Truck />
        <h2 className="font-semibold">Sonraki sevkiyat için</h2>
      </div>

      <div className="relative border-2 border-black h-4 flex items-center justify-center">
        <span className="bg-black h-2 w-1/2 absolute left-0.5"></span>
      </div>
      <p className="">2500 / 5000 gr</p>
    </section>
  );
};

export default DeliveryProgress;
