import SideNav from "./sidenav";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="mt-5 flex flex-col gap-x-8 md:flex-row md:overflow-hidden">
        <div className="min-w-[250px] flex-none"></div>
        <div className="flex-grow py-2 pr-6 md:overflow-y-auto lg:pr-24">
          <Header />
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-x-10 md:flex-row md:overflow-hidden">
        <div className="min-w-[250px] flex-none">
          <SideNav />
        </div>
        <div className="flex-grow py-2 pb-20 pr-6 md:overflow-y-auto lg:pr-24">
          {children}
        </div>
      </div>
    </div>
  );
}
