import Image from "next/image";

const floorPlans = [
  { label: "Master Plan", image: "/images/floor-plans/master-plan.webp" },
  { label: "2 BHK", image: "/images/floor-plans/floorplan-zoom-1.webp" },
  { label: "3 BHK", image: "/images/floor-plans/floorplan-zoom-1.webp" },
];

export default function FloorPlansSection() {
  return (
    <section id="floor-plans" className="bg-[#faf8f5]">
      <div className="max-w-[1320px] mx-auto px-3 py-[70px]">
        {/* Section Title */}
        <div className="text-center mb-10">
          <small className="text-[12px] font-semibold tracking-[3px] uppercase text-[#b18e4e] block mb-[5px]">
            Floor Plans
          </small>
          <h2 className="text-[33.6px] font-bold text-[#333] tracking-[-1px]">
            Your Vision, Our Floor Plans
          </h2>
        </div>

        {/* Floor Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
          {floorPlans.map((plan, index) => (
            <div key={index} className="mb-4">
              <div className="relative border border-[#b18e4e] rounded-[19px] p-[10px] text-center">
                {/* Label Badge */}
                <p className="relative inline-block bg-[#b18e4e] text-white text-[17px] font-medium rounded-[5px] px-[35px] py-[4px] -mt-[24px] mb-[-15px]">
                  {plan.label}
                </p>

                {/* Floor Plan Image */}
                <Image
                  src={plan.image}
                  alt={plan.label}
                  width={900}
                  height={643}
                  className="w-full h-auto rounded-[30px] object-cover"
                />

                {/* View Plan Button */}
                <h4 className="text-[20px] font-semibold text-[#333] text-center bg-white border border-[#b18e4e] rounded-[8px] px-[30px] py-[8px] inline-block mt-2 mb-2 cursor-pointer hover:bg-[#b18e4e] hover:text-white transition-all duration-300">
                  View Plan
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
