// import Users from "./Users";
// import Roles from "./Roles";
// import Permissions from "./Permissions";
// import Navbar from "./Navbar";
// import React, { useEffect, useState } from "react";
// import { fetchUsers, fetchRoles, updateUserStatus, updateRolePermissions } from "../api/mockApi";

// const Dashboard = ({ selectedModule }) => {


//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const users = await fetchUsers();
//       const roles = await fetchRoles();

//       // Map roles into users for a combined view
//       const combinedData = users.map((user) => {
//         const role = roles.find((role) => role.name === user.role);
//         return {
//           ...user,
//           permissions: role ? role.permissions.join(", ") : "No permissions",
//         };
//       });

//       setData(combinedData);
//     };

//     fetchData();
//   }, []);

//   const handleStatusToggle = async (userId, currentStatus) => {
//     const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
//     await updateUserStatus(userId, newStatus);
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === userId ? { ...item, status: newStatus } : item
//       )
//     );
//   };
//   const renderContent = () => {
//     <h2>Dashboard</h2>

    
   
//     switch (selectedModule) {

     
//       case "Users":
//         return  <Users />;
//       case "Roles":
//         return <Roles />;
//       case "Permissions":
//         return <Permissions />;
//       default:
        
//         return <div>Select a module from the sidebar.</div>;
//     }
//   };
// return (
//     <div>
//       <h2>Dashboard: User and Role Management</h2>
//       <table border="1" style={{ width: "100%", textAlign: "left" }}>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Status</th>
//             <th>Permissions</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.role}</td>
//               <td>
//                 <button
//                   onClick={() => handleStatusToggle(item.id, item.status)}
//                 >
//                   {item.status}
//                 </button>
//               </td>
//               <td>{item.permissions}</td>
//               <td>
//                 <button>Edit</button>
//                 <button>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

//         );
//   return (
    
    
//     <div style={{ flex: 1, padding: 20 }}>

//         <Navbar/>
//       <h2>{selectedModule}</h2>
//       {renderContent()}
      
//     </div>
//   );
// };

// export default Dashboard;





// import React, { useEffect, useState } from "react";
// import Users from "./Users";
// import Roles from "./Roles";
// import Permissions from "./Permissions";
// import Navbar from "./Navbar";
// import { fetchUsers, fetchRoles, updateUserStatus } from "../api/mockApi";

// const Dashboard = ({ selectedModule }) => {
//   const [data, setData] = useState([]);
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   // Fetch combined user-role data
//   useEffect(() => {
//     const fetchData = async () => {
//       const users = await fetchUsers();
//       const roles = await fetchRoles();

//       const combinedData = users.map((user) => {
//         const role = roles.find((role) => role.name === user.role);
//         return {
//           ...user,
//           permissions: role ? role.permissions.join(", ") : "No permissions",
//         };
//       });

//       setData(combinedData);
//     };

//     fetchData();
//   }, []);

//   // Toggle user status
//   const handleStatusToggle = async (userId, currentStatus) => {
//     const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
//     await updateUserStatus(userId, newStatus);
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === userId ? { ...item, status: newStatus } : item
//       )
//     );
//   };

