import { ChevronDown, Facebook, Hand } from "lucide-react";

export default function SocialMediaContacts() {
  return (
    <div className="relative isolate overflow-hidden max-w-4xl mx-auto py-6 lg:py-12 mt-8 border-t-4 border-cyan-700">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl  flex flex-col gap-x-8 gap-y-8 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="p-1.5  text-gray-900 rounded-lg  border-4 border-gray-900">
                <Facebook size="1.8em" strokeWidth={3} />
              </div>{" "}
              <h2 className="text-xl font-bold tracking-normal text-gray-900 mt-2">
                Check us out on Facebook
              </h2>
              {/* <div className="rounded-md bg-gray-800 p-2 ring-1 ring-white/10">
                <Facebook
                  aria-hidden="true"
                  className="size-6 text-neutral-300"
                />
              </div> */}
              <button className="flex justify-center bg-blue-600 py-2.5 px-3 rounded-lg mt-4 min-w-56">
                <span className=" text-neutral-100 font-medium">facebook</span>
              </button>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <Hand aria-hidden="true" className="size-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">
                No spam
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
