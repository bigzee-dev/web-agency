import { montserrat } from "@/app/ui/fonts";

export default function WooCommerce() {
  return (
    <div className="relative isolate bg-gray-800  flex items-center justify-center py-16">
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
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20">
        {/* Left side - Device mockups */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Desktop mockup */}
          <div className="hidden md:block relative z-10 rounded-lg overflow-hidden shadow-2xl">
            <div className="bg-gray-100 h-8 flex items-center px-3 gap-1.5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex items-center bg-white rounded-md px-2 py-1 text-xs text-gray-500 ml-4 flex-1">
                <span className="truncate">
                  https://www.myshop.com/checkout
                </span>
              </div>
            </div>
            <div className="bg-neutral-100 p-4">
              <h2 className="text-xl text-gray-700 mb-6">Checkout</h2>

              <div className="flex gap-8">
                <div className="flex-1">
                  <div className="border rounded-md p-4 mb-6">
                    <h3 className="font-medium mb-2">Express Checkout</h3>
                    {/* <p className="text-xs text-gray-500 mb-2">
                      In a hurry? Use one of our express checkout options below:
                    </p> */}
                    <button className="w-full bg-black text-white rounded-md py-2 flex items-center justify-center gap-2 mb-3">
                      {/* <svg
                        width="16"
                        height="16"
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
                      </svg> */}
                      Pay
                    </button>
                    <div className="text-center text-xs text-gray-500">
                      Or continue below:
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-4">1. Delivery address</h3>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="border rounded-md p-2">
                        <input
                          type="text"
                          placeholder="First name"
                          className="w-full outline-none text-sm"
                        />
                      </div>
                      <div className="border rounded-md p-2">
                        <input
                          type="text"
                          placeholder="Last name"
                          className="w-full outline-none text-sm"
                        />
                      </div>
                    </div>
                    <div className="border rounded-md p-2 mb-3">
                      <input
                        type="text"
                        placeholder="Address"
                        className="w-full outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-64">
                  <div className="bg-gray-100 rounded-md p-4">
                    <h3 className="font-medium mb-4">Order Summary</h3>
                    <div className="border-b pb-3 mb-3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                          <span className="text-xs">🧢</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm">Cap</div>
                          <div className="text-xs text-gray-500">$18.00</div>
                        </div>
                        <div className="text-sm">P18.00</div>
                      </div>

                      {/* <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                          <span className="text-xs">👕</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm">Regular with Logo</div>
                          <div className="text-xs text-gray-500">$35.00</div>
                        </div>
                        <div className="text-sm">$35.00</div>
                      </div> */}

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center">
                          <span className="text-xs">👕</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm">T-Shirt</div>
                          <div className="text-xs text-gray-500">$18.00</div>
                        </div>
                        <div className="text-sm">P18.00</div>
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between mb-2">
                        <div className="text-sm">Subtotal</div>
                        <div className="text-sm">P71.00</div>
                      </div>

                      {/* <div className="flex items-center justify-between mb-2">
                        <div className="text-sm">Coupon code?</div>
                        <div className="text-sm">
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
                            className="lucide lucide-chevron-down"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </div> */}

                      {/* <div className="flex justify-between mb-2">
                        <div className="text-sm">Shipping</div>
                        <div className="text-sm">$18.00</div>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">
                        via USPS Priority
                      </div> */}

                      <div className="flex justify-between mb-2">
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
          <div className="md:absolute md:left-0 md:bottom-0 md:z-0 bg-white rounded-3xl overflow-hidden shadow-2xl w-64 md:w-48 lg:w-64 z-20">
            <div className="bg-gray-100 h-6 flex items-center justify-center">
              <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
            </div>
            <div className="p-3">
              <h2 className="text-lg text-gray-700 mb-4">Checkout</h2>

              <div className="border-b pb-2 mb-2">
                <div className="flex justify-between items-center mb-1">
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

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
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
                <div className="flex justify-between mb-1">
                  <div className="text-xs">Subtotal</div>
                  <div className="text-xs">$86.00</div>
                </div>

                <div className="flex items-center justify-between mb-1">
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

                <div className="flex justify-between mb-1">
                  <div className="text-xs">Shipping</div>
                  <div className="text-xs">$18.00</div>
                </div>
                <div className="text-xs text-gray-500 mb-1">
                  via USPS Priority
                </div>

                <div className="flex justify-between mb-1">
                  <div className="text-xs">Sales tax (7.75%)</div>
                  <div className="text-xs">$7.75</div>
                </div>
              </div>

              <div className="border-t pt-2 mb-3">
                <div className="flex justify-between font-medium">
                  <div className="text-sm">Total</div>
                  <div className="text-sm">$107.75</div>
                </div>
              </div>

              <div className="border rounded-md p-2 mb-3">
                <h3 className="text-xs font-medium mb-1">Express Checkout</h3>
                <p className="text-xs text-gray-500 mb-1">
                  In a hurry? Use one of our express checkout options below:
                </p>
                <button className="w-full bg-black text-white rounded-md py-1 flex items-center justify-center gap-1 text-xs mb-1">
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
        <div className="w-full lg:w-1/2 text-white">
          <div>
            <img
              src="/svg/ecommerce/woocommerce-logo.svg"
              alt="WooCommerce"
              className="h-32"
            />
          </div>
          <h1
            className={` ${montserrat.className} text-neutral-100 text-4xl md:text-5xl font-bold mb-6`}
          >
            WooCommerce
          </h1>
          <div className="font-sans text-neutral-100 space-y-4">
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