//   // Handle sidebar toggle
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   // Render dynamic module content
//   const renderContent = () => {
//     switch (selectedModule) {
//       case "Users":
//         return <Users />;
//       case "Roles":
//         return <Roles />;
//       case "Permissions":
//         return <Permissions />;
//       default:
//         return (
//           <div>
//             <h3>Select a module from the sidebar.</h3>
//           </div>
//         );
//     }
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       {/* Sidebar */}
//       <div
//         style={{
//           width: isSidebarOpen ? 200 : 50,
//           backgroundColor: "#f4f4f4",
//           transition: "width 0.3s",
//           padding: isSidebarOpen ? 20 : 10,
//           boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
//         }}
//       >
//         <button onClick={toggleSidebar}>
//           {isSidebarOpen ? "<<" : ">>"}
//         </button>
//         {isSidebarOpen && (
//           <ul>
//             <li onClick={() => console.log("Users selected")}>Users</li>
//             <li onClick={() => console.log("Roles selected")}>Roles</li>
//             <li onClick={() => console.log("Permissions selected")}>
//               Permissions
//             </li>
//           </ul>
//         )}
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: 20 }}>
//         <h2>{selectedModule || "Dashboard"}</h2>
//         {selectedModule ? (
//           renderContent()
//         ) : (
//           <div>
//             <h3>Dashboard: User and Role Management</h3>
//             <table border="1" style={{ width: "100%", textAlign: "left" }}>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Role</th>
//                   <th>Status</th>
//                   <th>Permissions</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((item) => (
//                   <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td>{item.name}</td>
//                     <td>{item.role}</td>
//                     <td>
//                       <button
//                         onClick={() => handleStatusToggle(item.id, item.status)}
//                       >
//                         {item.status}
//                       </button>
//                     </td>
//                     <td>{item.permissions}</td>
//                     <td>
//                       <button>Edit</button>
//                       <button>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default Dashboard;














// import React, { useEffect, useState } from "react";
// import { fetchUsers, updateUserStatus } from "../api/mockApi";

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   // Fetch user data
//   useEffect(() => {
//     const fetchData = async () => {
//       const users = await fetchUsers();
//       setData(users);
//     };

//     fetchData();
//   }, []);

//   // Toggle user status
//   const handleStatusToggle = async (userId, currentStatus) => {
//     const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
//     await updateUserStatus(userId, newStatus);
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === userId ? { ...item, status: newStatus } : item
//       )
//     );
//   };

//   const [data, setData] = useState([]);
//   const [isSidebarOpen, setSidebarOpen] = useState(true);

//   // Fetch combined user-role data
//   useEffect(() => {
//     const fetchData = async () => {
//       const users = await fetchUsers();
//       const roles = await fetchRoles();

//       const combinedData = users.map((user) => {
//         const role = roles.find((role) => role.name === user.role);
//         return {
//           ...user,
//           permissions: role ? role.permissions.join(", ") : "No permissions",
//         };
//       });

//       setData(combinedData);
//     };

//     fetchData();
//   }, []);

//   // Toggle user status
//   const handleStatusToggle = async (userId, currentStatus) => {
//     const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
//     await updateUserStatus(userId, newStatus);
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === userId ? { ...item, status: newStatus } : item
//       )
//     );
//   };

//   // Handle sidebar toggle
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };


//   // Toggle sidebar visibility
//   const toggleSidebar = () => 


//       switch (selectedModule) {

     
//       case "Users":
//         return  <Users />;
//       case "Roles":
//         return <Roles />;
//       case "Permissions":
//         return <Permissions />;
//       default:
        
//         return <div>Select a module from the sidebar.</div>;
//     }
//   };
//   return (
//     <div style={{ display: "flex" }}>
//       {/* Sidebar */}
      


//       {/* Main Content */}
//       <div style={{ flex: 1, padding: 20 }}>
//         <h2>Users</h2>
//         <h3>User List</h3>
//         <table border="1" style={{ width: "100%", textAlign: "left" }}>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>
//                   <button
//                     onClick={() => handleStatusToggle(item.id, item.status)}
//                     style={{
//                       backgroundColor:
//                         item.status === "Active" ? "#28a745" : "#dc3545",
//                       color: "#fff",
//                       border: "none",
//                       padding: "5px 10px",
//                       cursor: "pointer",
//                     }}
//                   >
//                     {item.status}
//                   </button>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => console.log("Edit user with ID:", item.id)}
//                     style={{ marginRight: 5 }}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => {
//                       console.log("Delete user with ID:", item.id);
//                       setData((prev) => prev.filter((user) => user.id !== item.id)); // Remove user from state
//                     }}
//                     style={{ marginRight: 5 }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;














