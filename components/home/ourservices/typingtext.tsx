import React, { useState, useEffect } from "react";
import ReactTypingEffect from "react-typing-effect";

const TypingText = () => {
  const domains = [
    "mybusiness.co.bw",
    "example.com",
    "ourpeople.org.bw",
    "mydomain.io",
  ];

  return (
    <div className="w-max">
      <ReactTypingEffect
        text={domains}
        displayTextRenderer={(displayText: string, textIndex: number) => {
          let textColor = "";

          // Change color based on index
          switch (textIndex) {
            case 0:
              textColor = "text-purple-500"; // Red for bigzee.app
              break;
            case 1:
              textColor = "text-blue-500"; // Blue for example.com
              break;
            case 2:
              textColor = "text-green-500"; // Green for mydomain.io
              break;
            default:
              textColor = "text-green-500"; // Default color
              break;
          }

          // Apply the selected color class to the text
          return <span className={`${textColor}`}>{displayText}</span>;
        }}
        speed={200}
        eraseSpeed={130}
        eraseDelay={2000}
        typingDelay={1300}
        cursor="|"
        className="text-3xl font-semibold"
      />
    </div>
  );
};

export default TypingText;