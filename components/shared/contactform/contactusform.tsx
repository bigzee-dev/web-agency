import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import Turnstile from "react-turnstile";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/websites-form-select";

export default function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    submitted: boolean;
    submitting: boolean;
    error: string | null;
    success: boolean;
  }>({
    submitted: false,
    submitting: false,
    error: null,
    success: false,
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!turnstileToken) {
      setStatus({
        submitted: false,
        submitting: false,
        error: "Please complete the CAPTCHA.",
        success: false,
      });

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
          website: process.env.NEXT_PUBLIC_SITE_NAME_FOR_FORM, // hard-coded website name included in payload
        }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ message: "Submission failed. Please try again." }));
        throw new Error(
          errorData.message ||
            "Something went wrong with the submission. Please try again.",
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
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : String(error);
      setStatus({
        submitted: true,
        submitting: false,
        error: errMsg,
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
            <Select>
              <SelectTrigger className={`w-full`}>
                <SelectValue placeholder="Select a service" />
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
