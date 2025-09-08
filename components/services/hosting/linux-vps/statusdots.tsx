"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ServerStatusIndicatorProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  speed?: "slow" | "normal" | "fast";
}

export default function ServerStatusIndicator({
  className,
  size = "md",
  speed = "normal",
}: ServerStatusIndicatorProps) {
  const [activeDot, setActiveDot] = useState(0);

  const sizeClasses = {
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const speedMs = {
    slow: 700,
    normal: 500,
    fast: 300,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3);
    }, speedMs[speed]);

    return () => clearInterval(interval);
  }, [speed]);

  return (
    <div className={cn("flex gap-1.5", className)}>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={cn(
            "rounded-full border-2 transition-all duration-300 ease-in-out",
            sizeClasses[size],
            activeDot === index
              ? "animate-pulse border-green-400 bg-green-500 shadow-lg shadow-green-500/50"
              : "border-gray-600 bg-slate-600",
          )}
        />
      ))}
    </div>
  );
}
