import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import { AMENITIES } from "@/app/lib/constants";

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-24">
        <SectionHeader
          label="Amenities"
          heading={<>Amenities that Define <span className="text-[#b18e4e]">Excellence</span></>}
          centered
        />

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {AMENITIES.map((amenity, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              {/* Label on image */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h5 className="text-white text-base font-semibold drop-shadow-lg">
                  {amenity.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
