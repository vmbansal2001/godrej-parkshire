"use client";

import { useState } from "react";

const aboutDeveloper = `Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry. Each Godrej Properties development combines a 122–year legacy of excellence and trust with a commitment to cutting-edge design and technology. In recent years, Godrej Properties has received over 250 awards and recognitions, including 'The Most Trusted Real Estate Brand' in 2019 from the Brand Trust Report, 'Real Estate Company of the Year' at the 9th Construction Week Awards 2019, 'Equality and Diversity Champion' 2019 at the APREA Property Leaders Awards, 'The Economic Times Best Real Estate Brand 2018' and the 'Builder of the Year' at the CNBC-Awaaz Real Estate Awards 2018.`;

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [agreed, setAgreed] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to API / CRM endpoint
    console.log("Contact form submitted:", form);
  };

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

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-[#ddd] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-[#ddd] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-[#ddd] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full border border-[#ddd] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#b18e4e] hover:bg-[#9a7a3e] text-white text-[16px] font-semibold rounded-[6px] py-3 transition-colors cursor-pointer"
              >
                Submit Now
              </button>

              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="mt-1 accent-[#b18e4e]"
                />
                <span className="text-[13px] text-[#555] leading-normal">
                  I authorize company representatives to Call, SMS, Email or
                  WhatsApp me about its products and offers. This consent
                  overrides any registration for DNC/NDNC.
                </span>
              </label>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
