import React from "react";

export default function HostingFeatures() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-20">
        <div className="container">
          <div className="grid grid-cols-12 space-x-16">
            <div className="col-span-7">
              <div className="hosting-feature-image">
                <div className="flex gap-8">
                  <div className="">
                    <img
                      src="/img/hosting/vps-feature-small.png"
                      height={400}
                      alt=""
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="img-two">
                    <img
                      src="/img/hosting/vps-feature-big.png"
                      height={400}
                      alt=""
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="hosting-feature">
                <h3
                  className="text-3xl text-gray-800 font-semibold mb-6"
                  data-sal="slide-down"
                  data-sal-delay={100}
                  data-sal-duration={800}
                >
                  Shared Hosting Advanced Features
                </h3>
                <p
                  className="text-gray-600 text-md mb-6"
                  data-sal="slide-down"
                  data-sal-delay={300}
                  data-sal-duration={800}
                >
                  We’ll move your first website to Cloud ways from any web host
                  for without breaking your live site hosted on the old host.
                </p>
                <div
                  className="feature"
                  data-sal="slide-down"
                  data-sal-delay={100}
                  data-sal-duration={800}
                >
                  <ul className="grid grid-cols-2 text-gray-600 space-y-2">
                    <li className="feature__item">Phusion Passenger</li>
                    <li className="feature__item">Crontab Access</li>
                    <li className="feature__item">Subversion Repository</li>
                    <li className="feature__item">Access to Raw Log Files</li>
                    <li className="feature__item">Password Protection</li>
                    <li className="feature__item">Secure Shell (SSH)</li>
                    <li className="feature__item">Apache or Nginx</li>
                    <li className="feature__item">Unlimited SFTP Users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
