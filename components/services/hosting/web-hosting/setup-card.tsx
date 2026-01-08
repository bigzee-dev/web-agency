import type React from "react";

interface SetupCardProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export default function SetupCard({ number, title, children }: SetupCardProps) {
  return (
    <div className="flex flex-col items-start space-y-4">
      <span className="text-7xl font-bold text-[#d8d8da]">{number}</span>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="leading-relaxed text-gray-700">{children}</p>
    </div>
  );
}
