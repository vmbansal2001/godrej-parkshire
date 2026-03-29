import Image from "next/image";

export default function BannerStrip() {
  return (
    <div className="w-full">
      {/* Desktop Banner */}
      <Image
        src="/images/banner-strip-desktop.jpg"
        alt="Godrej Parkshire - Find Your Perfect Stay"
        width={1920}
        height={400}
        className="w-full h-auto hidden md:block"
        quality={90}
      />
      {/* Mobile Banner */}
      <Image
        src="/images/banner-strip-mobile.jpg"
        alt="Godrej Parkshire - Find Your Perfect Stay"
        width={500}
        height={700}
        className="w-full h-auto block md:hidden"
        quality={90}
      />
    </div>
  );
}