// import Users from "./Users";
// import Roles from "./Roles";
// import Permissions from "./Permissions";
// import React, { useEffect, useState } from "react";
// import { fetchUsers, fetchRoles, updateUserStatus } from "../api/mockApi";

// const Dashboard = () => {
//   const [data, setData] = useState([]); // Store user data with roles and permissions
//   const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar visibility
//   const [selectedModule, setSelectedModule] = useState("Users"); // Manage selected module

//   // Fetch user data along with roles and permissions
//   useEffect(() => {
//     const fetchData = async () => {
//       const users = await fetchUsers();
//       const roles = await fetchRoles();

//       const combinedData = users.map((user) => {
//         const role = roles.find((role) => role.name === user.role);
//         return {
//           ...user,
//           permissions: role ? role.permissions.join(", ") : "No permissions",
//         };
//       });

//       setData(combinedData);
//     };

//     fetchData();
//   }, []);
//   //const [data, setData] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         const users = await fetchUsers();
//         const roles = await fetchRoles();
  
//         // Map roles into users for a combined view
//         const combinedData = users.map((user) => {
//           const role = roles.find((role) => role.name === user.role);
//           return {
//             ...user,
//             permissions: role ? role.permissions.join(", ") : "No permissions",
//           };
//         });
  
//         setData(combinedData);
//       };
  
//       fetchData();
//     }, []);
  
//     const handleStatusToggle = async (userId, currentStatus) => {
//       const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
//       await updateUserStatus(userId, newStatus);
//       setData((prev) =>
//         prev.map((item) =>
//           item.id === userId ? { ...item, status: newStatus } : item
//         )
//       );
//     };
//   // Toggle user status (Active/Inactive)
//   // const handleStatusToggle = async (userId, currentStatus) => {
//   //   const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
//   //   await updateUserStatus(userId, newStatus);
//   //   setData((prev) =>
//   //     prev.map((item) =>
//   //       item.id === userId ? { ...item, status: newStatus } : item
//   //     )
//   //   );
//   // };

