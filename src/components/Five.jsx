import React from "react";
import DieContainer from "./DieContainer";
import One from "./One";

export default function Five() {
  return (
    <DieContainer>
      <div className="flex justify-between">
        <One />
        <One />
      </div>
      <div className="flex justify-center">
        <One />
      </div>
      <div className="flex justify-between">
        <One />
        <One />
      </div>
    </DieContainer>
  );
}
