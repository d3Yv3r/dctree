import React from "react";

export default function Form({ action, children, method, onSubmit }) {
  return (
    <form action={action} className="w-75" method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
