import React from "react";
import DieContainer from "./DieContainer";
import One from "./One";

export default function Four() {
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
    </DieContainer>
  );
}