//   // Toggle sidebar visibility
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   // Handle module selection from the sidebar
//   const renderModuleContent = ({ selectedModule }) => {
//     switch (selectedModule) {
//       case "Users":
//         return (
//           <div>
//             <h3>User List</h3>
//             <table border="1" style={{ width: "100%", textAlign: "left" }}>
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Status</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data.map((item) => (
//                   <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td>{item.name}</td>
//                     <td>
//                       <button
//                         onClick={() => handleStatusToggle(item.id, item.status)}
//                         style={{
//                           backgroundColor:
//                             item.status === "Active" ? "#28a745" : "#dc3545",
//                           color: "#fff",
//                           border: "none",
//                           padding: "5px 10px",
//                           cursor: "pointer",
//                         }}
//                       >
//                         {item.status}
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         onClick={() => console.log("Edit user with ID:", item.id)}
//                         style={{ marginRight: 5 }}
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => {
//                           console.log("Delete user with ID:", item.id);
//                           setData((prev) => prev.filter((user) => user.id !== item.id)); // Remove user from state
//                         }}
//                         style={{ marginRight: 5 }}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );
     
//     switch (selectedModule) {

     
//       case "Users":
//         return  <Users />;
//       case "Roles":
//         return <Roles />;
//       case "Permissions":
//         return <Permissions />;
//       default:
        
//         return <div>Select a module from the sidebar.</div>;
//     }

//     }
//   };

//   return (
//     <div style={{ display: "flex" }}>
//       {/* Sidebar */}
//       <div
//         style={{
//           width: isSidebarOpen ? "250px" : "50px",
//           transition: "width 0.3s",
//           backgroundColor: "#f4f4f4",
//           padding: "10px",
//         }}
//       >
//         <button onClick={toggleSidebar}>Toggle Sidebar</button>
//         {isSidebarOpen && (
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             <li onClick={() => setSelectedModule("Users")}>Users</li>
//             <li onClick={() => setSelectedModule("Roles")}>Roles</li>
//             <li onClick={() => setSelectedModule("Permissions")}>Permissions</li>
//           </ul>
//         )}
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: 20 }}>
//         <h2>Dashboard</h2>
//         {renderModuleContent()}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React, { useEffect, useState } from "react";
import Users from "./Users";
// import Roles from "./Roles";
import Permissions from "./Permissions";
import {
  fetchUsers,
  fetchRoles,
  updateUserStatus,
  updateUser,
  deleteUser,
  exportData,
  importData,
} from "../api/mockApi";
import { saveAs } from "file-saver";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedModule, setSelectedModule] = useState("Users");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const users = await fetchUsers();
      const roles = await fetchRoles();

      const combinedData = users.map((user) => {
        const role = roles.find((role) => role.name === user.role);
        return {
          ...user,
          permissions: role ? role.permissions.join(", ") : "No permissions",
        };
      });

      setData(combinedData);
    };

    fetchData();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleStatusToggle = async (userId, currentStatus) => {
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
    await updateUserStatus(userId, newStatus);
    const updatedUsers = await fetchUsers();
    setData(updatedUsers);
  };

  const handleEditUser = (userId) => {
    const user = data.find((item) => item.id === userId);
    setEditingUser(user);
  };

  const saveUserChanges = async () => {
    await updateUser(editingUser);
    const updatedUsers = await fetchUsers();
    setData(updatedUsers);
    setEditingUser(null);
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    const updatedUsers = await fetchUsers();
    setData(updatedUsers);
  };

  const handleExportData = () => {
    exportData();
  };

  const handleImportData = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        await importData(file);
        const updatedUsers = await fetchUsers();
        setData(updatedUsers);
      } catch (error) {
        alert("Error importing data");
      }
    }
  };

  const renderModuleContent = () => {
    switch (selectedModule) {
      case "Users":
        return (
          <div className="mt-3">
            <h3>User List</h3>
            <table className="table table-striped table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Permissions</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <button
                        onClick={() =>
                          handleStatusToggle(item.id, item.status)
                        }
                        className={`btn btn-sm ${
                          item.status === "Active"
                            ? "btn-success"
                            : "btn-danger"
                        }`}
                      >
                        {item.status}
                      </button>
                    </td>
                    <td>{item.permissions}</td>
                    <td>
                      <button
                        onClick={() => handleEditUser(item.id)}
                        className="btn btn-primary btn-sm me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteUser(item.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {editingUser && (
              <div className="mt-4 p-3 border rounded">
                <h3>Edit User</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    saveUserChanges();
                  }}
                >
                  <div className="mb-3">
                    <label className="form-label">
                      Name:
                      <input
                        type="text"
                        className="form-control"
                        value={editingUser.name}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            name: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Role:
                      <input
                        type="text"
                        className="form-control"
                        value={editingUser.role}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            role: e.target.value,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Status:
                      <select
                        className="form-select"
                        value={editingUser.status}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            status: e.target.value,
                          })
                        }
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </label>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Permissions:
                      <select
                        className="form-select"
                        value={editingUser.permissions}
                        onChange={(e) =>
                          setEditingUser({
                            ...editingUser,
                            permissions: e.target.value,
                          })
                        }
                      >
                        <option value="Read">Read</option>
                        <option value="Write">Write</option>
                        <option value="Delete">Delete</option>
                        <option value="Read, Write, Delete">
                          Read, Write, Delete
                        </option>
                        <option value="Read, Write">Read, Write</option>
                        <option value="Read, Delete">Read, Delete</option>
                        <option value="Write, Delete">Write, Delete</option>
                      </select>
                    </label>
                  </div>
                  <button className="btn btn-success me-2" type="submit">
                    Save
                  </button>
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={() => setEditingUser(null)}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            )}

            <div className="mt-3">
              <input
                type="file"
                className="form-control mb-3"
                onChange={handleImportData}
                accept=".json"
              />
              <button
                onClick={handleExportData}
                className="btn btn-primary"
              >
                Export Data
              </button>
            </div>
          </div>
        );

      case "Permissions":
        return <Permissions />;
      default:
        return <div>Select a module from the sidebar.</div>;
    }
  };

  return (
    <div className="d-flex">
      <div
        className={`${
          isSidebarOpen ? "col-2" : "col-1"
        } bg-light border-end`}
        style={{ minHeight: "100vh" }}
      >
        <button
          className="btn btn-outline-secondary w-100 mb-3"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? "Close" : "Open"} Sidebar
        </button>
        {isSidebarOpen && (
          <ul className="nav flex-column">
            <li
              className="nav-item"
              onClick={() => setSelectedModule("Users")}
            >
              <a className="nav-link" href="#">
                Users
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => setSelectedModule("Permissions")}
            >
              <a className="nav-link" href="#">
                Permissions
              </a>
            </li>
          </ul>
        )}
      </div>
      <div className="col p-4">
        <h2>Dashboard</h2>
        {renderModuleContent()}
      </div>
    </div>
  );
};

