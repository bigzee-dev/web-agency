import {
  pageHeadings,
  longSectionHeadings,
} from "@/app/ui/customTailwindClasses";
import { inter, montserrat } from "@/app/ui/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "How to Pay - Payment Methods | Deltaworx",
  description:
    "Learn about our accepted payment methods including Bank Transfer, PayPal, and Orange Money. We accept payments in BWP and USD.",
  keywords: [
    "payment methods Botswana",
    "bank transfer",
    "paypal",
    "orange money",
    "how to pay",
    "payment instructions",
  ],
};

export default function HowToPayPage() {
  const paymentMethods = [
    {
      id: 1,
      title: "Bank Transfer",
      icon: {
        type: "image",
        src: "/paymentmethods/fnb-logo.svg",
        alt: "fnb-logo",
      },
      content: [
        <>
          After placing your order, select{" "}
          <strong>&quot;Bank Transfer&quot;</strong> as your payment method and
          complete the order. An invoice will then be generated in your client
          area, where you’ll find our bank account details in the top-right
          corner. Use your bank’s online banking platform or mobile app to make
          the payment.
        </>,
      ],
      alert: {
        color: "amber",
        content: (
          <>
            ⚠️ Please ensure that you enter the{" "}
            <strong>reference number correctly</strong>, it is found on the
            invoice alongside the bank account details.
          </>
        ),
      },
      additionalContent: [
        <>
          <strong>Processing Time:</strong> Our bank account is with FNB. If
          you’re making payment from an FNB account, the transaction is
          processed immediately and your service will be activated right away.
          Payments sent from other banks to FNB may take{" "}
          <strong>1–2 working days</strong> to clear, which can result in a
          delay in service activation.
        </>,
      ],
    },
    {
      id: 2,
      title: "PayPal",
      icon: {
        type: "image",
        src: "/paymentmethods/paypal-icon.svg",
        alt: "paypal-logo",
      },
      content: [
        <>
          After making your order, choose <strong>&quot;PayPal&quot;</strong> as
          your payment option and complete the order. The PayPal page will load
          automatically, and you will be prompted to log in to your PayPal
          account and complete the payment.
        </>,
        <>
          If the payment fails for any reason, you can find the invoice in the
          client area and try making the payment again.
        </>,
      ],
      alert: {
        color: "green",
        content: (
          <>
            ✓ Once your PayPal payment is successful, your service will be{" "}
            <strong>activated immediately</strong>.
          </>
        ),
      },
      additionalContent: [],
    },
    {
      id: 3,
      title: "Orange Money",
      icon: {
        type: "image",
        src: "/paymentmethods/omoney-logo.png",
        alt: "omoney-logo",
      },
      content: [
        <>
          After placing your order, select{" "}
          <strong>&quot;Orange Money&quot;</strong> as your payment method and
          complete the order. An invoice will then be generated in your client
          area, where you’ll find our Orange Money account details in the
          top-right corner. Make the payment using your Orange Money account.
        </>,
      ],
      alert: {
        color: "blue",
        content: (
          <>
            <strong>Important:</strong> Since Orange Money does not support
            payment references, please send us an{" "}
            <strong>SMS or WhatsApp message at 267 72537524</strong> confirming
            that you’ve made the payment, and include the reference number shown
            on your invoice so we can match the payment to the correct account
            and invoice.
          </>
        ),
      },
      additionalContent: [
        <>
          Once we receive your notification and verify the payment, we will
          activate your service promptly.
        </>,
      ],
    },
  ];

  const getAlertStyles = (color: string) => {
    const styles = {
      amber: {
        border: "border-amber-400",
        bg: "bg-amber-50",
        text: "text-amber-900",
      },
      green: {
        border: "border-green-400",
        bg: "bg-green-50",
        text: "text-green-900",
      },
      blue: {
        border: "border-blue-400",
        bg: "bg-blue-50",
        text: "text-blue-900",
      },
    };
    return styles[color as keyof typeof styles] || styles.blue;
  };

  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-b from-gray-50 to-white",
        inter.className,
      )}
    >
      {/* Header Section */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h1 className={cn(pageHeadings, "mb-4")}>How to Pay</h1>
        <p className="mx-auto max-w-3xl text-center text-lg text-gray-600">
          Choose from our secure payment methods below. Follow the step-by-step
          instructions to complete your order.
        </p>
      </div>

      {/* Currency Notice */}
      <div className="mx-auto mb-12 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-r-lg border-l-4 border-primary bg-blue-50 p-6 shadow-sm">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="h-6 w-6 text-primary"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div className="ml-4">
              <h3
                className={cn(
                  "mb-2 text-lg font-semibold text-gray-900",
                  montserrat.className,
                )}
              >
                Important: Currency Notice
              </h3>
              <p className="leading-relaxed text-gray-700">
                We{" "}
                <strong>
                  only accept payments in BWP (Botswana Pula) or USD (US
                  Dollars)
                </strong>
                . Please ensure you have selected your relevant currency before
                making a purchase. This helps us process your payment quickly
                and accurately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mx-auto max-w-5xl space-y-10 px-4 pb-16 sm:px-6 lg:px-8">
        {paymentMethods.map((method) => {
          const alertStyles = getAlertStyles(method.alert.color);

          return (
            <div
              key={method.id}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-md sm:p-10"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                  <img
                    src={method.icon.src}
                    alt={method.icon.alt}
                    className="h-10 w-10"
                  />
                </div>
                <h2 className={longSectionHeadings}>{method.title}</h2>
              </div>

              <div className="prose prose-gray max-w-none space-y-4 text-md leading-relaxed text-gray-700">
                {method.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <div
                  className={cn(
                    "my-4 border-l-4 p-4",
                    alertStyles.border,
                    alertStyles.bg,
                  )}
                >
                  <p className={cn("font-medium", alertStyles.text)}>
                    {method.alert.content}
                  </p>
                </div>

                {method.additionalContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Support Section */}
      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-secondary p-8 text-center text-white">
          <h3 className={cn("mb-3 text-2xl font-bold", montserrat.className)}>
            Need Help with Payment?
          </h3>
          <p className="mx-auto mb-4 max-w-2xl text-gray-200">
            If you encounter any issues or have questions about the payment
            process, our support team is here to assist you.
          </p>
          <p className="text-lg font-medium">
            Contact us: <span className="text-accent">267 72537524</span>{" "}
            (WhatsApp/SMS)
          </p>
        </div>
      </div>
    </div>
  );
}
