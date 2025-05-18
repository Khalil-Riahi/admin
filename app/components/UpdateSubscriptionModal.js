// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import { createPortal } from "react-dom";
// // // // import { toast } from "react-toastify";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import 'react-toastify/dist/ReactToastify.css';

// // // export default function UpdateSubscriptionModal({ isOpen, onClose, sub, onSave }) {
// // //   const [price, setPrice] = useState("");
// // //   const [subscriptionType, setSubscriptionType] = useState("");
// // //   const [tableName , setTableName] = useState(sub?.table_id?.Name || "Open Space")

// // //   useEffect(() => {
// // //     if (sub) {
// // //       setPrice(sub.price);
// // //       setSubscriptionType(sub.subscriptionType);
// // //     }
// // //   }, [sub]);

// // //   const handleSave = async () => {
// // //     if (!price || !subscriptionType) {
// // //       toast.error("All fields are required");
// // //       return;
// // //     }

// // //     try {
// // //       const response = await fetch(`http://localhost:8000/ELACO/subcription/${sub._id}`, {
// // //         method: "PATCH",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ price, subscriptionType }),
// // //       });

// // //       if (!response.ok) throw new Error("Failed to update subscription");

// // //       toast.success("Subscription updated successfully");
// // //       setTimeout(() => {
// // //           onSave(); // refresh or close modal

// // //       } , 3000)
// // //     } catch (err) {
// // //       toast.error(err.message);
// // //     }
// // //   };

// // //   if (!isOpen) return null;

// // //   return createPortal(
// // //     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
// // //       <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
// // //         <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Update Subscription</h2>

// // //         <div className="space-y-4">
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-600">Price (TND)</label>
// // //             <input
// // //               type="number"
// // //               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
// // //               value={price}
// // //               onChange={(e) => setPrice(e.target.value)}
// // //             />
// // //           </div>

// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-600">Subscription Type</label>
// // //             <input
// // //               type="text"
// // //               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
// // //               value={subscriptionType}
// // //               onChange={(e) => setSubscriptionType(e.target.value)}
// // //             />
// // //           </div>
// // //         </div>

// // //         <div className="mt-6 flex justify-end gap-3">
// // //           <button
// // //             className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
// // //             onClick={onClose}
// // //           >
// // //             Cancel
// // //           </button>
// // //           <button
// // //             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// // //             onClick={handleSave}
// // //           >
// // //             Save
// // //           </button>
// // //         </div>
// // //       </div>
// // //       <ToastContainer position="bottom-right" autoClose={3000} />

// // //     </div>,
// // //     document.getElementById("modal")
// // //   );
// // // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import { createPortal } from "react-dom";
// // import { ToastContainer, toast } from "react-toastify";
// // import 'react-toastify/dist/ReactToastify.css';

// // export default function UpdateSubscriptionModal({ isOpen, onClose, sub, onSave }) {
// //   const [price, setPrice] = useState("");
// //   const [subscriptionType, setSubscriptionType] = useState("");
// //   const [tableName, setTableName] = useState(sub?.table_id?.Name || "Open Space");

// //   // List of available table names
// //   const tableNames = [
// //     "Open Space",
// //     "Meeting Room",
// //     "Private Office",
// //     "Dedicated Desk",
// //     "Conference Room"
// //   ];

// //   useEffect(() => {
// //     if (sub) {
// //       setPrice(sub.price);
// //       setSubscriptionType(sub.subscriptionType);
// //       setTableName(sub?.table_id?.Name || "Open Space");
// //     }
// //   }, [sub]);

// //   const handleSave = async () => {
// //     if (!price || !subscriptionType || !tableName) {
// //       toast.error("All fields are required");
// //       return;
// //     }

// //     try {
// //       const response = await fetch(`http://localhost:8000/ELACO/subcription/${sub._id}`, {
// //         method: "PATCH",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ 
// //           price, 
// //           subscriptionType, 
// //           tableName 
// //         }),
// //       });

// //       if (!response.ok) throw new Error("Failed to update subscription");

