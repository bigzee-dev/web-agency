"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Link from "next/link";

// Optional: Define reusable styles if using Tailwind/utility classes
const headingBaseClass = "font-bold text-gray-800 mb-4"; // Example base

export default function BlockRendererClient({
  content,
}: {
  readonly content: BlocksContent;
}) {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          // Added margin-bottom for spacing
          <p className="font-sans text-base text-gray-700 mb-4">{children}</p>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              // Combine base class with specific size/margin
              return (
                <h1 className={`${headingBaseClass} text-4xl`}>{children}</h1>
              );
            case 2:
              return (
                <h2 className={`${headingBaseClass} text-3xl`}>{children}</h2>
              );
            case 3:
              return (
                <h3 className={`${headingBaseClass} text-2xl`}>{children}</h3>
              );
            case 4:
              return (
                <h4 className={`${headingBaseClass} text-xl`}>{children}</h4>
              );
            case 5:
              return (
                <h5 className={`${headingBaseClass} text-lg`}>{children}</h5>
              );
            case 6:
              return (
                <h6 className={`${headingBaseClass} text-base`}>{children}</h6>
              );
            default:
              // Fallback or default heading style
              return (
                <h1 className={`${headingBaseClass} text-4xl`}>{children}</h1>
              );
          }
        },
        list: ({ children, format }) => {
          // Added margin and padding-left for indentation
          const listBaseClass = "font-sans text-gray-700 mb-4 pl-6";
          if (format === "ordered") {
            return (
              <ol className={`${listBaseClass} list-decimal`}>{children}</ol>
            );
          }
          return <ul className={`${listBaseClass} list-disc`}>{children}</ul>;
        },
        // You might not need to override list-item if list styling is enough
        // listitem: ({ children }) => <li>{children}</li>,

        quote: ({ children }) => (
          // Example styling for blockquotes
          <blockquote className="font-sans border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4">
            {children}
          </blockquote>
        ),
        code: ({ children }) => (
          // Example styling for code blocks (often needs <pre>)
          <pre className="font-mono bg-gray-100 p-4 rounded overflow-x-auto my-4 text-sm">
            <code>{children}</code>
          </pre>
        ),
        link: ({ children, url }) => (
          // Make links stand out
          <Link href={url} className="text-blue-600 hover:underline">
            {children}
          </Link>
        ),
        // Add image handling if you use images in rich text
        // image: ({ image }) => {
        //   return (
        //     <img
        //       src={image.url}
        //       alt={image.alternativeText || ""}
        //       width={image.width}
        //       height={image.height}
        //       className="my-4 rounded" // Example class
        //     />
        //   );
        // },
      }}
    />
  );
}
