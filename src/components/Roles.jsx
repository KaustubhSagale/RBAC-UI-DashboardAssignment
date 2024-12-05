// import React, { useEffect, useState } from "react";
// import { fetchRoles } from "../api/mockApi";  // Import the fetchRoles function

// const Roles = () => {
//   const [roles, setRoles] = useState([]); // State to hold the roles

//   // Use effect to fetch roles when the component mounts
//   useEffect(() => {
//     fetchRoles().then(setRoles); // Fetch roles and set the state
//   }, []);

//   return (
//     <div>
//       <h2>Manage Roles: Add, Edit, Delete Roles here.</h2>

//       {/* Table to display roles */}
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Role</th>
//             <th>Permissions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Map over the roles and display them in rows */}
//           {roles.map((role) => (
//             <tr key={role.id}>
//               <td>{role.id}</td>
//               <td>{role.name}</td>
//               <td>{role.permissions.join(", ")}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Roles;



// import React, { useEffect, useState } from "react";
// import { fetchRoles, updateRolePermissions } from "../api/mockApi";

// const Roles = () => {
//   const [roles, setRoles] = useState([]);

//   useEffect(() => {
//     fetchRoles().then(setRoles);
//   }, []);

//   const handlePermissionToggle = (roleId, permission) => {
//     const updatedRoles = roles.map((role) =>
//       role.id === roleId
//         ? {
//             ...role,
//             permissions: role.permissions.includes(permission)
//               ? role.permissions.filter((perm) => perm !== permission)
//               : [...role.permissions, permission],
//           }
//         : role
//     );
//     setRoles(updatedRoles);
//     updateRolePermissions(roleId, updatedRoles.find((role) => role.id === roleId).permissions);
//   };

//   return (
//     <div>
//       <h2>Manage Roles</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Role</th>
//             <th>Permissions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {roles.map((role) => (
//             <tr key={role.id}>
//               <td>{role.id}</td>
//               <td>{role.name}</td>
//               <td>
//                 {["Read", "Write", "Delete"].map((permission) => (
//                   <label key={permission}>
//                     <input
//                       type="checkbox"
//                       checked={role.permissions.includes(permission)}
//                       onChange={() => handlePermissionToggle(role.id, permission)}
//                     />
//                     {permission}
//                   </label>
//                 ))}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Roles;


import React, { useState, useEffect } from "react";
import { fetchRoles } from "../api/mockApi";

const Roles = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchRolesData = async () => {
      try {
        const fetchedRoles = await fetchRoles();
        setRoles(fetchedRoles || []); // Ensure roles is always an array
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRolesData();
  }, []);

  if (!roles || roles.length === 0) {
    return <div>No roles available</div>;
  }

  return (
    <div>
      <h3>Roles</h3>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Roles;
