export default function Header() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-primary py-20">
      <div className="grid grid-cols-12 gap-20 max-w-7xl mx-auto">
        <div className="col-span-8  space-y-3">
          <p className="text-md font-medium text-neutral-400">
            Websites that are built with love
          </p>
          <h2 className="text-4xl font-extrabold text-neutral-300">Emails</h2>
          <p className="font-sans text-neutral-300 text-base font-normal max-w-4xl">
            Use these Tailwind CSS settings screen examples to build
            configuration and preference pages where users can update their
            account information, change settings, and customize their
            experience. These page examples are designed and built by the
            Tailwind CSS team, and include a variety of different styles and
            layouts.
          </p>
        </div>
        <div className="col-span-4">
          {" "}
          <img src="/svg/emails.svg" alt="Logo" className="" />
        </div>
      </div>
    </div>
  );
}
