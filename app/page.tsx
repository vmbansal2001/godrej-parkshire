import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import BannerStrip from "./components/BannerStrip";
import OverviewSection from "./components/OverviewSection";
import HighlightsSection from "./components/HighlightsSection";
import PriceSection from "./components/PriceSection";
import AmenitiesSection from "./components/AmenitiesSection";
import FloorPlansSection from "./components/FloorPlansSection";
import GallerySection from "./components/GallerySection";
import LocationSection from "./components/LocationSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

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
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
