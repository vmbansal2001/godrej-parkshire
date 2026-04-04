import Image from "next/image";

export default function BannerStrip() {
  return (
    <div className="w-full">
      <Image
        src="/images/banner-strip-v2.png"
        alt="Godrej Parkshire - 2 & 3 BHK Apartments Starting at ₹1.20 Cr"
        width={1920}
        height={400}
        className="w-full h-auto"
        quality={90}
      />
    </div>
  );
}
