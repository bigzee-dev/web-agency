import type React from "react";

interface StepCardProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

export default function StepCard({ number, title, children }: StepCardProps) {
  return (
    <div className="flex flex-col items-start space-y-4">
      <span className="text-[#d8d8da] text-7xl font-bold">{number}</span>
      <h3 className="text-primary text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
}
