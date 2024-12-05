import React from "react";
import PermissionList from "../components/PermissionList";

const PermissionsPage = () => {
  const permissions = ["Read", "Write", "Delete"];
  return (
    <div>
      <h2>Permissions</h2>
      <PermissionList permissions={permissions} />
    </div>
  );
};

export default PermissionsPage;
