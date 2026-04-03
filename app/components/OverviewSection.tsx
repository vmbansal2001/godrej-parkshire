import Image from "next/image";

const stats = [
  { value: "14", label: "Acres" },
  { value: "1,400+", label: "Apartments" },
  { value: "2 & 3", label: "BHK Options" },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="bg-[#faf8f4]">
      <div className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-16">
          {/* Images Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-[526px] ml-auto">
              {/* Decorative accent */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[#b18e4e]/25" />
              <Image
                src="/images/overview-2.webp"
                alt="Godrej Parkshire exterior"
                width={600}
                height={750}
                className="relative w-full h-auto rounded-2xl object-cover shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              />

              {/* Overlapping smaller image */}
              <div className="absolute bottom-[60px] -left-[20%] w-[55%]">
                <Image
                  src="/images/overview-1.webp"
                  alt="Godrej Parkshire amenities"
                  width={600}
                  height={750}
                  className="w-full h-auto rounded-2xl object-cover shadow-[0_12px_40px_rgba(0,0,0,0.2)] ring-4 ring-white"
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-1/2">
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#b18e4e]" />
              <small className="text-xs font-semibold tracking-[3px] uppercase text-[#b18e4e]">
                About Us
              </small>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold text-[#222] tracking-tight mb-2">
              Godrej <span className="text-[#b18e4e]">Parkshire</span>
            </h2>

            {/* Location */}
            <p className="text-lg text-[#555] mb-6 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#b18e4e]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              Hoskote, East Bangalore
            </p>

            {/* Description */}
            <p className="text-[15px] text-[#444] leading-7 mb-8">
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

            {/* Stats Row */}
            <div className="flex gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center px-5 py-4 bg-white rounded-xl shadow-[0_1px_8px_rgba(0,0,0,0.05)] border border-[#f2f2f2]">
                  <div className="text-2xl font-bold text-[#b18e4e]">{stat.value}</div>
                  <div className="text-xs text-[#666] uppercase tracking-wide mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
