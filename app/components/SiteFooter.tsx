"use client";

import { useState } from "react";

const disclaimerShort =
  "Disclaimer - The content provided on this website is for information purposes only and does not constitute an offer to avail any service. The prices mentioned are subject to change without prior notice, and the availability of properties mentioned is not guaranteed.";

const disclaimerFull =
  "The images displayed on the website are for representation purposes only and may not reflect the actual properties accurately. Please note that this is the official website of an authorized marketing partner. We may share data with Real Estate Regulatory Authority (RERA) registered brokers/companies for further processing as required. We may also send updates and information to the mobile number or email ID registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is advisable to contact us directly through the provided contact information on this website. Thank you for visiting our website.";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=+917618792300&text=Hello,%20Looking%20for%20Godrej%20Parkshire%20At%20Hoskote,%20East%20Bangalore.%20Get%20in%20touch%20with%20me%20my%20name%20is";

export default function SiteFooter() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Footer */}
      <footer className="bg-[#1a1a2e] text-white">
        <div className="max-w-[1320px] mx-auto px-3 py-10">
          <p className="text-[14px] text-[#ccc] text-center mb-4 font-medium">
            Project RERA NO : PRM/KA/RERA/1250/304/PR/090126/008393 | Agent RERA
            NO: PRM/KA/RERA/1251/309/AG/220113/002710
          </p>

          <p className="text-[13px] text-[#999] leading-relaxed text-center">
            {disclaimerShort}
          </p>

          {expanded && (
            <p className="text-[13px] text-[#999] leading-relaxed text-center mt-2">
              {disclaimerFull}
            </p>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="block mx-auto mt-3 text-[14px] text-white cursor-pointer hover:text-[#b18e4e] transition-colors"
          >
            {expanded ? "Read less" : "Read more"}
          </button>

          <div className="text-center mt-6 text-[13px] text-[#999]">
            <a
              href="/disclaimer"
              className="hover:text-white transition-colors"
            >
              Disclaimer &amp; Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <span>
              Digital Media Planned By{" "}
              <a
                href="http://www.gtftechnologies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
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
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25d366] text-white text-center text-[14px] font-semibold py-3"
        >
          WhatsApp
        </a>
        <a
          href="tel:+917618792300"
          className="flex-1 bg-[#333] text-white text-center text-[14px] font-semibold py-3"
        >
          Call Now
        </a>
      </div> */}
    </>
  );
}
