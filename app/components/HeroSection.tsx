"use client";

import Image from "next/image";
import EnquiryButton from "./EnquiryButton";
import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";

const highlights = [
  "Payment Plan - 20:80",
  "Number of Units - 1130 units | 14 Acres",
  "Ideal for all Investors looking for high returns.",
  "Limited inventory applicable ( 2 & 3 BHK )",
];

import FieldError from "./ui/FieldError";

export default function HeroSection() {
  const {
    formData,
    consent,
    setConsent,
    errors,
    status,
    serverError,
    handleChange,
    handleSubmit,
  } = useEnquiryForm({ source: "Hero - Book A Site Visit" });

  return (
    <section id="home" className="relative w-full h-[100vh] min-h-[800px] max-h-[960px] overflow-hidden">
      {/* Background Image with subtle zoom animation */}
      <Image
        src="/images/hero-banner.webp"
        alt="Godrej Parkshire"
        fill
        className="object-cover object-center scale-105 animate-[heroZoom_20s_ease-in-out_infinite_alternate]"
        priority
        quality={90}
      />

      {/* Multi-layer overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      {/* Gold vignette accent */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#b18e4e]/50 to-transparent" />

      {/* Content Container */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-[50%]">
        <div className="max-w-[1320px] mx-auto px-3">
          <div className="text-white max-w-[55%]">
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-[#b18e4e]" />
              <small className="text-[13px] font-semibold tracking-[2px] uppercase text-[#d4b87a]">
                At Hoskote, East Bangalore
              </small>
            </div>

            {/* Main Heading */}
            <h2 className="text-[48px] font-bold text-white mb-2 uppercase tracking-[1px] leading-tight">
              Godrej <span className="text-[#d4b87a]">Parkshire</span>
            </h2>

            {/* Tagline */}
            <p className="text-white/70 text-lg mb-6">Where luxury meets connectivity</p>

            {/* Highlight Items */}
            <div className="flex flex-col gap-2 mb-7">
              {highlights.map((item, index) => (
                <p
                  key={index}
                  className="flex items-center gap-3 text-[15px] font-medium text-white"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#b18e4e]/30 shrink-0">
                    <Image
                      src="/images/check-mark.webp"
                      alt=""
                      width={12}
                      height={12}
                      className="w-3 h-3"
                    />
                  </span>
                  {item}
                </p>
              ))}
            </div>

            {/* Badges row */}
            <div className="flex flex-wrap items-stretch gap-3 mb-6">
              {/* Apartment Badge */}
              <EnquiryButton
                label="2 & 3 BHK Apartments"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-[16px] font-semibold text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
              />

              {/* Price Badge */}
              <EnquiryButton
                className="inline-flex items-center bg-[#b18e4e]/20 backdrop-blur-sm border border-[#b18e4e]/40 rounded-full px-6 py-3 text-[16px] font-semibold text-white hover:bg-[#b18e4e]/30 transition-all duration-300 cursor-pointer"
              >
                Starting ₹ <span className="text-[#ffd588] text-[20px] font-bold ml-1">1.20</span> <span className="ml-0.5">Cr*</span>
              </EnquiryButton>
            </div>

            {/* Download Brochure Button */}
            <div>
              <EnquiryButton className="inline-block bg-[#b18e4e] text-white text-[15px] font-semibold rounded-full px-8 py-3.5 hover:bg-[#9a7a3e] hover:shadow-[0_4px_20px_rgba(177,142,78,0.4)] transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="absolute top-1/2 -translate-y-[50%] hidden lg:block" style={{ right: "calc((100% - 1320px) / 2 + 12px)" }}>
        <div className="w-[414px] bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Form Title */}
          <h3 className="text-center text-[22px] font-bold text-white mb-6">
            Book A <span className="text-[#d4b87a]">Site Visit</span>
          </h3>

          {status === "success" ? (
            <div className="text-center py-8">
              <div className="text-[40px] mb-3">✓</div>
              <h4 className="text-[20px] font-bold text-white mb-2">Thank You!</h4>
              <p className="text-white/90 text-[14px]">We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[44px] px-4 text-[14px] text-[#333] bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl outline-none focus:border-[#b18e4e] focus:bg-white transition-all placeholder:text-[#999]"
                />
                <FieldError message={errors.name} />
              </div>

              {/* Phone with country code */}
              <div>
                <div className="flex items-center gap-0 h-[44px] bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-1 px-3 border-r border-[#e5e5e5] shrink-0 h-full">
                    <span className="text-[14px]">🇮🇳</span>
                    <span className="text-[13px] text-[#333]">+91</span>
                    <svg
                      className="w-3 h-3 text-[#999]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 h-full px-3 text-[14px] text-[#333] outline-none bg-transparent placeholder:text-[#999]"
                  />
                </div>
                <FieldError message={errors.phone} />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[44px] px-4 text-[14px] text-[#333] bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl outline-none focus:border-[#b18e4e] focus:bg-white transition-all placeholder:text-[#999]"
                />
                <FieldError message={errors.email} />
              </div>

              {/* Message */}
              <input
                type="text"
                name="message"
                placeholder="Message (Optional)"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-[44px] px-4 text-[14px] text-[#333] bg-white/90 backdrop-blur-sm border border-white/30 rounded-xl outline-none focus:border-[#b18e4e] focus:bg-white transition-all placeholder:text-[#999]"
              />

              {/* Server Error */}
              {serverError && (
                <p className="text-red-400 text-[13px] text-center">{serverError}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-[#b18e4e] text-white text-[15px] font-semibold rounded-full py-3.5 hover:bg-[#9a7a3e] hover:shadow-[0_4px_20px_rgba(177,142,78,0.4)] transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-1"
              >
                {status === "submitting" ? "Submitting..." : "Book Free Site Visit"}
              </button>

              {/* Consent Checkbox */}
              <div className="flex flex-col gap-1">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 shrink-0 accent-[#b18e4e]"
                  />
                  <span className="text-[11px] text-white/70 leading-tight">
                    I authorize company representatives to Call, SMS, Email or
                    WhatsApp me about its products and offers. This consent overrides
                    any registration for DNC/NDNC.
                  </span>
                </div>
                <FieldError message={errors.consent} />
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-[#b18e4e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </div>
    </section>
  );
}
