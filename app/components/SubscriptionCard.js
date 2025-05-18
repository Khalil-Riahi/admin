// // // // // // // // // // // "use client";
// // // // // // // // // // // import { useState } from "react";

// // // // // // // // // // // export default function SubscriptionCard({ sub }) {
// // // // // // // // // // //   async function clickToPay() {
// // // // // // // // // // //     const obj = {
// // // // // // // // // // //       subId: sub._id,
// // // // // // // // // // //       amount: sub.price * 1000,
// // // // // // // // // // //       description: `${sub.subscriptionType} subscription`,
// // // // // // // // // // //     };
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch("http://localhost:3001/api/v1/reservation", {
// // // // // // // // // // //         method: "POST",
// // // // // // // // // // //         body: JSON.stringify(obj),
// // // // // // // // // // //         credentials: "include",
// // // // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // // // //       });
// // // // // // // // // // //       if (!response.ok) {
// // // // // // // // // // //         throw new Error("Error in paying");
// // // // // // // // // // //       }
// // // // // // // // // // //       const resData = await response.json();
// // // // // // // // // // //       window.location.href = resData.result.payUrl;
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //     }
// // // // // // // // // // //   }

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // // // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // // // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // // // // // // //           {sub.subscriptionType}
// // // // // // // // // // //         </p>
// // // // // // // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-gray-800 text-4xl sm:text-5xl">
// // // // // // // // // // //           {sub.price}
// // // // // // // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // // // // // // //         </h1>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <ul className="space-y-3">
// // // // // // // // // // //         {sub.description.map((des, index) => (
// // // // // // // // // // //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // // // // //               </svg>
// // // // // // // // // // //             </span>
// // // // // // // // // // //             <p>{des}</p>
// // // // // // // // // // //           </li>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </ul>

// // // // // // // // // // //       <div className="mt-8">
// // // // // // // // // // //         <button
// // // // // // // // // // //           className="w-full py-2 px-4 bg-gray-800 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
// // // // // // // // // // //           type="button"
// // // // // // // // // // //           onClick={clickToPay}
// // // // // // // // // // //         >
// // // // // // // // // // //           Subscribe
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // "use client";
// // // // // // // // // // // // import { useRouter } from "next/router";
// // // // // // // // // // // import { useRouter } from "next/navigation";

// // // // // // // // // // // // import { useState } from "react";

// // // // // // // // // // // export default function SubscriptionCard({ sub }) {
// // // // // // // // // // //   const router = useRouter()
// // // // // // // // // // //   async function clickToPay() {
// // // // // // // // // // //     const obj = {
// // // // // // // // // // //       subId: sub._id,
// // // // // // // // // // //       amount: sub.price * 1000,
// // // // // // // // // // //       description:`${sub.subscriptionType} subscription` ,
// // // // // // // // // // //     };
// // // // // // // // // // //     try {
// // // // // // // // // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // // // // // // // // //         method: "POST",
// // // // // // // // // // //         body: JSON.stringify(obj),
// // // // // // // // // // //         credentials: "include",
// // // // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // // // //       });
// // // // // // // // // // //       if (!response.ok) {
// // // // // // // // // // //         throw new Error("Error in paying");
// // // // // // // // // // //       }
// // // // // // // // // // //       const resData = await response.json();
// // // // // // // // // // //       window.location.href = resData.result.payUrl;
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //     }
// // // // // // // // // // //   }

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // // // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // // // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // // // // // // //           {sub.subscriptionType}
// // // // // // // // // // //         </p>
// // // // // // // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950   text-4xl sm:text-5xl">
// // // // // // // // // // //           {sub.price}
// // // // // // // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // // // // // // //         </h1>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       <ul className="space-y-3">
// // // // // // // // // // //         {sub.description.map((des, index) => (
// // // // // // // // // // //           <li
// // // // // // // // // // //             key={index}
// // // // // // // // // // //             className="flex items-center gap-3 text-sm sm:text-base text-gray-600"
// // // // // // // // // // //           >
// // // // // // // // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // // // // //               <svg
// // // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // // //                 fill="none"
// // // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // // //                 strokeWidth="2"
// // // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // // //                 className="w-4 h-4"
// // // // // // // // // // //               >
// // // // // // // // // // //                 <path
// // // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // // //                   d="M4.5 12.75l6 6 9-13.5"
// // // // // // // // // // //                 />
// // // // // // // // // // //               </svg>
// // // // // // // // // // //             </span>
// // // // // // // // // // //             <p>{des}</p>
// // // // // // // // // // //           </li>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </ul>

// // // // // // // // // // //       <div className="mt-8">
// // // // // // // // // // //         <button
// // // // // // // // // // //           className="w-full py-2 px-4 bg-blue-950 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
// // // // // // // // // // //           type="button"
// // // // // // // // // // //           onClick={() => {
// // // // // // // // // // //             const id = localStorage.getItem('userId')
// // // // // // // // // // //             if(id){
// // // // // // // // // // //               clickToPay()
// // // // // // // // // // //             }else{
// // // // // // // // // // //               router.push('/login')
// // // // // // // // // // //             }
// // // // // // // // // // //           }}
// // // // // // // // // // //         >
// // // // // // // // // // //           Subscribe
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // "use client";
// // // // // // // // // // import { useState } from "react";
// // // // // // // // // // import SubscriptionModal from './SubscriptionModal';

// // // // // // // // // // export default function SubscriptionCard({ sub }) {
// // // // // // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // // // // // //       <SubscriptionModal sub={sub} isOpen1={showModal} onClose={() => setShowModal(false)} />

// // // // // // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // // // // // //           {sub.subscriptionType}
// // // // // // // // // //         </p>
// // // // // // // // // //         {/* Added Room Info Under Subscription Type */}
// // // // // // // // // //         <p className="text-sm text-gray-400 mt-1">
// // // // // // // // // //   {sub.roomType === "openspace"
// // // // // // // // // //     ? null
// // // // // // // // // //     : sub.roomType === "meetingroom1"
// // // // // // // // // //     ? "Meeting Room 1"
// // // // // // // // // //     : sub.roomType === "officeroom1"
// // // // // // // // // //     ? "Private Office Premium +"
// // // // // // // // // //     : sub.roomType === "officeroom2"
// // // // // // // // // //     ? "Private Office"
// // // // // // // // // //     : sub.roomType === "meetingroom2"
// // // // // // // // // //     ? "Meeting Room 2"
// // // // // // // // // //     : "Other Room"}
// // // // // // // // // // </p>



// // // // // // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// // // // // // // // // //           {sub.price}
// // // // // // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // // // // // //         </h1>
// // // // // // // // // //       </div>

// // // // // // // // // //       <ul className="space-y-3">
// // // // // // // // // //         {sub.description.map((des, index) => (
// // // // // // // // // //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // // // // //                 strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // // // //               </svg>
// // // // // // // // // //             </span>
// // // // // // // // // //             <p>{des}</p>
// // // // // // // // // //           </li>
// // // // // // // // // //         ))}
// // // // // // // // // //       </ul>

// // // // // // // // // //       <div className="mt-8">
// // // // // // // // // //         <button
// // // // // // // // // //           className="w-full py-2 px-4 bg-blue-950 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
// // // // // // // // // //           type="button"
// // // // // // // // // //           onClick={() => setShowModal(true)}
// // // // // // // // // //         >
// // // // // // // // // //           Subscribe
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // "use client";
// // // // // // // // // import { useState } from "react";
// // // // // // // // // import SubscriptionModal from './SubscriptionModal';

// // // // // // // // // export default function SubscriptionCard({ sub }) {
// // // // // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // // // // //       <SubscriptionModal sub={sub} isOpen1={showModal} onClose={() => setShowModal(false)} />

// // // // // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // // // // //           {sub?.subscriptionType}
// // // // // // // // //         </p>
// // // // // // // // //         {/* Added Room Info Under Subscription Type */}
// // // // // // // // //         <p className="text-sm text-gray-400 mt-1">
// // // // // // // // //   {sub.roomType === "openspace"
// // // // // // // // //     ? null
// // // // // // // // //     : sub.roomType === "meetingroom1"
// // // // // // // // //     ? "Meeting Room 1"
// // // // // // // // //     : sub.roomType === "officeroom1"
// // // // // // // // //     ? "Private Office Premium +"
// // // // // // // // //     : sub.roomType === "officeroom2"
// // // // // // // // //     ? "Private Office"
// // // // // // // // //     : sub.roomType === "meetingroom2"
// // // // // // // // //     ? "Meeting Room 2"
// // // // // // // // //     : "Other Room"}
// // // // // // // // // </p>



// // // // // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// // // // // // // // //           {sub.price}
// // // // // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // // // // //         </h1>
// // // // // // // // //       </div>

// // // // // // // // //       <ul className="space-y-3">
// // // // // // // // //         {sub?.description?.map((des, index) => (
// // // // // // // // //           <li key={index} clasasName="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // // // //                 strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // // //               </svg>
// // // // // // // // //             </span>
// // // // // // // // //             <p>{des}</p>
// // // // // // // // //           </li>
// // // // // // // // //         ))}
// // // // // // // // //       </ul>

// // // // // // // // //       <div className="mt-8">
// // // // // // // // //         <button
// // // // // // // // //           className="w-full py-2 px-4 bg-blue-950 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
// // // // // // // // //           type="button"
// // // // // // // // //           onClick={() => setShowModal(true)}
// // // // // // // // //         >
// // // // // // // // //           Subscribe
// // // // // // // // //         </button>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // // // "use client";
// // // // // // // // // // import { useState } from "react";

// // // // // // // // // // export default function SubscriptionCard({ sub }) {
// // // // // // // // // //   async function clickToPay() {
// // // // // // // // // //     const obj = {
// // // // // // // // // //       subId: sub._id,
// // // // // // // // // //       amount: sub.price * 1000,
// // // // // // // // // //       description: `${sub.subscriptionType} subscription`,
// // // // // // // // // //     };
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch("http://localhost:3001/api/v1/reservation", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         body: JSON.stringify(obj),
// // // // // // // // // //         credentials: "include",
// // // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // // //       });
// // // // // // // // // //       if (!response.ok) {
// // // // // // // // // //         throw new Error("Error in paying");
// // // // // // // // // //       }
// // // // // // // // // //       const resData = await response.json();
// // // // // // // // // //       window.location.href = resData.result.payUrl;
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // // // // // //           {sub.subscriptionType}
// // // // // // // // // //         </p>
// // // // // // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-gray-800 text-4xl sm:text-5xl">
// // // // // // // // // //           {sub.price}
// // // // // // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // // // // // //         </h1>
// // // // // // // // // //       </div>

// // // // // // // // // //       <ul className="space-y-3">
// // // // // // // // // //         {sub.description.map((des, index) => (
// // // // // // // // // //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // // // //               </svg>
// // // // // // // // // //             </span>
// // // // // // // // // //             <p>{des}</p>
// // // // // // // // // //           </li>
// // // // // // // // // //         ))}
// // // // // // // // // //       </ul>

// // // // // // // // // //       <div className="mt-8">
// // // // // // // // // //         <button
// // // // // // // // // //           className="w-full py-2 px-4 bg-gray-800 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
// // // // // // // // // //           type="button"
// // // // // // // // // //           onClick={clickToPay}
// // // // // // // // // //         >
// // // // // // // // // //           Subscribe
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // "use client";
// // // // // // // // // // // import { useRouter } from "next/router";
// // // // // // // // // // import { useRouter } from "next/navigation";

// // // // // // // // // // // import { useState } from "react";

// // // // // // // // // // export default function SubscriptionCard({ sub }) {
// // // // // // // // // //   const router = useRouter()
// // // // // // // // // //   async function clickToPay() {
// // // // // // // // // //     const obj = {
// // // // // // // // // //       subId: sub._id,
// // // // // // // // // //       amount: sub.price * 1000,
// // // // // // // // // //       description:`${sub.subscriptionType} subscription` ,
// // // // // // // // // //     };
// // // // // // // // // //     try {
// // // // // // // // // //       const response = await fetch("http://localhost:8000/ELACO/subcription/payment", {
// // // // // // // // // //         method: "POST",
// // // // // // // // // //         body: JSON.stringify(obj),
// // // // // // // // // //         credentials: "include",
// // // // // // // // // //         headers: { "Content-Type": "application/json" },
// // // // // // // // // //       });
// // // // // // // // // //       if (!response.ok) {
// // // // // // // // // //         throw new Error("Error in paying");
// // // // // // // // // //       }
// // // // // // // // // //       const resData = await response.json();
// // // // // // // // // //       window.location.href = resData.result.payUrl;
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // // // // // //           {sub.subscriptionType}
// // // // // // // // // //         </p>
// // // // // // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950   text-4xl sm:text-5xl">
// // // // // // // // // //           {sub.price}
// // // // // // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // // // // // //         </h1>
// // // // // // // // // //       </div>

// // // // // // // // // //       <ul className="space-y-3">
// // // // // // // // // //         {sub.description.map((des, index) => (
// // // // // // // // // //           <li
// // // // // // // // // //             key={index}
// // // // // // // // // //             className="flex items-center gap-3 text-sm sm:text-base text-gray-600"
// // // // // // // // // //           >
// // // // // // // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // // // //               <svg
// // // // // // // // // //                 xmlns="http://www.w3.org/2000/svg"
// // // // // // // // // //                 fill="none"
// // // // // // // // // //                 viewBox="0 0 24 24"
// // // // // // // // // //                 strokeWidth="2"
// // // // // // // // // //                 stroke="currentColor"
// // // // // // // // // //                 className="w-4 h-4"
// // // // // // // // // //               >
// // // // // // // // // //                 <path
// // // // // // // // // //                   strokeLinecap="round"
// // // // // // // // // //                   strokeLinejoin="round"
// // // // // // // // // //                   d="M4.5 12.75l6 6 9-13.5"
// // // // // // // // // //                 />
// // // // // // // // // //               </svg>
// // // // // // // // // //             </span>
// // // // // // // // // //             <p>{des}</p>
// // // // // // // // // //           </li>
// // // // // // // // // //         ))}
// // // // // // // // // //       </ul>

// // // // // // // // // //       <div className="mt-8">
// // // // // // // // // //         <button
// // // // // // // // // //           className="w-full py-2 px-4 bg-blue-950 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
// // // // // // // // // //           type="button"
// // // // // // // // // //           onClick={() => {
// // // // // // // // // //             const id = localStorage.getItem('userId')
// // // // // // // // // //             if(id){
// // // // // // // // // //               clickToPay()
// // // // // // // // // //             }else{
// // // // // // // // // //               router.push('/login')
// // // // // // // // // //             }
// // // // // // // // // //           }}
// // // // // // // // // //         >
// // // // // // // // // //           Subscribe
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // "use client";
// // // // // // // // // import { useState } from "react";
// // // // // // // // // import SubscriptionModal from './SubscriptionModal';

// // // // // // // // // export default function SubscriptionCard({ sub }) {
// // // // // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // // // // //   return (
// // // // // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // // // // //       <SubscriptionModal sub={sub} isOpen1={showModal} onClose={() => setShowModal(false)} />

// // // // // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // // // // //           {sub.subscriptionType}
// // // // // // // // //         </p>
// // // // // // // // //         {/* Added Room Info Under Subscription Type */}
// // // // // // // // //         <p className="text-sm text-gray-400 mt-1">
// // // // // // // // //   {sub.roomType === "openspace"
// // // // // // // // //     ? null
// // // // // // // // //     : sub.roomType === "meetingroom1"
// // // // // // // // //     ? "Meeting Room 1"
// // // // // // // // //     : sub.roomType === "officeroom1"
// // // // // // // // //     ? "Private Office Premium +"
// // // // // // // // //     : sub.roomType === "officeroom2"
// // // // // // // // //     ? "Private Office"
// // // // // // // // //     : sub.roomType === "meetingroom2"
// // // // // // // // //     ? "Meeting Room 2"
// // // // // // // // //     : "Other Room"}
// // // // // // // // // </p>



// // // // // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// // // // // // // // //           {sub.price}
// // // // // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // // // // //         </h1>
// // // // // // // // //       </div>

// // // // // // // // //       <ul className="space-y-3">
// // // // // // // // //         {sub.description.map((des, index) => (
// // // // // // // // //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // // // //                 strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // // //               </svg>
// // // // // // // // //             </span>
// // // // // // // // //             <p>{des}</p>
// // // // // // // // //           </li>
// // // // // // // // //         ))}
// // // // // // // // //       </ul>

// // // // // // // // //       <div className="mt-8">
// // // // // // // // //         <button
// // // // // // // // //           className="w-full py-2 px-4 bg-blue-950 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
// // // // // // // // //           type="button"
// // // // // // // // //           onClick={() => setShowModal(true)}
// // // // // // // // //         >
// // // // // // // // //           Subscribe
// // // // // // // // //         </button>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // "use client";
// // // // // // // // import { useState } from "react";
// // // // // // // // import SubscriptionModal from './SubscriptionModal';

// // // // // // // // export default function SubscriptionCard({ sub , descriptions}) {
// // // // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // // // //   console.log(sub)
// // // // // // // //   const dess = [
// // // // // // // //     '7/7 Access',
// // // // // // // //     'Wi-Fi',
// // // // // // // //     'coffee (extra)',
// // // // // // // //     'kitchen'
// // // // // // // //   ]
// // // // // // // //   return (
// // // // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // // // //       <SubscriptionModal sub={sub} isOpen1={showModal} onClose={() => setShowModal(false)} />

// // // // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // // // //           {sub.subscriptionType}
// // // // // // // //         </p>
// // // // // // // //         {/* Added Room Info Under Subscription Type */}
// // // // // // // //         <p className="text-sm text-gray-400 mt-1">
// // // // // // // //   {sub?.table_id?.Name ? sub.table_id.Name : null}
// // // // // // // // </p>



// // // // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// // // // // // // //           {sub.price}
// // // // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // // // //         </h1>
// // // // // // // //       </div>

// // // // // // // //       {/* <ul className="space-y-3">
// // // // // // // //         {sub?.table_id?.description ? sub?.table_id?.description?.map((des, index) => (
// // // // // // // //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // // //                 strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // //               </svg>
// // // // // // // //             </span>
// // // // // // // //             <p>{des}</p>
// // // // // // // //           </li>
// // // // // // // //         )) : descriptions?.map((des , index) => (
// // // // // // // //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // // //                 strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // //               </svg>
// // // // // // // //             </span>
// // // // // // // //             <p>{des}</p>
// // // // // // // //           </li>
// // // // // // // //         ))}
// // // // // // // //       </ul> */}

// // // // // // // // {/* <ul className="space-y-3">
  
// // // // // // // //   {sub?.table_id?.description?.length > 0 ? (
// // // // // // // //     sub.table_id.description.map((des, index) => (
// // // // // // // //       <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // //         <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // // //             strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // //             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // //           </svg>
// // // // // // // //         </span>
// // // // // // // //         <p>{des}</p>
// // // // // // // //       </li>
// // // // // // // //     ))
// // // // // // // //   ) : !sub && descriptions?.length > 0 ? (
  
// // // // // // // //     descriptions.map((des, index) => (
// // // // // // // //       <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // //         <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // //           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // // //             strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // //             <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // //           </svg>
// // // // // // // //         </span>
// // // // // // // //         <p>{des}</p>
// // // // // // // //       </li>
// // // // // // // //     ))
// // // // // // // //   ) : null}
// // // // // // // // </ul> */}

// // // // // // // // <ul className="space-y-3">
// // // // // // // //   {/* 1. Prefer sub.table_id.description if it's a non-empty array */}
// // // // // // // //   {Array.isArray(sub?.table_id?.description) && sub.table_id.description.length > 0
// // // // // // // //     ? sub.table_id.description.map((des, index) => (
// // // // // // // //         <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // //           <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // // //               strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // //             </svg>
// // // // // // // //           </span>
// // // // // // // //           <p>{des}</p>
// // // // // // // //         </li>
// // // // // // // //       ))
// // // // // // // //     : Array.isArray(dess) && dess.length > 0
// // // // // // // //     ? dess.map((des, index) => (
// // // // // // // //         <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // // //           <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // // //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // // //               strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // // //             </svg>
// // // // // // // //           </span>
// // // // // // // //           <p>{des}</p>
// // // // // // // //         </li>
// // // // // // // //       ))
// // // // // // // //     : null}
// // // // // // // // </ul>



// // // // // // // //       <div className="mt-8">
// // // // // // // //         <button
// // // // // // // //           className="w-full py-2 px-4 bg-blue-950 hover:bg-amber-500 text-white text-lg rounded-md shadow-md transition-colors duration-300"
// // // // // // // //           type="button"
// // // // // // // //           onClick={() => setShowModal(true)}
// // // // // // // //         >
// // // // // // // //           Subscribe
// // // // // // // //         </button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // "use client";
// // // // // // // import { useState } from "react";
// // // // // // // import SubscriptionModal from './SubscriptionModal';

// // // // // // // export default function SubscriptionCard({ sub, descriptions, onUpdate, onDelete }) {
// // // // // // //   const [showModal, setShowModal] = useState(false);

// // // // // // //   // Default descriptions if none provided
// // // // // // //   const defaultDesc = [
// // // // // // //     '7/7 Access',
// // // // // // //     'Wi-Fi',
// // // // // // //     'coffee (extra)',
// // // // // // //     'kitchen'
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // // //       <SubscriptionModal sub={sub} isOpen1={showModal} onClose={() => setShowModal(false)} />

// // // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // // //           {sub.subscriptionType}
// // // // // // //         </p>
// // // // // // //         {/* Room Info Under Subscription Type */}
// // // // // // //         <p className="text-sm text-gray-400 mt-1">
// // // // // // //           {sub?.table_id?.Name ? sub.table_id.Name : null}
// // // // // // //         </p>

// // // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// // // // // // //           {sub.price}
// // // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // // //         </h1>
// // // // // // //       </div>

// // // // // // //       <ul className="space-y-3">
// // // // // // //         {/* Prefer sub.table_id.description if it's a non-empty array */}
// // // // // // //         {Array.isArray(sub?.table_id?.description) && sub.table_id.description.length > 0
// // // // // // //           ? sub.table_id.description.map((des, index) => (
// // // // // // //               <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // //                 <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // //                     strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // //                   </svg>
// // // // // // //                 </span>
// // // // // // //                 <p>{des}</p>
// // // // // // //               </li>
// // // // // // //             ))
// // // // // // //           : Array.isArray(defaultDesc) && defaultDesc.length > 0
// // // // // // //           ? defaultDesc.map((des, index) => (
// // // // // // //               <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // // //                 <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // // //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // // //                     strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // // //                   </svg>
// // // // // // //                 </span>
// // // // // // //                 <p>{des}</p>
// // // // // // //               </li>
// // // // // // //             ))
// // // // // // //           : null}
// // // // // // //       </ul>

// // // // // // //       <div className="mt-8 grid grid-cols-2 gap-4">
// // // // // // //         <button
// // // // // // //           className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // // // // // //           type="button"
// // // // // // //           onClick={() => onUpdate && onUpdate(sub)}
// // // // // // //         >
// // // // // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // // // // // //           </svg>
// // // // // // //           Update
// // // // // // //         </button>
// // // // // // //         <button
// // // // // // //           className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // // // // // //           type="button"
// // // // // // //           onClick={() => onDelete && onDelete(sub)}
// // // // // // //         >
// // // // // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // // // // // //           </svg>
// // // // // // //           Delete
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";
// // // // // // import { useState } from "react";
// // // // // // import SubscriptionModal from './SubscriptionModal';

// // // // // // // Delete Confirmation Modal Component
// // // // // // const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, subscriptionType }) => {
// // // // // //   if (!isOpen) return null;
  
// // // // // //   return (
// // // // // //     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
// // // // // //       <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
// // // // // //         <div className="text-center mb-6">
// // // // // //           <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
// // // // // //             <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
// // // // // //             </svg>
// // // // // //           </div>
// // // // // //           <h3 className="text-lg font-medium text-gray-900 mb-1">Delete Subscription</h3>
// // // // // //           <p className="text-sm text-gray-500">
// // // // // //             Are you sure you want to delete the <span className="font-medium">{subscriptionType}</span> subscription? This action cannot be undone.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //         <div className="flex gap-3 justify-end">
// // // // // //           <button
// // // // // //             type="button"
// // // // // //             className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
// // // // // //             onClick={onClose}
// // // // // //           >
// // // // // //             Cancel
// // // // // //           </button>
// // // // // //           <button
// // // // // //             type="button"
// // // // // //             className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // // // //             onClick={onConfirm}
// // // // // //           >
// // // // // //             Delete
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default function SubscriptionCard({ sub, descriptions, onUpdate, onDelete }) {
// // // // // //   const [showModal, setShowModal] = useState(false);
// // // // // //   const [showDeleteModal, setShowDeleteModal] = useState(false);

// // // // // //   // Default descriptions if none provided
// // // // // //   const defaultDesc = [
// // // // // //     '7/7 Access',
// // // // // //     'Wi-Fi',
// // // // // //     'coffee (extra)',
// // // // // //     'kitchen'
// // // // // //   ];

// // // // // //   const handleDelete = () => {
// // // // // //     // Call the onDelete prop and close the modal
// // // // // //     onDelete && onDelete(sub);
// // // // // //     setShowDeleteModal(false);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // // // //       <SubscriptionModal sub={sub} isOpen1={showModal} onClose={() => setShowModal(false)} />
      
// // // // // //       {/* Delete Confirmation Modal */}
// // // // // //       <DeleteConfirmationModal 
// // // // // //         isOpen={showDeleteModal}
// // // // // //         onClose={() => setShowDeleteModal(false)}
// // // // // //         onConfirm={handleDelete}
// // // // // //         subscriptionType={sub.subscriptionType}
// // // // // //       />

// // // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // // //           {sub.subscriptionType}
// // // // // //         </p>
// // // // // //         {/* Room Info Under Subscription Type */}
// // // // // //         <p className="text-sm text-gray-400 mt-1">
// // // // // //           {sub?.table_id?.Name ? sub.table_id.Name : null}
// // // // // //         </p>

// // // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// // // // // //           {sub.price}
// // // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // // //         </h1>
// // // // // //       </div>

// // // // // //       <ul className="space-y-3">
// // // // // //         {/* Prefer sub.table_id.description if it's a non-empty array */}
// // // // // //         {Array.isArray(sub?.table_id?.description) && sub.table_id.description.length > 0
// // // // // //           ? sub.table_id.description.map((des, index) => (
// // // // // //               <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // //                 <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // //                     strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // //                   </svg>
// // // // // //                 </span>
// // // // // //                 <p>{des}</p>
// // // // // //               </li>
// // // // // //             ))
// // // // // //           : Array.isArray(defaultDesc) && defaultDesc.length > 0
// // // // // //           ? defaultDesc.map((des, index) => (
// // // // // //               <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // // //                 <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // // //                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // // //                     strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // // //                     <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // // //                   </svg>
// // // // // //                 </span>
// // // // // //                 <p>{des}</p>
// // // // // //               </li>
// // // // // //             ))
// // // // // //           : null}
// // // // // //       </ul>

// // // // // //       <div className="mt-8 grid grid-cols-2 gap-4">
// // // // // //         <button
// // // // // //           className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // // // // //           type="button"
// // // // // //           onClick={() => onUpdate && onUpdate(sub)}
// // // // // //         >
// // // // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // // // // //           </svg>
// // // // // //           Update
// // // // // //         </button>
// // // // // //         <button
// // // // // //           className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // // // // //           type="button"
// // // // // //           onClick={() => setShowDeleteModal(true)}
// // // // // //         >
// // // // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // // // // //           </svg>
// // // // // //           Delete
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // "use client";
// // // // // import { useState } from "react";
// // // // // import SubscriptionModal from "./SubscriptionModal";
// // // // // import DeleteConfirmationModal from "./DeleteConfirmationModal";

// // // // // export default function SubscriptionCard({ sub, descriptions, onUpdate, onDelete }) {
// // // // //   const [showModal, setShowModal] = useState(false);
// // // // //   const [showDeleteModal, setShowDeleteModal] = useState(false);

// // // // //   const defaultDesc = [
// // // // //     "7/7 Access",
// // // // //     "Wi-Fi",
// // // // //     "coffee (extra)",
// // // // //     "kitchen"
// // // // //   ];

// // // // //   const handleDelete = () => {
// // // // //     if (onDelete) {
// // // // //       onDelete(sub);
// // // // //     }
// // // // //     setShowDeleteModal(false);
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">

// // // // //       {/* Modal for updating */}
// // // // //       {/* <SubscriptionModal sub={sub} isOpen1={showModal} onClose={() => setShowModal(false)} /> */}

// // // // //       {/* Delete confirmation modal */}
// // // // //       <DeleteConfirmationModal
// // // // //         isOpen={showDeleteModal}
// // // // //         onClose={() => setShowDeleteModal(false)}
// // // // //         onConfirm={handleDelete}
// // // // //         sub={sub}
// // // // //       />

// // // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // // //         <p className="text-lg font-semibold uppercase text-gray-600">
// // // // //           {sub.subscriptionType}
// // // // //         </p>
// // // // //         <p className="text-sm text-gray-400 mt-1">
// // // // //           {sub?.table_id?.Name ?? null}
// // // // //         </p>
// // // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// // // // //           {sub.price}
// // // // //           <span className="self-end text-xl sm:text-2xl">TND</span>
// // // // //         </h1>
// // // // //       </div>

// // // // //       <ul className="space-y-3">
// // // // //         {(Array.isArray(sub?.table_id?.description) && sub.table_id.description.length > 0
// // // // //           ? sub.table_id.description
// // // // //           : defaultDesc
// // // // //         ).map((des, index) => (
// // // // //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
// // // // //                 strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // // //               </svg>
// // // // //             </span>
// // // // //             <p>{des}</p>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>

// // // // //       <div className="mt-8 grid grid-cols-2 gap-4">
// // // // //         <button
// // // // //           className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // // // //           type="button"
// // // // //           onClick={() => onUpdate && onUpdate(sub)}
// // // // //         >
// // // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none"
// // // // //             viewBox="0 0 24 24" stroke="currentColor">
// // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// // // // //               d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // // // //           </svg>
// // // // //           Update
// // // // //         </button>

// // // // //         <button
// // // // //           className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // // // //           type="button"
// // // // //           onClick={() => setShowDeleteModal(true)}
// // // // //         >
// // // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none"
// // // // //             viewBox="0 0 24 24" stroke="currentColor">
// // // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
// // // // //               d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // // // //           </svg>
// // // // //           Delete
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // "use client";
// // // // import { useState } from "react";
// // // // import UpdateSubscriptionModal from "./UpdateSubscriptionModal";
// // // // import DeleteConfirmationModal from "./DeleteConfirmationModal";

// // // // export default function SubscriptionCard({ sub, descriptions, onUpdate, onDelete }) {
// // // //   const [showUpdateModal, setShowUpdateModal] = useState(false);
// // // //   const [showDeleteModal, setShowDeleteModal] = useState(false);
// // // //   const [refreshDelete , setRefreshDelete] = useState(false);
// // // //   const [refreshUpdate , setRefreshUpdate] = useState(false);


// // // //   const defaultDesc = ["7/7 Access", "Wi-Fi", "coffee (extra)", "kitchen"];

// // // //   const handleDelete = () => {
// // // //     if (onDelete) onDelete(sub);
// // // //     setShowDeleteModal(false);
// // // //   };

// // // //   function onRefreshDelete(){
// // // //     setRefreshDelete(true)
// // // //   }

// // // //   function onRefreshUpdate(){
// // // //     setRefreshUpdate(true)
// // // //   }

// // // //   return (
// // // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // // //       {/* Update Modal */}
// // // //       <UpdateSubscriptionModal
// // // //         isOpen={showUpdateModal}
// // // //         onClose={() => setShowUpdateModal(false)}
// // // //         sub={sub}
// // // //         onSave={(updatedSub) => {
// // // //           setShowUpdateModal(false);
// // // //           onUpdate && onUpdate(updatedSub);
// // // //         }}
// // // //         refresh={onRefreshUpdate}
// // // //       />

// // // //       {/* Delete Modal */}
// // // //       <DeleteConfirmationModal
// // // //         isOpen={showDeleteModal}
// // // //         sub={sub}
// // // //         onClose={() => setShowDeleteModal(false)}
// // // //         onConfirm={handleDelete}
// // // //         subscriptionType={sub.subscriptionType}
// // // //         refresh = {onRefreshDelete}
// // // //       />

// // // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // // //         <p className="text-lg font-semibold uppercase text-gray-600">{sub.subscriptionType}</p>
// // // //         <p className="text-sm text-gray-400 mt-1">{sub?.table_id?.Name ?? null}</p>
// // // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// // // //           {sub.price}<span className="self-end text-xl sm:text-2xl">TND</span>
// // // //         </h1>
// // // //       </div>

// // // //       <ul className="space-y-3">
// // // //         {(Array.isArray(sub?.table_id?.description) && sub.table_id.description.length > 0
// // // //           ? sub.table_id.description
// // // //           : defaultDesc).map((des, index) => (
// // // //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // // //               </svg>
// // // //             </span>
// // // //             <p>{des}</p>
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       <div className="mt-8 grid grid-cols-2 gap-4">
// // // //         <button
// // // //           className="py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // // //           type="button"
// // // //           onClick={() => setShowUpdateModal(true)}
// // // //         >
// // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // // //           </svg>
// // // //           Update
// // // //         </button>

// // // //         <button
// // // //           className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // // //           type="button"
// // // //           onClick={() => setShowDeleteModal(true)}
// // // //         >
// // // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // // //           </svg>
// // // //           Delete
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";
// // // import { useState } from "react";
// // // import UpdateSubscriptionModal from "./UpdateSubscriptionModal";
// // // import DeleteConfirmationModal from "./DeleteConfirmationModal";

// // // export default function SubscriptionCard({ sub, descriptions, onUpdate, onDelete }) {
// // //   const [showUpdateModal, setShowUpdateModal] = useState(false);
// // //   const [showDeleteModal, setShowDeleteModal] = useState(false);
// // //   const [refreshDelete , setRefreshDelete] = useState(false);
// // //   const [refreshUpdate , setRefreshUpdate] = useState(false);

// // //   const defaultDesc = ["7/7 Access", "Wi-Fi", "coffee (extra)", "kitchen"];

// // //   const handleDelete = () => {
// // //     if (onDelete) onDelete(sub);
// // //     setShowDeleteModal(false);
// // //   };

// // //   function onRefreshDelete(){
// // //     setRefreshDelete(true)
// // //   }

// // //   function onRefreshUpdate(){
// // //     setRefreshUpdate(true)
// // //   }

// // //   return (
// // //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// // //       {/* Update Modal */}
// // //       <UpdateSubscriptionModal
// // //         isOpen={showUpdateModal}
// // //         onClose={() => setShowUpdateModal(false)}
// // //         sub={sub}
// // //         onSave={(updatedSub) => {
// // //           setShowUpdateModal(false);
// // //           onUpdate && onUpdate(updatedSub);
// // //         }}
// // //         refresh={onRefreshUpdate}
// // //       />

// // //       {/* Delete Modal */}
// // //       <DeleteConfirmationModal
// // //         isOpen={showDeleteModal}
// // //         sub={sub}
// // //         onClose={() => setShowDeleteModal(false)}
// // //         onConfirm={handleDelete}
// // //         subscriptionType={sub.subscriptionType}
// // //         refresh = {onRefreshDelete}
// // //       />

// // //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// // //         <p className="text-lg font-semibold uppercase text-gray-600">{sub.subscriptionType}</p>
// // //         <p className="text-sm text-gray-400 mt-1">{sub?.table_id?.Name ?? null}</p>
// // //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// // //           {sub.price}<span className="self-end text-xl sm:text-2xl">TND</span>
// // //         </h1>
// // //       </div>

// // //       <ul className="space-y-3">
// // //         {(Array.isArray(sub?.table_id?.description) && sub.table_id.description.length > 0
// // //           ? sub.table_id.description
// // //           : defaultDesc).map((des, index) => (
// // //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// // //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// // //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// // //               </svg>
// // //             </span>
// // //             <p>{des}</p>
// // //           </li>
// // //         ))}
// // //       </ul>

// // //       <div className="mt-8 grid grid-cols-2 gap-4">
// // //         <button
// // //           className="py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // //           type="button"
// // //           onClick={() => setShowUpdateModal(true)}
// // //         >
// // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// // //           </svg>
// // //           Update
// // //         </button>

// // //         <button
// // //           className="py-2 px-4 bg-rose-500 hover:bg-rose-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// // //           type="button"
// // //           onClick={() => setShowDeleteModal(true)}
// // //         >
// // //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// // //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// // //           </svg>
// // //           Delete
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import { useState } from "react";
// // import UpdateSubscriptionModal from "./UpdateSubscriptionModal";
// // import DeleteConfirmationModal from "./DeleteConfirmationModal";

// // export default function SubscriptionCard({ sub, descriptions, onUpdate, onDelete }) {
// //   const [showUpdateModal, setShowUpdateModal] = useState(false);
// //   const [showDeleteModal, setShowDeleteModal] = useState(false);
// //   const [refreshDelete , setRefreshDelete] = useState(false);
// //   const [refreshUpdate , setRefreshUpdate] = useState(false);

// //   const defaultDesc = ["7/7 Access", "Wi-Fi", "coffee (extra)", "kitchen"];

// //   const handleDelete = () => {
// //     if (onDelete) onDelete(sub);
// //     setShowDeleteModal(false);
// //   };

// //   function onRefreshDelete(){
// //     setRefreshDelete(true)
// //   }

// //   function onRefreshUpdate(){
// //     setRefreshUpdate(true)
// //   }

// //   return (
// //     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
// //       {/* Update Modal */}
// //       <UpdateSubscriptionModal
// //         isOpen={showUpdateModal}
// //         onClose={() => setShowUpdateModal(false)}
// //         sub={sub}
// //         onSave={(updatedSub) => {
// //           setShowUpdateModal(false);
// //           onUpdate && onUpdate(updatedSub);
// //         }}
// //         refresh={onRefreshUpdate}
// //       />

// //       {/* Delete Modal */}
// //       <DeleteConfirmationModal
// //         isOpen={showDeleteModal}
// //         sub={sub}
// //         onClose={() => setShowDeleteModal(false)}
// //         onConfirm={handleDelete}
// //         subscriptionType={sub.subscriptionType}
// //         refresh = {onRefreshDelete}
// //       />

// //       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
// //         <p className="text-lg font-semibold uppercase text-gray-600">{sub.subscriptionType}</p>
// //         <p className="text-sm text-gray-400 mt-1">{sub?.table_id?.Name ?? null}</p>
// //         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
// //           {sub.price}<span className="self-end text-xl sm:text-2xl">TND</span>
// //         </h1>
// //       </div>

// //       <ul className="space-y-3">
// //         {(Array.isArray(sub?.table_id?.description) && sub.table_id.description.length > 0
// //           ? sub.table_id.description
// //           : defaultDesc).map((des, index) => (
// //           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
// //             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
// //               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
// //                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
// //               </svg>
// //             </span>
// //             <p>{des}</p>
// //           </li>
// //         ))}
// //       </ul>

// //       <div className="mt-8 grid grid-cols-2 gap-4">
// //         <button
// //           className="py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// //           type="button"
// //           onClick={() => setShowUpdateModal(true)}
// //         >
// //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
// //           </svg>
// //           Update
// //         </button>

// //         <button
// //           className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
// //           type="button"
// //           onClick={() => setShowDeleteModal(true)}
// //         >
// //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
// //           </svg>
// //           Delete
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import UpdateSubscriptionModal from "./UpdateSubscriptionModal";
// import DeleteConfirmationModal from "./DeleteConfirmationModal";

// export default function SubscriptionCard({ sub, descriptions, onUpdate, onDelete }) {
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [refreshDelete , setRefreshDelete] = useState(false);
//   const [refreshUpdate , setRefreshUpdate] = useState(false);

//   const defaultDesc = ["7/7 Access", "Wi-Fi", "coffee (extra)", "kitchen"];

//   const handleDelete = () => {
//     if (onDelete) onDelete(sub);
//     setShowDeleteModal(false);
//   };

//   function onRefreshDelete(){
//     setRefreshDelete(true)
//   }

//   function onRefreshUpdate(){
//     setRefreshUpdate(true)
//   }

//   return (
//     <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
//       {/* Update Modal */}
//       <UpdateSubscriptionModal
//         isOpen={showUpdateModal}
//         onClose={() => setShowUpdateModal(false)}
//         sub={sub}
//         onSave={(updatedSub) => {
//           setShowUpdateModal(false);
//           onUpdate && onUpdate(updatedSub);
//         }}
//         refresh={onRefreshUpdate}
//       />

//       {/* Delete Modal */}
//       <DeleteConfirmationModal
//         isOpen={showDeleteModal}
//         sub={sub}
//         onClose={() => setShowDeleteModal(false)}
//         onConfirm={handleDelete}
//         subscriptionType={sub.subscriptionType}
//         refresh = {onRefreshDelete}
//       />

//       <div className="pb-6 mb-6 border-b border-gray-200 text-center">
//         <p className="text-lg font-semibold uppercase text-gray-600">{sub.subscriptionType}</p>
//         <p className="text-sm text-gray-400 mt-1">{sub?.table_id?.Name ?? null}</p>
//         <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
//           {sub.price}<span className="self-end text-xl sm:text-2xl">TND</span>
//         </h1>
//       </div>

//       <ul className="space-y-3">
//         {(Array.isArray(sub?.table_id?.description) && sub.table_id.description.length > 0
//           ? sub.table_id.description
//           : defaultDesc).map((des, index) => (
//           <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
//             <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//               </svg>
//             </span>
//             <p>{des}</p>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-8 grid grid-cols-2 gap-4">
//         <button
//           className="py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
//           type="button"
//           onClick={() => setShowUpdateModal(true)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//           </svg>
//           Update
//         </button>

//         <button
//           className="py-2 px-4 bg-rose-500 hover:bg-rose-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
//           type="button"
//           onClick={() => setShowDeleteModal(true)}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//           </svg>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import UpdateSubscriptionModal from "./UpdateSubscriptionModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function SubscriptionCard({ sub, descriptions, onUpdate, onDelete }) {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [refreshDelete , setRefreshDelete] = useState(false);
  const [refreshUpdate , setRefreshUpdate] = useState(false);

  const defaultDesc = ["7/7 Access", "Wi-Fi", "coffee (extra)", "kitchen"];

  const handleDelete = () => {
    if (onDelete) onDelete(sub);
    setShowDeleteModal(false);
  };

  function onRefreshDelete(){
    setRefreshDelete(true)
  }

  function onRefreshUpdate(){
    setRefreshUpdate(true)
  }

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {/* Update Modal */}
      <UpdateSubscriptionModal
        isOpen={showUpdateModal}
        onClose={() => setShowUpdateModal(false)}
        sub={sub}
        onSave={(updatedSub) => {
          setShowUpdateModal(false);
          onUpdate && onUpdate(updatedSub);
        }}
        refresh={onRefreshUpdate}
      />

      {/* Delete Modal */}
      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        sub={sub}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        subscriptionType={sub.subscriptionType}
        refresh = {onRefreshDelete}
      />

      <div className="pb-6 mb-6 border-b border-gray-200 text-center">
        <p className="text-lg font-semibold uppercase text-gray-600">{sub.subscriptionType}</p>
        <p className="text-sm text-gray-400 mt-1">{sub?.table_id?.Name ?? null}</p>
        <h1 className="flex justify-center gap-1 mt-4 font-bold text-blue-950 text-4xl sm:text-5xl">
          {sub.price}<span className="self-end text-xl sm:text-2xl">TND</span>
        </h1>
      </div>

      <ul className="space-y-3">
        {(Array.isArray(sub?.table_id?.description) && sub.table_id.description.length > 0
          ? sub.table_id.description
          : defaultDesc).map((des, index) => (
          <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-600">
            <span className="p-1.5 border rounded-full border-gray-300 bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            <p>{des}</p>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <button
          className="py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
          type="button"
          onClick={() => setShowUpdateModal(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          Update
        </button>

        <button
          className="py-2 px-4 bg-slate-600 hover:bg-slate-700 text-white text-base rounded-md shadow-md transition-colors duration-300 flex items-center justify-center"
          type="button"
          onClick={() => setShowDeleteModal(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
}