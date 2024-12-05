// const mockUsers = [
//   { id: 1, name: "Alice", role: "Admin", status: "Active" },
//   { id: 2, name: "Bob", role: "User", status: "Inactive" },
// ];

// const mockRoles = [
//   { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
//   { id: 2, name: "User", permissions: ["Read"] },
// ];

// export const fetchUsers = () => Promise.resolve(mockUsers);
// export const fetchRoles = () => Promise.resolve(mockRoles);

// export const addUser = (user) => {
//   mockUsers.push(user);
//   return Promise.resolve(user);
// };

// export const deleteUser = (userId) => {
//   const index = mockUsers.findIndex((user) => user.id === userId);
//   if (index > -1) mockUsers.splice(index, 1);
//   return Promise.resolve();
// };



// Mock data for users and roles


// let mockUsers = [
//   { id: 1, name: "Alice", role: "Admin", status: "Active" },
//   { id: 2, name: "Bob", role: "User", status: "Inactive" },
//   { id: 3, name: "Charlie", role: "Manager", status: "Active" },
// ];

// let mockRoles = [
//   { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
//   { id: 2, name: "User", permissions: ["Read"] },
//   { id: 3, name: "Manager", permissions: ["Read", "Write"] },
// ];

// // Utility function to simulate async API calls
// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// // Fetch all users
// export const fetchUsers = async () => {
//   await delay(500);
//   return mockUsers;
// };

// // Fetch all roles
// export const fetchRoles = async () => {
//   await delay(500);
//   return mockRoles;
// };

// // Add a new user
// export const addUser = async (user) => {
//   await delay(500);
//   user.id = mockUsers.length + 1; // Auto-generate ID
//   mockUsers.push(user);
//   return user;
// };

// // Delete an existing user
// export const deleteUser = async (userId) => {
//   await delay(500);
//   mockUsers = mockUsers.filter((user) => user.id !== userId);
//   return { success: true };
// };

// // Update user details (name, role, status)
// export const updateUser = async (userId, updatedData) => {
//   await delay(500);
//   mockUsers = mockUsers.map((user) =>
//     user.id === userId ? { ...user, ...updatedData } : user
//   );
//   return { success: true };
// };

// // Add a new role
// export const addRole = async (role) => {
//   await delay(500);
//   role.id = mockRoles.length + 1; // Auto-generate ID
//   mockRoles.push(role);
//   return role;
// };

// // Delete an existing role
// export const deleteRole = async (roleId) => {
//   await delay(500);
//   mockRoles = mockRoles.filter((role) => role.id !== roleId);
//   return { success: true };
// };

// // Update role permissions
// export const updateRolePermissions = async (roleId, newPermissions) => {
//   await delay(500);
//   mockRoles = mockRoles.map((role) =>
//     role.id === roleId ? { ...role, permissions: newPermissions } : role
//   );
//   return { success: true };
// };







// import { saveAs } from "file-saver";

// let storedData = {
//   users: [
//     { id: 1, name: "John Doe", role: "Admin", status: "Active" },
//     { id: 2, name: "Jane Smith", role: "User", status: "Inactive" },
//   ],
//   roles: [
//     { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
//     { id: 2, name: "User", permissions: ["Read"] },
//   ],
// };

// // Fetch users and roles
// export const fetchUsers = async () => storedData.users;
// export const fetchRoles = async () => storedData.roles;

// // Add, update, delete users
// export const addUser = async (user) => {
//   user.id = storedData.users.length + 1;
//   storedData.users.push(user);
//   return user;
// };

// export const updateUser = async (updatedUser) => {
//   const index = storedData.users.findIndex((user) => user.id === updatedUser.id);
//   if (index !== -1) storedData.users[index] = updatedUser;
//   return updatedUser;
// };

// export const deleteUser = async (userId) => {
//   storedData.users = storedData.users.filter((user) => user.id !== userId);
// };

// // Add, update, delete roles
// export const addRole = async (role) => {
//   role.id = storedData.roles.length + 1;
//   storedData.roles.push(role);
//   return role;
// };

// export const updateRole = async (updatedRole) => {
//   const index = storedData.roles.findIndex((role) => role.id === updatedRole.id);
//   if (index !== -1) storedData.roles[index] = updatedRole;
//   return updatedRole;
// };

// export const deleteRole = async (roleId) => {
//   storedData.roles = storedData.roles.filter((role) => role.id !== roleId);
// };

// // Save data to file
// export const exportData = () => {
//   const blob = new Blob([JSON.stringify(storedData, null, 2)], { type: "application/json" });
//   saveAs(blob, "storedData.json");
// };



// // Import data from file
// export const importData = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       try {
//         storedData = JSON.parse(event.target.result);
//         resolve(storedData);
//       } catch (error) {
//         reject(error);
//       }
//     };
//     reader.onerror = (error) => reject(error);
//     reader.readAsText(file);
//   });
// };
import { saveAs } from "file-saver";


let storedData = {
  users: [
    { id: 1, name: "John Doe", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", role: "User", status: "Inactive" },
  ],
  roles: [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] },
  ],
};

// Fetch Users
export const fetchUsers = () => Promise.resolve(storedData.users);

// Fetch Roles
export const fetchRoles = () => Promise.resolve(storedData.roles);

// Update User Status
export const updateUserStatus = (userId, newStatus) => {
  storedData.users = storedData.users.map((user) =>
    user.id === userId ? { ...user, status: newStatus } : user
  );
  return Promise.resolve();
};

// Update Role Permissions
export const updateRolePermissions = (roleId, newPermissions) => {
  storedData.roles = storedData.roles.map((role) =>
    role.id === roleId ? { ...role, permissions: newPermissions } : role
  );
  return Promise.resolve();
};

// Add User
export const addUser = (user) => {
  user.id = storedData.users.length + 1;
  storedData.users.push(user);
  return Promise.resolve(user);
};

// Add Role
export const addRole = (role) => {
  role.id = storedData.roles.length + 1;
  storedData.roles.push(role);
  return Promise.resolve(role);
};

// Update Role
export const updateRole = (updatedRole) => {
  const index = storedData.roles.findIndex((role) => role.id === updatedRole.id);
  if (index !== -1) storedData.roles[index] = updatedRole;
  return Promise.resolve(updatedRole);
};

// Update User
export const updateUser = (updatedUser) => {
  const index = storedData.users.findIndex((user) => user.id === updatedUser.id);
  if (index !== -1) storedData.users[index] = updatedUser;
  return Promise.resolve(updatedUser);
};

// Delete User
export const deleteUser = (userId) => {
  storedData.users = storedData.users.filter((user) => user.id !== userId);
  return Promise.resolve();
};

// Delete Role
export const deleteRole = (roleId) => {
  storedData.roles = storedData.roles.filter((role) => role.id !== roleId);
  return Promise.resolve();
};

// Export Data to File
export const exportData = () => {
  const blob = new Blob([JSON.stringify(storedData, null, 2)], { type: "application/json" });
  saveAs(blob, "storedData.json");
};


// Import Data from File
export const importData = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        storedData = JSON.parse(event.target.result);
        resolve(storedData);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsText(file);
  });
};
