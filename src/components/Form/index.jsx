import React from "react";

export default function Form({
  action,
  children,
  method,
  onSubmit,
  className,
}) {
  return (
    <form
      action={action}
      className={className}
      method={method}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
