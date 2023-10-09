import { GridItemInterface } from "@/config/site-config";
import Image from "next/image";
import Link from "next/link";

const EquipmentsBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex flex-col justify-end w-full h-full overflow-hidden rounded-3xl">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neu950/90" />
      {/* Background Image */}
      <Image
        fill
        src={item.image ?? ""}
        alt="bg-image"
        className="object-cover object-center"
      />
      {/* Content Container */}
      <div className="relative z-20 p-8">
        {/* Title */}
        <div className="mb-3 text-sm font-medium text-white">{item.title}</div>
        {/* Items */}
        <div className="flex flex-wrap items-center gap-3">
          {item.equipments?.map((equipment) => {
            return (
              <Link
                target="_blank"
                key={equipment.link}
                href={equipment.link}
                className="px-2 py-1 font-medium bg-white rounded-lg dark:bg-neutral-900"
              >
                {equipment.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EquipmentsBox;
