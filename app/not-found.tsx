import Link from "next/link";
import type { Metadata } from "next";
import {
  lightBgButton,
  pageHeadings,
  primaryButton,
  sectionSubHeadings,
} from "@/app/ui/customTailwindClasses";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="x-padding mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center py-20 text-center">
      <p className="font-semibold tracking-widest text-primary">404</p>
      <h1 className={` ${pageHeadings} mt-3`}>Page not found</h1>
      <p className={` ${sectionSubHeadings} mt-6`}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className={primaryButton}>
          Go to homepage
        </Link>
        <Link href="/blog" className={lightBgButton}>
          Read the blog
        </Link>
      </div>
    </main>
  );
}
