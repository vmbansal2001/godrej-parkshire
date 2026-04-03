import Image from "next/image";
import EnquiryButton from "./EnquiryButton";
import SectionHeader from "./ui/SectionHeader";
import { FLOOR_PLANS } from "@/app/lib/constants";

export default function FloorPlansSection() {
  return (
    <section id="floor-plans" className="bg-[#faf8f4]">
      <div className="max-w-[1280px] mx-auto px-6 py-24">
        <SectionHeader
          label="Floor Plans"
          heading={<>Your Vision, Our <span className="text-[#b18e4e]">Floor Plans</span></>}
          centered
        />

        {/* Floor Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {FLOOR_PLANS.map((plan, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-[#f0f0f0] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)]"
            >
              {/* Floor Plan Image */}
              <div className="p-4 pb-0">
                <div className="relative overflow-hidden rounded-xl bg-[#f8f8f8] aspect-[4/3] flex items-center justify-center">
                  <Image
                    src={plan.image}
                    alt={plan.label}
                    width={900}
                    height={643}
                    className={`w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105 ${index > 0 ? "blur-[3px]" : ""}`}
                  />
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold text-[#222]">{plan.label}</h4>
                  <p className="text-xs text-[#888]">Godrej Parkshire</p>
                </div>
                <EnquiryButton
                  label="View Plan"
                  className="bg-[#b18e4e] text-white text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-[#9a7a3e] transition-all duration-300 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
