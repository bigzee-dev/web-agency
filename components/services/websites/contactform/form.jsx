import { whiteButton } from "@/app/ui/customTailwindClasses";
import { useState } from "react";
import { IoIosSend } from "react-icons/io";

export default function Form() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      error: null,
      success: false,
    });

    // Get the Turnstile token
    const token = document.querySelector(
      '[name="cf-turnstile-response"]'
    ).value;

    try {
      const response = await fetch("/api/websites-contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setStatus({
        submitted: true,
        submitting: false,
        error: null,
        success: true,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
      });

      // Reset Turnstile
      window.turnstile.reset();
    } catch (error) {
      setStatus({
        submitted: true,
        submitting: false,
        error: error.message,
        success: false,
      });
    }
  };

  const labelStyles = "block text-sm font-medium text-neutral-300";
  const inputStyles =
    "shadow-sm block w-full sm:text-sm text-neutral-300 bg-white/5 py-1.5 px-1.5 border border-gray-300/40 rounded-md placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-x-2">
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
      <div className="grid grid-cols-2 gap-x-2">
        <div>
          <label htmlFor="company" className={` ${labelStyles} `}>
            Company (Optional)
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
            Budget Range
          </label>
          <div className="mt-1">
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className={` ${inputStyles} ${
                formData.budget === "" ? "text-gray-700" : "text-neutral-300"
              } `}
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
            </select>
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

      <div className="w-full flex justify-between items-center mt-2">
        <div
          className="cf-turnstile"
          data-sitekey="1x00000000000000000000AA"
          data-theme="light"
        ></div>

        <button
          type="submit"
          disabled={status.submitting}
          className={` ${whiteButton} flex items-center justify-center gap-2 `}
        >
          {status.submitting ? "Submitting..." : "Submit"}
          <IoIosSend size="1.6em" />
        </button>
      </div>
    </form>
  );
}