export default Dashboard;


// import React, { useEffect, useState } from "react";
// import { fetchUsers, fetchRoles, updateUserStatus } from "../api/mockApi";

// const Dashboard = ({ selectedModule }) => {
//   const [data, setData] = useState([]);

//   // Fetch combined user-role data
//   useEffect(() => {
//     const fetchData = async () => {
//       const users = await fetchUsers();
//       const roles = await fetchRoles();

//       const combinedData = users.map((user) => {
//         const role = roles.find((role) => role.name === user.role);
//         return {
//           ...user,
//           permissions: role ? role.permissions.join(", ") : "No permissions",
//         };
//       });

//       setData(combinedData);
//     };

//     fetchData();
//   }, []);

//   // Toggle user status
//   const handleStatusToggle = async (userId, currentStatus) => {
//     const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
//     await updateUserStatus(userId, newStatus);
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === userId ? { ...item, status: newStatus } : item
//       )
//     );
//   };

//   // Render dynamic module content
//   const renderContent = () => {
//     if (selectedModule === "Users") {
//       return (
//         <div>
//           <h3>Dashboard: User Management</h3>
//           <table border="1" style={{ width: "100%", textAlign: "left" }}>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Role</th>
//                 <th>Status</th>
//                 <th>Permissions</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.id}</td>
//                   <td>{item.name}</td>
//                   <td>{item.role}</td>
//                   <td>
//                     <button
//                       onClick={() => handleStatusToggle(item.id, item.status)}
//                     >
//                       {item.status}
//                     </button>
//                   </td>
//                   <td>{item.permissions}</td>
//                   <td>
//                     <button>Edit</button>
//                     <button>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       );
//     }

//     if (selectedModule === "Roles") {
//       return <div>Roles Module Coming Soon!</div>;
//     }

//     if (selectedModule === "Permissions") {
//       return <div>Permissions Module Coming Soon!</div>;
//     }

//     return <div>Select a module from the sidebar.</div>;
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>{selectedModule || "Dashboard"}</h2>
//       {renderContent()}
//     </div>
//   );
// };

// export default Dashboard;





// import React from "react";
// import Users from "./Users";
// import Roles from "./Roles";
// import Permissions from "./Permissions";

// const Dashboard = ({ selectedModule }) => {
//   const renderModule = () => {
//     switch (selectedModule) {
//       case "Users":
//         return <Users />;
//       case "Roles":
//         return <Roles />;
//       case "Permissions":
//         return <Permissions />;
//       default:
//         return <h2>Welcome to the Dashboard</h2>;
//     }
//   };

//   return (
//     <div>
//       <h2>{selectedModule}</h2>
//       {renderModule()}
//     </div>
//   );
// };

// export default Dashboard;
