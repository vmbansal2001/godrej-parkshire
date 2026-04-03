"use client";

import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";

const aboutDeveloper = `Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry. Each Godrej Properties development combines a 122–year legacy of excellence and trust with a commitment to cutting-edge design and technology. In recent years, Godrej Properties has received over 250 awards and recognitions, including 'The Most Trusted Real Estate Brand' in 2019 from the Brand Trust Report, 'Real Estate Company of the Year' at the 9th Construction Week Awards 2019, 'Equality and Diversity Champion' 2019 at the APREA Property Leaders Awards, 'The Economic Times Best Real Estate Brand 2018' and the 'Builder of the Year' at the CNBC-Awaaz Real Estate Awards 2018.`;

import FieldError from "./ui/FieldError";

export default function ContactSection() {
  const {
    formData,
    consent,
    setConsent,
    errors,
    status,
    serverError,
    handleChange,
    handleSubmit,
  } = useEnquiryForm({ source: "Contact Us Section" });

  return (
    <section id="contact-us" className="bg-[#1a1a1a]">
      <div className="max-w-[1280px] mx-auto px-6 py-24">
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#b18e4e]" />
            <small className="text-xs font-semibold tracking-[3px] uppercase text-[#b18e4e]">
              Contact Us
            </small>
            <div className="w-8 h-[2px] bg-[#b18e4e]" />
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Get in <span className="text-[#b18e4e]">Touch</span>
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 lg:gap-16">
          {/* About Developer */}
          <div className="w-full xl:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#b18e4e]" />
              <h4 className="text-lg font-bold text-white">About Developer</h4>
            </div>
            <p className="text-[15px] text-white/60 leading-7 mb-8">
              {aboutDeveloper}
            </p>

            {/* Trust badges */}
            <div className="flex gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center">
                <div className="text-2xl font-bold text-[#b18e4e]">122+</div>
                <div className="text-xs text-white/50 uppercase tracking-wide mt-1">Years Legacy</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center">
                <div className="text-2xl font-bold text-[#b18e4e]">250+</div>
                <div className="text-xs text-white/50 uppercase tracking-wide mt-1">Awards</div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-center">
                <div className="text-2xl font-bold text-[#b18e4e]">#1</div>
                <div className="text-xs text-white/50 uppercase tracking-wide mt-1">Trusted Brand</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full xl:w-1/2">
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
              <h3 className="text-xl font-bold text-[#222] mb-6">
                Send A Message
              </h3>

              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#333] mb-2">Thank You!</h3>
                  <p className="text-sm text-[#666]">We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3.5 text-sm text-[#333] outline-none focus:border-[#b18e4e] focus:ring-1 focus:ring-[#b18e4e]/20 transition-all bg-[#fafafa]"
                    />
                    <FieldError message={errors.name} />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3.5 text-sm text-[#333] outline-none focus:border-[#b18e4e] focus:ring-1 focus:ring-[#b18e4e]/20 transition-all bg-[#fafafa]"
                    />
                    <FieldError message={errors.phone} />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3.5 text-sm text-[#333] outline-none focus:border-[#b18e4e] focus:ring-1 focus:ring-[#b18e4e]/20 transition-all bg-[#fafafa]"
                    />
                    <FieldError message={errors.email} />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3.5 text-sm text-[#333] outline-none focus:border-[#b18e4e] focus:ring-1 focus:ring-[#b18e4e]/20 transition-all resize-none bg-[#fafafa]"
                  />

                  {serverError && (
                    <p className="text-red-500 text-xs text-center">{serverError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-[#b18e4e] hover:bg-[#9a7a3e] text-white text-sm font-semibold rounded-full py-3.5 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Submitting..." : "Submit Now"}
                  </button>

                  <div className="flex flex-col gap-1">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-1 accent-[#b18e4e]"
                      />
                      <span className="text-xs text-[#888] leading-normal">
                        I authorize company representatives to Call, SMS, Email or
                        WhatsApp me about its products and offers. This consent
                        overrides any registration for DNC/NDNC.
                      </span>
                    </label>
                    <FieldError message={errors.consent} />
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
