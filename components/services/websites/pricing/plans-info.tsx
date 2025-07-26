import { FaCheck } from "react-icons/fa6";

import { FaCircleQuestion } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { Clock8 } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export interface Plan {
  id: number;
  title: string;
  containerClass: string;
  titleClass: string;
  paymentType: string;
  price: string;
  pages: string;
  time: string;
  features: string[];
  href: string;
  btntext: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PlansInfo({ plans }: { plans: Plan[] }) {
  return (
    <article className="mx-auto w-full max-w-5xl pb-6 pt-12 md:pt-16">
      <div className="w-full overflow-x-auto">
        <div className="flex min-w-[50rem] gap-6 pb-8 lg:grid lg:grid-cols-12 lg:gap-9">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className="min-w-[18rem] shrink-0 border-l border-gray-400 pl-6 md:pl-9 lg:col-span-4"
            >
              <div className={plan.containerClass}>
                <h2 className={plan.titleClass}>{plan.title}</h2>
              </div>

              <div className="mt-8 space-y-4 text-md text-gray-500">
                <div>
                  <span className="mb-1 text-xs font-medium text-gray-500">
                    Payment Type:
                  </span>
                  <p className="text-gray-900">{plan.paymentType}</p>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium text-gray-500">
                    Approx:
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-900">{plan.price}</span>
                    <span className="align-middlex ml-2 text-gray-800">
                      <FaCircleQuestion size="1.3em" />
                    </span>
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-gray-500">
                    <CgNotes size="1.4em" />
                  </div>
                  <span className="text-gray-900">{plan.pages}</span>
                </div>
                <div>
                  <div className="mb-1 text-gray-500">
                    <Clock8 size="1.4em" />
                  </div>
                  <span className="text-gray-900">{plan.time}</span>
                </div>
              </div>

              <div className="mt-4">
                <h5 className="mb-2 font-medium text-primary">Suitable for:</h5>
                <div className="grid grid-cols-1 space-y-1.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 font-sans text-sm text-gray-600"
                    >
                      <FaCheck
                        aria-hidden="true"
                        className="h-auto w-2.5 flex-none text-gray-600"
                      />
                      {feature}
                    </li>
                  ))}
                </div>
              </div>
              <Link
                href={plan.href}
                className={clsx(
                  "mt-8 flex w-full items-center justify-center rounded-lg border border-gray-500 px-2 py-2 text-center font-sans text-md",
                  {
                    "bg-gray-800 text-white": index === 0 || index === 2,
                    "bg-secondary text-white": index === 1,
                    "bg-primary text-white": index === 2,
                  },
                )}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
