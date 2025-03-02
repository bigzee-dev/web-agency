import React from "react";

export default function SupportOne() {
  return (
    <div className="relative max-w-7xl mx-auto bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl overflow-hidden p-6">
      {/* background pattern */}
      <img
        src="/img/bg-pattern.png"
        alt="bg-pattern"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative flex items-center justify-end w-full h-full z-10">
        <img
          src="/svg/customer-support.svg"
          alt="support"
          className="relative w-[30rem] z-10"
        />
      </div>
    </div>
  );
}
