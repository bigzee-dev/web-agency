import {
  pageHeadingsCenter,
  smallTextHeadings,
} from "@/app/ui/customTailwindClasses";

export default function Header() {
  return (
    <div className="isolate w-full overflow-hidden bg-gradient-to-tr from-gray-900 via-gray-800 to-primary py-16">
      <div className="relative font-sans">
        <div
          aria-hidden="true"
          className="absolute -top-8 left-1/2 -z-10 -translate-x-1/2 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#9089fc] opacity-25"
          />
        </div>

        <div className="relative z-50 mx-auto flex max-w-4xl flex-col justify-center gap-8">
          <p
            className={` ${smallTextHeadings} max-w-max self-center rounded-3xl bg-white/5 px-4 py-1 text-blue-300`}
          >
            Contact us
          </p>
          <h1 className={` ${pageHeadingsCenter} text-neutral-100`}>
            Need help? Our team is here for you!
          </h1>
        </div>
      </div>
    </div>
  );
}
