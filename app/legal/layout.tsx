import SideNav from "./sidenav";
import Header from "./header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="flex  flex-col md:flex-row gap-x-4 md:overflow-hidden mt-5">
        <div className="flex-none min-w-[250px]">
          <SideNav />
        </div>
        <div className="flex-grow px-6 py-2 md:overflow-y-auto md:px-12 lg:pr-24">
          {children}
        </div>
      </div>
    </div>
  );
}
