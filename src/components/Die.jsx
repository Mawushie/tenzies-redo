import React from "react";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Six from "./Six";

export default function Die({ value, isHeld, holdDice }) {
  //conditionally rendering class of held dice based on isHeld property coming from props
  return (
    <div
      className={`flex justify-center items-center w-9 h-9 border none rounded bg-white text-blue-950 font-bold shadow-md ${
        isHeld ? "heldDice" : ""
      }`}
      onClick={holdDice}
    >
      {value === 1 && <One />}
      {value === 2 && <Two />}
      {value === 3 && <Three />}
      {value === 4 && <Four />}
      {value === 5 && <Five />}
      {value === 6 && <Six />}
    </div>
  );
}