// //       toast.success("Subscription updated successfully");
// //       setTimeout(() => {
// //         onSave(); // refresh or close modal
// //       }, 3000);
// //     } catch (err) {
// //       toast.error(err.message);
// //     }
// //   };

// //   if (!isOpen) return null;

// //   return createPortal(
// //     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
// //       <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
// //         <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Update Subscription</h2>

// //         <div className="space-y-4">
// //           <div>
// //             <label className="block text-sm font-medium text-gray-600">Price (TND)</label>
// //             <input
// //               type="number"
// //               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
// //               value={price}
// //               onChange={(e) => setPrice(e.target.value)}
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-600">Subscription Type</label>
// //             <input
// //               type="text"
// //               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
// //               value={subscriptionType}
// //               onChange={(e) => setSubscriptionType(e.target.value)}
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm font-medium text-gray-600">Table Name</label>
// //             <select
// //               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
// //               value={tableName}
// //               onChange={(e) => setTableName(e.target.value)}
// //             >
// //               {tableNames.map((name) => (
// //                 <option key={name} value={name}>
// //                   {name}
// //                 </option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>

// //         <div className="mt-6 flex justify-end gap-3">
// //           <button
// //             className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
// //             onClick={onClose}
// //           >
// //             Cancel
// //           </button>
// //           <button
// //             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //             onClick={handleSave}
// //           >
// //             Save
// //           </button>
// //         </div>
// //       </div>
// //       <ToastContainer position="bottom-right" autoClose={3000} />
// //     </div>,
// //     document.getElementById("modal")
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// export default function UpdateSubscriptionModal({ isOpen, onClose, sub, onSave }) {
//   const [price, setPrice] = useState("");
//   const [subscriptionType, setSubscriptionType] = useState("");
//   const [tableName, setTableName] = useState(sub?.table_id?.Name || "Open Space");

//   useEffect(() => {
//     if (sub) {
//       setPrice(sub.price);
//       setSubscriptionType(sub.subscriptionType);
//       setTableName(sub?.table_id?.Name || "Open Space");
//     }
//   }, [sub]);

//   const handleSave = async () => {
//     if (!price || !subscriptionType) {
//       toast.error("All fields are required");
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/ELACO/subcription/${sub._id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ price, subscriptionType }),
//       });

//       if (!response.ok) throw new Error("Failed to update subscription");

//       toast.success("Subscription updated successfully");
//       setTimeout(() => {
//           onSave(); // refresh or close modal
//       } , 3000)
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   if (!isOpen) return null;

//   return createPortal(
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
//         <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Update Subscription</h2>

//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600">Price (TND)</label>
//             <input
//               type="number"
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">Subscription Type</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
//               value={subscriptionType}
//               onChange={(e) => setSubscriptionType(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-600">Table Name</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md bg-gray-100 cursor-not-allowed"
//               value={tableName}
//               readOnly
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex justify-end gap-3">
//           <button
//             className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
//             onClick={onClose}
//           >
//             Cancel
//           </button>
//           <button
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//             onClick={handleSave}
//           >
//             Save
//           </button>
//         </div>
//       </div>
//       <ToastContainer position="bottom-right" autoClose={3000} />
//     </div>,
//     document.getElementById("modal")
//   );
// } 

"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateSubscriptionModal({ isOpen, onClose, sub, onSave }) {
  const [price, setPrice] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");

  useEffect(() => {
    if (sub) {
      setPrice(sub.price);
      setSubscriptionType(sub.subscriptionType);
    }
  }, [sub]);

  const handleSave = async () => {
    if (!price || !subscriptionType) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/ELACO/subcription/${sub._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price, subscriptionType }),
      });

      if (!response.ok) throw new Error("Failed to update subscription");

      toast.success("Subscription updated successfully");
      setTimeout(() => {
          onSave(); // refresh or close modal
      } , 3000)
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">Update Subscription</h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          {sub?.table_id?.Name || "Open Space"}
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Price (TND)</label>
            <input
              type="number"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Subscription Type</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={subscriptionType}
              onChange={(e) => setSubscriptionType(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2  text-white rounded bg-teal-500 hover:bg-teal-600"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>,
    document.getElementById("modal")
  );
}