const priceCards = [
  { type: "2 BHK Premium", price: "1.17", size: "1050" },
  { type: "2 BHK Luxe", price: "1.33", size: "1200" },
  { type: "3 BHK Premium", price: "1.78", size: "1600" },
  { type: "3 BHK Luxe", price: "1.94", size: "1750" },
];

export default function PriceSection() {
  return (
    <section id="price" className="relative py-[70px] bg-[#faf8f4]">
      <div className="max-w-[1320px] mx-auto px-3">
        {/* Section Title */}
        <div className="text-center mb-10">
          <small className="text-[12px] font-semibold tracking-[3px] uppercase text-[#b18e4e] block mb-[5px]">
            Price Section
          </small>
          <h2 className="text-[33.6px] font-bold text-[#333] tracking-[-1px]">
            Unlock the Door to Affordable Luxury
          </h2>
        </div>

        {/* Price Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 justify-items-center">
          {priceCards.map((card, index) => (
            <div
              key={index}
              className={`w-full max-w-[370px] mx-[35px] mb-3 ${
                index === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="bg-[rgba(177,142,78,0.09)] rounded-[20px] py-[50px] px-[20px] shadow-[8px_8px_12px_0px_rgba(0,0,0,0.25),-4px_-5px_8px_0px_rgba(255,255,255,0.3)] transition-all duration-700 hover:bg-[rgba(177,142,78,0.11)]">
                {/* Typology Badge */}
                <div className="flex justify-center">
                  <span className="border border-[#b18e4e] rounded-[10px] px-[19px] py-[5px] text-[18px] font-semibold text-[#333]">
                    {card.type}
                  </span>
                </div>

                {/* Price */}
                <div className="text-center pt-5">
                  <span className="text-[24px] font-semibold text-[#333]">
                    <span className="text-[20px]">₹ </span>
                    {card.price} Cr*
                  </span>{" "}
                  <span className="text-[18px] font-semibold text-[#333]">
                    Onwards
                  </span>
                </div>

                {/* Size Row */}
                <div className="flex justify-around items-center mt-4 pb-[5px] border-b border-dashed border-[#333]">
                  <span className="text-[15px] font-medium text-[#333]">
                    Size
                  </span>
                  <span className="text-[15px] font-medium text-[#333]">
                    {card.size} Sq.ft.
                  </span>
                </div>

                {/* Enquire Button */}
                <div className="pt-[10px] flex justify-center">
                  <button className="bg-[#b18e4e] text-white text-[14px] font-semibold rounded-[25px] px-[25px] py-[13px] hover:bg-[#9a7a3e] transition-all duration-300 cursor-pointer">
                    Enquire Know
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
