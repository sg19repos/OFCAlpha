import React from "react";

const OurBtn = props => {
  const { label, fontColor, bgColor } = props;

  return (
    <button
      style={{
        border: "none",
        height: "30px",
        width: "80px",
        fontFamily: "Poppins",
        borderRadius: "5%/3px"
      }}
      className={`${bgColor} ${fontColor}`}
    >
      {label}
    </button>
  );
};

export default OurBtn;
