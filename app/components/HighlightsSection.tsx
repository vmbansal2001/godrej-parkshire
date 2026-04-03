import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import { HIGHLIGHTS } from "@/app/lib/constants";

export default function HighlightsSection() {
  return (
    <section id="highlights" className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Column */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorative accent behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#b18e4e]/30" />
            <Image
              src="/images/highlight-img.webp"
              alt="Godrej Parkshire Highlights"
              width={636}
              height={521}
              className="relative w-full h-auto rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-1/2">
            <SectionHeader
              label="Highlights"
              heading={<>Discover the Finest<br /><span className="text-[#b18e4e]">Features and Finishes</span></>}
            />

            {/* Subtitle */}
            <p className="text-[#555] text-base leading-relaxed mb-8">
              Every detail crafted for a life of comfort, convenience, and timeless elegance.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl px-4 py-4 border border-[#f2f2f2] shadow-[0_1px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
                >
                  <span className="shrink-0 mt-0.5">
                    <Image
                      src="/images/highlight-icon.webp"
                      alt=""
                      width={28}
                      height={24}
                      className="w-7 h-6"
                    />
                  </span>
                  <p className="text-sm text-[#222] font-medium leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
