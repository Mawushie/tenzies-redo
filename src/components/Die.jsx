import React from "react";

export default function Die({ value }) {
  return (
    <div className="flex justify-center items-center w-9 h-9 border rounded bg-white text-blue-950 font-bold shadow-md">
      {value}
    </div>
  );
}
