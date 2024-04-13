import React from "react";
import { AdminMenu } from "@/components/Admin/AdminMenu";

export const Admin = ({ children }) => {
  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-3">
          <AdminMenu />
        </div>
        <div className="col">
          {/* <Form /> */}
          {children}
        </div>
      </div>
    </main>
  );
};
