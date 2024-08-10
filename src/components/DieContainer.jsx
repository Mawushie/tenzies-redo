import React from "react";

export default function DieContainer({ children }) {
  return (
    <div className="flex flex-col justify-between w-9 h-9 border none rounded bg-white text-blue-950 font-bold shadow-md p-0.5">
      {children}
    </div>
  );
}
