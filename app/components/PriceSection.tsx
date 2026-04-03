import EnquiryButton from "./EnquiryButton";
import SectionHeader from "./ui/SectionHeader";
import { PRICE_CARDS } from "@/app/lib/constants";

export default function PriceSection() {
  return (
    <section id="price" className="relative py-20 bg-[#faf8f4]">
      <div className="max-w-[1100px] mx-auto px-4">
        <SectionHeader
          label="Pricing"
          heading={<>Unlock the Door to <span className="text-[#b18e4e]">Affordable Luxury</span></>}
          centered
        />

        {/* Price Cards Grid — 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {PRICE_CARDS.map((card, index) => (
            <div key={index} className="w-full max-w-[480px]">
              <div className="bg-white rounded-2xl pt-6 pb-5 px-5 md:pt-8 md:pb-7 md:px-8 shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                {/* Typology Badge */}
                <div className="flex justify-center">
                  <span className="bg-[#b18e4e] text-white rounded-full px-5 py-1.5 text-sm font-semibold tracking-wide">
                    {card.type}
                  </span>
                </div>

                {/* Price — hero element */}
                <div className="text-center mt-6">
                  <div>
                    <span className="text-lg text-[#666]">₹ </span>
                    <span className="text-3xl md:text-5xl font-bold text-[#b18e4e]">
                      {card.price}
                    </span>
                    <span className="text-xl md:text-2xl font-semibold text-[#333]">
                      {" "}Cr*
                    </span>
                  </div>
                  <span className="text-sm text-[#888] mt-1 block">
                    Onwards
                  </span>
                </div>

                {/* Size Row */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-[#e8e2d8]">
                  <span className="text-sm text-[#888] uppercase tracking-wide">
                    Size
                  </span>
                  <span className="text-lg font-semibold text-[#333]">
                    {card.size} Sq.ft.
                  </span>
                </div>

                {/* Enquire Button — full width */}
                <div className="mt-6">
                  <EnquiryButton
                    label="Enquire Now"
                    className="w-full bg-[#b18e4e] text-white text-[15px] font-semibold rounded-full px-6 py-3.5 hover:bg-[#9a7a3e] transition-all duration-300 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
