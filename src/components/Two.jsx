import React from "react";
import One from "./One";
import DieContainer from "./DieContainer";

export default function Two() {
  return (
    <DieContainer>
      <div className="flex">
        <One />
      </div>
      <div className="flex justify-end">
        <One />
      </div>
    </DieContainer>
  );
}
