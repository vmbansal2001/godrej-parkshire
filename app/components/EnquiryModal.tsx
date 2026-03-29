"use client";

import { useState } from "react";
import Image from "next/image";
import SheetModal from "./SheetModal";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ open, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", formData);
    onClose();
  };

  return (
    <SheetModal
      open={open}
      handleClose={onClose}
      className={{ container: "max-w-[1000px]" }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Panel - Property Image */}
        <div className="hidden lg:block shrink-0 bg-[#0c1b2e]">
          <Image
            src="/images/Godrej-Hoskote-popup.jpg"
            alt="Godrej Parkshire - 2 & 3 BHK Apartments starting at ₹1.17 Cr"
            width={520}
            height={520}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Panel - Form */}
        <div className="flex-1 bg-white p-6 md:p-8 relative flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Heading */}
          <div className="mb-6 pr-8">
            <h2 className="text-[28px] font-bold text-[#333]">
              Godrej Parkshire
            </h2>
            <p className="text-[15px] text-[#666]">
              At Hoskote, East Bangalore
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 flex-1 justify-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-[#c9a44e] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors"
            />

            <div className="flex items-center gap-0 border border-[#c9a44e] rounded-[6px] overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 border-r border-[#c9a44e] shrink-0 py-3">
                <span className="text-[14px]">🇮🇳</span>
                <span className="text-[14px] text-[#333]">+91</span>
                <svg
                  className="w-3 h-3 text-[#666]"
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
                required
                className="flex-1 px-3 py-3 text-[15px] text-[#333] outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#c9a44e] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors"
            />

            <input
              type="text"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-[#c9a44e] rounded-[6px] px-4 py-3 text-[15px] text-[#333] outline-none focus:border-[#b18e4e] transition-colors"
            />

            <div className="flex justify-center mt-1">
              <button
                type="submit"
                className="bg-[#b18e4e] hover:bg-[#9a7a3e] text-white text-[16px] font-semibold rounded-[6px] px-10 py-3 transition-colors cursor-pointer"
              >
                Submit Now
              </button>
            </div>

            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    consent: e.target.checked,
                  }))
                }
                className="mt-0.5 accent-[#b18e4e]"
              />
              <span className="text-[12px] text-[#555] leading-normal">
                I authorize company representatives to Call, SMS, Email or
                WhatsApp me about its products and offers. This consent overrides
                any registration for DNC/NDNC.
              </span>
            </label>
          </form>
        </div>
      </div>
    </SheetModal>
  );
}
