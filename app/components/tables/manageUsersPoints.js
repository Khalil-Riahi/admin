// // 'use client';
// // import React, { useEffect, useState  , useRef} from "react";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHeader,
// //   TableRow,
// // } from "../ui/table";

// // import Badge from "../ui/badge/Badge";
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"

// // export default function Users() {
// //   const [users, setUsers] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [activeId, setActivateId] = useState(null);
// //   const [newPoints, setNewPoints] = useState();
// //   const [search, setSearch] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [errorFetchingUsers, setErrorFetchingUsers] = useState(null);
// //   const [errorAddingPoints, setErrorAddingPoints] = useState(null);

// //   const searchInput = useRef();
// //   const check = useRef();

// //   useEffect(() => {
// //     async function getAllUsers() {
// //       try {
// //         const response = await fetch('http://localhost:8000/ELACO');
// //         if (!response.ok) {
// //           throw new Error(`Error in fetching users: ${response.status}`);
// //         }
// //         const data = await response.json();
// //         setUsers(data.data.users);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //     getAllUsers();
// //   }, [activeId]);

// //   function changeInput(selectedId) {
// //     setActivateId(prevId => (prevId === selectedId ? null : selectedId));
// //   }

// //   function getNewPoints(event) {
// //     setNewPoints(event.target.value);
// //   }

// //   async function addPoints(selectedId, pointsToAdd) {
// //     if (isNaN(pointsToAdd) || !check.current.value) {
// //       setActivateId(prevId => (prevId === selectedId ? null : selectedId));
// //       return;
// //     }

// //     try {
// //       const response = await fetch(`http://localhost:8000/ELACO/adminAddsPointsToUser/${selectedId}`, {
// //         method: 'PATCH',
// //         body: JSON.stringify({ points: pointsToAdd }),
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //       });

// //       if (!response.ok) {
// //         throw new Error(response.statusText);
// //       }

// //       const data = await response.json();
// //       setActivateId(prevId => (prevId === selectedId ? null : selectedId));
// //     } catch (err) {
// //       setErrorAddingPoints(err);
// //     }
// //   }

// //   function lookingFor() {
// //     setSearch(searchInput.current.value.toLowerCase());
// //   }

// //   return (
// //     <div className="min-h-screen w-full bg-gray-100 p-6 flex flex-col items-center">
// //       <div className="w-full max-w-6xl bg-white dark:bg-white/[0.03] dark:border-white/[0.05] border border-gray-200 rounded-xl overflow-hidden shadow-md">
// //         <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-white/[0.05]">
// //           <h2 className="text-2xl font-semibold text-[#0C9F9C]">Users</h2>
// //           <div className="flex items-center space-x-2">
// //             <Input ref={searchInput} onChange={lookingFor} placeholder="Search by email or name" />
// //             <Button onClick={lookingFor}>Search</Button>
// //           </div>
// //         </div>

// //         {loading ? (
// //           <div className="p-6 text-gray-500">Loading...</div>
// //         ) : error ? (
// //           <div className="p-6 text-red-600">{error}</div>
// //         ) : users.length > 0 ? (
// //           <div className="max-w-full overflow-x-auto">
// //             <div className="min-w-[1100px]">
// //               <Table>
// //                 <TableHeader>
// //                   <TableRow>
// //                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Full Name</TableCell>
// //                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Email</TableCell>
// //                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Phone</TableCell>
// //                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Subscription</TableCell>
// //                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Points</TableCell>
// //                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Action</TableCell>
// //                   </TableRow>
// //                 </TableHeader>
// //                 <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
// //                   {users
// //                     .filter(user => {
// //                       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
// //                       return search === '' || user.email.toLowerCase().includes(search) || fullName.includes(search);
// //                     })
// //                     .map(user => (
// //                       <TableRow key={user._id}>
// //                         <TableCell className="px-5 py-4 text-start">{user.firstName} {user.lastName}</TableCell>
// //                         <TableCell className="px-5 py-4 text-start">{user.email}</TableCell>
// //                         <TableCell className="px-5 py-4 text-start">{user.phone || 'N/A'}</TableCell>
// //                         <TableCell className="px-5 py-4 text-start text-green-600">Available</TableCell>
// //                         <TableCell className="px-5 py-4 text-start text-red-600 font-semibold">
                          
