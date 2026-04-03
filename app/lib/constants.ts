/* ───────────────────────────────────────────────
 * Site-wide constants for Godrej Parkshire
 * ─────────────────────────────────────────────── */

export const SITE = {
  name: "Godrej Parkshire",
  location: "Hoskote, East Bangalore",
  phone: "9538111105",
  phoneFormatted: "+91 9538111105",
  phoneTel: "tel:+919538111105",
  whatsappUrl:
    "https://api.whatsapp.com/send?phone=+919538111105&text=Hello,%20Looking%20for%20Godrej%20Parkshire%20At%20Hoskote,%20East%20Bangalore.%20Get%20in%20touch%20with%20me%20my%20name%20is",
} as const;

export const PRICE_CARDS = [
  { type: "2 BHK Premium", price: "1.20", size: "1095" },
  { type: "2 BHK Luxe", price: "1.36", size: "1225" },
  { type: "3 BHK Premium", price: "1.81", size: "1615" },
  { type: "3 BHK Luxe", price: "1.97", size: "1750" },
] as const;

export const AMENITIES = [
  { name: "Swimming Pool", image: "/images/amenities/1.webp" },
  { name: "Gymnasium", image: "/images/amenities/2.webp" },
  { name: "Multipurpose Hall", image: "/images/amenities/3.webp" },
  { name: "Kids Play Area", image: "/images/amenities/4.webp" },
  { name: "Yoga", image: "/images/amenities/11.webp" },
  { name: "Badminton Court", image: "/images/amenities/6.webp" },
  { name: "Indoor Games", image: "/images/amenities/7.webp" },
  { name: "Tennis Court", image: "/images/amenities/8.webp" },
] as const;

export const FLOOR_PLANS = [
  { label: "Master Plan", image: "/images/floor-plans/master-plan.webp" },
  { label: "2 BHK", image: "/images/floor-plans/floorplan-zoom-1.webp" },
  { label: "3 BHK", image: "/images/floor-plans/floorplan-zoom-1.webp" },
] as const;

export const HIGHLIGHTS = [
  "High-rise residential towers with modern architecture and efficient planning",
  "Approx. 1,400 apartments across a thoughtfully planned 14-acre township",
  "Designed for natural light, ventilation and sustainable living",
  "Prime East Bangalore location with strong connectivity to IT hubs",
  "RERA registration in progress / will be registered soon",
  "World class Amenities",
] as const;

export const LOCATION_ADVANTAGES = [
  "Strategically located in Hoskote, East Bangalore — close to NH 75 and Old Madras Road.",
  "Excellent connectivity to Whitefield, KR Puram and ITPL (approx. 16 mins drive to ITPL).",
  "Near growth corridors like Outer Ring Road and Sarjapur Road with upcoming infrastructure development.",
  "Nearby schools, retail and daily conveniences — perfect for families and professionals.",
  "Well-connected via bus network and major arterial roads.",
] as const;

export const GALLERY_IMAGES = [
  { src: "/images/gallery/gallery-min-1.webp", alt: "Gallery 1" },
  { src: "/images/gallery/gallery-min-2.webp", alt: "Gallery 2" },
  { src: "/images/gallery/gallery-min-3.webp", alt: "Gallery 3" },
  { src: "/images/gallery/gallery-min-4.webp", alt: "Gallery 4" },
  { src: "/images/gallery/gallery-min-5.webp", alt: "Gallery 5" },
  { src: "/images/gallery/gallery-min-6.webp", alt: "Gallery 6" },
] as const;

export const RERA = {
  project: "PRM/KA/RERA/1250/304/PR/090126/008393",
  agent: "PRM/KA/RERA/1251/309/AG/220113/002710",
} as const;
