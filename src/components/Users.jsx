// import React, { useEffect, useState } from "react";
// import { fetchUsers } from "../api/mockApi";  // Import the fetchUsers function

// const UserTable = () => {
//   const [users, setUsers] = useState([]); // State to hold the users

//   // Use effect to fetch users when the component mounts
//   useEffect(() => {
//     fetchUsers().then(setUsers); // Call fetchUsers and update state
//   }, []);

//   return (
//     <div>
//       <h2>Manage Users: Add, Edit, Delete Users here.</h2>

//       {/* Table to display users */}
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Map over the users and display them in rows */}
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.role}</td>
//               <td>{user.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UserTable;


import React, { useEffect, useState } from "react";
import { fetchUsers, updateUserStatus } from "../api/mockApi";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleStatusToggle = (userId) => {
    const updatedUsers = users.map((user) => 
      user.id === userId 
        ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } 
        : user
    );
    setUsers(updatedUsers);
    updateUserStatus(userId, updatedUsers.find((user) => user.id === userId).status);
  };

  return (
    <div>
      <h2>Manage Users</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleStatusToggle(user.id)}>
                  {user.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
