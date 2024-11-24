"use client";
import Link from "next/link";

export default function OurProcess() {
  return (
    <div className="bg-gradient-to-r from-cyan-500/60 via-cyan-700/60 to-primary/80 p-4">
      <div className="font-sans py-20 px-4 bg-neutral-100/85 rounded-xl">
        <div className="md:max-w-5xl max-w-lg mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="max-w-sm">
              <h2 className="text-gray-600 text-3xl font-semibold mb-4 leading-10">
                Innovative Solutions for Modern Challenges, <br /> Your Success,
                Our Commitment
              </h2>
            </div>
            <div className="text-left">
              <p className="mb-4 text-md text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper
                mauris, non aliquam nisi purus vel nisl. Integer efficitur
                turpis in bibendum tincidunt.
              </p>
              <p className="text-md text-gray-600">
                Nulla facilisi. Vestibulum fringilla leo et purus consectetur,
                vel tincidunt dolor rhoncus. In hac habitasse platea dictumst.
                Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat
                nisi.
              </p>
              <button
                type="button"
                className="min-w-52 mt-6 px-5 py-2.5 rounded-md text-white text-sm tracking-wider font-medium bg-primary hover:bg-blue-800 active:bg-blue-700"
              >
                <Link href="our-process">Our Process</Link>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            <div>
              <div className="font-light text-lg text-gray-500">/ 01</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-primary mb-2">
                  Fresh Insights
                </h3>
                <p className="text-gray-600 text-md">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum reprehenderit in voluptate velit esse cillum dolore...
                </p>
              </div>
            </div>

            <div>
              <div className="image-container">
                <style jsx>{`
                  .image-container {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    background-image: url("/tech-man.jpg");
                    background-size: cover;
                    background-position: center;
                  }
                  .mask {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80%;
                    height: 80%;
                    background-image: inherit;
                    background-size: cover;
                    background-position: center;
                    clip-path: path(
                      "M0.5 0.238C0.5 0.107 0.607 0 0.738 0H100.262C100.393 0 100.5 0.107 100.5 0.238V57.818C100.5 57.885 100.47 57.946 100.42 57.982L86.58 67.518C86.53 67.554 86.5 67.615 86.5 67.682V99.762C86.5 99.893 86.393 100 86.262 100H0.738C0.607 100 0.5 99.893 0.5 99.762V0.238Z"
                    );
                  }
                `}</style>
                <div className="mask"></div>
              </div>
              <div className="font-light text-lg text-gray-500">/ 02</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-primary mb-2">
                  Trending Now
                </h3>
                <p className="text-gray-600 text-md">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum reprehenderit in voluptate velit esse cillum dolore...
                </p>
              </div>
            </div>

            <div>
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              viewBox="0 0 512 512"
            >
              <path
                fill="#64b5f6"
                d="m0 192 246.528 156.896c2.816 2.08 6.144 3.104 9.472 3.104s6.656-1.024 9.472-3.104L512 192 265.6 3.2a16.032 16.032 0 0 0-19.2 0L0 192z"
                data-original="#64b5f6"
              />
              <path
                fill="#eceff1"
                d="M416 0H96C78.368 0 64 14.368 64 32v352c0 8.832 7.168 16 16 16h352c8.832 0 16-7.168 16-16V32c0-17.632-14.336-32-32-32z"
                data-original="#eceff1"
              />
              <path
                fill="#90a4ae"
                d="M144 96h224c8.832 0 16-7.168 16-16s-7.168-16-16-16H144c-8.832 0-16 7.168-16 16s7.168 16 16 16zm224 32H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h224c8.832 0 16-7.168 16-16s-7.168-16-16-16zm-96 64H144c-8.832 0-16 7.168-16 16s7.168 16 16 16h128c8.832 0 16-7.168 16-16s-7.168-16-16-16z"
                data-original="#90a4ae"
              />
              <path
                fill="#1e88e5"
                d="M265.472 348.896c-2.816 2.08-6.144 3.104-9.472 3.104s-6.656-1.024-9.472-3.104L0 192v288c0 17.664 14.336 32 32 32h448c17.664 0 32-14.336 32-32V192L265.472 348.896z"
                data-original="#1e88e5"
              />
              <path
                fill="#2196f3"
                d="M480 512H32c-17.952 0-32-14.048-32-32a16.02 16.02 0 0 1 6.528-12.896l240-160c2.816-2.08 6.144-3.104 9.472-3.104s6.656 1.024 9.472 3.104l240 160A16.02 16.02 0 0 1 512 480c0 17.952-14.048 32-32 32z"
                data-original="#2196f3"
              />
            </svg> */}
              <div className="font-light text-lg text-gray-500">/ 03</div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-primary mb-2">
                  Daily Highlights
                </h3>
                <p className="text-gray-600 text-md">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum reprehenderit in voluptate velit esse cillum dolore...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
