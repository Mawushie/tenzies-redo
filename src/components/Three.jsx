import React from "react";
import One from "./One";
import DieContainer from "./DieContainer";

export default function Three() {
  return (
    <DieContainer>
      <div className="flex justify-end">
        <One />
      </div>
      <div className="flex justify-center">
        <One />
      </div>
      <div>
        <One />
      </div>
    </DieContainer>
  );
}
