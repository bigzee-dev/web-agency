import { FaCheck } from "react-icons/fa6";

import { FaCircleQuestion } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { Clock8 } from "lucide-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PlansInfo({ plans }) {
  return (
    <article className="mx-auto w-full min-w-[50rem] max-w-5xl overflow-x-auto py-16">
      <div className="grid w-full grid-cols-12 lg:gap-8">
        {/* Starter */}
        {plans.map((plan) => {
          return (
            <div
              key={plan.id}
              className="col-span-4 border-l border-gray-400 pl-8 lg:mb-0"
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
              {/* Suitable for */}
              <div className="mt-4">
                <h5 className="mb-1 font-medium text-primary">Suitable for:</h5>
                <div className="grid grid-cols-1 space-y-1.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-x-3 font-sans text-sm text-gray-600"
                    >
                      <FaCheck
                        aria-hidden="true"
                        className={classNames(
                          "h-auto w-2.5 flex-none text-gray-600",
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
