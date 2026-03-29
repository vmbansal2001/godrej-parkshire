import Image from "next/image";

const features = [
  "High-rise residential towers with modern architecture and efficient planning",
  "Approx. 1,400 apartments across a thoughtfully planned 14-acre township",
  "Designed for natural light, ventilation and sustainable living",
  "Prime East Bangalore location with strong connectivity to IT hubs",
  "RERA registration in progress / will be registered soon",
  "World class Amenities",
];

export default function HighlightsSection() {
  return (
    <div id="highlights" className="bg-white">
      <div className="max-w-[1320px] mx-auto px-3 py-[70px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          {/* Image Column */}
          <div className="w-full lg:w-6/12">
            <Image
              src="/images/highlight-img.webp"
              alt="Godrej Parkshire Highlights"
              width={636}
              height={521}
              className="w-full max-w-[636px] h-auto"
            />
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-5/12">
            {/* Section Label */}
            <small className="text-[12px] font-semibold tracking-[3px] uppercase text-[#b18e4e] block mb-[5px]">
              Highlights
            </small>

            {/* Heading */}
            <h2 className="text-[33.6px] font-bold text-[#333] tracking-[-1px] mb-[15px]">
              Discover the Finest Features and Finishes
            </h2>

            {/* Feature List */}
            <div className="flex flex-col">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center py-[12px]"
                >
                  <span className="shrink-0 w-[35px]">
                    <Image
                      src="/images/highlight-icon.webp"
                      alt=""
                      width={35}
                      height={30}
                      className="w-[35px] h-[30px]"
                    />
                  </span>
                  <p className="text-[16px] text-[#333] ml-3">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
