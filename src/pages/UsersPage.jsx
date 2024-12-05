// import React, { useEffect, useState } from "react";
// import { fetchUsers } from "../api/mockApi";

// function UsersPage() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetchUsers().then(setUsers);
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.role}</td>
//               <td>{user.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UsersPage;



import React from "react";
import UserTable from "../components/UserTable";

const UsersPage = () => {
  return (
    <div>
      <h2>Users</h2>
      <UserTable />
    </div>
  );
};

export default UsersPage;
