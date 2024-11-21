// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";
// import { FaCheck } from "react-icons/fa6";

// import Link from "next/link";

// const tlds = [
//   { name: ".com", price: 9.99, color: "text-blue-400" },
//   { name: ".io", price: 39.99, color: "text-green-400" },
//   { name: ".app", price: 12.99, color: "text-purple-400" },
//   { name: ".online", price: 3.99, color: "text-yellow-500" },
//   { name: ".net", price: 11.99, color: "text-red-500" },
//   { name: ".org", price: 12.99, color: "text-indigo-400" },
//   { name: ".tech", price: 39.99, color: "text-pink-400" },
// ];

// export default function DomainSearch() {
//   const [domain, setDomain] = useState("");
//   // const [result, setResult] = useState<string | null>(null);
//   // const [availability, setAvailability] = useState<boolean | null>(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const checkDomainAvailability = async (domain: string) => {
//     try {
//       const response = await fetch("/api/test", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ domain }),
//       });

//       const data = await response.json();
//       console.log(data.message);
//       setResult(data.message);
//     } catch (error) {
//       console.error("Error:", error);
//       setResult("An error occurred while checking domain availability.");
//     }
//   };

//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     const result = await checkDomainAvailability(domain);
//     // setAvailability(result);
//     setIsLoading(false);
//   };

//   return (
//     <div className="h-full flex flex-col max-w-2xl mx-auto pt-2">
//       <form onSubmit={handleSearch} className="flex gap-2 mb-4">
//         <Input
//           type="text"
//           value={domain}
//           onChange={(e) => setDomain(e.target.value)}
//           placeholder="e.g mywebsite.com"
//           className="flex-grow placeholder:text-gray-400 placeholder:text-sm border-neutral-300 text-neutral-200 focus:ring focus:ring-2 focus:ring-red-200 focus:border-transparent focus:outline-none"
//           style={{ fontSize: "1rem" }}
//         />
//         <Button
//           type="submit"
//           disabled={isLoading}
//           className="min-w-40 bg-neutral-200 text-primary hover:bg-neutral-300 hover:text-blue-600"
//         >
//           {isLoading ? (
//             "Searching..."
//           ) : (
//             <div className="flex items-center justify-center">
//               <Search className="w-4 h-4 mr-2" /> Search
//             </div>
//           )}
//         </Button>
//       </form>

//       {availability !== null && (
//         <div
//           className={`flex justify-between items-center border-l-4 border-green-500 py-2 px-3 mb-4 text-base bg-neutral-400/15 font-medium ${
//             availability ? "text-green-500" : "text-red-500"
//           }`}
//         >
//           {availability
//             ? `${domain} is available!`
//             : `${domain} is NOT available.`}
//           <span>
//             <FaCheck className="text-green-500" size="1.4em" />
//           </span>
//           <Link
//             href={`http://209.97.177.68/cart.php?a=add&domain=register&query=${domain}`}
//             className="py-2 text-md text-neutral-200 min-w-32 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-center"
//           >
//             Buy Now
//           </Link>
//         </div>
//       )}

//       {availability === null && (
//         <>
//           <p className="text-center font-sans pt-2 text-md text-neutral-300">
//             Securing the ideal domain name is a crucial first step in
//             establishing your presence online. We offer a wide variety for you
//             to select from.
//           </p>
//         </>
//       )}

//       <div className="mt-auto grid grid-cols-4 sm:grid-cols-7 gap-1 text-center">
//         {tlds.map((tld) => (
//           <div key={tld.name} className="p-0.5">
//             <div className={`${tld.color} text-lg font-semibold`}>
//               {tld.name}
//             </div>
//             <div className="text-xs text-gray-300/80 mt-1">
//               ${tld.price.toFixed(2)}/yr
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
