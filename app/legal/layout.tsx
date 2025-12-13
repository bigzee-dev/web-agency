import SideNav from "./sidenav";
import Header from "./header";
import { smallTextHeadings } from "../ui/customTailwindClasses";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="x-padding mx-auto max-w-6xl py-4 md:py-0">
      <div className="mt-5 flex flex-col gap-x-8 md:flex-row md:overflow-hidden">
        <p className={` ${smallTextHeadings} text-lg md:hidden`}>Legal</p>
        <div className="min-w-[250px] flex-none md:hidden">
          <SideNav />
        </div>
        <div className="flex-grow py-2 pr-6 md:overflow-y-auto lg:pr-24">
          <Header />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-x-10 md:flex-row md:overflow-hidden">
        <div className="hidden min-w-[250px] flex-none md:block">
          <SideNav />
        </div>
        <div className="flex-grow py-2 pb-20 pr-6 md:overflow-y-auto lg:pr-24">
          {children}
        </div>
      </div>
    </div>
  );
}
