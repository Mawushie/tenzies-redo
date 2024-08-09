import React from "react";

export default function Die({ value, isHeld, holdDice }) {
  //conditionally rendering class of held dice based on isHeld property coming from props
  return (
    <div
      className={`flex justify-center items-center w-9 h-9 border-none rounded bg-white text-blue-950 font-bold shadow-md ${
        isHeld ? "heldDice" : ""
      }`}
      onClick={holdDice}
    >
      {value}
    </div>
  );
}
