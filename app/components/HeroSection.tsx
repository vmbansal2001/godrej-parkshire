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

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-400 text-[12px] mt-0.5">{message}</p>;
}

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
    <section id="home" className="relative w-full h-[872px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-banner.webp"
        alt="Godrej Parkshire"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Container */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-[50%]">
        <div className="max-w-[1320px] mx-auto px-3">
          <div className="text-white max-w-[55%]">
            {/* Subtitle */}
            <small className="text-[13px] font-semibold tracking-[2px] uppercase text-[#ebd7b2] block mb-2">
              At Hoskote, East Bangalore
            </small>

            {/* Main Heading */}
            <h2 className="text-[38px] font-bold text-white mb-4 uppercase tracking-[1px]">
              Godrej Parkshire
            </h2>

            {/* Highlight Items */}
            <div className="flex flex-col gap-[6px] mb-5">
              {highlights.map((item, index) => (
                <p
                  key={index}
                  className="flex items-center gap-2 text-[16px] text-white"
                >
                  <Image
                    src="/images/check-mark.webp"
                    alt=""
                    width={16}
                    height={16}
                    className="w-4 h-4 shrink-0"
                  />
                  {item}
                </p>
              ))}
            </div>

            {/* Apartment Badge */}
            <div className="mb-3">
              <span className="inline-block border border-white rounded-[30px] px-5 py-[10px] text-[20px] font-semibold text-white">
                2 & 3 BHK Apartments
              </span>
            </div>

            {/* Price Badge */}
            <div className="mb-5">
              <span className="inline-block border border-white rounded-[30px] px-5 py-[10px] text-[20px] font-semibold text-white">
                Starting Price : ₹ <span className="text-[#ffd588] text-[30px]">1.17</span>{" "}
                Cr*
              </span>
            </div>

            {/* Download Brochure Button */}
            <div className="pt-[10px]">
              <EnquiryButton className="inline-block bg-[#b18e4e] text-white text-[14px] font-semibold rounded-[25px] px-[25px] py-[13px] hover:bg-[#9a7a3e] transition-all duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="absolute top-1/2 -translate-y-[50%] hidden lg:block" style={{ right: "calc((100% - 1320px) / 2 + 12px)" }}>
        <div className="w-[414px] bg-white/20 backdrop-blur-sm rounded-[10px] p-[30px]">
          {/* Form Title */}
          <h3 className="text-center text-[24px] font-bold text-[#ffe2ac] border border-white/50 p-[5px] mb-5">
            Book A Site Visit
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
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[38px] px-3 py-1.5 text-[14px] text-[#333] bg-white border border-[#ededed] rounded-[6px] outline-none focus:border-[#b18e4e] transition-colors"
                />
                <FieldError message={errors.name} />
              </div>

              {/* Phone with country code */}
              <div>
                <div className="flex items-center gap-0 h-[38px] bg-white border border-[#ededed] rounded-[6px] overflow-hidden">
                  <div className="flex items-center gap-1 px-2 border-r border-[#ededed] shrink-0 h-full">
                    <span className="text-[14px]">🇮🇳</span>
                    <span className="text-[14px] text-[#333]">+91</span>
                    <svg
                      className="w-3 h-3 text-[#333]"
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
                    placeholder="Mobile"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 h-full px-3 text-[14px] text-[#333] outline-none"
                  />
                </div>
                <FieldError message={errors.phone} />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[38px] px-3 py-1.5 text-[14px] text-[#333] bg-white border border-[#ededed] rounded-[6px] outline-none focus:border-[#b18e4e] transition-colors"
                />
                <FieldError message={errors.email} />
              </div>

              {/* Message */}
              <input
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-[38px] px-3 py-1.5 text-[14px] text-[#333] bg-white border border-[#ededed] rounded-[6px] outline-none focus:border-[#b18e4e] transition-colors"
              />

              {/* Server Error */}
              {serverError && (
                <p className="text-red-400 text-[13px] text-center">{serverError}</p>
              )}

              {/* Submit Button */}
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-[200px] border-2 border-white text-white text-[15px] font-semibold rounded-[25px] px-[25px] py-[14px] bg-transparent hover:bg-white hover:text-[#333] transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </button>
              </div>

              {/* Consent Checkbox */}
              <div className="flex flex-col gap-1 mt-1">
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 shrink-0 accent-[#b18e4e]"
                  />
                  <span className="text-[11px] text-white/90 leading-tight">
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
    </section>
  );
}
