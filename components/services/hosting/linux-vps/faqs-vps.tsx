import Faqs from "@/components/shared/faqs";
import React from "react";

const faqs = [
  {
    title: "Do you allow VPN's and Proxy's ?",
    answer:
      "Yes, VPNs and Proxies are allowed as long as it is for private use only. Please remember, utilising our service to gain access to copyrighted materials is not allowed.",
  },
];

export default function FaqsVps() {
  return (
    <>
      <Faqs faqs={faqs} />
    </>
  );
}
