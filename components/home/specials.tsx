export default function specials() {
  return (
    <div className="x-padding w-full flex justify-center items-center gap-x-6 bg-gradient-to-r from-secondary to-primary py-1 z-10">
      <div className="font-sans text-sm text-neutral-200 font-medium">
        Business Email
      </div>
      <div className="flex items-center gap-x-1">
        <img src="/svg/price-tag.svg" alt="specials" className="w-10 h-10 " />
        <div className="font-sans text-sm text-neutral-300/70">
          <span className="text-neutral-200 font-medium">P25</span>/month
        </div>
      </div>

      <div className="flex items-center justify-center text-md text-neutral-200 bg-primary border border-neutral-400/60 py-1.5 px-2 rounded-lg">
        Buy Now
      </div>
    </div>
  );
}
