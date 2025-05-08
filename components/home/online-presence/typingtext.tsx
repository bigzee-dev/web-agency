"use client";

import ReactTypingEffect from "react-typing-effect";
import { montserrat } from "@/app/ui/fonts";

const TypingText = () => {
  const domains = [
    " mybusiness.co.bw",
    " example.com",
    " ourpeople.org.bw",
    " mydomain.io",
  ];

  return (
    <div
      className="w-max"
      style={{
        textShadow:
          "0 0 10px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 255, 255, 0.1)",
      }}
    >
      <ReactTypingEffect
        text={domains}
        displayTextRenderer={(displayText: string, textIndex: number) => {
          let textColor = "";

          // Change color based on index
          switch (textIndex) {
            case 0:
              textColor = "text-purple-400"; // Red for bigzee.app
              break;
            case 1:
              textColor = "text-blue-400"; // Blue for example.com
              break;
            case 2:
              textColor = "text-green-400"; // Green for mydomain.io
              break;
            default:
              textColor = "text-green-400"; // Default color
              break;
          }

          // Apply the selected color class to the text
          return <span className={`${textColor}`}>{displayText}</span>;
        }}
        speed={200}
        eraseSpeed={130}
        eraseDelay={2500}
        typingDelay={1500}
        cursor="|"
        cursorClassName="text-neutral-300"
        className={` ${montserrat.className} text font-semibold tracking-wide pl-1 mt-2`}
      />
    </div>
  );
};

export default TypingText;
