"use client";

import { useState, ReactNode } from "react";
import EnquiryModal from "./EnquiryModal";

interface EnquiryButtonProps {
  label?: string;
  className?: string;
  children?: ReactNode;
}

export default function EnquiryButton({
  label = "Download Brochure",
  className,
  children,
}: EnquiryButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children ?? label}
      </button>
      <EnquiryModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
