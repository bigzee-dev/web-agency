import { montserrat } from "@/app/ui/fonts";

export default function BlogHeader() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#0f3551]"
      style={{ minHeight: "18rem" }}
    >
      {/* SVG background graphics */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Dot grid */}
        <defs>
          <pattern
            id="blog-dots"
            x="0"
            y="0"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              fill="#33bff2"
              fillOpacity="0.12"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blog-dots)" />

        {/* Large background circle — right side */}
        <circle cx="85%" cy="50%" r="260" fill="#005878" fillOpacity="0.35" />
        <circle cx="85%" cy="50%" r="180" fill="#005878" fillOpacity="0.30" />
        <circle cx="85%" cy="50%" r="100" fill="#33bff2" fillOpacity="0.06" />

        {/* Accent ring — top left */}
        <circle
          cx="8%"
          cy="15%"
          r="90"
          fill="none"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.18"
        />
        <circle
          cx="8%"
          cy="15%"
          r="55"
          fill="none"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.12"
        />

        {/* Diagonal accent lines */}
        <line
          x1="40%"
          y1="0"
          x2="60%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.07"
        />
        <line
          x1="50%"
          y1="0"
          x2="70%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.05"
        />
        <line
          x1="30%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.05"
        />

        {/* Hexagon outline — bottom right decorative */}
        <polygon
          points="92%,75% 95%,68% 98%,75% 95%,82%"
          fill="none"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.2"
        />

        {/* Small floating accent dots */}
        <circle cx="20%" cy="80%" r="4" fill="#33bff2" fillOpacity="0.25" />
        <circle cx="72%" cy="20%" r="3" fill="#33bff2" fillOpacity="0.3" />
        <circle cx="60%" cy="85%" r="5" fill="#005878" fillOpacity="0.6" />
        <circle cx="15%" cy="40%" r="2.5" fill="#33bff2" fillOpacity="0.2" />

        {/* Horizontal rule lines */}
        <line
          x1="0"
          y1="100%"
          x2="100%"
          y2="100%"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.15"
        />
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="#33bff2"
          strokeWidth="1"
          strokeOpacity="0.1"
        />
      </svg>

      {/* Left-edge vertical accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#33bff2]/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 py-20 text-center">
        {/* Main title */}
        <h1
          className={`${montserrat.className} text-6xl font-extrabold leading-none tracking-tight text-white sm:text-7xl md:text-8xl`}
        >
          Blog
        </h1>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <div className="h-px w-10 bg-[#33bff2]/40" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#33bff2]/60" />
          <div className="h-px w-10 bg-[#33bff2]/40" />
        </div>

        {/* Subtitle */}
        <p
          className={`${montserrat.className} text-sm font-medium uppercase tracking-[0.25em] text-blue-300 sm:text-base`}
        >
          Opinions&nbsp;&nbsp;·&nbsp;&nbsp;News&nbsp;&nbsp;·&nbsp;&nbsp;Tutorials
        </p>
      </div>
    </div>
  );
}
