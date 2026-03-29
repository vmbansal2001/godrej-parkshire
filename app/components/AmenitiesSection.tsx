import Image from "next/image";

const amenities = [
  { name: "Swimming Pool", image: "/images/amenities/1.webp" },
  { name: "Gymnasium", image: "/images/amenities/2.webp" },
  { name: "Multipurpose Hall", image: "/images/amenities/3.webp" },
  { name: "Kids Play Area", image: "/images/amenities/4.webp" },
  { name: "Yoga", image: "/images/amenities/11.jpg" },
  { name: "Badminton Court", image: "/images/amenities/6.webp" },
  { name: "Indoor Games", image: "/images/amenities/7.webp" },
  { name: "Tennis Court", image: "/images/amenities/8.webp" },
];

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-white">
      <div className="max-w-[1320px] mx-auto px-3 py-[70px]">
        {/* Section Title */}
        <div className="text-center mb-10">
          <small className="text-[12px] font-semibold tracking-[3px] uppercase text-[#b18e4e] block mb-[5px]">
            Amenities
          </small>
          <h2 className="text-[33.6px] font-bold text-[#333] tracking-[-1px]">
            Amenities that Define Excellence
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-3">
          {amenities.map((amenity, index) => (
            <div key={index} className="px-0 mb-3">
              <div className="bg-[#faf8f5] border-2 border-[rgba(235,235,235,0.22)] rounded-[15px] p-[20px]">
                {/* Amenity Image */}
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />

                {/* Amenity Label */}
                <h5 className="text-[18px] font-semibold text-[#333] text-center mt-3">
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
