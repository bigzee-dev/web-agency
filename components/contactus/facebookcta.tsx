import { FaFacebookF, FaThumbsUp, FaHeart } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { ArrowUpRight } from "lucide-react";
import { montserrat } from "@/app/ui/fonts";

export default function FacebookCTA() {
  return (
    <section className="px-4 py-10 md:pb-12 md:pt-0">
      <style>{`
        @keyframes fbFloat {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-10px) rotate(-6deg); }
        }
        @keyframes fbFloatAlt {
          0%, 100% { transform: translateY(0) rotate(8deg); }
          50% { transform: translateY(-14px) rotate(8deg); }
        }
        @keyframes fbFloatThird {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-8px) rotate(-3deg); }
        }
        .fb-float-1 { animation: fbFloat 4s ease-in-out infinite; }
        .fb-float-2 { animation: fbFloatAlt 5s ease-in-out infinite 0.6s; }
        .fb-float-3 { animation: fbFloatThird 4.5s ease-in-out infinite 1.2s; }
      `}</style>

      <a
        href="https://web.facebook.com/DeltaworxBW"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Facebook page (opens in a new tab)"
        className="group relative mx-auto block max-w-4xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#1877F2] via-[#0d5fcc] to-[#005878] shadow-xl ring-1 ring-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#1877F2]/30"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-[#33bff2]/30 blur-3xl"
        />

        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="pointer-events-none absolute -right-12 -top-10 h-72 w-72 fill-white/[0.08] transition-transform duration-700 ease-out group-hover:rotate-6 group-hover:scale-110 md:-right-6 md:h-80 md:w-80"
        >
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.017 1.792-4.683 4.533-4.683 1.312 0 2.686.235 2.686.235v2.965h-1.514c-1.49 0-1.955.926-1.955 1.876v2.252h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
        </svg>

        <div className="relative z-10 grid grid-cols-1 gap-10 px-7 py-10 md:grid-cols-[1.4fr_1fr] md:items-center md:px-12 md:py-14">
          <div className="flex flex-col items-start gap-6">
            <span
              className={`${montserrat.className} inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white ring-1 ring-white/20 backdrop-blur-sm`}
            >
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              We&apos;re active on facebook
            </span>

            <h3
              className={`${montserrat.className} max-w-xl text-[2rem] font-bold leading-[1.1] text-white md:text-[2.75rem]`}
            >
              Join the conversation.{" "}
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Follow our page.
              </span>
            </h3>

            <p className="max-w-lg font-sans text-base leading-relaxed text-blue-50/90 md:text-lg">
              Tips, special offers, behind-the-scenes &mdash; and a direct line
              to our team. Tap in and stay in the loop.
            </p>

            <div className="mt-2 inline-flex items-center gap-3 rounded-full bg-white py-3 pl-2 pr-6 font-medium text-[#0d5fcc] shadow-lg transition-all duration-300 group-hover:gap-5 group-hover:bg-blue-50 group-hover:text-[#1877F2]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform duration-500 group-hover:rotate-[360deg]">
                <FaFacebookF className="h-4 w-4" />
              </span>
              <span
                className={`${montserrat.className} text-base font-semibold`}
              >
                @DeltaworxBW
              </span>
              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2.5}
              />
            </div>
          </div>

          <div className="relative hidden h-72 md:block">
            <div className="fb-float-1 absolute right-4 top-2 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-2xl shadow-black/20 ring-1 ring-black/5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2]">
                <FaThumbsUp className="h-4 w-4 text-white" />
              </span>
              <div className="flex flex-col leading-tight">
                <span
                  className={`${montserrat.className} text-[0.7rem] font-semibold uppercase tracking-wider text-gray-500`}
                >
                  Likes
                </span>
                <span
                  className={`${montserrat.className} text-base font-bold text-gray-900`}
                >
                  2.4k+
                </span>
              </div>
            </div>

            <div className="fb-float-2 absolute right-28 top-28 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-2xl shadow-black/20 ring-1 ring-black/5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-rose-500">
                <FaHeart className="h-4 w-4 text-white" />
              </span>
              <div className="flex flex-col leading-tight">
                <span
                  className={`${montserrat.className} text-[0.7rem] font-semibold uppercase tracking-wider text-gray-500`}
                >
                  Follows
                </span>
                <span
                  className={`${montserrat.className} text-base font-bold text-gray-900`}
                >
                  Growing
                </span>
              </div>
            </div>

            <div className="fb-float-3 absolute bottom-2 right-0 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-2xl shadow-black/20 ring-1 ring-black/5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
                <HiOutlineSparkles
                  className="h-4 w-4 text-white"
                  strokeWidth={2.5}
                />
              </span>
              <div className="flex flex-col leading-tight">
                <span
                  className={`${montserrat.className} text-[0.7rem] font-semibold uppercase tracking-wider text-gray-500`}
                >
                  Fresh
                </span>
                <span
                  className={`${montserrat.className} text-base font-bold text-gray-900`}
                >
                  Weekly posts
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </a>
    </section>
  );
}
