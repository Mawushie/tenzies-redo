import React from "react";
import One from "./One";
import DieContainer from "./DieContainer";

export default function Six() {
  return (
    <DieContainer>
      <div className="flex justify-between">
        <One />
        <One />
      </div>
      <div className="flex justify-between">
        <One />
        <One />
      </div>
      <div className="flex justify-between">
        <One />
        <One />
      </div>
    </DieContainer>
  );
}
