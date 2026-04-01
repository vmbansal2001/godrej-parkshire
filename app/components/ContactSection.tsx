"use client";

import { useEnquiryForm } from "@/app/hooks/useEnquiryForm";

const aboutDeveloper = `Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry. Each Godrej Properties development combines a 122–year legacy of excellence and trust with a commitment to cutting-edge design and technology. In recent years, Godrej Properties has received over 250 awards and recognitions, including 'The Most Trusted Real Estate Brand' in 2019 from the Brand Trust Report, 'Real Estate Company of the Year' at the 9th Construction Week Awards 2019, 'Equality and Diversity Champion' 2019 at the APREA Property Leaders Awards, 'The Economic Times Best Real Estate Brand 2018' and the 'Builder of the Year' at the CNBC-Awaaz Real Estate Awards 2018.`;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-red-500 text-[12px] mt-0.5">{message}</p>;
}

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
    <section id="contact-us" className="bg-white">
      <div className="max-w-[1320px] mx-auto px-3 py-[70px]">
        {/* Section Title */}
        <div className="text-center mb-12">
          <small className="text-[12px] font-semibold tracking-[3px] uppercase text-[#b18e4e] block mb-[5px]">
            Contact Us
          </small>
          <h2 className="text-[33.6px] font-bold text-[#333] tracking-[-1px]">
            We&apos;re Here to Help You Find Your Perfect Property
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row justify-between gap-12">
          {/* About Developer */}
          <div className="w-full xl:w-5/12">
            <h4 className="text-[20px] font-bold text-[#333] border-b-2 border-[#b18e4e] inline-block pb-1 mb-4">
              About Developer
            </h4>
            <p className="text-[15px] text-[#555] leading-[1.8]">
              {aboutDeveloper}
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full xl:w-5/12">
            <h2 className="text-[24px] font-bold text-[#333] mb-5">
              Send A Message!
            </h2>

            {status === "success" ? (
              <div className="text-center py-12 border border-[#ddd] rounded-[6px]">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[22px] font-bold text-[#333] mb-2">Thank You!</h3>
                <p className="text-[15px] text-[#666]">We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-[#ddd] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors"
                  />
                  <FieldError message={errors.name} />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-[#ddd] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors"
                  />
                  <FieldError message={errors.phone} />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-[#ddd] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors"
                  />
                  <FieldError message={errors.email} />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-[#ddd] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors resize-none"
                />

                {serverError && (
                  <p className="text-red-500 text-[13px] text-center">{serverError}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#b18e4e] hover:bg-[#9a7a3e] text-white text-[16px] font-semibold rounded-[6px] py-3 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
                    <span className="text-[13px] text-[#555] leading-normal">
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
    </section>
  );
}
