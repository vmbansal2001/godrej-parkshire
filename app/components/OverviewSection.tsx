import Image from "next/image";

export default function OverviewSection() {
  return (
    <div id="overview" className="bg-white">
      <div className="max-w-[1320px] mx-auto px-3 py-[70px]">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-10 lg:gap-0">
          {/* Images Column */}
          <div className="w-full lg:w-5/12 relative">
            {/* Main large image */}
            <div className="relative w-full max-w-[526px] ml-auto">
              <Image
                src="/images/overview-2.webp"
                alt="Godrej Parkshire exterior"
                width={600}
                height={750}
                className="w-full h-auto rounded-[10px] object-cover"
              />

              {/* Overlapping smaller image */}
              <div className="absolute bottom-[60px] -left-[25%] w-[58%]">
                <Image
                  src="/images/overview-1.webp"
                  alt="Godrej Parkshire amenities"
                  width={600}
                  height={750}
                  className="w-full h-auto rounded-[10px] object-cover shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-5/12">
            <div>
              {/* Section Label */}
              <small className="text-[12px] font-semibold tracking-[3px] uppercase text-[#b18e4e] block mb-[5px]">
                About us
              </small>

              {/* Heading */}
              <h2 className="text-[33.6px] font-bold text-[#333] tracking-[-1px] mb-[15px]">
                Godrej Parkshire
              </h2>

              {/* Subtitle */}
              <p className="text-[20px] font-light text-[#333] mb-[25px]">
                At Hoskote, East Bangalore
              </p>

              {/* Description */}
              <p className="text-[15px] text-[#333] leading-[24px] mb-[25px]">
                Godrej Parkshire is an exciting pre-launch residential apartment
                project by Godrej Properties, strategically located in the prime
                neighborhood of Hoskote, East Bangalore. Sprawled across 14
                acres of lush green land, this upcoming township features around
                1,400 premium 2 BHK and 3 BHK apartments, designed to offer a
                perfect blend of comfort, convenience, and modern living. Every
                apartment is designed to maximize natural light and ventilation,
                creating a peaceful and eco-friendly environment ideal for
                families and professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
