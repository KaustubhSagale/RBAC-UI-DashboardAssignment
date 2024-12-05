import React from "react";

const Sidebar = ({ open, onSelectModule, toggleSidebar }) => {
  const modules = ["Dashboard", "Users", "Roles", "Permissions"];

  return (
    <div>
      {/* Sidebar (Bootstrap Offcanvas) */}
      <div
        className={`offcanvas offcanvas-start ${open ? "show" : ""}`}
        tabIndex="-1"
        style={{
          visibility: open ? "visible" : "hidden",
          width: "240px",
          transition: "visibility 0.3s, transform 0.3s",
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Admin Panel</h5>
          <button
            type="button"
            className="btn-close"
            onClick={toggleSidebar} // Toggle sidebar visibility
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-group">
            {modules.map((module) => (
              <li
                key={module}
                className="list-group-item list-group-item-action"
                onClick={() => {
                  onSelectModule(module);
                  toggleSidebar(); // Close sidebar after selection
                }}
                style={{ cursor: "pointer" }}
              >
                {module}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Toggle Sidebar Button */}
      {!open && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={toggleSidebar}
          style={{ position: "fixed", top: "10px", left: "10px", zIndex: 1050 }}
        >
          Open Sidebar
        </button>
      )}
    </div>
  );
};

export default Sidebar;
