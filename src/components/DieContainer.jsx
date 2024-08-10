import React from "react";

export default function DieContainer({ children }) {
  return (
    <div className="flex flex-col justify-between w-9 h-9 p-1">{children}</div>
  );
}