// //                             {user.points}
// //                         </TableCell>
// //                         <TableCell className="px-5 py-4 text-start">
                          
// //                             <Button className="w-full" onClick={() => console.log('jj')}>Add Points</Button>
                          
// //                         </TableCell>
// //                       </TableRow>
// //                     ))}
// //                 </TableBody>
// //               </Table>
// //             </div>
// //           </div>
// //         ) : (
// //           <div className="p-6 text-gray-500">No user found</div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';
// import React, { useEffect, useState, useRef } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../ui/table";

// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { AlertCircle, CheckCircle2 } from "lucide-react";

// export default function Users() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [newPoints, setNewPoints] = useState('');
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [errorAddingPoints, setErrorAddingPoints] = useState(null);
//   const [successMessage, setSuccessMessage] = useState(null);

//   const searchInput = useRef();

//   useEffect(() => {
//     async function getAllUsers() {
//       try {
//         const response = await fetch('http://localhost:8000/ELACO');
//         if (!response.ok) {
//           throw new Error(`Error in fetching users: ${response.status}`);
//         }
//         const data = await response.json();
//         setUsers(data.data.users);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getAllUsers();
//   }, []);

//   function lookingFor() {
//     setSearch(searchInput.current.value.toLowerCase());
//   }

//   function openPointsModal(user) {
//     setSelectedUser(user);
//     setNewPoints('');
//     setErrorAddingPoints(null);
//     setSuccessMessage(null);
//   }

//   async function addPoints() {
//     if (!selectedUser) return;
    
//     // Validate points input
//     const pointsToAdd = parseFloat(newPoints);
//     if (isNaN(pointsToAdd) || pointsToAdd <= 0) {
//       setErrorAddingPoints('Please enter a valid number of points');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:8000/ELACO/adminAddsPointsToUser/${selectedUser._id}`, {
//         method: 'PATCH',
//         body: JSON.stringify({ points: pointsToAdd }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }

//       const data = await response.json();
      
//       // Update the local users state
//       setUsers(prevUsers => 
//         prevUsers.map(user => 
//           user._id === selectedUser._id 
//             ? {...user, points: user.points + pointsToAdd} 
//             : user
//         )
//       );

//       // Set success message
//       setSuccessMessage(`Successfully added ${pointsToAdd} points to ${selectedUser.firstName} ${selectedUser.lastName}`);
      
//       // Clear selected user after a short delay
//       setTimeout(() => {
//         setSelectedUser(null);
//       }, 2000);
//     } catch (err) {
//       setErrorAddingPoints(err.message || 'Failed to add points');
//     }
//   }

//   return (
//     <div className="min-h-screen w-full bg-gray-100 p-6 flex flex-col items-center">
//       <div className="w-full max-w-6xl bg-white dark:bg-white/[0.03] dark:border-white/[0.05] border border-gray-200 rounded-xl overflow-hidden shadow-md">
//         <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-white/[0.05]">
//           <h2 className="text-2xl font-semibold text-[#0C9F9C]">Users</h2>
//           <div className="flex items-center space-x-2">
//             <Input ref={searchInput} onChange={lookingFor} placeholder="Search by email or name" />
//             <Button onClick={lookingFor}>Search</Button>
//           </div>
//         </div>

//         {loading ? (
//           <div className="p-6 text-gray-500">Loading...</div>
//         ) : error ? (
//           <div className="p-6 text-red-600">{error}</div>
//         ) : users.length > 0 ? (
//           <div className="max-w-full overflow-x-auto">
//             <div className="min-w-[1100px]">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Full Name</TableCell>
//                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Email</TableCell>
//                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Phone</TableCell>
//                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Subscription</TableCell>
//                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Points</TableCell>
//                     <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Action</TableCell>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//                   {users
//                     .filter(user => {
//                       const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
//                       return search === '' || user.email.toLowerCase().includes(search) || fullName.includes(search);
//                     })
//                     .map(user => (
//                       <TableRow key={user._id}>
//                         <TableCell className="px-5 py-4 text-start">{user.firstName} {user.lastName}</TableCell>
//                         <TableCell className="px-5 py-4 text-start">{user.email}</TableCell>
//                         <TableCell className="px-5 py-4 text-start">{user.phone || 'N/A'}</TableCell>
//                         <TableCell className="px-5 py-4 text-start text-green-600">Available</TableCell>
//                         <TableCell className="px-5 py-4 text-start text-red-600 font-semibold">
//                           {user.points}
//                         </TableCell>
//                         <TableCell className="px-5 py-4 text-start">
//                           <Button 
//                             className="w-full" 
//                             onClick={() => openPointsModal(user)}
//                           >
//                             Add Points
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>
//         ) : (
//           <div className="p-6 text-gray-500">No user found</div>
//         )}

