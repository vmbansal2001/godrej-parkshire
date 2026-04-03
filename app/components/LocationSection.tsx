import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import { LOCATION_ADVANTAGES } from "@/app/lib/constants";

export default function LocationSection() {
  return (
    <section id="location" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Text Column */}
          <div className="w-full lg:w-1/2">
            <SectionHeader
              label="Location"
              heading={<>The Perfect <span className="text-[#b18e4e]">Location</span></>}
            />

            <p className="text-[#666] text-base mb-8">
              Hoskote, East Bangalore — where connectivity meets growth.
            </p>

            <div className="flex flex-col gap-4">
              {LOCATION_ADVANTAGES.map((text, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-[#faf8f4] rounded-xl px-5 py-4 border border-[#f2f2f2] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                >
                  <span className="shrink-0 mt-0.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#b18e4e]/10">
                    <svg className="w-4 h-4 text-[#b18e4e]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  </span>
                  <p className="text-sm text-[#333] font-medium leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Column */}
          <div className="w-full lg:w-1/2 relative sticky top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/location-map.webp"
                alt="Location Map"
                width={636}
                height={450}
                className="w-full h-auto blur-[4px]"
              />
              {/* Overlay with CTA */}
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-6 text-center shadow-lg">
                  <svg className="w-10 h-10 text-[#b18e4e] mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  <h4 className="text-lg font-bold text-[#222] mb-1">Hoskote, East Bangalore</h4>
                  <p className="text-sm text-[#666] mb-4">Near NH 75 &amp; Old Madras Road</p>
                  <a
                    href="https://maps.google.com/?q=Godrej+Parkshire+Hoskote+Bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#b18e4e] text-white text-sm font-semibold rounded-full px-6 py-2.5 hover:bg-[#9a7a3e] transition-all duration-300"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
