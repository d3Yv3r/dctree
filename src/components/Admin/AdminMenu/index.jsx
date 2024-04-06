import React from "react";
import { NavLink } from "react-router-dom";

export const AdminMenu = () => {
  return (
    <div className="list-group">
      <NavLink
        to="/admin/dashboard"
        className="list-group-item list-group-item-action"
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/create-link"
        className="list-group-item list-group-item-action"
      >
        Criar Link
      </NavLink>
    </div>
  );
};
