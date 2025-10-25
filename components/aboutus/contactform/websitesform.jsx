import { primaryButton } from "@/app/ui/customTailwindClasses";
import { useState, useEffect, useRef } from "react";
import { IoIosSend } from "react-icons/io";
import Turnstile, { useTurnstile } from "react-turnstile";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/websites-form-select";

export default function WebsitesForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: null,
    success: false,
  });
  const [turnstileToken, setTurnstileToken] = useState(null);

  //   const [turnstileToken, setTurnstileToken] = useState("");
  //   const turnstileRef = useRef(null); // Ref for the Turnstile div container
  //   const widgetIdRef = useRef(null); // To store the widget ID for reset/removal

  //   useEffect(() => {
  //     const turnstileContainer = turnstileRef.current; // Capture ref value for use in functions
  //     let pollIntervalId = null; // To store interval ID for clearing

  //     const renderTurnstileWidget = () => {
  //       // Ensure container exists and widget hasn't been rendered already by this effect instance
  //       if (!turnstileContainer || widgetIdRef.current) {
  //         if (widgetIdRef.current)
  //           console.log(
  //             "Turnstile: Widget already seems to exist with ID:",
  //             widgetIdRef.current
  //           );
  //         else if (!turnstileContainer)
  //           console.log("Turnstile: Container ref not available yet.");
  //         return;
  //       }

  //       console.log("Turnstile: Attempting to render.");
  //       // Replace with your actual site key
  //       const siteKey =
  //         process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
  //         "1x00000000000000000000AA";

  //       try {
  //         const newWidgetId = window.turnstile.render(turnstileContainer, {
  //           sitekey: siteKey,
  //           theme: "light", // Or "dark", "auto"
  //           callback: (token) => {
  //             console.log("Turnstile: Token received.");
  //             setTurnstileToken(token);
  //             // Clear any previous submission errors related to captcha
  //             setStatus((prev) => ({
  //               ...prev,
  //               error:
  //                 prev.error === "Please complete the CAPTCHA."
  //                   ? null
  //                   : prev.error,
  //             }));
  //           },
  //           "expired-callback": () => {
  //             console.log("Turnstile: Token expired.");
  //             setTurnstileToken("");
  //           },
  //           "error-callback": (errorCode) => {
  //             console.error(
  //               "Turnstile: Error callback triggered. Code:",
  //               errorCode
  //             );
  //             // You might want to set an error state here
  //             setStatus((prev) => ({
  //               ...prev,
  //               error: `CAPTCHA error (code: ${errorCode}). Please try again.`,
  //             }));
  //           },
  //         });
  //         widgetIdRef.current = newWidgetId; // Store the new widget ID
  //         console.log(
  //           "Turnstile: Rendered successfully. Widget ID:",
  //           newWidgetId
  //         );
  //       } catch (error) {
  //         console.error(
  //           "Turnstile: Error calling window.turnstile.render:",
  //           error
  //         );
  //         setStatus((prev) => ({
  //           ...prev,
  //           error: "Failed to render CAPTCHA. Please refresh.",
  //         }));
  //       }
  //     };

  //     // --- Initialization logic ---
  //     if (typeof window !== "undefined") {
  //       if (window.turnstile) {
  //         console.log("Turnstile: API found immediately.");
  //         renderTurnstileWidget();
  //       } else {
  //         console.log("Turnstile: API not found, starting poll...");
  //         let attempts = 0;
  //         const maxAttempts = 50; // e.g., 50 * 100ms = 5 seconds
  //         pollIntervalId = setInterval(() => {
  //           attempts++;
  //           if (window.turnstile) {
  //             console.log("Turnstile: API found after polling.");
  //             clearInterval(pollIntervalId);
  //             pollIntervalId = null;
  //             renderTurnstileWidget();
  //           } else if (attempts >= maxAttempts) {
  //             console.error(
  //               `Turnstile: API not found after ${maxAttempts} attempts.`
  //             );
  //             clearInterval(pollIntervalId);
  //             pollIntervalId = null;
  //             setStatus((prev) => ({
  //               ...prev,
  //               error: "CAPTCHA service could not be loaded. Please refresh.",
  //             }));
  //           }
  //         }, 100);
  //       }
  //     }

  //     // --- Cleanup function ---
  //     return () => {
  //       if (pollIntervalId) {
  //         console.log("Turnstile: Clearing poll interval on unmount.");
  //         clearInterval(pollIntervalId);
  //       }
  //       if (
  //         widgetIdRef.current &&
  //         typeof window !== "undefined" &&
  //         window.turnstile &&
  //         typeof window.turnstile.remove === "function"
  //       ) {
  //         console.log(
  //           "Turnstile: Removing widget on unmount. ID:",
  //           widgetIdRef.current
  //         );
  //         try {
  //           window.turnstile.remove(widgetIdRef.current);
  //         } catch (e) {
  //           // Catch errors if remove fails (e.g. widget already gone)
  //           console.warn("Turnstile: Error during widget removal:", e.message);
  //         }
  //         widgetIdRef.current = null; // CRITICAL: Reset ref to allow re-initialization
  //         // setTurnstileToken(""); // Token should clear naturally or on expiry/new challenge
  //       }
  //     };
  //   }, []); // Empty dependency array: runs once on mount, cleans on unmount.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!turnstileToken) {
      setStatus({
        submitted: false,
        submitting: false,
        error: "Please complete the CAPTCHA.",
        success: false,
      });
      // Optionally, try to reset the widget if it exists, in case it errored silently
      //   if (
      //     widgetIdRef.current &&
      //     window.turnstile &&
      //     typeof window.turnstile.reset === "function"
      //   ) {
      //     window.turnstile.reset(widgetIdRef.current);
      //   }
      return;
    }

    setStatus({
      submitted: false,
      submitting: true,
      error: null,
      success: false,
    });

    try {
      const response = await fetch("/api/websites-contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token: turnstileToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: "Submission failed. Please try again." }));
        throw new Error(
          errorData.message || "Something went wrong with the submission.",
        );
      }

      setStatus({
        submitted: true,
        submitting: false,
        error: null,
        success: true,
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      });
      //   setTurnstileToken(""); // Clear the token

      /*if (
        widgetIdRef.current &&
        window.turnstile &&
        typeof window.turnstile.reset === "function"
      ) {
        console.log("Turnstile: Resetting widget after successful submission.");
        window.turnstile.reset(widgetIdRef.current);
      }*/
    } catch (error) {
      setStatus({
        submitted: true,
        submitting: false,
        error: error.message,
        success: false,
      });
      // Do not reset Turnstile on error, user might want to retry with same challenge if it was a server error
    }
  };

  const labelStyles =
    "flex items-center justify-between text-sm font-medium text-neutral-300";
  const inputStyles =
    "shadow-sm block w-full sm:text-sm text-neutral-300 bg-neutral-300/5 py-1.5 px-1.5 border border-gray-500 rounded-md placeholder:text-neutral-400 ";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ... (your existing form fields for name, email, etc. remain unchanged) ... */}
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label htmlFor="name" className={` ${labelStyles} `}>
            Name
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={` ${inputStyles} `}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={` ${labelStyles} `}>
            Email
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={` ${inputStyles} `}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <div>
          <label htmlFor="company" className={` ${labelStyles} `}>
            <span>Company </span>
            <span className="pr-2 text-xs text-neutral-400">Optional</span>
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className={` ${inputStyles} `}
            />
          </div>
        </div>
        <div>
          <label htmlFor="budget" className={` ${labelStyles} `}>
            <span>Budget Range </span>
            <span className="pr-2 text-xs text-neutral-400">Optional</span>
          </label>
          <div className="mt-1">
            {/* <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className={` ${inputStyles} ${
                formData.budget === "" ? "text-gray-700" : "text-neutral-300"
              } text-sm placeholder:text-sm`}
            >
              <option value="" disabled>
                Select a budget range
              </option>
              <option className="text-gray-700" value="Under $5,000">
                Under $5,000
              </option>
              <option className="text-gray-700" value="$5,000 - $10,000">
                $5,000 - $10,000
              </option>
              <option className="text-gray-700" value="$10,000 - $25,000">
                $10,000 - $25,000
              </option>
              <option className="text-gray-700" value="$25,000 - $50,000">
                $25,000 - $50,000
              </option>
              <option className="text-gray-700" value="$50,000+">
                $50,000+
              </option>
            </select> */}
            <Select className={inputStyles}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a budget range" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="Under p5,000">Under P5,000</SelectItem>
                  <SelectItem value="P5,000 - P10,000">
                    P5,000 - P10,000
                  </SelectItem>
                  <SelectItem value="P10,000 - P15,000">
                    P10,000 - P15,000
                  </SelectItem>
                  <SelectItem value="P15,000 - P20,000">
                    P15,000 - P20,000
                  </SelectItem>
                  <SelectItem value="> P20,000">&gt; P20,000</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={` ${labelStyles} `}>
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className={` ${inputStyles} `}
          />
        </div>
      </div>

      {(status.error || status.success) && (
        <div className="my-4">
          {status.error && (
            <p className="text-sm text-red-500">{status.error}</p>
          )}
          {status.success && (
            <p className="text-sm text-green-500">Message sent successfully!</p>
          )}
        </div>
      )}

      <div className="mt-8 flex w-full flex-col justify-start gap-y-6">
        {/* Container for Turnstile. data-sitekey etc. are handled by explicit render */}
        <Turnstile
          sitekey="1x00000000000000000000AA"
          theme="dark"
          fixedSize={true}
          onVerify={(token) => {
            setTurnstileToken(token);
          }}
        />

        <button
          type="submit"
          disabled={status.submitting || (!turnstileToken && !status.success)}
          className={`flex w-full items-center justify-center gap-3 rounded-md bg-white/90 py-[0.60rem] font-medium text-secondary`}
        >
          {status.submitting ? "Submitting..." : "Submit"}
          <IoIosSend size="1.6em" />
        </button>
      </div>
    </form>
  );
}
