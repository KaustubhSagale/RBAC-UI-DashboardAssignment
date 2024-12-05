import React, { useEffect, useState } from "react";
import { fetchRoles } from "../api/mockApi";

const RoleTable = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles().then(setRoles);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Role</th>
          <th>Permissions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id}>
            <td>{role.id}</td>
            <td>{role.name}</td>
            <td>{role.permissions.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleTable;
