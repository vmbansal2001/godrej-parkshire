import { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  heading: ReactNode;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  heading,
  centered = false,
}: SectionHeaderProps) {
  if (centered) {
    return (
      <div className="text-center mb-8 md:mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#b18e4e]" />
          <small className="text-xs font-semibold tracking-[3px] uppercase text-[#b18e4e]">
            {label}
          </small>
          <div className="w-8 h-[2px] bg-[#b18e4e]" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-[#222] tracking-tight">
          {heading}
        </h2>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-[2px] bg-[#b18e4e]" />
        <small className="text-xs font-semibold tracking-[3px] uppercase text-[#b18e4e]">
          {label}
        </small>
      </div>
      <h2 className="text-2xl md:text-4xl font-bold text-[#222] tracking-tight">
        {heading}
      </h2>
    </div>
  );
}
