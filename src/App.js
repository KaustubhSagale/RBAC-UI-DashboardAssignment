// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import UserTaable from "./components/UserTable";
// import UsersPage from "./pages/UsersPage";
// import RolesPage from "./pages/RolesPage";
// import PermissionsPage from "./pages/PermissionsPage";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/" element={<UsersPage />} />
//           <Route path="/roles" element={<RolesPage />} />
//           <Route path="/permissions" element={<PermissionsPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// import React from "react";
// import Navbar from "./components/Navbar";
// import UsersPage from "./pages/UsersPage";
// import RolesPage from "./pages/RolesPage";
// import PermissionsPage from "./pages/PermissionsPage";
// import { fetchUsers } from "./api/mockApi";
// import { addRole } from "./api/mockApi";
// import { updateUser } from "./api/mockApi";
// import ManageAccess from "./components/ManageAccess";
// fetchUsers().then((users) => {
//   console.log("Users:", users);
// });
// addRole({ name: "Editor", permissions: ["Read", "Write"] }).then((role) => {
//   console.log("Added Role:", role);
// });
// updateUser(2, { status: "Active" }).then(() => {
//   console.log("User updated successfully!");
// });
// const App = () => {
//   return (
//     <div>
      
//       <Navbar />
//       <UsersPage />
//       <RolesPage />
//       <PermissionsPage />
//       <ManageAccess />;
    
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
import React, { useState } from "react";
//import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
//import { IconButton } from "@mui/material";
//import MenuIcon from "@mui/icons-material/Menu"; 
import "./App.css"; 
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [selectedModule] = useState("Dashboard");
  // const [sidebarOpen, setSidebarOpen] = useState(false); 

  // const toggleSidebar = () => {
  //   setSidebarOpen((prevState) => !prevState); 
  // };

  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
     
         <Navbar />
      {/* <Sidebar open={sidebarOpen} onSelectModule={setSelectedModule} toggleSidebar={toggleSidebar} /> */}
      <Dashboard selectedModule={selectedModule} />
    </div>
  );
};

export default App;
