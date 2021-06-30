import React from "react";
import { getInitialsText } from "../CommonUtils";

const InitialsText = ({ firstName, lastName }) => {
  return (
    <div className={"initialsText mainBackground plainColor"}>
      {getInitialsText(firstName, lastName)}
    </div>
  );
};

export default InitialsText;
