import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const SecondPage = () => {
  const location = useLocation();
  console.log("locationDetails", location.state);
  return "Secondpage here";
};

export default SecondPage;
