// components/DeleteConfirmationModal.js
"use client";

import { createPortal } from "react-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function DeleteConfirmationModal({ isOpen, onClose, onConfirm, sub , refresh }) {
  if (!isOpen) return null;

  console.log(sub)

  // async function onDeleteSub(subId){
  //   try{
  //     const response = await fetch(`http://localhost:8000/ELACO/subcription/${subId}` , {
  //       method: 'DELETE'
  //     })

  //     const resData = await response.json()
  //     toast.success('Subscription Deleted Succefully')
  //     onConfirm()

  //     if(!response.ok){
  //       throw Error(`Error in fetching ${response.statusText}`)
  //     }

  //   }catch(err){
  //     toast.error(err)
  //     console.log(err)
  //   }
  // }

  async function onDeleteSub(subId) {
    try {
      const response = await fetch(`http://localhost:8000/ELACO/subcription/${subId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`Error in deleting: ${response.statusText}`);
      }
  
      const resData = await response.json();
      // if(response.status === 204){
        console.log(resData.status === "success")
        toast.success('Subscription deleted successfully');

        setTimeout(() => {
          onConfirm(); // Now close the modal
          refresh()
        } , 3000)
      // } // Optionally handle response data
      
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Something went wrong');
    }
  }
  

  return createPortal(
    // <div className="">
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-9999 flex items-center justify-center p-4">


      <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
        <div className="text-center mb-6">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
            <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Delete Subscription</h3>
          <p className="text-sm text-gray-500">
            Are you sure you want to delete the <span className="font-medium">{sub?.table_id?.Name ? sub?.table_id?.Name : 'openSpace'} {sub?.subscriptionType}</span> subscription? This action cannot be undone.
          </p>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            // onClick={() => {onDeleteSub(sub?._id)}}
            onClick={() => {
              if (sub?._id) {
                onDeleteSub(sub._id);
              } else {
                toast.error("Invalid subscription ID");
                console.error("Missing sub._id:", sub);
              }
            }}
            
          >
            Delete
          </button>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />

    </div>
    
   , document.getElementById('modal'));
}
