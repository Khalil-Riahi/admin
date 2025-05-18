// // // "use client";
// // // import * as React from "react";
// // // import { useState , useEffect} from "react";
// // // import {
// // //   Carousel,
// // //   CarouselContent,
// // //   CarouselItem,
// // //   CarouselNext,
// // //   CarouselPrevious,
// // // } from "./ui/carousel";
// // // import SubscriptionCard from "./SubscriptionCard";

// // // export function MyCarrousel() {

// // //   const [fetchedData, setFetchedData] = useState([]);
  

// // //   useEffect(() => {
// // //     async function fetchingSubscriptions() {
// // //       try {
// // //         const response = await fetch("http://localhost:8000/ELACO/subcription/");
// // //         if (!response.ok) {
// // //           throw new Error("Error in fetching subscriptions");
// // //         }
// // //         const data = await response.json();
// // //         setFetchedData(data.data.subscriptions);
// // //       } catch (err) {
// // //         console.error(err);
// // //       }
// // //     }
// // //     fetchingSubscriptions();
// // //   }, []);
// // //   const data = [
// // //     {
// // //       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// // //       subscriptionType: "daily",
// // //       price: 10,
// // //     },
// // //     {
// // //       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// // //       subscriptionType: "weekly",
// // //       price: 50,
// // //     },
// // //     {
// // //       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// // //       subscriptionType: "monthly (5H)",
// // //       price: 75,
// // //     },
// // //     {
// // //       description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// // //       subscriptionType: "monthly",
// // //       price: 130,
// // //     },
// // //   ];

// // //   return (
// // //     <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
// // //       {/* 
// // //         1) 'px-4' adds padding on the left/right edges so the first and last cards
// // //            aren't flush with the container edge.
// // //         2) 'gap-4' adds space between each card so their borders are clearly visible.
// // //       */}
// // //       <CarouselContent className="flex px-4">
// // //         {fetchedData.map((sub, index) => (
// // //           <CarouselItem
// // //             key={index}
// // //             className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
// // //           >
// // //             <SubscriptionCard sub={sub} />
// // //           </CarouselItem>
// // //         ))}
// // //       </CarouselContent>
// // //       <CarouselPrevious />
// // //       <CarouselNext />
// // //     </Carousel>
// // //   );
// // // }

// // "use client";
// // import * as React from "react";
// // import { useState , useEffect} from "react";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// // } from "./ui/carousel";
// // import SubscriptionCard from "./SubscriptionCard";

// // export function MyCarrousel({subs , description}) {

// //   const [modalOpen, setModalOpen] = useState(false);


// //   // const [fetchedData, setFetchedData] = useState([]);
  

// //   // useEffect(() => {
// //   //   async function fetchingSubscriptions() {
// //   //     try {
// //   //       const response = await fetch("http://localhost:8000/ELACO/subcription/");
// //   //       if (!response.ok) {
// //   //         throw new Error("Error in fetching subscriptions");
// //   //       }
// //   //       const data = await response.json();
// //   //       setFetchedData(data.data.subscriptions);
// //   //     } catch (err) {
// //   //       console.error(err);
// //   //     }
// //   //   }
// //   //   fetchingSubscriptions();
// //   // }, []);
// //   // const data = [
// //   //   {
// //   //     description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// //   //     subscriptionType: "daily",
// //   //     price: 10,
// //   //   },
// //   //   {
// //   //     description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// //   //     subscriptionType: "weekly",
// //   //     price: 50,
// //   //   },
// //   //   {
// //   //     description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// //   //     subscriptionType: "monthly (5H)",
// //   //     price: 75,
// //   //   },
// //   //   {
// //   //     description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
// //   //     subscriptionType: "monthly",
// //   //     price: 130,
// //   //   },
// //   // ];

// //   return (
// //     <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
// //       {/* 
// //         1) 'px-4' adds padding on the left/right edges so the first and last cards
// //            aren't flush with the container edge.
// //         2) 'gap-4' adds space between each card so their borders are clearly visible.
// //       */}
// //       <CarouselContent className="flex px-4">
// //         {subs?.map((sub, index) => (
// //           <CarouselItem
// //             key={index}
// //             className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
// //           >
// //             <SubscriptionCard sub={sub} description={description}/>
// //           </CarouselItem>
// //         ))}
// //       </CarouselContent>
// //       <CarouselPrevious />
// //       <CarouselNext />
// //     </Carousel>
// //   );
// // }

// "use client";
// import * as React from "react";
// import { useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "./ui/carousel";
// import SubscriptionCard from "./SubscriptionCard";

// export function MyCarrousel({ subs, description }) {
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <div className="w-full">
//       {/* Add Subscription Button at the top */}
//       <div className="flex justify-end mb-6">
//         <button
//           onClick={() => setModalOpen(true)}
//           className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md flex items-center transition-colors duration-300"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5 mr-2"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//           Add Subscription
//         </button>
//       </div>

//       {/* Carousel Component */}
//       <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
//         <CarouselContent className="flex px-4">
//           {subs?.map((sub, index) => (
//             <CarouselItem
//               key={index}
//               className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
//             >
//               <SubscriptionCard sub={sub} description={description} />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>

//       {/* Modal for Adding Subscription - Will be implemented based on your modal component */}
//       {modalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-8 w-full max-w-md">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-xl font-bold text-gray-900">Add New Subscription</h3>
//               <button
//                 onClick={() => setModalOpen(false)}
//                 className="text-gray-400 hover:text-gray-500"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
            
//             {/* Form content would go here */}
//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Subscription Type</label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="daily, weekly, monthly..."
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Price</label>
//                 <input
//                   type="number"
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="0"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">Description</label>
//                 <textarea
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                   rows="3"
//                   placeholder="Enter subscription features separated by commas"
//                 ></textarea>
//               </div>
              
//               <div className="flex justify-end space-x-3 pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setModalOpen(false)}
//                   className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-white hover:bg-indigo-700"
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import * as React from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SubscriptionCard from "./SubscriptionCard";
import AddSubscriptionModal from "./AddSubscriptionModal";

export function MyCarrousel({ subs, description }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Add Subscription Button at the top */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md flex items-center transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add Subscription
        </button>
      </div>

      {/* Carousel Component */}
      <Carousel opts={{ align: "start" }} className="w-full overflow-visible">
        <CarouselContent className="flex px-4">
          {subs?.map((sub, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <SubscriptionCard sub={sub} description={description} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Add Subscription Modal */}
      <AddSubscriptionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={(newSub) => {
          // You can implement how to add newSub to the list
          console.log("Saved subscription:", newSub);
        }}
      />
    </div>
  );
}