//         {/* Points Addition Modal */}
//         <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
//           <DialogContent className="sm:max-w-[500px]">
//             <DialogHeader>
//               <DialogTitle className="text-[#0C9F9C]">Add Points</DialogTitle>
//               <DialogDescription>
//                 Add points for {selectedUser ? `${selectedUser.firstName} ${selectedUser.lastName}` : ''}
//               </DialogDescription>
//             </DialogHeader>
            
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="points" className="text-right">
//                   Points
//                 </Label>
//                 <Input
//                   id="points"
//                   type="number"
//                   min="0"
//                   value={newPoints}
//                   onChange={(e) => setNewPoints(e.target.value)}
//                   className="col-span-3"
//                   placeholder="Enter points to add"
//                 />
//               </div>
              
//               {/* Payment Information */}
//               <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-2">
//                 <div className="flex items-center text-blue-600 mb-2">
//                   <AlertCircle className="mr-2 h-5 w-5" />
//                   <span className="font-semibold">Payment Information</span>
//                 </div>
//                 <p className="text-sm text-gray-600">
//                   Each point costs <span className="font-bold text-blue-700">1.5 TND</span>. 
//                   Total cost for {newPoints || 0} points: 
//                   <span className="font-bold text-blue-700 ml-1">
//                     {newPoints ? (parseFloat(newPoints) * 1.5).toFixed(2) : '0.00'} TND
//                   </span>
//                 </p>
//               </div>

//               {/* Error Handling */}
//               {errorAddingPoints && (
//                 <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center text-red-600">
//                   <AlertCircle className="mr-2 h-5 w-5" />
//                   <span>{errorAddingPoints}</span>
//                 </div>
//               )}

//               {/* Success Message */}
//               {successMessage && (
//                 <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-center text-green-600">
//                   <CheckCircle2 className="mr-2 h-5 w-5" />
//                   <span>{successMessage}</span>
//                 </div>
//               )}
//             </div>
            
//             <DialogFooter>
//               <Button 
//                 type="button" 
//                 variant="outline" 
//                 onClick={() => setSelectedUser(null)}
//               >
//                 Cancel
//               </Button>
//               <Button 
//                 type="submit" 
//                 onClick={addPoints}
//                 disabled={!newPoints || parseFloat(newPoints) <= 0}
//                 className="bg-[#0C9F9C] hover:bg-[#0C9F9C]/90"
//               >
//                 Add Points
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// }

