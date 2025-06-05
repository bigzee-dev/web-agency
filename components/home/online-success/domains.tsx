import { Badge } from "@/components/ui/badge";
import { ChevronRight, Lock } from "lucide-react";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const features = [
  "Visually stunning, responsive and secure websites",
  "Expert web development services",
  "FREE website migration",
];

export default function Domains() {
  return (
    <div className="bg-[#2D1576] text-white rounded-3xl p-8 md:p-12">
      <h2 className="text-4xl font-bold mb-6">Website Builder</h2>
      <p className="text-lg opacity-90">
        Create a professional website with our easy-to-use builder.
      </p>
    </div>
  );
}
