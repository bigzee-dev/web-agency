export default function specials() {
  return (
    <div className="x-padding w-full flex justify-center items-center gap-x-6 bg-secondary py-1.5">
      <div className="font-sans text-sm text-neutral-100 font-medium">
        Business Email
      </div>
      <div className="flex items-center gap-x-1">
        <img src="/svg/price-tag.svg" alt="specials" className="w-10 h-10 " />
        <div className="font-sans text-sm text-neutral-300/70">
          <span className="text-neutral-200 font-medium">P25</span>/month
        </div>
      </div>

      <a
        href="https://domains.bigzee.app/index.php?rp=/store/business-email/basic-email"
        className="flex items-center justify-center font-sans text-md text-secondary font-medium bg-[#d9d9d9] py-1 px-2 rounded-md uppercase"
      >
        Buy Now
      </a>
    </div>
  );
}
