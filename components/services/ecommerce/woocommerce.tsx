import { montserrat } from "@/app/ui/fonts";

export default function WooCommerce() {
  return (
    <div className="relative isolate flex items-center justify-center overflow-hidden bg-gray-800 py-20">
      {/* blur component */}
      <div
        aria-hidden="true"
        className="absolute left-1/4 top-0 -z-10 -translate-x-1/4 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2563eb] to-[#89a6fc] opacity-25"
        />
      </div>
      <div className="flex w-full max-w-7xl flex-col items-center gap-8 lg:flex-row lg:gap-20">
        {/* Left side - Device mockups */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          {/* Desktop mockup */}
          <div className="relative z-10 hidden overflow-hidden rounded-lg shadow-2xl md:block">
            <div className="flex h-8 items-center gap-1.5 bg-gray-100 px-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="ml-4 flex flex-1 items-center rounded-md bg-white px-2 py-1 text-xs text-gray-500">
                <span className="truncate">
                  https://www.myshop.com/checkout
                </span>
              </div>
            </div>
            <div className="bg-neutral-100 p-4">
              <h2 className="mb-6 text-xl text-gray-700">Checkout</h2>

              <div className="flex gap-8">
                <div className="flex-1">
                  <div className="mb-6 rounded-md border p-4">
                    <h3 className="mb-2 font-medium">Express Checkout</h3>

                    <button className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg bg-gray-800 py-2 text-white">
                      Pay
                    </button>
                  </div>

                  <div>
                    <h3 className="mb-4 font-medium">Delivery address</h3>

                    <div className="mb-3 grid grid-cols-2 gap-3">
                      <div className="rounded-md border p-2">
                        <input
                          type="text"
                          placeholder="First name"
                          className="w-full text-sm outline-none"
                        />
                      </div>
                      <div className="rounded-md border p-2">
                        <input
                          type="text"
                          placeholder="Last name"
                          className="w-full text-sm outline-none"
                        />
                      </div>
                    </div>
                    <div className="mb-3 rounded-md border p-2">
                      <input
                        type="text"
                        placeholder="Address"
                        className="w-full text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-64">
                  <div className="rounded-md bg-gray-100 p-4">
                    <h3 className="mb-4 font-medium">Order Summary</h3>
                    <div className="mb-3 border-b pb-3">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200">
                          <span className="text-xs">🧢</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm">Cap</div>
                          <div className="text-xs text-gray-500">P18.00</div>
                        </div>
                        <div className="text-sm">P18.00</div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-200">
                          <span className="text-xs">👕</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm">T-Shirt</div>
                          <div className="text-xs text-gray-500">P18.00</div>
                        </div>
                        <div className="text-sm">P18.00</div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="mb-2 flex justify-between">
                        <div className="text-sm">Subtotal</div>
                        <div className="text-sm">P71.00</div>
                      </div>

                      <div className="mb-2 flex justify-between">
                        <div className="text-sm">Sales tax (14%)</div>
                        <div className="text-sm">P7.75</div>
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex justify-between font-medium">
                        <div>Total</div>
                        <div>P107.75</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile mockup */}
          <div className="z-20 w-64 overflow-hidden rounded-3xl bg-white shadow-2xl md:absolute md:bottom-0 md:left-0 md:z-0 md:w-48 lg:w-64">
            <div className="flex h-6 items-center justify-center bg-gray-100">
              <div className="h-1 w-20 rounded-full bg-gray-300"></div>
            </div>
            <div className="p-3">
              <h2 className="mb-4 text-lg text-gray-700">Checkout</h2>

              <div className="mb-2 border-b pb-2">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-sm font-medium">Order Summary</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-up"
                  >
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-200">
                    <span className="text-xs">🧢</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs">Cap</div>
                    <div className="text-xs text-gray-500">$18.00</div>
                  </div>
                  <div className="text-xs">$18.00</div>
                </div>
              </div>

              <div className="mb-2">
                <div className="mb-1 flex justify-between">
                  <div className="text-xs">Subtotal</div>
                  <div className="text-xs">$86.00</div>
                </div>

                <div className="mb-1 flex items-center justify-between">
                  <div className="text-xs">Coupon code?</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>

                <div className="mb-1 flex justify-between">
                  <div className="text-xs">Shipping</div>
                  <div className="text-xs">$18.00</div>
                </div>
                <div className="mb-1 text-xs text-gray-500">
                  via USPS Priority
                </div>

                <div className="mb-1 flex justify-between">
                  <div className="text-xs">Sales tax (7.75%)</div>
                  <div className="text-xs">$7.75</div>
                </div>
              </div>

              <div className="mb-3 border-t pt-2">
                <div className="flex justify-between font-medium">
                  <div className="text-sm">Total</div>
                  <div className="text-sm">$107.75</div>
                </div>
              </div>

              <div className="mb-3 rounded-md border p-2">
                <h3 className="mb-1 text-xs font-medium">Express Checkout</h3>
                <p className="mb-1 text-xs text-gray-500">
                  In a hurry? Use one of our express checkout options below:
                </p>
                <button className="mb-1 flex w-full items-center justify-center gap-1 rounded-md bg-black py-1 text-xs text-white">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6 5.2C12.0 5.7 11.1 6.1 10.2 6C10.1 5.1 10.4 4.2 10.9 3.6C11.5 3 12.5 2.7 13.3 2.6C13.4 3.6 13 4.4 12.6 5.2Z"
                      fill="white"
                    />
                    <path
                      d="M13.3 6.2C12.1 6.1 11.1 6.8 10.5 6.8C9.9 6.8 9 6.2 8.1 6.2C6.9 6.2 5.6 7 4.9 8.3C3.5 10.8 4.6 14.5 5.9 16.5C6.6 17.5 7.4 18.6 8.5 18.6C9.5 18.6 9.9 18 11.1 18C12.3 18 12.6 18.6 13.7 18.5C14.8 18.5 15.5 17.5 16.2 16.5C16.7 15.8 17 15.1 17.2 14.9C17.2 14.9 17.2 14.9 17.1 14.9C16.6 14.7 15.3 13.9 15.3 12.1C15.3 10.6 16.3 9.9 16.4 9.8C16.4 9.8 16.4 9.8 16.4 9.8C15.5 8.4 14.1 8.3 13.7 8.3C12.9 6.2 13.3 6.2 13.3 6.2Z"
                      fill="white"
                    />
                  </svg>
                  Pay
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="w-full text-white lg:w-1/2">
          <div>
            <img
              src="/svg/ecommerce/woocommerce-logo.svg"
              alt="WooCommerce"
              className="h-32"
            />
          </div>
          <h1
            className={` ${montserrat.className} mb-6 text-4xl font-bold text-neutral-100 md:text-5xl`}
          >
            WooCommerce
          </h1>
          <div className="space-y-4 font-sans text-neutral-100">
            <p>
              WooCommerce has demonstrated remarkable dominance and resilience,
              solidifying its position as a leading force in the e-commerce
              industry. With an impressive market share, WooCommerce now powers
              7% of all e-commerce sites online.
            </p>
            <p>
              This achievement showcases the widespread adoption and trust in
              WooCommerce by online businesses worldwide. Its robust and
              flexible platform enables merchants to create and manage their
              online stores efficiently, providing customers with a seamless and
              secure shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
