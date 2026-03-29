import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BannerStrip from "./components/BannerStrip";
import OverviewSection from "./components/OverviewSection";
import HighlightsSection from "./components/HighlightsSection";
import PriceSection from "./components/PriceSection";
import AmenitiesSection from "./components/AmenitiesSection";
import FloorPlansSection from "./components/FloorPlansSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BannerStrip />
      <OverviewSection />
      <HighlightsSection />
      <PriceSection />
      <AmenitiesSection />
      <FloorPlansSection />
      {/* Placeholder for remaining sections */}
      {/* <section className="h-screen bg-white flex items-center justify-center">
        <p className="text-gray-800 text-2xl">Content Section (placeholder)</p>
      </section> */}
    </>
  );
}
