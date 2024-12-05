import React from "react";

const PermissionList = ({ permissions }) => {
  return (
    <ul>
      {permissions.map((permission, index) => (
        <li key={index}>{permission}</li>
      ))}
    </ul>
  );
};

export default PermissionList;
