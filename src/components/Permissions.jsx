// import React, { useState, useEffect } from "react";
// import { fetchUsers, fetchRoles, addUser, deleteUser, updateUser, addRole, deleteRole, updateRolePermissions } from "../api/mockApi";

// const Permissions = ( ) => {
//     const [users, setUsers] = useState([]);
//     const [roles, setRoles] = useState([]);
//     const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });
//     const [newRole, setNewRole] = useState({ name: "", permissions: [] });
//     const [selectedRole, setSelectedRole] = useState(null);
  
//     // Fetch initial data
//     useEffect(() => {
//       fetchUsers().then(setUsers);
//       fetchRoles().then(setRoles);
//     }, []);
  
//     // Handle adding a user
//     const handleAddUser = () => {
//       addUser(newUser).then((user) => {
//         setUsers([...users, user]);
//         setNewUser({ name: "", role: "", status: "Active" });
//       });
//     };
  
//     // Handle deleting a user
//     const handleDeleteUser = (id) => {
//       deleteUser(id).then(() => {
//         setUsers(users.filter((user) => user.id !== id));
//       });
//     };
  
//     // Handle adding a role
//     const handleAddRole = () => {
//       addRole(newRole).then((role) => {
//         setRoles([...roles, role]);
//         setNewRole({ name: "", permissions: [] });
//       });
//     };
  
//     // Handle deleting a role
//     const handleDeleteRole = (id) => {
//       deleteRole(id).then(() => {
//         setRoles(roles.filter((role) => role.id !== id));
//       });
//     };
  
//     // Handle permission update
//     const handlePermissionToggle = (permission) => {
//       if (selectedRole) {
//         const updatedPermissions = selectedRole.permissions.includes(permission)
//           ? selectedRole.permissions.filter((perm) => perm !== permission)
//           : [...selectedRole.permissions, permission];
  
//         updateRolePermissions(selectedRole.id, updatedPermissions).then(() => {
//           setRoles(
//             roles.map((role) =>
//               role.id === selectedRole.id
//                 ? { ...role, permissions: updatedPermissions }
//                 : role
//             )
//           );
//           setSelectedRole({ ...selectedRole, permissions: updatedPermissions });
//         });
//       }
//     };
  
//     return (
//       <div>
//         <h1>Manage Access</h1>
  
//         {/* User Management */}
//         <section>
//           <h2>Users</h2>
//           <ul>
//             {users.map((user) => (
//               <li key={user.id}>
//                 {user.name} ({user.role}) - {user.status}
//                 <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           <div>
//             <h3>Add User</h3>
//             <input
//               type="text"
//               placeholder="Name"
//               value={newUser.name}
//               onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//             />
//             <select
//               value={newUser.role}
//               onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
//             >
//               <option value="">Select Role</option>
//               {roles.map((role) => (
//                 <option key={role.id} value={role.name}>
//                   {role.name}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={newUser.status}
//               onChange={(e) =>
//                 setNewUser({ ...newUser, status: e.target.value })
//               }
//             >
//               <option value="Active">Active</option>
//               <option value="Inactive">Inactive</option>
//             </select>
//             <button onClick={handleAddUser}>Add User</button>
//           </div>
//         </section>
  
//         {/* Role Management */}
//         <section>
//           <h2>Roles</h2>
//           <ul>
//             {roles.map((role) => (
//               <li key={role.id}>
//                 {role.name} - Permissions: {role.permissions.join(", ")}
//                 <button onClick={() => setSelectedRole(role)}>Edit</button>
//                 <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//           <div>
//             <h3>Add Role</h3>
//             <input
//               type="text"
//               placeholder="Role Name"
//               value={newRole.name}
//               onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
//             />
//             <button onClick={handleAddRole}>Add Role</button>
//           </div>
//         </section>
  
//         {/* Edit Role Permissions */}
//         {selectedRole && (
//           <section>
//             <h2>Edit Role: {selectedRole.name}</h2>
//             <div>
//               {["Read", "Write", "Delete"].map((permission) => (
//                 <div key={permission}>
//                   <label>
//                     <input
//                       type="checkbox"
//                       checked={selectedRole.permissions.includes(permission)}
//                       onChange={() => handlePermissionToggle(permission)}
//                     />
//                     {permission}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>
//     );
//   };

// export default Permissions;

import React, { useState, useEffect } from "react";
import { fetchUsers, addUser, deleteUser, exportData, importData } from "../api/mockApi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", role: "", status: "Active" });

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleAddUser = () => {
    addUser(newUser).then((user) => setUsers((prev) => [...prev, user]));
    setNewUser({ name: "", role: "", status: "Active" });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then(() => setUsers((prev) => prev.filter((user) => user.id !== id)));
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      importData(file)
        .then(() => fetchUsers().then(setUsers))
        .catch((error) => console.error("Failed to import data:", error));
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Manage Users</h1>
      <div className="mb-4 row g-2">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary me-2" onClick={handleAddUser}>
            Add User
          </button>
          <button className="btn btn-success" onClick={exportData}>
            Export Data
          </button>
          <input
            type="file"
            className="form-control-file mt-2"
            accept=".json"
            onChange={handleImport}
          />
        </div>
      </div>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
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
