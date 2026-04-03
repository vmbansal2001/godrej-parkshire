"use client";

import { useState } from "react";
import { SITE, RERA } from "@/app/lib/constants";

const DISCLAIMER_SHORT =
  "Disclaimer - The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed.";

const DISCLAIMER_FULL =
  "The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately. Please note that this is the official website of an authorized marketing partner. We may share data with Real Estate Regulatory Authority (RERA) registered brokers/companies for further processing as required. We may also send updates and information to the mobile number or email ID registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is advisable to contact us directly through the provided contact information on this website. Thank you for visiting our website.";

export default function SiteFooter() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Footer */}
      <footer className="bg-[#111] text-white">
        {/* Gold divider */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#b18e4e] to-transparent" />

        <div className="max-w-[1280px] mx-auto px-6 pt-10 pb-8">
          {/* RERA Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white/70">
              <svg className="w-3.5 h-3.5 text-[#b18e4e] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
              Project RERA: {RERA.project}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-white/70">
              <svg className="w-3.5 h-3.5 text-[#b18e4e] shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" /></svg>
              Agent RERA: {RERA.agent}
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-6" />

          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto">
            <p className="text-[12px] text-white/40 leading-relaxed text-center">
              {DISCLAIMER_SHORT}
            </p>

            {expanded && (
              <p className="text-[12px] text-white/40 leading-relaxed text-center mt-2">
                {DISCLAIMER_FULL}
              </p>
            )}

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 mx-auto mt-3 text-xs text-[#b18e4e] cursor-pointer hover:text-[#d4b87a] transition-colors"
            >
              {expanded ? "Read less" : "Read more"}
              <svg className={`w-3 h-3 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 my-6" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/40">
            <a
              href="/disclaimer"
              className="hover:text-white/70 transition-colors"
            >
              Disclaimer &amp; Privacy Policy
            </a>
            <span className="text-white/20">
              Digital Media Planned By{" "}
              <a
                href="http://www.gtftechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-[#b18e4e] transition-colors"
              >
                GTF Technologies
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bar */}
      {/* <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden">
        <a
          href="#contact-us"
          className="flex-1 bg-[#b18e4e] text-white text-center text-[14px] font-semibold py-3"
        >
          Enquire Now
        </a>
        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25d366] text-white text-center text-[14px] font-semibold py-3"
        >
          WhatsApp
        </a>
        <a
          href={SITE.phoneTel}
          className="flex-1 bg-[#333] text-white text-center text-[14px] font-semibold py-3"
        >
          Call Now
        </a>
      </div> */}
    </>
  );
}
