import Image from "next/image";

const advantages = [
  "Strategically located in Hoskote, East Bangalore — close to NH 75 and Old Madras Road.",
  "Excellent connectivity to Whitefield, KR Puram and ITPL (approx. 16 mins drive to ITPL).",
  "Near growth corridors like Outer Ring Road and Sarjapur Road with upcoming infrastructure development.",
  "Nearby schools, retail and daily conveniences — perfect for families and professionals.",
  "Well-connected via bus network and major arterial roads.",
];

export default function LocationSection() {
  return (
    <section id="location" className="bg-[#faf8f5]">
      <div className="max-w-[1320px] mx-auto px-3 py-[70px]">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Text Column */}
          <div className="w-full lg:w-1/2">
            <small className="text-[12px] font-semibold tracking-[3px] uppercase text-[#b18e4e] block mb-[5px]">
              Location Advantages
            </small>
            <h2 className="text-[33.6px] font-bold text-[#333] tracking-[-1px] mb-[20px]">
              Discover Your Perfect Place in the Perfect Location
            </h2>

            <div className="flex flex-col gap-4">
              {advantages.map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="shrink-0 mt-[2px]">
                    <Image
                      src="/images/location-icon.png"
                      alt=""
                      width={22}
                      height={22}
                      className="w-[22px] h-[22px]"
                    />
                  </span>
                  <p className="text-[16px] text-[#555] leading-[1.6]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Column */}
          <div className="w-full lg:w-1/2 rounded-[14px] border-8 border-[#DED0B8]">
            <Image
              src="/images/location-map.webp"
              alt="Location Map"
              width={636}
              height={450}
              className="w-full h-auto rounded-[10px] blur-[5px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
