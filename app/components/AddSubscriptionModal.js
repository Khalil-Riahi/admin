"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { json } from "stream/consumers";

export default function AddSubscriptionModal({ isOpen, onClose, onSave }) {
  const [tableName, setTableName] = useState("");
  const [subscriptionType, setSubscriptionType] = useState("");
  const [price, setPrice] = useState("");

  if (!isOpen) return null;

   const handleSubmit =  async (e) => {
    e.preventDefault();
    
    try{
        const newSub = {
            tableName,
            subscriptionType,
            price: parseFloat(price),
          //   description: ["7/7 Access", "Wi-Fi", "Kitchen Access", "Coffee (extra)"],
          };

          const response = await fetch('http://localhost:8000/ELACO/subcription' , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSub)
          })

          if(!response.ok){
            throw Error(`Error in Adding Subscription: ${response.statusText}`)
          }

          toast.success("Subscription Added Succefully")

          setTimeout(() => {
            onClose()
          } , 3000)

    }catch(err){
        toast.error(err)
        console.log(err)
    }
    // onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-9999 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Add New Subscription</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Table Name</label>
            <select
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>Select a table</option>
              <option value="Open Space">Open Space</option>
              <option value="Meeting Room 1">Meeting Room 1</option>
              <option value="Meeting Room 2">Meeting Room 2</option>
              <option value="Private Office">Private Office</option>
              <option value="Private Office Premium Plus">Private Office Premium Plus</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subscription Type</label>
            <select
              value={subscriptionType}
              onChange={(e) => setSubscriptionType(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="" disabled>Select a subscription type</option>
              <option value="1/2 daily">1/2 Daily</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="monthly (5H)">Monthly (5H)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="0"
              required
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md text-white bg-teal-500 hover:bg-teal-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />

    </div>
  );
}
