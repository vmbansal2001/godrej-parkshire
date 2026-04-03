"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Overview", href: "#overview" },
  { label: "Highlights", href: "#highlights" },
  { label: "Price", href: "#price" },
  { label: "Amenities", href: "#amenities" },
  { label: "Floor Plans", href: "#floor-plans" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 63;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ease-in-out py-[10px] ${
        isScrolled
          ? "bg-white border-b border-[#d9e1e6]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-3">
        <div className="flex items-center">
          {/* Logo */}
          <div className="shrink-0 mr-auto">
            <a href="#" onClick={(e) => handleNavClick(e, "#")}>
              <Image
                src="/images/project-logo-light.png"
                alt="Godrej Properties"
                width={180}
                height={43}
                className={`h-[43px] w-auto ${isScrolled ? "brightness-0" : ""}`}
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link.label} className="inline-block">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-[10px] py-2 text-[15px] font-semibold transition-colors duration-200 whitespace-nowrap hover:text-[#b18e4e] ${
                      isScrolled ? "text-[#333]" : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Phone Button */}
            <a
              href="tel:+919538111105"
              className="ml-4 bg-[#b18e4e] text-white text-[15px] font-semibold rounded-[25px] px-[22px] py-[14px] transition-all duration-300 hover:bg-[#9a7a3e] whitespace-nowrap"
            >
              +91 9538111105
            </a>

            {/* PT Logo (circular icon) */}
            <div className="ml-4 shrink-0">
              <Image
                src="/images/pt-logo.png"
                alt=""
                width={42}
                height={41}
                className="w-[42px] h-[41px]"
              />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                isScrolled ? "bg-[#333]" : "bg-white"
              } ${isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                isScrolled ? "bg-[#333]" : "bg-white"
              } ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                isScrolled ? "bg-[#333]" : "bg-white"
              } ${isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 z-[1001] ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-3xl text-[#333] mb-6 float-right leading-none"
            aria-label="Close menu"
          >
            &times;
          </button>
          <ul className="clear-both pt-10 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-2.5 px-3 text-[15px] font-semibold text-[#333] hover:text-[#b18e4e] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-4">
              <a
                href="tel:+919538111105"
                className="block text-center bg-[#b18e4e] text-white text-[15px] font-semibold rounded-[25px] px-[22px] py-[14px] hover:bg-[#9a7a3e] transition-colors"
              >
                +91 9538111105
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-[1000]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