'use client';
import React, { useEffect, useState, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newPoints, setNewPoints] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorAddingPoints, setErrorAddingPoints] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [idUser, setIdUser] = useState(null);

  const searchInput = useRef();

  useEffect(() => {
    async function getAllUsers() {
      try {
        const response = await fetch('http://localhost:8000/ELACO');
        if (!response.ok) {
          throw new Error(`Error in fetching users: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getAllUsers();
  }, []);

  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) setIdUser(storedId);
  }, []);

  function lookingFor() {
    setSearch(searchInput.current.value.toLowerCase());
  }

  function openPointsModal(user) {
    setSelectedUser(user);
    setNewPoints('');
    setErrorAddingPoints(null);
    setSuccessMessage(null);
  }

  async function addPoints() {
    if (!selectedUser) return;
    
    // Validate points input
    const pointsToAdd = parseFloat(newPoints);
    if (isNaN(pointsToAdd) || pointsToAdd <= 0) {
      setErrorAddingPoints('Please enter a valid number of points');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/ELACO/admin/adminAddsPointsToUser/${selectedUser._id}/${idUser}`, {
        method: 'PATCH',
        body: JSON.stringify({ points: pointsToAdd }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      
      // Update the local users state
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user._id === selectedUser._id 
            ? {...user, points: user.points + pointsToAdd} 
            : user
        )
      );

      // Set success message
      setSuccessMessage(`Successfully added ${pointsToAdd} points to ${selectedUser.firstName} ${selectedUser.lastName}`);
      
      // Clear selected user after a short delay
      setTimeout(() => {
        setSelectedUser(null);
      }, 2000);
    } catch (err) {
      setErrorAddingPoints(err.message || 'Failed to add points');
    }
  }

  return (
    <div className="min-h-screen w-full p-6 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white dark:bg-white/[0.03] dark:border-white/[0.05] border border-gray-200 rounded-xl overflow-hidden shadow-md">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-white/[0.05]">
          <h2 className="text-2xl font-semibold text-[#0C9F9C]">Users</h2>
          <div className="flex items-center space-x-2">
            <Input ref={searchInput} onChange={lookingFor} placeholder="Search by email or name" />
            <Button onClick={lookingFor}>Search</Button>
          </div>
        </div>

        {loading ? (
          <div className="p-6 text-gray-500">Loading...</div>
        ) : error ? (
          <div className="p-6 text-red-600">{error}</div>
        ) : users.length > 0 ? (
          <div className="max-w-full overflow-x-auto">
            <div className="min-w-[1100px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Full Name</TableCell>
                    <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Email</TableCell>
                    <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Phone</TableCell>
                    {/* <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Subscription</TableCell> */}
                    <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Points</TableCell>
                    <TableCell isHeader className="px-5 py-3 text-start text-theme-xs text-gray-500">Action</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                  {users
                    .filter(user => {
                      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
                      return search === '' || user.email.toLowerCase().includes(search) || fullName.includes(search);
                    })
                    .map(user => (
                      <TableRow key={user._id}>
                        <TableCell className="px-5 py-4 text-start">{user.firstName} {user.lastName}</TableCell>
                        <TableCell className="px-5 py-4 text-start">{user.email}</TableCell>
                        <TableCell className="px-5 py-4 text-start">{user.phone || 'N/A'}</TableCell>
                        {/* <TableCell className="px-5 py-4 text-start text-green-600">Available</TableCell> */}
                        <TableCell className="px-5 py-4 text-start text-red-600 font-semibold">
                          {user.points}
                        </TableCell>
                        <TableCell className="px-5 py-4 text-start">
                          <Button 
                            className="w-full" 
                            onClick={() => openPointsModal(user)}
                          >
                            Add Points
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <div className="p-6 text-gray-500">No user found</div>
        )}

        {/* Points Addition Modal */}
        <Dialog className="z-[9999]" open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
          <DialogContent className="sm:max-w-[500px] bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="absolute inset-0 bg-white dark:bg-gray-900 z-[-1]"></div>
            <DialogHeader>
              <DialogTitle className="text-[#0C9F9C] text-xl font-bold">Add Points</DialogTitle>
              <DialogDescription className="text-gray-500">
                Add points for {selectedUser ? `${selectedUser.firstName} ${selectedUser.lastName}` : ''}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-6 py-4">
              {/* User Details */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">{selectedUser?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p className="font-medium text-gray-800 dark:text-gray-200">{selectedUser?.phone || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* Points Input */}
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="points" className="text-right text-gray-700 dark:text-gray-300">
                  Points
                </Label>
                <Input
                  id="points"
                  type="number"
                  min="0"
                  value={newPoints}
                  onChange={(e) => setNewPoints(e.target.value)}
                  className="col-span-3 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  placeholder="Enter points to add"
                />
              </div>
              
              {/* Payment Information */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Payment Information</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Each point costs <span className="font-bold text-blue-700 dark:text-blue-400">1.5 TND</span>. 
                  Total cost for {newPoints || 0} points: 
                  <span className="font-bold text-blue-700 dark:text-blue-400 ml-1">
                    {newPoints ? (parseFloat(newPoints) * 1.5).toFixed(2) : '0.00'} TND
                  </span>
                </p>
              </div>

              {/* Error Handling */}
              {errorAddingPoints && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 flex items-center text-red-600 dark:text-red-400">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  <span>{errorAddingPoints}</span>
                </div>
              )}

              {/* Success Message */}
              {successMessage && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 flex items-center text-green-600 dark:text-green-400">
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  <span>{successMessage}</span>
                </div>
              )}
            </div>
            
            <DialogFooter className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setSelectedUser(null)}
                className="mr-2"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                onClick={addPoints}
                disabled={!newPoints || parseFloat(newPoints) <= 0}
                className="bg-[#0C9F9C] text-white hover:bg-[#0C9F9C]/90"
              >
                Add Points
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}